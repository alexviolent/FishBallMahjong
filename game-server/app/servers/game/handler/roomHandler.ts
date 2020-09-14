import { FrontendSession } from 'pinus';
import { StatusCodes } from 'http-status-codes';
import Room from '../room/Room';
import AuthUtil from '../../../utils/AuthUtil';

export default function (app: ApplicationEx) {
    return new Handler(app);
}

export class Handler {

    constructor(private app: ApplicationEx) {
    }

    async entry(msg: any, session: FrontendSession) {
        const { isRobot, name, auth } = msg;

        if (!AuthUtil.isValid(`${isRobot}|${name}`, auth)) {
            return { code: StatusCodes.UNAUTHORIZED };
        }

        // const userInfo = await this.app.rpc.login.commonRemoter.pullUserInfo(session, name);

        // if (!userInfo) {
        //     return;
        // }
        // this.app.userService.set(uid, userInfo);

        const uid = name;

        session.on('closed', (sess, resson)=>{
            this.onUserDisconnected(sess);
        });
        
        await session.abind(uid);
        session.set('isRobot', isRobot);
        await session.apushAll();

        return { code: StatusCodes.OK };
    }

    private onUserDisconnected(session: FrontendSession) {
        let rid = session.get('rid');

        // this.app.userService.remove(session.uid);
        const room = this.app.roomService.getRoom(rid);
        if (room) {
            room.userLeave(session.uid);
        }
    }

    async join(msg: any, session: FrontendSession) {
        const { rid } = msg;

        let room: Room = null;

        if (!rid) {
            room = this.app.roomService.getVacancy();
        } else {
            room = this.app.roomService.getRoom(rid);
        }

        if (!room || !room.canEnter()) {
            return { code: StatusCodes.NOT_ACCEPTABLE };
        }

        let roomInfo = room.userEnter(session.uid, session.frontendId);

        // 通知机器人玩家进入房间
        const isRobot = session.get('isRobot') === 1;
        // const userInfo = this.app.userService.get(session.uid);
        if (!isRobot) {
            let curServer = this.app.getCurServer();
            this.app.rpc.login.commonRemoter.inviteRobot(session, {
                rid: room.rid,
                host: curServer.clientHost,
                port: '' + curServer.clientPort
            }, 3);
        }

        session.set('rid', room.rid);
        await session.apushAll();
        return roomInfo;
    }

    async notifyCommand(msg: any, session: FrontendSession) {
        this.app.roomService.handleGameCommand(msg, session.get('rid'), session.uid);
    }
}