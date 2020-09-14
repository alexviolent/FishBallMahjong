import { ui } from "../../../ui/layaMaxUI";
import { GameEvent } from "../../../game/GameEvent";
import GameConstants from "../common/GameConstants";
import SelfTileTouchScript from "../tile/SelfTileTouchScript";
import { CMD } from "../common/RoomCommand";
import { SeatMask, TileMask, INVALID_TID } from "../../../game/RoomStatus";
import TileLayer from "./TileLayer";
import GameUI from "../../GameUI";


export default class TileLayerSelf extends TileLayer {
	/** @prop {name:viewPos,type:number}*/
	viewPos: number;

	onEnable() {
		this.owner.visible = false;
		this.owner.lstHand.renderHandler = new Laya.Handler(this, this.onRenderItem);

	}

	onRoomCommand(cmd: number, msg: any) {
		super.onRoomCommand(cmd, msg);
		switch (cmd) {
			case CMD.S_START_GAME: {
				this.clearUI();
				break;
			}

			case CMD.S_DRAW_JOKER: {
				this.updateUI(GameUI.controller.mPos);
				break;
			}
		}
	}

	onDisable() {
		GameEvent.offAllCaller(this);
	}

	protected updateUI(pos: number) {
		this.owner.visible = true;
		this.owner.imgDiscard.visible = false;
		let tiles = this.status.getTiles(pos, TileMask.HAND);
		tiles.sort((a, b) => a - b);

		if (tiles.length % 3 == 2) {
			let tid = 0;
			let drawId = this.status.getSeat(pos).drawId;
			if (drawId > 0) {
				let index = tiles.indexOf(drawId);
				if (index >= 0) {
					tid = tiles.splice(index, 1)[0];
				}
			}

			if (tid == 0) {
				tid = tiles.pop();
			}

			this.owner.imgDiscard.visible = true;
			this.updateTileUI(this.owner.imgDiscard, tid);
		}

		let array = new Array<number>(GameConstants.MAX_HAND - tiles.length).fill(INVALID_TID);
		this.owner.lstHand.array = array.concat(tiles);
	}

	protected onRenderItem(item: Laya.Image, index: number): void {
		const tid = this.owner.lstHand.array[index];
		item.visible = tid != INVALID_TID;

		if (item.visible) {
			this.updateTileUI(item, tid);
		}
	}

	private updateTileUI(imgTile: Laya.Image, tid: number) {
		this.getTouchScript(imgTile).tildId = tid;

		imgTile.skin = `game/2/handmah_${tid}.png`;
		imgTile.removeChildren();
		if (tid == this.status.joker) {
			imgTile.addChild(new Laya.Image("game/jin.png"));
		}

	}

	private getTouchScript(imgTile: Laya.Image): SelfTileTouchScript {
		return imgTile.getComponent(Laya.Script) as SelfTileTouchScript;
	}

}