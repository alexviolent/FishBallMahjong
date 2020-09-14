import { FrontendSession } from 'pinus';
import { StatusCodes } from 'http-status-codes';
import UserDao from '../../../dao/userDao';
import AuthUtil from '../../../utils/AuthUtil';

export default function (app: ApplicationEx) {
    return new Handler(app);
}

export class Handler {

    constructor(private app: ApplicationEx) {
    }

    async entry(msg: any, session: FrontendSession) {
        const { name, password } = msg;
        let userInfo = await UserDao.getUserInfo(name, password);
        if (!userInfo) {
            return { code: StatusCodes.UNAUTHORIZED };
        }

        const uid = name;
        this.app.userService.set(uid, userInfo);
        if (userInfo.is_robot) {
            this.app.robotService.add(uid, session.frontendId);
        }

        session.on('closed', this.onUserDisconnected.bind(this, session));

        await session.abind(uid);
        await session.apushAll();
        // this.app.get('sync').exec('userSync.updateUser', { privilege: 100 });
        return { code: StatusCodes.OK, auth: AuthUtil.genToken(`${userInfo.is_robot}|${name}`), userInfo: JSON.stringify(userInfo) };
    }

    async setRobotIdle(msg: any, session: FrontendSession) {
        this.app.robotService.setIdle(session.uid);
        return { code: StatusCodes.OK };
    }

    private onUserDisconnected(session: FrontendSession) {
        this.app.userService.remove(session.uid);
        this.app.robotService.remove(session.uid);
    }



}