import { GameEvent } from "../../game/GameEvent";
import { ui } from "../../ui/layaMaxUI";
import GameConstants from "./common/GameConstants";
import { ROUTE_ROOM_COMMAND, CMD } from "./common/RoomCommand";
import Net from "../../net/Net";
import GameUI from "../GameUI";
import GameController from "../GameController";

/**
 * 时间控件层
 */
export default class TimePointLayer extends ui.game.TimePointLayerUI {
    private readonly TIMEOUT = 15000;
    private cdTime: number = 0;
    private suspended: boolean = true;

    constructor() { super(); }

    onEnable(): void {
        this.visible = false;

        this.resetUI();

        Net.Room.add(ROUTE_ROOM_COMMAND, this, (data: { cmd: number, msg: any }) => {
            this.onRoomCommand(data.cmd, data.msg);
        });

        this.timer.frameLoop(1, this, this.onUpdate);
    }

    onRoomCommand(cmd: number, msg: any) {
        switch (cmd) {
            case CMD.S_START_GAME: {
                this.resetUI();
                break;
            }
            case CMD.S_SYNC_REMAIN_TILE:
            case CMD.S_DRAW:
            case CMD.S_DRAW_FLOWER: {
                this.updateRemainTile(GameUI.controller.status.tileCount);
                break;
            }
            case CMD.S_SET_BANKER: {
                this.visible = true;
                break;
            }
            case CMD.S_USER_EAT:
            case CMD.S_USER_PONG:
            case CMD.S_EXPOSED_KONG:
            case CMD.S_CONCEALED_KONG:
            case CMD.S_TURN_PLAYER: {
                this.onTurnPlayer(msg.pos);
                break;
            }
            case CMD.S_OUT_TILE: {
                this.suspended = true;
                break;
            }
        }
    }

    private resetUI() {
        this.updateRemainTile(0);
        this.cdTime = 0;
        this.pointStack.visible = false;
    }

    private onTurnPlayer(pos: number) {
        this.suspended = false;
        this.cdTime = this.TIMEOUT;

        if (pos == GameConstants.INVALID_CHAIR) {
            this.pointStack.visible = false;
            return;
        }

        const viewPos = GameController.getViewPos(pos);
        this.pointStack.visible = true;
        this.pointStack.selectedIndex = viewPos;

    }

    onUpdate(): void {
        if (this.suspended) {
            return;
        }

        if (this.cdTime > 0) {
            this.cdTime -= this.timer.delta;
            this.updateTime(Math.floor(this.cdTime / 1000 + 0.5));
        } else {
            this.updateTime(0);
        }
    }

    private updateTime(sec: number) {
        const value = ("0" + sec);
        this.lblCD.value = value.substr(value.length - 2, 2);
    }

    private updateRemainTile(count: number) {
        this.lblRemainTile.text = `牌桌剩余   ${count}  张`;
    }

    onDisable(): void {
        this.timer.clear(this, this.onUpdate);
        GameEvent.offAllCaller(this);
    }
}