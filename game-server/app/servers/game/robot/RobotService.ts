import { Channel, Application, FRONTENDID } from "pinus";
import { EventEmitter } from "ws";

export const ROUTE_INVITE_JOIN = 'inviteJoinRoom';
export type InviteRobotOptions = {
    rid: string,
    host: string,
    port: string
}

export default class RobotService extends EventEmitter {

    private usingList: string[] = [];
    private idleList: string[] = [];
    private chan: Channel;

    constructor(private app: Application) {
        super();
        this.chan = this.app.channelService.createChannel('robotChannel');
    }

    private getRobots(num: number): string[] {
        if (this.idleList.length >= num) {
            let robots = this.idleList.slice(0, num);
            this.idleList.splice(0, 3);
            return robots;
        }

        return [];
    }

    public add(uid: string, sid: FRONTENDID) {
        this.idleList.push(uid);
        this.chan.add(uid, sid);
    }

    public remove(uid: string) {
        this.chan.removeMember(uid);
    }

    public inviteRobot(opts: InviteRobotOptions, num: number) {
        let robots = this.getRobots(num);
        this.usingList.push(...robots);
        this.inviteJoin(opts, robots);
    }

    private inviteJoin(opts: InviteRobotOptions, uids: string[]) {
        this.app.channelService.pushMessageByUids(ROUTE_INVITE_JOIN, { opts }, uids.map(uid => this.chan.getMember(uid)));
    }

    public setIdle(uid: string) {
        let index = this.usingList.indexOf(uid);
        if (index >= 0) {
            this.usingList.splice(index, 1);
            this.idleList.push(uid);
        }
    }

}