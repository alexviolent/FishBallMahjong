import * as pinus from "./PinusClient";
export default class Net extends pinus.WSClient {
    private static multiton = {};
    static getMultiton(cname: string): Net {
        if (!this.multiton[cname]) {
            this.multiton[cname] = new this(cname);
        }
        return this.multiton[cname];
    }

    static get Login(): Net {
        return this.getMultiton('login');
    }

    static get Room(): Net {
        return this.getMultiton('room');
    }

    private eventDispatcher: Laya.EventDispatcher = new Laya.EventDispatcher();

    constructor(private name: string) {
        super();

    }

    sendCommand(cmd: number, msg: any) {
        if (this.name != 'room') {
            throw "This method only call with room.";
        }
        this.notify('game.roomHandler.notifyCommand', { cmd, msg });
    }

    add(route: string, caller: any, listener: Function, priority: number = 0) {
        if (!this.eventDispatcher.hasListener(route)) {
            this.on(route, (msg: any) => {
                this.eventDispatcher.event(route, msg);
            });
        }

        this.eventDispatcher.on(route, caller, listener);

        let ed = <any>this.eventDispatcher;
        let listeners = ed._events[route];
        if(listeners.run){
            listeners.priority = priority;
        }else{
            let handler = listeners[listeners.length - 1];
            handler.priority = priority;
            listeners.sort((a, b) => a.priority - b.priority);
        }
    }

    remove(route: string, caller: any, listener: Function) {
        this.eventDispatcher.off(route, caller, listener);
    }

    removeAll(route?: string) {
        this.eventDispatcher.offAll(route);
    }

    removeAllCaller(caller: any) {
        this.eventDispatcher.offAllCaller(caller);
    }
}