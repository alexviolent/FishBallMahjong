import { pinus, RESERVED, Application, IApplicationEvent } from 'pinus';
import { preload } from './preload';
import { components as syncPluginPath } from 'pomelo-sync-plugin';
import { createRobotPlugin } from 'pinus-robot-plugin';
import MySqlClient from './app/dao/mySqlClient';
import { RoomService, RoomConfig } from './app/servers/game/room/Room';
import UserService from './app/common/UserService';
import RobotService from './app/servers/game/robot/RobotService';
import { nextTick } from 'process';

const HEARTBEAT = 60;
const DB_SYNC_INTERVAL = 60 * 1000;

declare global {
    interface ApplicationEx extends Application {
        roomService: RoomService;
        userService: UserService;
        robotService: RobotService;
    }
}

/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload();

/**
 * Init app for client.
 */
let app = <ApplicationEx>pinus.createApp();
app.set('name', 'MahjongServer');

// app configuration
app.configure(RESERVED.ALL, () => {
    app.set('connectorConfig',
        {
            connector: pinus.connectors.hybridconnector,
            heartbeat: HEARTBEAT,
            useDict: true,
            useProtobuf: true
        });

    let dbclient = new MySqlClient(app);
    app.set('dbclient', dbclient);

    app.load(require(syncPluginPath + 'sync.js'), {
        path: __dirname + '/app/dao/mapping',
        dbclient: dbclient,
        interval: DB_SYNC_INTERVAL
    });



});

class EventX implements IApplicationEvent {
    start_server(serverId: string) {
        if (!app.isMaster()) {
            app.userService = new UserService(app);
        }

        if (serverId.startsWith("login")) {
            app.robotService = new RobotService(app);
        }else if (serverId.startsWith("game")) {
            app.roomService = new RoomService(app, <RoomConfig>{
                initRoomCount: 30,
                maxPlayer: 4,
                timeWaitAction: 15 * 1000,
            });
        }
    }
}

app.loadEvent(EventX, null)

if (app.isMaster()) {
    app.use(createRobotPlugin({ scriptFile: app.getBase() + '/app/servers/game/robot/robot.js' }));
}

// start app
app.start();

