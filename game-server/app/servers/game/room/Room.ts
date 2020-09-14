import { pinus, scheduleJob, cancelJob, Channel, getLogger, FRONTENDID } from "pinus";
import { EventEmitter } from "events";
import * as RNG from "rand-numb-gen";
import AsyncUtils from "../../../utils/AsyncUtils";
import { TileWall } from "../mahjong/TileWall";
import { TileType, TileMask } from "../mahjong/TileType";
import * as path from 'path';
import MahjongUtils from "../mahjong/MahjongUtil";
import { RoomStatus, INVALID_SEAT, PlayerState, RoomState } from "./RoomStatus";

export const ROUTE_COMMAND = 'onRoomCommand';

let logger = getLogger('room', path.basename(__filename));

export default class Room extends EventEmitter {
    private chan: Channel;
    private status: RoomStatus;
    private wall: TileWall;

    private jobWaitUserPlay: number = 0;
    private jobWaitUserAction: number = 0;
    /** 当前玩家操作队列 */
    private userActionQueue: UserActionData[] = [];
    private eatIndex: number = 0;

    private get channelService() {
        return pinus.app.channelService;
    }

    private get nextPlayerPos(): number {
        return (this.status.currSeat + 1) % this.cfg.maxPlayer;
    }

    private get waitUserTriggerOpts() {
        return { start: Date.now() + 15000, count: 1 };
    }

    constructor(public rid: string, private app: ApplicationEx, private cfg: RoomConfig) {
        super();
        this.wall = new TileWall();
        this.chan = this.app.channelService.createChannel(`room#${rid}`);
        this.status = new RoomStatus(this.cfg);
    }

    onHandleCommand(cmd: CMD, msg: any, uid: string) {
        switch (cmd) {
            case CMD.C_OUT_TILE:
                this.auserOutTile(uid, msg.tileId);
                break;
            case CMD.C_USER_ACTION:
                this.onUserAction(uid, msg.act, msg.eatIndex);
                break;
            default:
                break;
        }
    }

    private async stopGame() {
        logger.info('游戏结束');

        const status = this.status;
        status.checkPlayer();
        status.reset();
        status.state = RoomState.IDLE;

        if (status.isAllReady()) {
            await AsyncUtils.await(5000);
            this.startGame();
        }
    }

    private async startGame() {
        const maxPlayer = this.cfg.maxPlayer;
        const status = this.status;
        status.reset();
        status.state = RoomState.GAMING;
        status.round++;

        logger.info('开始游戏');
        await AsyncUtils.await(1000);
        this.broadcastEx(CMD.S_START_GAME, {});
        await AsyncUtils.await(1000);

        const dice: number[] = RNG.generateMultiple(2, 6, 0);
        status.bankerPos = (dice[0] + dice[1]) % maxPlayer;
        let banker = status.getSeat(status.bankerPos);
        logger.info('摇庄 %s', banker.uid);
        this.broadcastEx(CMD.S_START_DICE, { dice });
        await AsyncUtils.await(3000);
        this.broadcastEx(CMD.S_SET_BANKER, { pos: status.bankerPos });
        await AsyncUtils.await(1000);

        logger.info('发牌');
        this.wall.shuffle();

        for (let i = 0; i < maxPlayer; i++) {
            let pos = (i + status.bankerPos) % maxPlayer;
            let count = pos == this.status.bankerPos ? 17 : 16;
            let tiles = this.wall.fowardDrawMulti(count);
            status.updateTiles(pos, TileMask.HAND, tiles);

            this.sendMessage(CMD.S_DEAL_TILES, { pos, tiles }, pos);
            this.broadcastEx(CMD.S_DEAL_TILES, { pos, count }, pos);
        }

        // 从庄家开始补花
        for (let i = 0; i < maxPlayer; i++) {
            let pos = (i + status.bankerPos) % maxPlayer;
            let seat = status.getSeat(pos);

            let flowers = [];
            let handTiles = [];
            this.wall.exchFlowerNested(status.getTiles(pos, TileMask.HAND), handTiles, flowers);
            logger.info('补花 %s, tiles: %j, flowers: %j', seat.uid, handTiles, flowers);

            if (flowers.length > 0) {
                status.updateTiles(pos, TileMask.FLOWER, flowers);
                status.updateTiles(pos, TileMask.HAND, handTiles);
                this.sendMessage(CMD.S_EXCH_FLOWER, { pos, handTiles, flowers }, seat.uid);
                this.broadcastEx(CMD.S_EXCH_FLOWER, { pos, flowers }, seat.uid);
                await AsyncUtils.await(1000);
            }
        }

        await AsyncUtils.await(1000);
        let joker = this.status.joker = this.wall.drawJoker();
        logger.info('开金 %d', joker);
        this.broadcastEx(CMD.S_DRAW_JOKER, { joker });
        let count = status.tileCount = this.wall.remainCount();
        this.broadcastEx(CMD.S_SYNC_REMAIN_TILE, { count });

        await AsyncUtils.await(1000);
        this.status.currSeat = status.bankerPos;
        this.turnPlayer(status.bankerPos, false);

    }

    /**
     * 轮到哪家打牌
     * @param needDraw 是否需要摸牌
     */
    private async turnPlayer(pos: number, needDraw: boolean) {
        const status = this.status;

        if (status.state != RoomState.GAMING) {
            this.stopGame();
            return;
        }

        status.currSeat = pos;
        const seat = status.getSeat(pos);

        if (needDraw) {
            let finish = await this.adrawTile(pos);
            if (finish) {
                this.stopGame();
                return;
            }
        }

        // 判断自摸，杠
        let handTiles = status.getTiles(pos, TileMask.HAND);
        let kongOptions = MahjongUtils.getKongOptions(handTiles, 2, 0);

        let actions = [
            0,
            0,
            kongOptions.length > 0 ? 1 : 0,
            MahjongUtils.canHu(handTiles, this.status.joker) ? 1 : 0,
            1
        ];

        this.userActionQueue = [];
        if (actions.some((el, idx) => idx < 4 && el == 1)) {
            this.userActionQueue.push({
                uid: seat.uid,
                pos,
                act: UserActionType.PASS,
                actions,
                eatOptions: [],
                pongArray: [],
                kongOptions
            });
        }

        if (this.userActionQueue.length > 0) {
            this.notifyUserAction();
            return;
        }

        logger.info('轮到 %s', seat.uid);
        this.broadcastEx(CMD.S_TURN_PLAYER, { pos });

        this.jobWaitUserPlay = scheduleJob(this.waitUserTriggerOpts, () => {
            // 玩家超时未出牌，自动出一张
            cancelJob(this.jobWaitUserPlay);
            const tileId = seat.discardId = seat.drawId;
            this.broadcastEx(CMD.S_OUT_TILE, { pos, tileId });
            this.judgeUserAction(tileId);
            this.turnPlayer(this.nextPlayerPos, true);
        });
    }

    /**
     * 通知玩家操作
     */
    private notifyUserAction() {
        this.broadcastEx(CMD.S_TURN_PLAYER, { pos: -1 });

        this.userActionQueue.forEach(el => {
            logger.info('需要玩家操作 %s, actions: %j', el.uid, el.actions.map((act, idx) => (act ? '可' : '不可') + UserActionType[idx]));
            this.sendMessage(CMD.S_USER_ACTION, el, el.uid);
        });

        this.jobWaitUserAction = scheduleJob(this.waitUserTriggerOpts, () => {
            // 玩家超时未操作
            this.cancelUAAndContinue(true);
        });
    }

    /**
     * 玩家操作超时或者都过，继续当前玩家
     */
    private cancelUAAndContinue(needDraw: boolean) {
        cancelJob(this.jobWaitUserAction);
        this.jobWaitUserAction = 0;
        this.userActionQueue = [];
        this.turnPlayer(this.status.currSeat, needDraw);
    }

    /**
     * 根据玩家打出的牌判断房间内其他玩家是否需要操作
     * @param tileId 
     */
    private judgeUserAction(tileId: number) {
        const maxPlayer = this.cfg.maxPlayer;

        let queue = this.userActionQueue = <UserActionData[]>[];
        const act = UserActionType.PASS;

        for (let i = 1; i < maxPlayer; i++) {
            const pos = (i + this.status.currSeat) % maxPlayer;
            const seat = this.status.getSeat(pos);
            const uid = seat.uid;
            const handTiles = this.status.getTiles(pos, TileMask.HAND);

            if (handTiles.length <= 5) {
                continue;
            }

            let eatOptions = MahjongUtils.getEatOptions(handTiles, tileId, this.status.joker);
            let pongArray = MahjongUtils.getPongArray(handTiles, tileId);
            let kongOptions = MahjongUtils.getKongOptions(handTiles, 1, tileId);
            let actions = [
                i == 1 ? (eatOptions.length > 0 ? 1 : 0) : 0,
                pongArray.length > 0 ? 1 : 0,
                kongOptions.length > 0 ? 1 : 0,
                MahjongUtils.canHu(handTiles.concat(tileId), this.status.joker) ? 1 : 0,
                1
            ];

            if (actions.some((el, idx) => idx < maxPlayer && el == 1)) {
                queue.push({
                    uid,
                    pos,
                    act,
                    actions,
                    eatOptions,
                    pongArray,
                    kongOptions
                });
            }
        };
    }

    /**
     * 异步摸牌过程
     */
    private async adrawTile(pos: number) {
        const status = this.status;
        const seat = status.getSeat(pos);

        do {
            // 牌桌没牌了
            if (this.wall.remainCount() <= 0) {
                logger.info('牌都摸完了-流局');
                return true;
            }

            const tileId = this.wall.fowardDraw();
            if (tileId >= TileType.Dong) {
                logger.info('摸牌-摸到花 %s, 花: %d', seat.uid, tileId);
                status.addTiles(pos, TileMask.FLOWER, [tileId]);
                this.broadcastEx(CMD.S_DRAW_FLOWER, { pos, tileId });
                await AsyncUtils.await(1000);
            } else {
                logger.info('摸牌 %s, 摸到: %d', seat.uid, tileId);
                seat.drawId = tileId;
                status.addTiles(pos, TileMask.HAND, [tileId]);
                this.broadcastEx(CMD.S_DRAW, { pos }, seat.uid);
                this.sendMessage(CMD.S_DRAW, { pos, tileId }, seat.uid);
                break;
            }
        } while (true);

        logger.info('牌桌余牌: %d', this.wall.remainCount());
        return false;
    }

    /**
     * 玩家出牌
     * @param uid 
     * @param tileId 
     */
    async auserOutTile(uid: string, tileId: number) {
        if (this.jobWaitUserAction != 0) {
            return;
        }

        const status = this.status;
        const pos = status.seats.findIndex(el => el.uid == uid);
        if (pos == INVALID_SEAT || pos != status.currSeat) {
            return;
        }

        if (status.delTiles(pos, TileMask.HAND, tileId) == 0) {
            logger.info('玩家出牌出错 %s, tileId: %d', uid, tileId);
            return;
        }

        const seat = status.getSeat(pos);
        seat.discardId = tileId;
        logger.info('玩家出牌 %s, tileId: %d', uid, tileId);
        cancelJob(this.jobWaitUserPlay);
        this.broadcastEx(CMD.S_OUT_TILE, { pos, tileId });
        await AsyncUtils.await(2000);

        this.judgeUserAction(tileId);
        if (this.userActionQueue.length > 0) {
            this.notifyUserAction();
            return;
        }

        this.turnPlayer(this.nextPlayerPos, true);
    }

    onUserAction(uid: string, act: number, eatIndex: number) {
        this.userActionQueue.some((data, index) => {
            if (data.uid == uid) {
                data.act = act;
                this.ahandleUserAction(data, eatIndex, index);
                return true;
            }
            return false;
        });
    }

    /**
     * 处理玩家操作
     * @param data 
     */
    private async ahandleUserAction(data: UserActionData, eatIndex: number, queueIdx: number) {
        const pos = data.pos;
        const status = this.status;

        switch (data.act) {
            case UserActionType.HU: {
                if (data.actions[3] != 1) {
                    break;
                }

                logger.info('玩家胡了 %s', data.uid);
                const currSeat = status.getSeat(status.currSeat);
                const handTiles = status.getTiles(pos, TileMask.HAND).concat(currSeat.discardId);
                const flowers = status.getTiles(pos, TileMask.FLOWER);
                this.broadcastEx(CMD.S_USER_HU, { pos, handTiles, score: flowers.length * 30 });
                await AsyncUtils.await(5000);
                this.stopGame();
                break;
            }
            case UserActionType.PASS: {
                logger.info('玩家不操作 %s', data.uid);
                this.userActionQueue.splice(queueIdx, 1);
                if (this.userActionQueue.length <= 0) {
                    status.currSeat = this.nextPlayerPos;
                    this.cancelUAAndContinue(true);
                } else if (this.userActionQueue.length == 1) {
                    if (this.userActionQueue[0].act == UserActionType.EAT) {
                        this.aprocessEat(this.userActionQueue[0]);
                    }
                }
                break;
            }
            case UserActionType.EAT: {
                if (this.userActionQueue.length == 1) {
                    this.eatIndex = eatIndex;
                    this.aprocessEat(this.userActionQueue[0]);
                }
                break;
            }
            case UserActionType.PONG: {
                status.currSeat = pos;
                logger.info('玩家碰 %s tid: %j', data.uid, data.pongArray);
                // 删除吃掉的牌
                status.delTiles(status.prevSeat, TileMask.DISCARD, data.pongArray[0]);
                // 删除玩家手上的牌
                status.delTiles(pos, TileMask.HAND, data.pongArray[0], 2);
                // 添加碰牌
                status.addTiles(pos, TileMask.CHOW_PONG, data.pongArray);
                this.broadcastEx(CMD.S_USER_PONG, { pos, targetPos: status.prevSeat, pongArray: data.pongArray, removeTile: data.pongArray[0] });
                this.cancelUAAndContinue(false);
                break;
            }
            case UserActionType.KONG: {
                if (data.kongOptions.length == 0) {
                    break;
                }

                let kongData = data.kongOptions[0];
                const isExposed = kongData.kongType == 1;
                if (isExposed) {
                    logger.info('玩家明杠 %s tid: %d', data.uid, kongData.options[0]);
                    // 删除吃掉的牌
                    status.delTiles(status.currSeat, TileMask.DISCARD, kongData.options[0]);
                    // 删除玩家手上的牌
                    status.delTiles(pos, TileMask.HAND, kongData.options[0], 3);
                    // 添加杠牌
                    status.addTiles(pos, TileMask.EXPOSED_KONG, kongData.options);
                    this.broadcastEx(CMD.S_EXPOSED_KONG, { pos, targetPos: status.currSeat, options: kongData.options, removeTile: kongData.options[0] });
                } else {
                    logger.info('玩家暗杠 %s tid: %d', data.uid, kongData.options[0]);
                    // 添加杠牌
                    status.addTiles(pos, TileMask.CONCEALED_KONG, kongData.options);
                    // 删除玩家手上的牌
                    status.delTiles(pos, TileMask.HAND, kongData.options[0], 4);

                    this.broadcastEx(CMD.S_CONCEALED_KONG, { pos, options: new Array(4).fill(0) }, pos);
                    this.sendMessage(CMD.S_CONCEALED_KONG, { pos, options: kongData.options }, pos);
                }

                status.currSeat = pos;
                this.cancelUAAndContinue(true);
                break;
            }
        }
    }

    /**
     * 处理玩家吃牌
     * @param data 
     */
    private async aprocessEat(data: UserActionData) {
        if (this.eatIndex < 0 || this.eatIndex >= data.eatOptions.length) {
            return;
        }
        const status = this.status;
        let eatTiles = data.eatOptions[this.eatIndex];
        logger.info('玩家吃牌 %s, tiles: %j', data.uid, eatTiles);

        const seat = status.getSeat(status.currSeat);
        status.currSeat = data.pos;

        // 删除上家打出的牌
        status.delTiles(status.prevSeat, TileMask.DISCARD, seat.discardId);
        // 添加吃牌
        status.addTiles(data.pos, TileMask.CHOW_PONG, eatTiles);
        // 删除手上的牌
        eatTiles.forEach(tid => {
            if (tid != seat.discardId) {
                status.delTiles(data.pos, TileMask.HAND, tid);
            }
        });

        // 广播消息
        this.broadcastEx(CMD.S_USER_EAT, { pos: data.pos, targetPos: status.prevSeat, eatTiles, removeTile: seat.discardId });
        // 轮到玩家出牌
        this.cancelUAAndContinue(false);
    }

    public userEnter(uid: string, sid: FRONTENDID) {
        const status = this.status;
        this.chan.add(uid, sid);
        let pos = status.seats.findIndex(el => el.playerState == PlayerState.UNKNOW);
        status.playerSeat(pos, uid);

        logger.info('玩家坐下 rid %s %s', this.rid, uid);
        this.broadcastEx(CMD.S_USER_ENTER, { pos, uid }, pos);
        if (status.playerCount >= this.cfg.maxPlayer) {
            setTimeout(() => {
                this.startGame();
            }, 100);
        }

        return { pos, status: this.getStatusInfo(pos) };
    }

    public userLeave(uid: string) {
        this.chan.removeMember(uid);

        let seat = this.status.seats.find(el => el.uid == uid);
        if (seat) {
            if (this.status.state == RoomState.IDLE) {
                seat.uid = "";
            } else {
                seat.playerState = PlayerState.OFFLINE;
            }
            logger.info('玩家离线 %s', uid);
            this.status.state = RoomState.IDLE;
        }
    }

    public canEnter(): boolean {
        return this.status.state == RoomState.IDLE && this.status.playerCount < this.cfg.maxPlayer;
    }

    /**
     * 获取房间数据，过滤掉非destPos的手牌
     * @param destPos 发送目标座位
     */
    getStatusInfo(destPos: number) {
        let info = this.status.getPlainInfo();
        info.tiles.forEach((tiles, pos) => {
            if (pos == destPos) {
                return;
            }
            tiles.forEach((el, index) => {
                if ((el & TileMask.HAND) == TileMask.HAND) {
                    tiles[index] = TileMask.HAND;
                }
            })
        })

        return info;
    }

    private sendMessage(cmd: CMD, msg: any, uid: string | number) {
        if (typeof uid === 'number') {
            let seat = this.status.getSeat(uid);
            uid = seat.uid;
        }

        let member = this.chan.getMember(uid);
        if (member) {
            this.channelService.pushMessageByUids(ROUTE_COMMAND, { cmd, msg }, [this.chan.getMember(uid)]);
        }
    }

    private broadcastEx(cmd: CMD, msg: any, uid?: string | number) {

        if (typeof uid === 'undefined') {
            this.chan.pushMessage(ROUTE_COMMAND, { cmd, msg });
            return;
        }

        const records = this.chan.records;
        let uids = [];

        if (typeof uid === 'number') {
            let seat = this.status.getSeat(uid);
            uid = seat.uid;
        }

        for (let k in records) {
            if (k != uid) {
                uids.push(records[k]);
            }
        }

        if (uids.length > 0) {
            this.channelService.pushMessageByUids(ROUTE_COMMAND, { cmd, msg }, uids);
        }
    }



}

/**
 * 玩家可操作类型枚举
 */
export enum UserActionType {
    EAT = 0,
    PONG,
    KONG,
    HU,
    PASS
}

type UserActionData = {
    uid: string;
    pos: number;
    act: number;
    actions: number[];
    eatOptions: number[][];
    pongArray: number[];
    kongOptions: { kongType: 1 | 2, options: number[] }[];
}

/**
 * 房间命令
 */
export enum CMD {
    S_USER_ENTER = 1,
    S_USER_LEAVE,
    S_ROOM_STATUS,
    S_START_GAME,
    S_START_DICE,
    S_SET_BANKER,
    S_DRAW_JOKER,
    S_DEAL_TILES,
    S_SYNC_REMAIN_TILE,
    S_TURN_PLAYER,
    S_OUT_TILE,
    C_OUT_TILE,
    /** 补花 */
    S_EXCH_FLOWER,
    S_DRAW_FLOWER,
    /** 摸牌 */
    S_DRAW,
    S_USER_ACTION,
    C_USER_ACTION,
    S_USER_HU,
    S_USER_EAT,
    S_USER_PONG,
    S_EXPOSED_KONG,
    S_CONCEALED_KONG,
    S_KICK,
}

/**
 * 房间配置
 */
export type RoomConfig = {
    // 初始化创角房间数量
    initRoomCount: number;
    // 最大玩家数量
    maxPlayer: number;
    // 等待玩家操作时间
    timeWaitAction: number;
};

export class RoomService {

    private rooms: Map<string, Room>;
    private usedRoomIds: Set<string>;

    constructor(private app: ApplicationEx, private roomConfig: RoomConfig) {
        this.rooms = new Map();
        this.usedRoomIds = new Set();
        for (let i = 0; i < this.roomConfig.initRoomCount; i++) {
            this.createRoom();
        }
    }

    createRoom(rid?: string): string {
        if (!rid) {
            do {
                rid = RNG.generateMultiple(6, 9, 0).join("");
            } while (this.usedRoomIds.has(rid));
        }
        this.usedRoomIds.add(rid);
        let room = new Room(rid, this.app, this.roomConfig);
        this.rooms.set(rid, room);

        return rid;
    }

    getRoom(rid: string): Room {
        return this.rooms.get(rid);
    }

    getVacancy(): Room {
        for (let [k, v] of this.rooms.entries()) {
            if (v.canEnter()) {
                return v;
            }
        }
        return null;
    }

    handleGameCommand(msg: { cmd: number, msg: any }, rid: string, uid: string) {
        let room = this.getRoom(rid);
        room && room.onHandleCommand(msg.cmd, msg.msg, uid);
    }
}