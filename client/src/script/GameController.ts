import Net from "../net/Net";
import { GameEvent } from "../game/GameEvent";
import { CMD } from "./game/common/RoomCommand";
import { RoomStatus, INVALID_SEAT, TileMask } from "../game/RoomStatus";
import ViewType from "../game/ViewDefine";

export default class GameController extends Laya.Script {
    public static instance: GameController = null;

    public status: RoomStatus = null;
    public mPos: number = INVALID_SEAT;

    constructor() {
        super();
        GameController.instance = this;
        this.status = new RoomStatus();
    }

    public onEnterRoom(roomInfo: { pos: number, status: RoomStatus }) {
        this.mPos = roomInfo.pos;
        this.status.copyFromStatus(roomInfo.status);
    }

    onEnable(): void {
        Net.Room.add("onRoomCommand", this, this.onRoomCommand, -1);
    }

    onDisable(): void {
        Net.Room.removeAllCaller(this);
    }

    private onRoomCommand(data: { cmd: number, msg: any }) {
        const status = this.status;
        const msg = data.msg;
        console.log(JSON.stringify({ cmd: CMD[data.cmd], msg: msg }));
        switch (data.cmd) {
            case CMD.S_USER_ENTER: {
                status.playerSeat(msg.pos, msg.uid);
                break;
            }
            case CMD.S_START_GAME: {
                status.reset();
                break;
            }
            case CMD.S_START_DICE: {
                break;
            }
            case CMD.S_SET_BANKER: {
                status.bankerPos = msg.pos;
                break;
            }
            case CMD.S_DEAL_TILES: {
                if (msg.pos == this.mPos) {
                    status.updateTiles(msg.pos, TileMask.HAND, msg.tiles);
                } else {
                    status.updateTiles(msg.pos, TileMask.HAND, new Array(msg.count).fill(TileMask.HAND));
                }
                break;
            }
            case CMD.S_EXCH_FLOWER: {
                if (this.mPos == msg.pos) {
                    status.updateTiles(msg.pos, TileMask.HAND, msg.handTiles);
                }
                status.updateTiles(msg.pos, TileMask.FLOWER, msg.flowers);
                break;
            }
            case CMD.S_DRAW_JOKER: {
                this.status.joker = msg.joker;
                break;
            }
            case CMD.S_SYNC_REMAIN_TILE: {
                status.tileCount = msg.count;
                break;
            }
            case CMD.S_DRAW_FLOWER: {
                status.addTiles(msg.pos, TileMask.FLOWER, [msg.tileId]);
                status.tileCount--;
                break;
            }
            case CMD.S_TURN_PLAYER: {
                if (msg.pos != INVALID_SEAT) {
                    status.currSeat = msg.pos;
                }
                break;
            }
            case CMD.S_DRAW: {
                if (msg.pos == this.mPos) {
                    status.getSeat(msg.pos).drawId = msg.tileId;
                    status.addTiles(msg.pos, TileMask.HAND, [msg.tileId]);
                } else {
                    status.addTiles(msg.pos, TileMask.HAND, [TileMask.HAND]);
                }

                status.currSeat = msg.pos;
                status.tileCount--;
                break;
            }
            case CMD.S_OUT_TILE: {
                let seat = status.getSeat(msg.pos);
                seat.drawId = 0;
                seat.discardId = msg.tileId;
                status.delTiles(msg.pos, TileMask.HAND, msg.tileId);
                status.addTiles(msg.pos, TileMask.DISCARD, [msg.tileId]);

                status.currSeat = msg.pos;
                break;
            }
            case CMD.S_USER_ACTION: {
                break;
            }
            case CMD.S_USER_EAT: {
                // 删除吃掉的牌
                status.delTiles(msg.targetPos, TileMask.DISCARD, msg.removeTile);
                // 删除手上的牌
                msg.eatTiles.forEach(tid => {
                    if (tid != msg.removeTile) {
                        status.delTiles(msg.pos, TileMask.HAND, tid);
                    }
                });
                // 添加吃牌
                msg.eatTiles.sort((a, b) => a - b);
                status.addTiles(msg.pos, TileMask.CHOW_PONG, msg.eatTiles);

                status.currSeat = msg.pos;
                break;
            }
            case CMD.S_USER_PONG: {
                status.getSeat(msg.pos).drawId = 0;
                // 删除吃掉的牌
                status.delTiles(msg.targetPos, TileMask.DISCARD, msg.removeTile);
                // 删除玩家手上的牌
                status.delTiles(msg.pos, TileMask.HAND, msg.removeTile, 2);
                // 添加碰牌
                status.addTiles(msg.pos, TileMask.CHOW_PONG, msg.pongArray);
                status.currSeat = msg.pos;
                break;
            }
            case CMD.S_EXPOSED_KONG: {
                // 删除吃掉的牌
                status.delTiles(msg.targetPos, TileMask.DISCARD, msg.removeTile);
                // 删除玩家手上的牌
                status.delTiles(msg.pos, TileMask.HAND, msg.removeTile, 3);
                // 添加杠牌
                status.addTiles(msg.pos, TileMask.EXPOSED_KONG, msg.options);
                status.currSeat = msg.pos;
                break;
            }
            case CMD.S_CONCEALED_KONG: {
                // 删除玩家手上的牌
                status.delTiles(msg.pos, TileMask.HAND, msg.options[0], 4);
                // 添加杠牌
                status.addTiles(msg.pos, TileMask.CONCEALED_KONG, msg.options);
                status.currSeat = msg.pos;
                break;
            }
            case CMD.S_USER_HU: {
                Laya.Scene.open(ViewType.ResultDialog, false, msg);
                break;
            }

        }
    }

    /**
     * 判断是否轮到我出牌
     */
    public static isMyTurn(): boolean {
        return GameController.instance.mPos == GameController.instance.status.currSeat;
    }

    /**
     * 实际位置转换视图位置
     * @param pos 
     */
    public static getViewPos(pos: number): number {
        return (pos - GameController.instance.mPos + 4) % 4;
    }
}

export enum ActionType {
    Bu,
    Eat,
    Pong,
    Kong,
    Hu
}