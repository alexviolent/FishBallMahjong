import { ui } from "../../../ui/layaMaxUI";
import { GameEvent } from "../../../game/GameEvent";
import GameConstants from "../common/GameConstants";
import { BaseGameScript, IRoomCommandListener } from "../common/BaseGameScript";
import { CMD } from "../common/RoomCommand";
import { TileMask, INVALID_TID, SeatMask, INVALID_SEAT } from "../../../game/RoomStatus";



export default class TileLayer extends BaseGameScript implements IRoomCommandListener {
	/** @prop {name:viewPos,type:number}*/
	viewPos: number;

	owner: Laya.View & {
		lstOut?: Laya.List;
		lstFlower?: Laya.List;
		lstHand?: Laya.List;
		imgDiscard?: Laya.Image;
	};

	onEnable() {
		this.owner.visible = false;
		this.owner.lstHand.renderHandler = new Laya.Handler(this, this.onRenderItem);
	}

	onDisable() {
	}

	onRoomCommand(cmd: number, msg: any) {
		switch (cmd) {
			case CMD.S_START_GAME: {
				this.clearUI();
				break;
			}
			case CMD.S_TURN_PLAYER:
			case CMD.S_EXCH_FLOWER:
			case CMD.S_DEAL_TILES:
			case CMD.S_OUT_TILE:
			case CMD.S_DRAW: {
				if (msg.pos != INVALID_SEAT && this.getViewPos(msg.pos) == this.viewPos) {
					this.updateUI(msg.pos);
				}
				break;
			}
		}
	}

	protected clearUI() {
		this.owner.lstHand.array = [];
		this.owner.imgDiscard.visible = false;
	}

	protected updateUI(pos: number) {
		this.owner.visible = true;
		this.owner.imgDiscard.visible = false;
		let tiles = this.status.getTiles(pos, TileMask.HAND);
		if (tiles.length % 3 == 2) {
			let tid = tiles.pop();
			this.owner.imgDiscard.visible = true;
		}

		if (this.viewPos == SeatMask.LEFT) {
			let array = new Array<number>(GameConstants.MAX_HAND - tiles.length).fill(INVALID_TID);
			this.owner.lstHand.array = array.concat(tiles);
		} else {
			this.owner.lstHand.array = tiles;
		}
	}

	protected onRenderItem(item: Laya.Image, index: number): void {
		const tid = this.owner.lstHand.array[index];
		item.visible = tid != INVALID_TID;
	}


}