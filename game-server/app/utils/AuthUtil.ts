const token = require('token');
token.defaults.secret = 'MAHJONG';
token.defaults.timeStep = 24 * 60 * 60; // 24h in seconds

export default class AuthUtil {
    static genToken(data: string): string {
        return token.generate(data);
    }

    static isValid(data: string, auth: string): boolean {
        return token.verify(data, auth);
    }
}