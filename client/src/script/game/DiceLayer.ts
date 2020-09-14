import { GameEvent } from "../../game/GameEvent";
import { ui } from "../../ui/layaMaxUI";
import Net from "../../net/Net";
import { ROUTE_ROOM_COMMAND, CMD } from "./common/RoomCommand";

/**
 * 骰子图层
 */
export default class DiceLayer extends ui.game.DiceLayerUI {


    constructor() { super(); }

    onEnable(): void {

        this.visible = false;
        this.lstDice.renderHandler = new Laya.Handler(this, this.updateDice);
        Net.Room.add(ROUTE_ROOM_COMMAND, this, (data: { cmd: number, msg: any }) => {
            if (data.cmd == CMD.S_START_DICE) {
                this.onStartDice(data.msg.dice);
            }
        });
    }

    onStartDice(dice: number[]) {
        this.visible = true;
        this.lstDice.visible = false;
        this.boxAni.visible = true;

        this.aniDice.play(0, true, "dice");
        this.aniDice.on(Laya.Event.COMPLETE, this, this.showDice, [dice]);
    }

    private showDice(dice: number[]) {
        this.boxAni.visible = false;
        this.lstDice.array = dice;
        this.lstDice.visible = true;

        this.timer.once(2000, this, () => {
            this.visible = false;
        })
    }

    updateDice(item: Laya.Image, index: number) {
        item.skin = `game/shaiziAnim/shaizi${this.lstDice.array[index] + 1}.png`;
    }

    onDisable(): void {
        Net.Room.removeAllCaller(this);
    }
}