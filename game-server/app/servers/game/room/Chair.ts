import Room from "./Room";

export default class Chair {

    uid: string = "";
    /** 是否庄家 */
    isBanker: boolean = false;
    /** 是否离线 */
    isOffline: boolean = false;
    /** 是否机器人 */
    isRobot: boolean = false;
    /** 是否托管 */
    isTrustee: boolean = false;
    /** 手上的牌 */
    handTiles: number[] = [];

    flowerTiles: number[] = [];
    outTiles: number[] = [];
    eatTiles: number[] = [];
    kongTiles: number[] = [];
    darkKongTiles: number[] = [];

    constructor(public cid: number, public room: Room) {

    }

    userSitDown(uid: string) {
        this.isOffline = false;
        this.uid = uid;
    }

    userLeave() {
        // this.room.broadcastEx('onUserStandUp', { uid: this.uid }, this.uid);
        this.isOffline = true;
        this.uid = "";
    }

    resetTiles(tiles: number[]) {
        this.clearChair();
        this.handTiles = [].concat(tiles);
    }

    isEmpty(): boolean {
        return this.uid == "";
    }

    clearChair() {
        this.handTiles = [];
        this.flowerTiles = [];
        this.outTiles = [];
        this.eatTiles = [];
        this.kongTiles = [];
        this.darkKongTiles = [];
    }

    getChairInfo() {
        return {
            uid: this.uid,
            cid: this.cid,
            handTiles: this.handTiles,
            flowerTiles: this.flowerTiles,
            outTiles: this.outTiles,
            eatTiles: this.eatTiles,
            kongTiles: this.kongTiles,
            darkTiles: this.darkKongTiles
        };
    }
}