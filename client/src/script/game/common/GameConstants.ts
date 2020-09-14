
/**
 * 游戏常量定义
 * 
 * rid roomId,房间id
 * tid tileId,牌id
 * cid chairId,座位id
 * vid viewId,座位的视角id，固定的自己0，对家2，左2右1
 */

export default class GameConstants {
    static MAX_HAND = 16;
    static MAX_OUT = 16;
    static MAX_EAT = 5;

    /** 无效牌ID */
    static INVALID_TID = -1;
    static KONG_TID = 2;
    static INVALID_CHAIR = -1;

    static SELF_VID = 0;
    static TOP_VID = 2;
    static LEFT_VID = 3;
    static RIGHT_VID = 1;
}