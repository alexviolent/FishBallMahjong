import { ui } from "../ui/layaMaxUI";
import { GameEvent } from "../game/GameEvent";
import GameController from "./GameController";

export default class GameUI extends ui.game.GameUI {
    public static controller: GameController;

    constructor() {
        super();
    }

    onEnable(): void {
    }

    onOpened(param: any) {
        GameUI.controller = this.getComponent(GameController);
        if (param) {
            GameUI.controller.onEnterRoom(param);
        }
    }


}

