import { GameEvent } from "../../../game/GameEvent";
import GameConstants from "../common/GameConstants";
import { BaseGameScript, IRoomCommandListener } from "../common/BaseGameScript";
import { CMD, ROUTE_ROOM_COMMAND } from "../common/RoomCommand";
import GameUI from "../../GameUI";
import { TileMask, SeatMask, INVALID_TID } from "../../../game/RoomStatus";
import Net from "../../../net/Net";



export default class EatList extends BaseGameScript implements IRoomCommandListener {

	/** @prop {name:viewPos,type:number}*/
	viewPos: number;

	owner: Laya.List;

	onEnable() {
		this.owner.renderHandler = new Laya.Handler(this, this.onRenderItem);
		Net.Room.add(ROUTE_ROOM_COMMAND, this, (data: { cmd: number, msg: any }) => {
			this.onRoomCommand(data.cmd, data.msg);
		});
	}

	onDisable() {
		GameEvent.offAllCaller(this);
	}

	onRoomCommand(cmd: number, msg: any) {
		switch (cmd) {
			case CMD.S_START_GAME: {
				this.clearUI();
				break;
			}

			case CMD.S_EXPOSED_KONG:
			case CMD.S_CONCEALED_KONG:
			case CMD.S_USER_EAT:
			case CMD.S_USER_PONG: {
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

		let tiles = [];
		[TileMask.EXPOSED_KONG, TileMask.CONCEALED_KONG].forEach(el => {
			let kongTiles = this.status.getTiles(pos, el);
			for (let i = 0; i < kongTiles.length / 4; i++) {
				tiles.push(kongTiles.slice(i * 4, i * 4 + 4));
			}
		});

		let eatTiles = this.status.getTiles(pos, TileMask.CHOW_PONG);
		for (let i = 0; i < eatTiles.length / 3; i++) {
			tiles.push(eatTiles.slice(i * 3, i * 3 + 3));
		}

		if (this.viewPos == SeatMask.RIGHT || this.viewPos == SeatMask.TOP) {
			let array = new Array<number[]>(GameConstants.MAX_EAT - tiles.length).fill([INVALID_TID]);
			this.owner.array = array.concat(tiles);
		} else {
			this.owner.array = tiles;
		}
	}

	private onRenderItem(item: Laya.Box, index: number): void {
		const tids = <number[]>this.owner.array[index];
		if (tids[0] == INVALID_TID) {
			item.visible = false;
			return;
		}

		item.visible = true;
		for (let i = 0; i < 3; i++) {
			let tid = tids[i];
			let img = <Laya.Image>item.getChildAt(i);
			let img2 = (<Laya.Image>img.getChildAt(0));
			if (i == 1) {
				if (tids.length == 3) {
					img2.visible = false;
				} else {
					img2.visible = true;
					img2.skin = this.getSkin(tid);
				}
			}
			img.skin = this.getSkin(tid);
		}
	}

	private getSkin(tid: number): string {
		return `game/${this.viewPos == 0 ? 2 : this.viewPos}/mingmah_${('00' + tid).slice(-2)}.png`;
	}
}