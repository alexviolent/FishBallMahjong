

export enum TileType {
    Bing = 11,
    Wan = 21,
    Tiao = 31,
    Dong = 41,
    Nan,
    Xi,
    Bei,
    Zhong,
    Fa,
    Bai,
    Spring = 51,
    Summer,
    Atum,
    Winter,
    Mei,
    Lan,
    Zhu,
    Ju
}

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