import { Application } from "pinus";
import { Promise } from 'bluebird';
import * as PoolManager from "mysql-connection-pool-manager"

export default class MySqlClient {
    private static SETTING_PATH = '/config/mysql.json';

    private mySQL: any;

    constructor(private app: Application) {
        const mySQLSettings = require(app.getBase() + MySqlClient.SETTING_PATH);
        const options = {
            idleCheckInterval: 1000,
            maxConnextionTimeout: 30000,
            idlePoolTimeout: 3000,
            errorLimit: 5,
            preInitDelay: 50,
            sessionTimeout: 60000,
            onConnectionAcquire: () => { },
            onConnectionConnect: () => { },
            onConnectionEnqueue: () => { },
            onConnectionRelease: () => { },
            mySQLSettings: mySQLSettings
        };

        this.mySQL = PoolManager(options);
    }

    query(sql: string, cb: (res: any, err: string) => void) {
        this.mySQL.query(sql, cb);
    }

    async aquery(sql: string) {
        return new Promise((resolve, reject) => {
            this.query(sql, (res, err) => {
                resolve({ res, err });
            });
        });
    }
}