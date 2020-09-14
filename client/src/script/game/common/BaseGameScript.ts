import Net from "../../../net/Net";
import GameUI from "../../GameUI";
import { RoomState, RoomStatus } from "../../../game/RoomStatus";
import { ROUTE_ROOM_COMMAND } from "./RoomCommand";
import GameController from "../../GameController";

export interface IRoomCommandListener {
    onRoomCommand(cmd: number, msg: any);
}

export class BaseGameScript extends Laya.Script {
    onAwake() {
        let self = <IRoomCommandListener><any>this;
        if (self.onRoomCommand) {
            Net.Room.add(ROUTE_ROOM_COMMAND, this, (data: { cmd: number, msg: any }) => {
                self.onRoomCommand(data.cmd, data.msg);
            });
        }
    }

    onDestroy() {
        Net.Room.removeAllCaller(this);
    }

    protected getViewPos(pos: number): number {
        return GameController.getViewPos(pos);
    }

    protected get status(): RoomStatus {
        return GameUI.controller.status;
    }

}