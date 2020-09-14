/**
 * 房间命令
 */
export enum CMD {
    S_USER_ENTER = 1,
    S_USER_LEAVE,
    S_ROOM_STATUS,
    S_START_GAME,
    S_START_DICE,
    S_SET_BANKER,
    S_DRAW_JOKER,
    S_DEAL_TILES,
    S_SYNC_REMAIN_TILE,
    S_TURN_PLAYER,
    S_OUT_TILE,
    C_OUT_TILE,
    /** 补花 */
    S_EXCH_FLOWER,
    S_DRAW_FLOWER,
    /** 摸牌 */
    S_DRAW,
    S_USER_ACTION,
    C_USER_ACTION,
    S_USER_HU,
    S_USER_EAT,
    S_USER_PONG,
    S_EXPOSED_KONG,
    S_CONCEALED_KONG,
    S_KICK,
}

export const ROUTE_ROOM_COMMAND: string = "onRoomCommand";