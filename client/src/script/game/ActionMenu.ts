import Net from "../../net/Net";
import { GameEvent } from "../../game/GameEvent";
import { ui } from "../../ui/layaMaxUI";
import { CMD, ROUTE_ROOM_COMMAND } from "./common/RoomCommand";
import { INVALID_SEAT } from "../../game/RoomStatus";

export default class ActionMenu extends ui.game.ActionMenuUI {

    private eatOptions: number[][];

    constructor() { super(); }

    onEnable(): void {
        this.visible = false;
        this.lstAction.renderHandler = new Laya.Handler(this, this.updateButton);
        // GameEvent.on(GameEvent.TURN_PLAYER, this, () => {
        //     this.visible = false;
        // });

        Net.Room.add(ROUTE_ROOM_COMMAND, this, (data: { cmd: number, msg: any }) => {
            this.onRoomCommand(data.cmd, data.msg);
        });
    }

    onRoomCommand(cmd: number, msg: any) {
        switch (cmd) {
            case CMD.S_USER_ACTION: {
                this.visible = true;
                this.eatOptions = msg.eatOptions;
                this.onUserAction(msg.actions);
                break;
            }

            case CMD.S_OUT_TILE: {
                this.visible = false;
                break;
            }

            case CMD.S_TURN_PLAYER: {
                if (msg.pos != INVALID_SEAT) {
                    this.visible = false;
                }
                break;
            }
        }
    }

    private updateButton(cell: Laya.Box, index: number) {
        const skins = [
            'game/chi.png',
            'game/peng.png',
            'game/gang.png',
            'game/hu.png',
            'game/operat_guo.png',
        ];

        let btnAction = <Laya.Button>cell.getChildAt(0);
        btnAction.offAll(Laya.Event.CLICK);
        btnAction.on(Laya.Event.CLICK, this, () => {
            if (btnAction.gray) {
                return;
            }

            if (index == 0) {
                this.processEat();
                return;
            }

            Net.Room.sendCommand(CMD.C_USER_ACTION, { act: index });
            this.visible = false;
        });

        btnAction.skin = skins[index];
        btnAction.gray = cell.dataSource === 0;
    }

    private processEat() {

        if (this.eatOptions.length > 1) {
            GameEvent.event(GameEvent.SHOW_EAT_OPTIONS, [this.eatOptions]);
        } else {
            Net.Room.sendCommand(CMD.C_USER_ACTION, { act: 0, eatIndex: 0 });
            this.visible = false;
        }
    }

    private onUserAction(actions: any[]) {
        if (actions) {
            this.visible = true;
            this.lstAction.array = actions;
        }
    }

    onDisable(): void {
        Net.Room.removeAllCaller(this);
    }
}