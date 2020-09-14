/**
 * 玩家牌数据掩码
 */
export enum TileMask {
    // 手上的牌
    HAND = 1 << 8,
    // 打出去的牌
    DISCARD = 1 << 9,
    // 吃和碰的牌
    CHOW_PONG = 1 << 10,
    // 花
    FLOWER = 1 << 11,
    // 明杠
    EXPOSED_KONG = 1 << 12,
    // 暗杠
    CONCEALED_KONG = 1 << 13,
}

/**
 * 房间配置
 */
export type RoomConfig = {
    // 初始化创角房间数量
    initRoomCount: number;
    // 最大玩家数量
    maxPlayer: number;
    // 等待玩家操作时间
    timeWaitAction: number;
};

export enum RoomState {
    IDLE = 1,
    GAMING,
}

export enum PlayerState {
    UNKONW = 1,
    ONLINE,
    OFFLINE,
}

export type RoomSeat = {
    uid: string,
    playerState: PlayerState;
    drawId: number;
    discardId: number;
}

export enum SeatMask {
    SELF = 0,
    RIGHT,
    TOP,
    LEFT
}

/** 无效座位号 */
export const INVALID_SEAT = -1;
/** 无效牌ID */
export const INVALID_TID = -1;

export class RoomStatus {
    // 房间状态枚举
    state: RoomState;
    // 局数
    round: number;
    // 当前房间玩家数量
    playerCount: number;
    // 房间座位
    seats: RoomSeat[];
    // 庄家
    bankerPos: number;
    // 金
    joker: number;
    // 当前打牌的玩家的座位
    _currSeat: number;
    // 上一个打牌玩家的座位
    prevSeat: number;
    // 玩家的牌数据
    tiles: number[][];
    // 剩余牌数量
    tileCount: number = 0;

    public set currSeat(value: number) {
        this.prevSeat = this._currSeat;
        this._currSeat = value;
    }

    public get currSeat(): number {
        return this._currSeat;
    }

    private get emptySeat() {
        return {
            uid: '',
            playerState: PlayerState.UNKONW,
            lastDrawnTileId: INVALID_TID,
            lastDiscardedTileId: INVALID_TID
        };
    }

    constructor(private cfg?: RoomConfig) {
        this.round = 0;
        if (this.cfg) {
            this.seats = new Array(this.cfg.maxPlayer).fill(this.emptySeat);
        }
        this.reset();
    }

    public reset() {
        this.state = RoomState.IDLE;
        this.playerCount = 0;
        this.bankerPos = INVALID_SEAT;
        this.joker = INVALID_TID;
        this.currSeat = INVALID_SEAT;
        this.prevSeat = INVALID_SEAT;
        this.tileCount = 0;
        this.tiles = [];

        if (this.cfg) {
            for (let i = 0; i < this.cfg.maxPlayer; i++) {
                this.tiles.push([]);
            }
        }
    }

    public copyFromStatus(status: RoomStatus) {
        this.cfg = status.cfg;
        this.state = status.state;
        this.round = status.round;
        this.playerCount = status.playerCount;
        this.seats = status.seats;
        this.bankerPos = status.bankerPos;
        this.joker = status.joker;
        this.currSeat = status.currSeat;
        this.prevSeat = status.prevSeat;
        this.tiles = status.tiles;
        this.tileCount = status.tileCount;
    }

    /**
     * addTiles
     */
    public addTiles(pos: number, tileMask: TileMask, tiles: number[]) {
        tiles.forEach(tid => {
            this.tiles[pos].push(tid | tileMask);
        })
    }

    /**
     * delTiles
     */
    public delTiles(pos: number, tileMask: TileMask, tid: number, count = 1) {
        let tiles = this.tiles[pos];
        for (let i = 0; i < count; i++) {
            let index = tiles.findIndex(el => {
                if (this.getMask(el) != tileMask) {
                    return false;
                }

                let tileId = this.getId(el);
                return tileId == 0 || tileId == tid;
            });
            if (index >= 0) {
                tiles.splice(index, 1);
            }
        }
    }

    /**
     * updateTiles
     */
    public updateTiles(pos: number, tileMask: TileMask, tiles: number[]) {
        this.tiles[pos] = this.tiles[pos].filter(el => this.getMask(el) != tileMask);
        this.addTiles(pos, tileMask, tiles);
    }

    /**
     * getTiles
     */
    public getTiles(pos: number, tileMask: TileMask): number[] {
        return this.tiles[pos].filter(el => this.getMask(el) == tileMask).map(el => this.getId(el));
    }

    /**
     * 获取带堆叠数量的牌数组
     */
    public getTileStacks(pos: number, tileMask: TileMask): number[][] {
        let tiles = this.getTiles(pos, tileMask);
        let counts = _.countBy(tiles);
        let uniqTiles = _.uniq(tiles);

        return uniqTiles.map(tid => [tid, counts[tid]]);
    }

    private getMask(value: number): TileMask {
        return value & 0xFF00;
    }

    private getId(value: number): TileMask {
        return value & 0xFF;
    }

    /**
     * 获取座位信息
     */
    public getSeat(pos: number): RoomSeat {
        return this.seats[pos];
    }

    public playerSeat(pos: number, uid: string) {
        let seat = this.getSeat(pos);
        if (seat.uid != uid) {
            seat.uid = uid;
            seat.playerState = PlayerState.ONLINE;
            this.playerCount++;
        }
    }

}