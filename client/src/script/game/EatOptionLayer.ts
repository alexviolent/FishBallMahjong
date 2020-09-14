import { GameEvent } from "../../game/GameEvent";
import { ui } from "../../ui/layaMaxUI";
import Net from "../../net/Net";
import { CMD } from "./common/RoomCommand";


export default class EatOptionLayer extends ui.game.EatOptionLayerUI {

    constructor() { super(); }

    onEnable(): void {

        this.visible = false;
        GameEvent.on(GameEvent.SHOW_EAT_OPTIONS, this, this.showUI);

        [this.lst1, this.lst2, this.lst3, this.lst4, this.lst5].forEach(lst => {
            lst.renderHandler = new Laya.Handler(this, this.onRenderItem, [lst]);
            lst.on(Laya.Event.CLICK, this, this.onOptionClick, [lst]);
        })
    }

    private showUI(opts: number[][]) {
        this.visible = true;
        this.optStack.selectedIndex = opts.length - 2;
        if (opts.length == 2) {
            this.lst1.array = opts[0];
            this.lst2.array = opts[1];
        } else {
            this.lst3.array = opts[0];
            this.lst4.array = opts[1];
            this.lst5.array = opts[2];
        }
    }

    private onOptionClick(lst: Laya.List) {
        this.visible = false;
        Net.Room.sendCommand(CMD.C_USER_ACTION, { act: 0, eatIndex: +lst.name });
    }

    private onRenderItem(lst: Laya.List, item: Laya.Image, index: number): void {
        item.skin = `game/2/handmah_${lst.array[index]}.png`;
    }

    onDisable(): void {
        GameEvent.offAllCaller(this);
    }
}