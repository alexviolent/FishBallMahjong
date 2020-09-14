
import { Actor } from 'pinus-robot';
import { PinusWSClient, PinusWSClientEvent } from './PinusWSClient';
import { CMD, ROUTE_COMMAND, UserActionType } from '../room/Room';
import { ROUTE_INVITE_JOIN, InviteRobotOptions } from './RobotService';
import { RoomStatus, RoomSeat } from '../room/RoomStatus';
import { TileMask } from '../mahjong/TileType';
const _ = require('lodash');

const NOTIFY_COMMAND = 'game.roomHandler.notifyCommand';
const ROUTE_LOGIN_ENTRY = 'login.loginHandler.entry';
const ROUTE_ROOM_ENTRY = 'game.roomHandler.entry';
const ROUTE_JOIN_ROOM = 'game.roomHandler.join';
const LOGIN_SERVER_HOST = "127.0.0.1";
const LOGIN_SERVER_PORT = "3010";

export class Robot {
    private dbname: string;
    private dbpsw: string = "123";
    private loginResp: { auth: string } = null;

    private clientLogin: PinusWSClient;
    private clientRoom: PinusWSClient;

    private mPos: number;
    private status: RoomStatus;

    constructor(private actor: Actor) {
        this.dbname = "robot" + (actor.id + 1);
        this.clientLogin = new PinusWSClient();
        this.clientRoom = new PinusWSClient();
        this.status = new RoomStatus();
    }

    public run(): void {
        this.clientRoom.on(PinusWSClientEvent.EVENT_IO_ERROR, (event) => {
            // 错误处理
            console.error('error', event);
        });
        this.clientRoom.on(PinusWSClientEvent.EVENT_CLOSE, function (event) {
            // 关闭处理
            console.error('close', event);
        });
        this.clientRoom.on(PinusWSClientEvent.EVENT_HEART_BEAT_TIMEOUT, function (event) {
            // 心跳timeout
            console.error('heart beat timeout', event);
        });
        this.clientRoom.on(PinusWSClientEvent.EVENT_KICK, function (event) {
            // 踢出
            console.error('kick', event);
        });

        this.initGame();

        this.clientLogin.init({
            host: LOGIN_SERVER_HOST,
            port: LOGIN_SERVER_PORT
        }, () => {
            // 连接成功执行函数
            console.warn('login连接成功');
            this.login(this.dbname, this.dbpsw);
        });
    }

    private login(name: string, password: string) {
        this.clientLogin.request(ROUTE_LOGIN_ENTRY, { name, password }, (resp: any) => {
            // 消息回调
            console.warn('login resp:', JSON.stringify(resp));
            this.loginResp = resp;

            this.clientLogin.on(ROUTE_INVITE_JOIN, (msg) => {
                setTimeout(() => {
                    this.connectRoomServer(msg.opts);
                }, Math.floor(1000 + Math.random() * 1000))
            });
        });
    }

    private connectRoomServer(opts: InviteRobotOptions) {
        this.clientRoom.init(opts, () => {
            // 连接成功执行函数
            // console.log('game连接成功');
            this.clientRoom.request(ROUTE_ROOM_ENTRY, { isRobot: 1, name: this.dbname, auth: this.loginResp.auth }, (resp: any) => {
                // console.log("connectRoomServer", JSON.stringify(resp))
                if (!resp.code || resp.code != 200) {
                    return;
                }
                this.joinRoom(this.dbname, opts.rid);
            });
        });
    }

    private joinRoom(name: string, rid: string) {
        this.clientRoom.request(ROUTE_JOIN_ROOM, { name, rid }, (resp: any) => {
            // 消息回调
            console.warn('connector返回', JSON.stringify(resp));

            this.mPos = resp.pos;
            if (!resp.status) {
                this.leaveRoom();
            } else {
                this.status.copyFromStatus(resp.status);
            }
        });
    }

    private leaveRoom() {
        this.clientRoom.disconnect();
    }

    private get seat(): RoomSeat {
        return this.status.seats[this.mPos];
    }

    private initGame() {
        const room = this.clientRoom;

        room.on(ROUTE_COMMAND, data => {
            const msg = data.msg;
            switch (data.cmd) {
                case CMD.S_DEAL_TILES: {
                    if (msg.pos == this.mPos) {
                        this.status.reset();
                        this.status.updateTiles(msg.pos, TileMask.HAND, msg.tiles);
                    }
                    break;
                }

                case CMD.S_EXCH_FLOWER: {
                    if (msg.pos == this.mPos) {
                        this.status.updateTiles(this.mPos, TileMask.HAND, msg.handTiles);
                    }
                    this.status.updateTiles(msg.pos, TileMask.FLOWER, msg.flowers);
                    break;
                }

                case CMD.S_DRAW_JOKER: {
                    this.status.joker = msg.joker;
                    break;
                }

                case CMD.S_DRAW: {
                    if (msg.pos == this.mPos) {
                        this.status.addTiles(this.mPos, TileMask.HAND, [msg.tileId]);
                    }
                    break;
                }

                case CMD.S_TURN_PLAYER: {
                    if (msg.pos == this.mPos) {
                        setTimeout(() => {
                            let handTiles = this.status.getTiles(this.mPos, TileMask.HAND);
                            for (let tileId = this.status.joker; ;) {
                                let index = _.random(handTiles.length - 1);
                                tileId = handTiles[index];
                                if (tileId != this.status.joker) {
                                    room.notify(NOTIFY_COMMAND, { cmd: CMD.C_OUT_TILE, msg: { tileId } });
                                    break;
                                }
                            }
                        }, 1000);
                    }
                    break;
                }

                case CMD.S_OUT_TILE: {
                    if (msg.pos == this.mPos) {
                        this.seat.discardId = msg.tileId;
                        this.status.delTiles(this.mPos, TileMask.HAND, msg.tileId);
                    }
                    break;
                }

                case CMD.S_USER_EAT: {
                    if (msg.pos == this.mPos) {
                        msg.eatTiles.forEach(tid => {
                            if (tid != msg.removeTile) {
                                this.status.delTiles(this.mPos, TileMask.HAND, tid);
                            }
                        });
                    }
                    break;
                }

                case CMD.S_USER_PONG: {
                    if (msg.pos == this.mPos) {
                        this.status.delTiles(this.mPos, TileMask.HAND, msg.pongArray[0], 2);
                    }
                    break;
                }

                case CMD.S_EXPOSED_KONG: {
                    if (msg.pos == this.mPos) {
                        this.status.delTiles(msg.pos, TileMask.HAND, msg.options[0], 3);
                    }

                    break;
                }
                case CMD.S_CONCEALED_KONG: {
                    if (msg.pos == this.mPos) {
                        this.status.delTiles(msg.pos, TileMask.HAND, msg.options[0], 4);
                    }
                    break;
                }

                case CMD.S_USER_ACTION: {
                    setTimeout(() => {
                        if (msg.actions[UserActionType.HU]) {
                            room.notify(NOTIFY_COMMAND, { cmd: CMD.C_USER_ACTION, msg: { act: UserActionType.HU } });
                        } else if (msg.actions[UserActionType.KONG]) {
                            room.notify(NOTIFY_COMMAND, { cmd: CMD.C_USER_ACTION, msg: { act: UserActionType.KONG } });
                        } else if (msg.actions[UserActionType.PONG]) {
                            room.notify(NOTIFY_COMMAND, { cmd: CMD.C_USER_ACTION, msg: { act: UserActionType.PONG } });
                        } else if (msg.actions[UserActionType.EAT]) {
                            let eatIndex = _.random(msg.eatOptions.length - 1);
                            room.notify(NOTIFY_COMMAND, { cmd: CMD.C_USER_ACTION, msg: { act: UserActionType.EAT, eatIndex } });
                        } else {
                            this.notifyPassCommand();
                        }
                    }, 1000);
                    break;
                }

                default:
                    break;
            }
        });

    }

    private notifyPassCommand() {
        this.clientRoom.notify(NOTIFY_COMMAND, { cmd: CMD.C_USER_ACTION, msg: { act: UserActionType.PASS } });
    }
}

export default function (actor: Actor) {
    let robot = new Robot(actor);
    robot.run();
    return robot;
}
