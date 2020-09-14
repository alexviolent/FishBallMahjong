import { ui } from "../../../ui/layaMaxUI";
import { GameEvent } from "../../../game/GameEvent";
import GameConstants from "../common/GameConstants";
import { BaseGameScript, IRoomCommandListener } from "../common/BaseGameScript";
import { CMD } from "../common/RoomCommand";
import { TileMask, SeatMask, INVALID_TID } from "../../../game/RoomStatus";



export default class OutList extends BaseGameScript implements IRoomCommandListener {
	/** @prop {name:viewPos,type:number}*/
	viewPos: number;

	owner: Laya.List;
	private currDiscardId: number = -1;

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

			case CMD.S_USER_EAT:
			case CMD.S_USER_PONG:
			case CMD.S_EXPOSED_KONG: {
				if (msg.removeTile && this.getViewPos(msg.targetPos) == this.viewPos) {
					// 如果是被吃碰杠，就表现删掉这张打出的牌
					let tiles = this.owner.array;
					let index = tiles.findIndex(el => el[0] == msg.removeTile);
					if (index < 0) {
						break;
					}

					let targetImage = <any>this.owner.getCell(index) as Laya.Image;
					let showImage = new Laya.Image(this.getSkin(msg.removeTile));
					showImage.anchorX = showImage.anchorY = 0.5;
					showImage.width = targetImage.width;
					showImage.height = targetImage.height;
					showImage.pos(showImage.width / 2, showImage.height / 2);
					targetImage.addChild(showImage);

					let tl = Laya.TimeLine
						.to(showImage, { scaleX: 1.4, scaleY: 1.4 }, 100)
						.to(showImage, { scaleX: 1, scaleY: 1 }, 100)
						.to(showImage, { scaleX: 1.4, scaleY: 1.4 }, 150)
						.to(showImage, { scaleX: 1, scaleY: 1 }, 150)
						.to(showImage, { scaleX: 1.4, scaleY: 1.4 }, 100)
						.to(showImage, { scaleX: 1, scaleY: 1 }, 100);

					tl.on(Laya.Event.COMPLETE, this, () => {
						showImage.removeSelf();
						this.updateUI(msg.targetPos);
					});
					tl.play();
				}
				break;
			}

			case CMD.S_OUT_TILE: {
				if (this.getViewPos(msg.pos) == this.viewPos) {
					this.currDiscardId = msg.tileId;
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
		let tiles = this.status.getTileStacks(pos, TileMask.DISCARD);

		if (this.viewPos == SeatMask.SELF || this.viewPos == SeatMask.LEFT) {
			let array = new Array(GameConstants.MAX_OUT - tiles.length).fill([INVALID_TID]);
			this.owner.array = array.concat(tiles.reverse());
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
		item.skin = this.getSkin(tileId);
		const flagImage = <Laya.Image>item.getChildByName('flagImage');
		const countLabel = <Laya.Label>item.getChildByName('countLabel');
		flagImage.visible = countLabel.visible = count > 1;
		countLabel.text = "" + count;

		const markImage = <Laya.Image>item.getChildByName('markImage');
		markImage.visible = tileId == this.currDiscardId;

	}

	private getSkin(tileId: number): string {
		return `game/${this.viewPos == 0 ? 2 : this.viewPos}/mingmah_${tileId}.png`;
	}


}