import { ui } from "../../../ui/layaMaxUI";
import { GameEvent } from "../../../game/GameEvent";
import GameConstants from "../common/GameConstants";
import Net from "../../../net/Net"
import { CMD } from "../common/RoomCommand";
import GameUI from "../../GameUI";
import GameController from "../../GameController";

export default class SelfTileTouchScript extends Laya.Script {

	owner: Laya.Image;
	private isTouchDown: boolean = false;
	private _tileId: number;

	public set tildId(tid: number) {
		this._tileId = tid;
		this.isTouchDown = false;
		this.owner.y = 0;
	}

	onEnable() {
		GameEvent.on(GameEvent.ON_TILE_SELECTED, this, sender => {
			if (this.isTouchDown && sender != this) {
				this.owner.y = 0;
			}
		})
	}

	onDisable() {
		GameEvent.offAllCaller(this);
	}

	onClick() {
		if (!GameController.isMyTurn()) {
			return;
		}

		if (this._tileId == GameUI.controller.status.joker) {
			return;
		}

		if (this.isTouchDown) {
			this.isTouchDown = false;
			Net.Room.sendCommand(CMD.C_OUT_TILE, { tileId: this._tileId });
		} else {
			this.isTouchDown = true;
			this.owner.y = -20;
			GameEvent.event(GameEvent.ON_TILE_SELECTED, this);
		}
	}
}