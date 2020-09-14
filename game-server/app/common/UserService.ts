import Singleton from "../utils/Singleton";
import { EventEmitter } from "ws";
import { Application } from "pinus/lib/application";

export default class UserService extends EventEmitter {
    private users: Map<string, any>;

    constructor(private app: Application) {
        super();
        this.users = new Map<string, any>();
    }

    set(uid: string, userInfo: any) {
        this.users.set(uid, userInfo);
    }

    remove(uid: string) {
        this.users.delete(uid);
    }

    get(uid: string) {
        return this.users.get(uid);
    }
}