import { RemoterClass, FrontendSession } from 'pinus';
import { InviteRobotOptions } from '../../game/robot/RobotService';

export default function (app: ApplicationEx) {
    return new CommonRemoter(app);
}

// UserRpc的命名空间自动合并
declare global {
    interface UserRpc {
        login: {
            // 一次性定义一个类自动合并到UserRpc中
            commonRemoter: RemoterClass<FrontendSession, CommonRemoter>;
        };
    }
}

export class CommonRemoter {
    constructor(private app: ApplicationEx) {
    }

    public async pullUserInfo(name: string, password: string) {
        const userInfo = this.app.userService.get(name);
        return userInfo;
    }

    public async inviteRobot(opts: InviteRobotOptions, num: number) {
        this.app.robotService.inviteRobot(opts, num);
    }

    // 私有方法不会加入到RPC提示里
    private async privateMethod(testarg: string, arg2: number) {

    }
}