import { RoomConfig } from "./Room";
import { TileMask } from "../mahjong/TileType";

export enum RoomState {
    IDLE = 1,
    GAMING,
}

export enum PlayerState {
    UNKNOW = 1,
    ONLINE,
    OFFLINE,
}

export type RoomSeat = {
    uid: string,
    playerState: PlayerState;
    drawId: number;
    discardId: number;
}

export enum SeatMask {
    SELF = 0,
    RIGHT,
    TOP,
    LEFT
}

/** 无效座位号 */
export const INVALID_SEAT = -1;
/** 无效牌ID */
export const INVALID_TID = -1;

export class RoomStatus {
    // 房间状态枚举
    state: RoomState;
    // 局数
    round: number;
    // 当前房间玩家数量
    playerCount: number;
    // 房间座位
    seats: RoomSeat[];
    // 庄家
    bankerPos: number;
    // 金
    joker: number;
    // 当前打牌的玩家的座位
    _currSeat: number;
    // 上一个打牌玩家的座位
    prevSeat: number;
    // 玩家的牌数据
    tiles: number[][];
    // 剩余牌数量
    tileCount: number = 0;

    public set currSeat(value: number) {
        if (value != this._currSeat) {
            this.prevSeat = this._currSeat;
            this._currSeat = value;
        }
    }

    public get currSeat(): number {
        return this._currSeat;
    }

    private get emptySeat() {
        return <RoomSeat>{
            uid: '',
            playerState: PlayerState.UNKNOW,
            drawId: INVALID_TID,
            discardId: INVALID_TID
        };
    }

    constructor(private cfg?: RoomConfig) {
        this.round = 0;
        this.seats = [];

        if (this.cfg) {
            for (let i = 0; i < this.cfg.maxPlayer; i++) {
                this.seats.push(this.emptySeat);
            }
        }
        this.reset();
    }

    public copyFromStatus(status: RoomStatus) {
        this.cfg = status.cfg;
        this.state = status.state;
        this.round = status.round;
        this.playerCount = status.playerCount;
        this.seats = status.seats;
        this.bankerPos = status.bankerPos;
        this.joker = status.joker;
        this.currSeat = status.currSeat;
        this.prevSeat = status.prevSeat;
        this.tiles = status.tiles;
        this.tileCount = status.tileCount;
    }

    public reset() {
        this.state = RoomState.IDLE;
        this.bankerPos = INVALID_SEAT;
        this.joker = INVALID_TID;
        this.currSeat = INVALID_SEAT;
        this.prevSeat = INVALID_SEAT;
        this.tileCount = 0;

        this.tiles = [];
        if (this.cfg) {
            for (let i = 0; i < this.cfg.maxPlayer; i++) {
                this.tiles.push([]);
            }
        }
        this.checkPlayer();
    }

    /**
     * addTiles
     */
    public addTiles(pos: number, tileMask: TileMask, tiles: number[]) {
        tiles.forEach(tid => {
            this.tiles[pos].push(tid | tileMask);
        })
    }

    /**
     * delTiles
     */
    public delTiles(pos: number, tileMask: TileMask, tid: number, count = 1): number {
        let delCount = 0;
        let tiles = this.tiles[pos];

        for (let i = 0; i < count; i++) {
            let index = tiles.findIndex(el => {
                let tileId = this.getId(el);
                if (tileId == 0) {
                    return true;
                }
                return tileId == tid && this.getMask(el) == tileMask;
            });
            if (index >= 0) {
                delCount++;
                tiles.splice(index, 1);
            }
        }

        return delCount;
    }

    /**
     * updateTiles
     */
    public updateTiles(pos: number, tileMask: TileMask, tiles: number[]) {
        this.tiles[pos] = this.tiles[pos].filter(el => this.getMask(el) != tileMask);
        this.addTiles(pos, tileMask, tiles);
    }

    /**
     * getTiles
     */
    public getTiles(pos: number, tileMask: TileMask): number[] {
        return this.tiles[pos].filter(el => this.getMask(el) == tileMask).map(el => this.getId(el));
    }

    private getMask(value: number): TileMask {
        return value & 0xFF00;
    }

    private getId(value: number): TileMask {
        return value & 0xFF;
    }

    /**
     * 获取座位信息
     */
    public getSeat(pos: number): RoomSeat {
        return this.seats[pos];
    }

    public playerSeat(pos: number, uid: string) {
        let seat = this.getSeat(pos);
        if (seat.uid != uid) {
            seat.uid = uid;
            seat.playerState = PlayerState.ONLINE;
            this.playerCount++;
        }
    }

    /**
     * 检查已离线的玩家
     */
    public checkPlayer() {
        this.playerCount = 0;

        this.seats.forEach((el, index, arr) => {
            if (el.playerState == PlayerState.OFFLINE || el.playerState == PlayerState.UNKNOW) {
                arr[index] = this.emptySeat;
            } else {
                this.playerCount++;
            }
        });

    }

    /**
     * isAllReady
     */
    public isAllReady() {
        return this.playerCount == this.cfg.maxPlayer && !this.seats.some(el => {
            return el.playerState == PlayerState.OFFLINE;
        })
    }

    public getPlainInfo() {
        return {
            cfg: this.cfg,
            state: this.state,
            round: this.round,
            playerCount: this.playerCount,
            seats: this.seats,
            bankerSeat: this.bankerPos,
            joker: this.joker,
            currSeat: this.currSeat,
            prevSeat: this.prevSeat,
            tiles: this.tiles,
            tileCounnt: this.tileCount
        };
    }
}