import { ui } from "../../../ui/layaMaxUI";
import { GameEvent } from "../../../game/GameEvent";
import GameConstants from "../common/GameConstants";
import { BaseGameScript, IRoomCommandListener } from "../common/BaseGameScript";
import { CMD } from "../common/RoomCommand";
import { TileMask, SeatMask, INVALID_TID } from "../../../game/RoomStatus";



export default class FlowerList extends BaseGameScript implements IRoomCommandListener {
	/** @prop {name:viewPos,type:number}*/
	viewPos: number;

	owner: Laya.List;

	onEnable() {
		this.owner.renderHandler = new Laya.Handler(this, this.onRenderItem);
	}

	onDisable() {
	}

	onRoomCommand(cmd: number, msg: any) {
		switch (cmd) {
			case CMD.S_START_GAME: {
				this.clearUI();
				break;
			}

			case CMD.S_EXCH_FLOWER:
			case CMD.S_DRAW_FLOWER: {
				if (this.getViewPos(msg.pos) == this.viewPos) {
					this.updateUI(msg.pos);
				}
				break;
			}
		}
	}

	private clearUI() {
		this.owner.array = [];
	}

	private updateUI(pos: number) {
		let tiles = this.status.getTileStacks(pos, TileMask.FLOWER);

		if (this.viewPos == SeatMask.RIGHT || this.viewPos == SeatMask.TOP) {
			let array = new Array(GameConstants.MAX_OUT - tiles.length).fill([INVALID_TID]);
			this.owner.array = array.concat(tiles);
		} else {
			this.owner.array = tiles;
		}
	}

	private onRenderItem(item: Laya.Image, index: number): void {
		const [tileId, count] = this.owner.array[index];
		if (tileId == INVALID_TID) {
			item.visible = false;
			return;
		}

		item.visible = true;
		item.skin = `game/${this.viewPos == 0 ? 2 : this.viewPos}/mingmah_${tileId}.png`;
		const markImg = <Laya.Image>item.getChildByName('markImg');
		const countLabel = <Laya.Label>item.getChildByName('countLabel');
		markImg.visible = countLabel.visible = count > 1;
		countLabel.text = "" + count;
	}


}