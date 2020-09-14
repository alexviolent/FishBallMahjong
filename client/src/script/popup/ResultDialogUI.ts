import { ui } from "../../ui/layaMaxUI";
import ViewType from "../../game/ViewDefine";
import GameUI from "../GameUI";

export default class ResultDialogUI extends ui.popup.ResultDialogUI {

    constructor() {
        super();
    }

    onAwake(): void {
        this.btnQuit.on(Laya.Event.CLICK, this, () => {
            Laya.Scene.close(ViewType.ResultDialog);
            Laya.Scene.open(ViewType.IndexView);
        });

        this.btnContinue.on(Laya.Event.CLICK, this, () => {
            Laya.Scene.close(ViewType.ResultDialog);
        });

        this.lstTile.renderHandler = new Laya.Handler(this, this.onRenderTile);
        this.lstPlayer.renderHandler = new Laya.Handler(this, this.onRenderPlayer);

    }

    onOpened(param: any) {
        this.lstTile.array = param.handTiles;
        this.lstPlayer.array = new Array(4).fill(param);
    }

    private onRenderTile(item: Laya.Image, index: number): void {
        item.skin = `game/2/mingmah_${item.dataSource}.png`;
    }

    private onRenderPlayer(item: Laya.Image, index: number): void {
        const status = GameUI.controller.status;

        const bankerImage = <Laya.Image>item.getChildByName("bankerImage");
        const nameLabel = <Laya.Label>item.getChildByName("nameLabel");
        const scoreLabel = <Laya.FontClip>item.getChildByName("scoreLabel");

        bankerImage.visible = index == status.bankerPos;
        nameLabel.text = status.getSeat(index).uid;

        if (index == item.dataSource.pos) {
            scoreLabel.gray = false;
            scoreLabel.value = `+${item.dataSource.score}`;
        } else {
            scoreLabel.gray = true;
            scoreLabel.value = `-${item.dataSource.score / 3}`;
        }
    }

}

