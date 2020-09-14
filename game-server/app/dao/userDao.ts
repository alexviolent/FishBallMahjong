import * as mapper from 'node-sql-mapper';
import { pinus } from 'pinus';

export const tableName = 'account';

export const mapping = {
    id: 'number',
    privilege: 'number',
    name: 'string',
    password: 'string',
}

export default class UserDao {
    static async getUserInfo(name: string, password: string) {
        const where = { name: name, password: password };
        const sql = mapper.get({ where, mapping, tableName });
        const raw = await pinus.app.get('dbclient').aquery(sql);
        if (!raw.err && raw.res && raw.res.length > 0) {
            return raw.res[0];
        }
    }
}