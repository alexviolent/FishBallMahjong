
export default class AsyncUtils {
    static async await(ms: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        });
    }
}