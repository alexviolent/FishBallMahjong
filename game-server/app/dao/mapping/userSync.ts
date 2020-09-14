import * as mapper from 'node-sql-mapper';
import MySqlClient from '../mySqlClient';
import { mapping, tableName } from "../userDao";

export const updateUser = (dbclient: MySqlClient, data: any, cb: Function) => {
    const where = { name: 'jianbo1' };
    const sql = mapper.update({ where, data, mapping, tableName });
    console.log(sql);
    console.log('----------------------');
    dbclient.query(sql, (res: any, err: string) => {
        console.log(res, err);
    })
}