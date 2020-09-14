import { GameEvent } from "../../game/GameEvent";
import { ui } from "../../ui/layaMaxUI";
import GameController, { ActionType } from "../GameController";
import Net from "../../net/Net";
import { ROUTE_ROOM_COMMAND, CMD } from "./common/RoomCommand";

/**
 */
export default class ActionEffectLayer extends ui.game.ActionEffectLayerUI {

    private readonly ACTION_SKINS = [
        'game/bu.png',
        'game/Button_ChiAction.png',
        'game/Button_PengAction.png',
        'game/Button_GangAction.png',
        'game/Button_HuAction.png',
    ];

    constructor() { super(); }

    onEnable(): void {
        this.visible = false;
        Net.Room.add(ROUTE_ROOM_COMMAND, this, (data: { cmd: number, msg: any }) => {
            this.onRoomCommand(data.cmd, data.msg);
        });
    }

    onRoomCommand(cmd: number, msg: any) {
        switch (cmd) {
            case CMD.S_EXCH_FLOWER:
            case CMD.S_DRAW_FLOWER: {
                this.showAction(ActionType.Bu, msg.pos);
                break;
            }
            case CMD.S_USER_EAT: {
                this.showAction(ActionType.Eat, msg.pos);
                break;
            }
            case CMD.S_USER_PONG: {
                this.showAction(ActionType.Pong, msg.pos);
                break;
            }
            case CMD.S_EXPOSED_KONG: 
            case CMD.S_CONCEALED_KONG: {
                this.showAction(ActionType.Kong, msg.pos);
                break;
            }
            case CMD.S_USER_HU: {
                this.showAction(ActionType.Hu, msg.pos);
                break;
            }
        }
    }

    private showAction(act: ActionType, pos: number) {
        this.visible = true;
        const viewPos = GameController.getViewPos(pos);
        this.actionStack.selectedIndex = viewPos;

        let item = <Laya.Image>this.actionStack.getChildAt(viewPos);
        item.skin = this.ACTION_SKINS[act];
        item.alpha = 1;
        Laya.Tween.to(item, { alpha: 0 }, 1000);
    }

    onDisable(): void {
        Net.Room.removeAllCaller(this);
    }
}