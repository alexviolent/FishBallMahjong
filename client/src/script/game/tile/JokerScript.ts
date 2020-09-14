import { GameEvent } from "../../../game/GameEvent";
import Net from "../../../net/Net";
import { BaseGameScript, IRoomCommandListener } from "../common/BaseGameScript";
import { CMD } from "../common/RoomCommand";

export default class JokerScript extends BaseGameScript implements IRoomCommandListener {

	owner: Laya.Image;

	onEnable() {
		this.owner.visible = false;
	}

	onRoomCommand(cmd: number, msg: any) {
		switch (cmd) {
			case CMD.S_DRAW_JOKER: {
				this.owner.visible = true;
				this.owner.skin = `game/2/handmah_${msg.joker}.png`;
				break;
			}

			case CMD.S_START_GAME: {
				this.owner.visible = false;
				break;
			}
		}
	}

}