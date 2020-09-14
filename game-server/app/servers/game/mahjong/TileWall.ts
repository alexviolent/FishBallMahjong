import { TileType } from "./TileType";
const _ = require('lodash');

/**
 * 麻将牌墙
 */
export class TileWall {

    private totalTiles: number[] = [];
    private tableTiles: number[] = [];

    constructor() {
        let tiles = [];
        [TileType.Bing, TileType.Wan, TileType.Tiao, TileType.Dong].forEach(el => {
            let count = TileType.Dong == el ? 7 : 9;
            for (let i = 0; i < count; i++) {
                tiles.push(i + el);
            }
        });

        this.totalTiles = [].concat(...new Array(4).fill(tiles));
        for (let i = 0; i < 8; i++) {
            this.totalTiles.push(TileType.Spring + i);
        }
    }

    /**
     * 洗牌
     */
    public shuffle() {
        this.tableTiles = _.shuffle(_.shuffle(this.totalTiles));
    }

    /**
     * 前面抓多张
     * @param count 
     */
    fowardDrawMulti(count: number = 4): number[] {
        return this.tableTiles.splice(0, count);
    }

    /**
     * 前面抓一张
     */
    fowardDraw(): number {
        return this.fowardDrawMulti(1)[0];
    }

    /**
     * 后面面抓一张
     */
    backwardDraw(): number {
        return this.tableTiles.splice(this.tableTiles.length - 1, 1)[0];
    }

    /**
     * 补花
     */
    exchFlowerNested(srcTiles: number[], dstTiles: number[], flowers: number[]): any {
        dstTiles.splice(0, dstTiles.length);
        let curFlowers = [];
        srcTiles.forEach(i => {
            if (i < TileType.Dong) {
                dstTiles.push(i);
            } else {
                curFlowers.push(i);
            }
        });

        if (curFlowers.length > 0) {
            this.fowardDrawMulti(curFlowers.length).forEach(tid => dstTiles.push(tid));
            curFlowers.forEach(tid => flowers.push(tid));
            this.exchFlowerNested([].concat(dstTiles), dstTiles, flowers);
        }
    }

    public remainCount(): number {
        return this.tableTiles.length;
    }

    /**
     * 抓金
     */
    public drawJoker(): number {
        let tileId = 9999;
        let index = 0;
        while (tileId >= TileType.Dong) {
            index = _.random(this.tableTiles.length - 1);
            tileId = this.tableTiles[index];
        }

        this.tableTiles.splice(index, 1);
        return tileId;
    }
}