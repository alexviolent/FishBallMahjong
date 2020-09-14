import { GameEvent } from "../../game/GameEvent";
import { ui } from "../../ui/layaMaxUI";
import Net from "../../net/Net";
import { ROUTE_ROOM_COMMAND, CMD } from "./common/RoomCommand";
import GameUI from "../GameUI";
import GameController from "../GameController";

/**
 */
export default class ShowOutLayer extends ui.game.ShowOutLayerUI {

    constructor() { super(); }

    onEnable(): void {
        this.visible = false;
        Net.Room.add(ROUTE_ROOM_COMMAND, this, (data: { cmd: number, msg: any }) => {
            this.onRoomCommand(data.cmd, data.msg);
        });
    }

    onRoomCommand(cmd: number, msg: any) {
		switch (cmd) {
			case CMD.S_OUT_TILE: {
				this.showTile(msg.pos, msg.tileId);
				break;
			}
		}
	}

    private showTile(pos: number, tid: number) {
        this.visible = true;
        const viewPos = GameController.getViewPos(pos);
        this.tileStack.selectedIndex = viewPos;

        let item = <Laya.Image>this.tileStack.getChildAt(viewPos).getChildAt(0);
        item.skin = `game/2/mingmah_${tid}.png`;
        this.timer.once(1500, this, () => this.visible = false);
    }

    onDisable(): void {
        Net.Room.removeAllCaller(this);
    }
}