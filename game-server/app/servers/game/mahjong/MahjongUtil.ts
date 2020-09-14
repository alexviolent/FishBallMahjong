import _ = require('lodash');

export default class MahjongUtils {

    static getEatOptions(tiles: number[], tileId: number, joker: number): number[][] {
        let options = [];
        let src = [].concat(tiles);
        src.push(tileId);

        for (let i = 0; i < 3; i++) {
            let seq = [tileId - 2 + i, tileId - 1 + i, tileId + i];
            if (seq.indexOf(joker) < 0 && _.intersection(src, seq).length == 3) {
                options.push(seq);
            }
        }

        return options;
    }

    static getPongArray(tiles: number[], tileId: number): number[] {
        if (tiles.filter(el => el == tileId).length >= 2) {
            return new Array(3).fill(tileId);
        }
        return [];
    }

    /**
     * 
     * @param tiles 
     * @param kongType 1 判断明杠，2 判断暗杠
     * @param tileId 
     */
    static getKongOptions(tiles: number[], kongType: 1 | 2, tileId: number): { kongType: 1 | 2, options: number[] }[] {
        if (kongType == 2) {
            return _.filter(_.groupBy(tiles), el => el.length >= 4).map(el => ({ kongType: 2, options: el }));
        }

        if (_.filter(tiles, n => n == tileId).length >= 3) {
            return [{ kongType: 1, options: new Array(4).fill(tileId) }];
        }
        return [];
    }

    static canHu(tiles: number[], joker: number): number {
        return can_win(tiles, joker);
    }

    static getListen(tiles: number[], joker: number): number[] {
        return get_listen(tiles, joker);
    }
}

var TID_TONG = [11, 12, 13, 14, 15, 16, 17, 18, 19];
var TID_WAN = [21, 22, 23, 24, 25, 26, 27, 28, 29];
var TID_TIAO = [31, 32, 33, 34, 35, 36, 37, 38, 39];
var TID_FENG = [41, 42, 43, 44, 45, 46, 47];
var TID_HUA = [51, 52, 53, 54, 55, 56, 57, 58];

var K_WIN_PINGHU = 1; // 平胡
var K_WIN_JINQUE = 2; // 金雀
var K_WIN_THREEJIN = 3; // 三头金

/**
 * 是否能胡
 * @param {Array} tiles 
 * @param {Integer} joker 金
 * @return {Integer}
 */
function can_win(tiles, joker) {
    var groups = group_mah(_.sortBy(tiles), joker);

    var jokers = groups[0];

    // 三头金
    if (jokers.length >= 3) {
        return K_WIN_THREEJIN;
    }

    var the_rests = [];

    for (var i = 1; i <= 3; i++) {
        the_rests.push(check_meld(groups[i]));
    }

    var all_pass = _.every(the_rests, function (arr) {
        return arr.length == 0;
    });

    if (all_pass && jokers.length < 2) {
        return 0;
    }

    // 金雀
    if (all_pass && jokers.length == 2) {
        return K_WIN_JINQUE;
    }

    var rest_count = 0;

    for (var i = 0; i < the_rests.length; i++) {
        rest_count += the_rests[i].length;
    }

    let jokerCount = jokers.length;

    if (jokerCount == 0) {
        if (rest_count > 2) {
            return 0;
        }
        for (var i = 0; i < the_rests.length; i++) {
            var the_rest = the_rests[i];
            if (the_rest.length >= 2 && the_rest[0] == the_rest[1]) {
                return K_WIN_PINGHU;
            }
        }

        return 0;
    } else if (jokerCount == 1) {

        if (rest_count > 4) {
            return 0;
        }

        // 只剩一个的情况
        var cond1 = _.filter(the_rests, function (arr) {
            return arr.length == 1;
        });

        if (cond1.length == 1 && rest_count == 1) {
            return K_WIN_PINGHU;
        }

        // 剩4个的情况

        var pair_count = 0;

        for (var i = 0; i < the_rests.length; i++) {
            var the_rest = the_rests[i];
            if (the_rest.length >= 2) {
                pair_count += count_pair(the_rest);
            }
        }

        if (pair_count == 2) {
            // 两对
            return K_WIN_PINGHU;
        } else if (pair_count == 1) {
            // 一对和一个顺子
            for (var i = 0; i < the_rests.length; i++) {
                var the_rest = the_rests[i];
                if (the_rest.length == 2 && the_rest[0] == (the_rest[1] - 1)) {
                    return K_WIN_PINGHU;
                } else if (the_rest.length == 4 && check_seq2(the_rest[0], the_rest[1])) {
                    return K_WIN_PINGHU;
                } else if (the_rest.length == 4 && check_seq2(the_rest[2], the_rest[3])) {
                    return K_WIN_PINGHU;
                }
            }
        }

        return 0;
    } else if (jokerCount == 2) {
        if (rest_count > 6) {
            return 0;
        }

        if (rest_count == 3) {
            for (var i = 0; i < the_rests.length; i++) {
                var the_rest = the_rests[i];
                if (the_rest.length >= 2 && the_rest[0] == the_rest[1]) {
                    return K_WIN_PINGHU;
                } else if (the_rest.length >= 2 && the_rest[1] == the_rest[2]) {
                    return K_WIN_PINGHU;
                } else if (the_rest.length >= 2 && check_seq2(the_rest[0], the_rest[1])) {
                    return K_WIN_PINGHU;
                } else if (the_rest.length >= 2 && check_seq2(the_rest[1], the_rest[2])) {
                    return K_WIN_PINGHU;
                }
            }
        } else if (rest_count == 6) {
            var pair_count = 0;

            for (var i = 0; i < the_rests.length; i++) {
                var the_rest = the_rests[i];
                if (the_rest.length == 3) {
                    return 0;
                }
                if (the_rest.length >= 2) {
                    pair_count += count_pair(the_rest);
                }
            }

            if (pair_count == 3) {
                return K_WIN_PINGHU;
            } else if (pair_count == 2) {
                for (var i = 0; i < the_rests.length; i++) {
                    var the_rest = the_rests[i];
                    if (the_rest.length == 2 && check_seq2(the_rest[0], the_rest[1])) {
                        return K_WIN_PINGHU;
                    }
                }
            } else if (pair_count == 1) {
                var seq_count = 0;
                for (var i = 0; i < the_rests.length; i++) {
                    var the_rest = the_rests[i];
                    if (the_rest.length == 2 && check_seq2(the_rest[0], the_rest[1])) {
                        seq_count++;
                    } else if (the_rest.length == 4) {
                        if (check_seq2(the_rest[0], the_rest[1])) {
                            seq_count++;
                        }
                        if (check_seq2(the_rest[2], the_rest[3])) {
                            seq_count++;
                        }
                    }
                }

                if (seq_count >= 2) {
                    return K_WIN_PINGHU;
                }
            }
        }
    }

    return 0;
}

/**
 * 获取听什么牌
 * @param {Array} tiles 
 * @param {Integer} joker 金
 */
function get_listen(tiles, joker) {
    var listen_tiles = [];

    for (var i = 0; i < TID_TIAO.length; i++) {
        var tile = TID_TIAO[i];
        if (tile != joker && can_win(tiles.concat(tile), joker) > 0) {
            listen_tiles.push(tile);
        }
    }

    for (var i = 0; i < TID_TONG.length; i++) {
        var tile = TID_TONG[i];
        if (tile != joker && can_win(tiles.concat(tile), joker) > 0) {
            listen_tiles.push(tile);
        }
    }

    for (var i = 0; i < TID_WAN.length; i++) {
        var tile = TID_WAN[i];
        if (tile != joker && can_win(tiles.concat(tile), joker) > 0) {
            listen_tiles.push(tile);
        }
    }

    return listen_tiles;
}


function check_seq2(v1, v2) {
    return (v1 == (v2 - 1)) || (v1 == (v2 - 2));
}

/**
 * 获取一对的数量
 * @param {Array} tiles 
 */
function count_pair(tiles) {
    var arr = tiles.concat();
    var count = 0;
    while (arr.length >= 2) {
        if (arr[0] == arr[1]) {
            count++;
            arr = _.drop(arr, 2);
        } else {
            arr = _.drop(arr, 1);
        }
    }
    return count;
}

/**
 * 是否可以组牌
 * @param {Array} tiles 
 * @return {Array}
 */
function check_meld(tiles) {
    if (!tiles) {
        return [];
    }

    var the_rest = [];
    var arr = tiles.concat();

    while (arr.length >= 3) {
        var meld = false;
        var skip = false;
        if (arr[0] == arr[1] && arr[1] != arr[2]) {
            the_rest.push(arr[0]);
            arr.splice(0, 1);
        } else if (arr[0] == (arr[1] - 1) && arr[1] == (arr[2] - 1)) {
            meld = true;
        } else if (arr[0] == (arr[1] - 1) && arr.length > 3 && arr[1] == (arr[3] - 1)) {
            arr.splice(3, 1);
            arr = _.drop(arr, 2);
            skip = true;
        } else if (arr[0] == (arr[1] - 1) && arr.length > 3 && arr[1] == (arr[4] - 1)) {
            arr.splice(4, 1);
            arr = _.drop(arr, 2);
            skip = true;
        } else if (arr[0] == arr[1] && arr[1] == arr[2]) {
            meld = true;
        }

        if (meld) {
            arr = _.drop(arr, 3);
        } else if (!skip) {
            the_rest.push(arr[0]);
            arr = _.drop(arr, 1);
        }

    }

    if (arr.length > 0) {
        the_rest = the_rest.concat(arr);
    }

    return the_rest;
}

/**
 * 分组麻将
 * @param {Array} tiles 
 * @param {Integer} joker 金
 * @return {Object}
 */
function group_mah(tiles, joker) {
    var groups = _.groupBy(tiles, function (num) {
        if (num == joker) {
            return 0;
        }
        return Math.floor(num / 10);
    });

    for (var i = 0; i < 4; i++) {
        if (!groups[i]) {
            groups[i] = [];
        }

    }
    return groups;
}

// console.log(forTimes,isWin);
// var win_type;

// for (let i = 0; i < 1000000; i++) {
//     win_type = can_win([11, 12, 13, 13, 14, 15, 31, 34, 38, 25, 25], 25);
// }
// console.log(win_type);
// var listen_tiles = get_listen([21,22,23,24], 31)
// console.log(listen_tiles);
