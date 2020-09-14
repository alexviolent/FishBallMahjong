(function () {
    'use strict';

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var game;
        (function (game) {
            class ActionEffectLayerUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(ActionEffectLayerUI.uiView);
                }
            }
            ActionEffectLayerUI.uiView = { "type": "View", "props": { "width": 1920, "runtime": "script/game/ActionEffectLayer.ts", "height": 1080 }, "compId": 2, "child": [{ "type": "ViewStack", "props": { "y": 10, "x": 10, "var": "actionStack", "top": 0, "right": 0, "left": 0, "bottom": 0 }, "compId": 3, "child": [{ "type": "Image", "props": { "skin": "game/bu.png", "name": "item0", "centerX": 0, "bottom": 200 }, "compId": 4 }, { "type": "Image", "props": { "skin": "game/bu.png", "right": 200, "name": "item1", "centerY": 0 }, "compId": 5 }, { "type": "Image", "props": { "y": 150, "skin": "game/bu.png", "name": "item2", "centerX": 0 }, "compId": 6 }, { "type": "Image", "props": { "x": 200, "skin": "game/bu.png", "name": "item3", "centerY": 0 }, "compId": 7 }] }], "loadList": ["game/bu.png"], "loadList3D": [] };
            game.ActionEffectLayerUI = ActionEffectLayerUI;
            REG("ui.game.ActionEffectLayerUI", ActionEffectLayerUI);
            class ActionMenuUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(ActionMenuUI.uiView);
                }
            }
            ActionMenuUI.uiView = { "type": "View", "props": { "width": 1920, "runtime": "script/game/ActionMenu.ts", "height": 1080 }, "compId": 2, "child": [{ "type": "Panel", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#000000", "alpha": 0.2 }, "compId": 12 }, { "type": "List", "props": { "y": 10, "width": 1540, "var": "lstAction", "spaceX": 10, "right": 50, "repeatX": 5, "height": 300, "bottom": 200 }, "compId": 3, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 300, "name": "render", "height": 300 }, "compId": 4, "child": [{ "type": "Button", "props": { "stateNum": 1, "skin": "game/chi.png", "centerX": 0, "bottom": 0 }, "compId": 5 }] }] }], "loadList": ["game/chi.png"], "loadList3D": [] };
            game.ActionMenuUI = ActionMenuUI;
            REG("ui.game.ActionMenuUI", ActionMenuUI);
            class DiceLayerUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(DiceLayerUI.uiView);
                }
            }
            DiceLayerUI.uiView = { "type": "View", "props": { "width": 1920, "runtime": "script/game/DiceLayer.ts", "height": 1080 }, "compId": 2, "child": [{ "type": "Box", "props": { "width": 0, "var": "boxAni", "height": 0, "centerY": -70, "centerX": -85 }, "compId": 4, "child": [{ "type": "Image", "props": { "skin": "game/shaiziAnim/shaizi_anmi1.png" }, "compId": 7 }] }, { "type": "List", "props": { "width": 164, "var": "lstDice", "spaceX": 40, "repeatY": 1, "repeatX": 2, "height": 72, "centerY": 25, "centerX": 0 }, "compId": 5, "child": [{ "type": "Image", "props": { "width": 62, "skin": "game/shaiziAnim/shaizi1.png", "name": "render", "height": 72 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 7, "keyframes": { "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 15 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 25 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 30 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 35 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 45 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 50 }], "skin": [{ "value": "game/shaiziAnim/shaizi_anmi1.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 0 }, { "value": "game/shaiziAnim/shaizi_anmi2.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 5 }, { "value": "game/shaiziAnim/shaizi_anmi3.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 10 }, { "value": "game/shaiziAnim/shaizi_anmi4.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 15 }, { "value": "game/shaiziAnim/shaizi_anmi5.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 20 }, { "value": "game/shaiziAnim/shaizi_anmi6.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 25 }, { "value": "game/shaiziAnim/shaizi_anmi7.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 30 }, { "value": "game/shaiziAnim/shaizi_anmi11.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 35 }, { "value": "game/shaiziAnim/shaizi_anmi8.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 40 }, { "value": "game/shaiziAnim/shaizi_anmi9.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 45 }, { "value": "game/shaiziAnim/shaizi_anmi10.png", "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "skin", "index": 50 }] } }], "name": "aniDice", "id": 1, "frameRate": 60, "action": 0 }], "loadList": ["game/shaiziAnim/shaizi_anmi1.png", "game/shaiziAnim/shaizi1.png", "game/shaiziAnim/shaizi_anmi2.png", "game/shaiziAnim/shaizi_anmi3.png", "game/shaiziAnim/shaizi_anmi4.png", "game/shaiziAnim/shaizi_anmi5.png", "game/shaiziAnim/shaizi_anmi6.png", "game/shaiziAnim/shaizi_anmi7.png", "game/shaiziAnim/shaizi_anmi11.png", "game/shaiziAnim/shaizi_anmi8.png", "game/shaiziAnim/shaizi_anmi9.png", "game/shaiziAnim/shaizi_anmi10.png"], "loadList3D": [] };
            game.DiceLayerUI = DiceLayerUI;
            REG("ui.game.DiceLayerUI", DiceLayerUI);
            class EatOptionLayerUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(EatOptionLayerUI.uiView);
                }
            }
            EatOptionLayerUI.uiView = { "type": "View", "props": { "width": 1920, "runtime": "script/game/EatOptionLayer.ts", "height": 1080 }, "compId": 2, "child": [{ "type": "Panel", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#000000", "alpha": 0.2 }, "compId": 14 }, { "type": "ViewStack", "props": { "y": 712, "width": 848, "var": "optStack", "selectedIndex": 1, "height": 154, "centerX": 0 }, "compId": 16, "child": [{ "type": "Image", "props": { "y": 0, "width": 566, "visible": false, "skin": "game/GoldBack.png", "sizeGrid": "16,17,15,20", "name": "item0", "height": 154, "centerX": 0 }, "compId": 3, "child": [{ "type": "List", "props": { "y": 10, "x": 10, "width": 263, "var": "lst1", "spaceX": -2, "space": 12, "repeatX": 3, "name": "0", "height": 135, "align": "top" }, "compId": 4, "child": [{ "type": "Image", "props": { "width": 89, "skin": "game/2/handmah_12.png", "name": "render", "height": 135 }, "compId": 5 }] }, { "type": "List", "props": { "y": 9.5, "x": 292, "width": 263, "var": "lst2", "spaceX": -2, "space": 12, "repeatX": 3, "name": "1", "height": 135, "align": "top" }, "compId": 10, "child": [{ "type": "Image", "props": { "width": 89, "skin": "game/2/handmah_12.png", "name": "render", "height": 135 }, "compId": 11 }] }] }, { "type": "Image", "props": { "width": 848, "visible": false, "skin": "game/GoldBack.png", "sizeGrid": "16,17,15,20", "name": "item1", "height": 154, "centerX": 0 }, "compId": 17, "child": [{ "type": "List", "props": { "y": 10, "x": 10, "width": 263, "var": "lst3", "spaceX": -2, "space": 12, "repeatX": 3, "name": "0", "height": 135, "align": "top" }, "compId": 18, "child": [{ "type": "Image", "props": { "width": 89, "skin": "game/2/handmah_12.png", "name": "render", "height": 135 }, "compId": 19 }] }, { "type": "List", "props": { "y": 9.5, "x": 292, "width": 263, "var": "lst4", "spaceX": -2, "space": 12, "repeatX": 3, "name": "1", "height": 135, "align": "top" }, "compId": 20, "child": [{ "type": "Image", "props": { "width": 89, "skin": "game/2/handmah_12.png", "name": "render", "height": 135 }, "compId": 21 }] }, { "type": "List", "props": { "y": 9.5, "x": 574, "width": 263, "var": "lst5", "spaceX": -2, "space": 12, "repeatX": 3, "name": "2", "height": 135, "align": "top" }, "compId": 22, "child": [{ "type": "Image", "props": { "width": 89, "skin": "game/2/handmah_12.png", "name": "render", "height": 135 }, "compId": 23 }] }] }] }], "loadList": ["game/GoldBack.png", "game/2/handmah_12.png"], "loadList3D": [] };
            game.EatOptionLayerUI = EatOptionLayerUI;
            REG("ui.game.EatOptionLayerUI", EatOptionLayerUI);
            class GameUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("game/Game");
                }
            }
            game.GameUI = GameUI;
            REG("ui.game.GameUI", GameUI);
            class ShowOutLayerUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(ShowOutLayerUI.uiView);
                }
            }
            ShowOutLayerUI.uiView = { "type": "View", "props": { "width": 1920, "runtime": "script/game/ShowOutLayer.ts", "height": 1080 }, "compId": 2, "child": [{ "type": "ViewStack", "props": { "width": 200, "var": "tileStack", "selectedIndex": 0, "height": 200, "centerY": -45, "centerX": 0 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 220, "width": 113, "skin": "game/handmah_mask.png", "name": "item0", "height": 162, "centerX": 0 }, "compId": 4, "child": [{ "type": "Image", "props": { "x": 0, "width": 89, "skin": "game/2/mingmah_31.png", "height": 135, "centerY": 0, "centerX": 0 }, "compId": 10 }] }, { "type": "Image", "props": { "y": 30, "x": 450, "width": 113, "skin": "game/handmah_mask.png", "name": "item1", "height": 162 }, "compId": 5, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 89, "skin": "game/2/mingmah_31.png", "height": 135, "centerY": 0, "centerX": 0 }, "compId": 11 }] }, { "type": "Image", "props": { "y": -180, "width": 113, "skin": "game/handmah_mask.png", "name": "item2", "height": 162, "centerX": 0 }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 89, "skin": "game/2/mingmah_31.png", "height": 135, "centerY": 0, "centerX": 0 }, "compId": 12 }] }, { "type": "Image", "props": { "y": 30, "x": -400, "width": 113, "skin": "game/handmah_mask.png", "name": "item3", "height": 162 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 89, "skin": "game/2/mingmah_31.png", "height": 135, "centerY": 0, "centerX": 0 }, "compId": 13 }] }] }], "loadList": ["game/handmah_mask.png", "game/2/mingmah_31.png"], "loadList3D": [] };
            game.ShowOutLayerUI = ShowOutLayerUI;
            REG("ui.game.ShowOutLayerUI", ShowOutLayerUI);
            class TileLayer0UI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(TileLayer0UI.uiView);
                }
            }
            TileLayer0UI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "Script", "props": { "viewPos": 0, "runtime": "script/game/tileLayer/TileLayerSelf.ts" }, "compId": 18 }, { "type": "List", "props": { "width": 1025, "var": "lstFlower", "spaceX": -1, "repeatY": 1, "repeatX": 16, "height": 98, "centerX": 12, "bottom": 160 }, "compId": 19, "child": [{ "type": "Image", "props": { "width": 65, "skin": "game/2/mingmah_41.png", "name": "render", "height": 98 }, "compId": 20, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 65, "skin": "game/flag_2.png", "name": "markImg", "height": 98 }, "compId": 41 }, { "type": "Label", "props": { "y": 1, "text": "2", "right": 4, "name": "countLabel", "fontSize": 20, "color": "#ffffff" }, "compId": 21 }] }, { "type": "Script", "props": { "viewPos": 0, "vid": 0, "runtime": "script/game/tileLayer/FlowerList.ts" }, "compId": 27 }] }, { "type": "List", "props": { "x": 479, "width": 1025, "var": "lstOut", "spaceX": -1, "repeatY": 1, "repeatX": 16, "height": 98, "centerX": 12, "bottom": 260 }, "compId": 22, "child": [{ "type": "Image", "props": { "width": 65, "skin": "game/2/mingmah_41.png", "name": "render", "height": 98 }, "compId": 23, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 65, "skin": "game/flag_2.png", "name": "flagImage", "height": 98 }, "compId": 39 }, { "type": "Label", "props": { "y": 1, "text": "2", "right": 4, "name": "countLabel", "fontSize": 20, "color": "#ffffff" }, "compId": 24 }, { "type": "Image", "props": { "y": -18, "x": 16.5, "skin": "game/biaoji.png", "name": "markImage" }, "compId": 43 }] }, { "type": "Script", "props": { "viewPos": 0, "vid": 0, "runtime": "script/game/tileLayer/OutList.ts" }, "compId": 28 }] }, { "type": "List", "props": { "x": 310, "width": 1362, "var": "lstHand", "spaceX": -2, "selectEnable": false, "repeatY": 1, "repeatX": 16, "hitTestPrior": false, "height": 135, "bottom": 15 }, "compId": 5, "child": [{ "type": "Image", "props": { "width": 87, "skin": "game/2/handmah_11.png", "name": "render", "mouseEnabled": true, "height": 135 }, "compId": 25, "child": [{ "type": "Script", "props": { "runtime": "script/game/tile/SelfTileTouchScript.ts" }, "compId": 31 }] }, { "type": "Image", "props": { "y": 0, "width": 87, "var": "imgDiscard", "skin": "game/2/handmah_11.png", "right": -130, "mouseEnabled": true, "height": 135 }, "compId": 26, "child": [{ "type": "Script", "props": { "runtime": "script/game/tile/SelfTileTouchScript.ts" }, "compId": 29 }] }] }, { "type": "List", "props": { "y": 944, "x": 310, "width": 1280, "var": "lstEat", "repeatX": 5, "mouseEnabled": false, "height": 121, "bottom": 15 }, "compId": 32, "child": [{ "type": "HBox", "props": { "y": 0, "x": 0, "width": 256, "space": -3, "name": "render", "height": 121, "align": "bottom" }, "compId": 37, "child": [{ "type": "Image", "props": { "x": 0, "width": 80, "skin": "game/2/mingmah_39.png", "height": 121 }, "compId": 33 }, { "type": "Image", "props": { "x": 80, "width": 80, "skin": "game/2/mingmah_39.png", "height": 121 }, "compId": 34, "child": [{ "type": "Image", "props": { "y": -25, "x": 0, "width": 80, "skin": "game/2/mingmah_39.png", "height": 121 }, "compId": 42 }] }, { "type": "Image", "props": { "y": 0, "x": 160, "width": 80, "skin": "game/2/mingmah_39.png", "height": 121 }, "compId": 35 }] }, { "type": "Script", "props": { "viewPos": 0, "vid": 0, "runtime": "script/game/tileLayer/EatList.ts" }, "compId": 38 }] }], "loadList": ["game/2/mingmah_41.png", "game/flag_2.png", "game/biaoji.png", "game/2/handmah_11.png", "game/2/mingmah_39.png"], "loadList3D": [] };
            game.TileLayer0UI = TileLayer0UI;
            REG("ui.game.TileLayer0UI", TileLayer0UI);
            class TileLayer1UI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(TileLayer1UI.uiView);
                }
            }
            TileLayer1UI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "List", "props": { "y": 269, "width": 36, "var": "lstHand", "spaceY": -44, "right": 200, "repeatY": 16, "repeatX": 1, "height": 588 }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 1, "x": 0, "width": 36, "skin": "game/hand_1.png", "name": "render", "height": 78 }, "compId": 289 }, { "type": "Image", "props": { "y": -79, "x": 0, "width": 36, "var": "imgDiscard", "skin": "game/hand_1.png", "height": 78 }, "compId": 290 }] }, { "type": "List", "props": { "width": 62, "var": "lstFlower", "spaceY": -20, "right": 260, "repeatY": 16, "repeatX": 1, "height": 564, "centerY": 0 }, "compId": 292, "child": [{ "type": "Image", "props": { "width": 62, "skin": "game/1/mingmah_41.png", "name": "render", "height": 54 }, "compId": 293, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 62, "skin": "game/flag_1.png", "name": "markImg", "height": 54 }, "compId": 325 }, { "type": "Label", "props": { "y": 12, "x": 4, "valign": "middle", "text": "2", "rotation": -90, "name": "countLabel", "fontSize": 19, "color": "#ffffff", "align": "center" }, "compId": 294 }] }, { "type": "Script", "props": { "viewPos": 1, "vid": 1, "runtime": "script/game/tileLayer/FlowerList.ts" }, "compId": 304 }] }, { "type": "List", "props": { "y": 0, "width": 62, "var": "lstOut", "spaceY": -20, "right": 325, "repeatY": 16, "repeatX": 1, "height": 564, "centerY": 0 }, "compId": 301, "child": [{ "type": "Image", "props": { "width": 62, "skin": "game/1/mingmah_41.png", "name": "render", "height": 54 }, "compId": 302, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 62, "skin": "game/flag_1.png", "name": "flagImage", "height": 54 }, "compId": 326 }, { "type": "Label", "props": { "y": 12, "x": 4, "valign": "middle", "text": "2", "rotation": -90, "name": "countLabel", "fontSize": 19, "color": "#ffffff", "align": "center" }, "compId": 303 }, { "type": "Image", "props": { "y": -19.5, "x": 31, "skin": "game/biaoji.png", "name": "markImage" }, "compId": 328 }] }, { "type": "Script", "props": { "viewPos": 1, "vid": 1, "runtime": "script/game/tileLayer/OutList.ts" }, "compId": 305 }] }, { "type": "List", "props": { "y": 350, "x": 1685, "width": 54, "var": "lstEat", "spaceY": 0, "repeatY": 5, "height": 510 }, "compId": 307, "child": [{ "type": "VBox", "props": { "y": 0, "x": 0, "width": 54, "space": -18, "name": "render", "height": 102, "align": "left" }, "compId": 308, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 54, "skin": "game/1/mingmah_41.png", "height": 47 }, "compId": 309 }, { "type": "Image", "props": { "y": 30, "x": 0, "width": 54, "skin": "game/1/mingmah_41.png", "height": 47 }, "compId": 310, "child": [{ "type": "Image", "props": { "y": -15, "x": 0, "width": 54, "skin": "game/1/mingmah_41.png", "height": 47 }, "compId": 327 }] }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 54, "skin": "game/1/mingmah_41.png", "height": 47 }, "compId": 311 }] }, { "type": "Script", "props": { "viewPos": 1, "vid": 1, "runtime": "script/game/tileLayer/EatList.ts" }, "compId": 312 }] }, { "type": "Script", "props": { "viewPos": 1, "runtime": "script/game/tileLayer/TileLayer.ts" }, "compId": 324 }], "loadList": ["game/hand_1.png", "game/1/mingmah_41.png", "game/flag_1.png", "game/biaoji.png"], "loadList3D": [] };
            game.TileLayer1UI = TileLayer1UI;
            REG("ui.game.TileLayer1UI", TileLayer1UI);
            class TileLayer2UI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(TileLayer2UI.uiView);
                }
            }
            TileLayer2UI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "List", "props": { "y": 38, "x": 570, "width": 837, "var": "lstHand", "spaceX": -5, "repeatY": 1, "repeatX": 16, "height": 83 }, "compId": 5, "child": [{ "type": "Image", "props": { "width": 57, "skin": "game/hand_2.png", "name": "render", "height": 83 }, "compId": 12 }, { "type": "Image", "props": { "y": 0, "x": -70, "width": 57, "var": "imgDiscard", "skin": "game/hand_2.png", "height": 83 }, "compId": 13 }] }, { "type": "List", "props": { "y": 126, "width": 833, "var": "lstFlower", "spaceX": -1, "repeatY": 1, "repeatX": 16, "height": 80, "centerX": 0 }, "compId": 14, "child": [{ "type": "Image", "props": { "width": 53, "skin": "game/2/mingmah_41.png", "name": "render", "height": 80 }, "compId": 16, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 53, "skin": "game/flag_2.png", "name": "markImg", "height": 80 }, "compId": 34 }, { "type": "Label", "props": { "text": "2", "right": 3, "name": "countLabel", "fontSize": 18, "color": "#ffffff" }, "compId": 17 }] }, { "type": "Script", "props": { "viewPos": 2, "vid": 2, "runtime": "script/game/tileLayer/FlowerList.ts" }, "compId": 23 }] }, { "type": "List", "props": { "y": 206, "x": 0, "width": 833, "var": "lstOut", "spaceX": -1, "repeatY": 1, "repeatX": 16, "height": 80, "centerX": 0 }, "compId": 20, "child": [{ "type": "Image", "props": { "width": 53, "skin": "game/2/mingmah_41.png", "name": "render", "height": 80 }, "compId": 21, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 53, "skin": "game/flag_2.png", "name": "flagImage", "height": 80 }, "compId": 35 }, { "type": "Label", "props": { "text": "2", "right": 3, "name": "countLabel", "fontSize": 18, "color": "#ffffff" }, "compId": 22 }, { "type": "Image", "props": { "y": -21, "x": 10.5, "skin": "game/biaoji.png", "name": "markImage" }, "compId": 37 }] }, { "type": "Script", "props": { "viewPos": 2, "vid": 2, "runtime": "script/game/tileLayer/OutList.ts" }, "compId": 24 }] }, { "type": "List", "props": { "y": 46, "x": 637, "width": 810, "var": "lstEat", "scaleY": 0.96, "scaleX": 0.96, "repeatX": 5, "height": 76 }, "compId": 25, "child": [{ "type": "HBox", "props": { "width": 162, "name": "render", "height": 76 }, "compId": 26, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 50, "skin": "game/2/mingmah_39.png", "height": 76 }, "compId": 27 }, { "type": "Image", "props": { "y": 0, "x": 52, "width": 50, "skin": "game/2/mingmah_39.png", "height": 76 }, "compId": 31, "child": [{ "type": "Image", "props": { "y": -16, "x": 0, "width": 50, "skin": "game/2/mingmah_39.png", "height": 76 }, "compId": 36 }] }, { "type": "Image", "props": { "y": 0, "x": 104, "width": 50, "skin": "game/2/mingmah_39.png", "height": 76 }, "compId": 32 }] }, { "type": "Script", "props": { "viewPos": 2, "vid": 2, "runtime": "script/game/tileLayer/EatList.ts" }, "compId": 30 }] }, { "type": "Script", "props": { "viewPos": 2, "runtime": "script/game/tileLayer/TileLayer.ts" }, "compId": 33 }], "loadList": ["game/hand_2.png", "game/2/mingmah_41.png", "game/flag_2.png", "game/biaoji.png", "game/2/mingmah_39.png"], "loadList3D": [] };
            game.TileLayer2UI = TileLayer2UI;
            REG("ui.game.TileLayer2UI", TileLayer2UI);
            class TileLayer3UI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(TileLayer3UI.uiView);
                }
            }
            TileLayer3UI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "Script", "props": { "y": 0, "x": 0, "viewPos": 3, "runtime": "script/game/tileLayer/TileLayer.ts" }, "compId": 36 }, { "type": "List", "props": { "y": 190, "x": 176, "width": 54, "var": "lstEat", "spaceY": 0, "repeatY": 5, "height": 510 }, "compId": 30, "child": [{ "type": "VBox", "props": { "y": 0, "x": 0, "width": 54, "space": -18, "name": "render", "height": 102, "align": "left" }, "compId": 31, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 54, "skin": "game/3/mingmah_41.png", "height": 47 }, "compId": 32 }, { "type": "Image", "props": { "y": 30, "x": 0, "width": 54, "skin": "game/3/mingmah_41.png", "height": 47 }, "compId": 33, "child": [{ "type": "Image", "props": { "y": -15, "x": 0, "width": 54, "skin": "game/3/mingmah_41.png", "height": 47 }, "compId": 39 }] }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 54, "skin": "game/3/mingmah_41.png", "height": 47 }, "compId": 34 }] }, { "type": "Script", "props": { "viewPos": 3, "vid": 3, "runtime": "script/game/tileLayer/EatList.ts" }, "compId": 35 }] }, { "type": "List", "props": { "y": 192, "x": 197, "width": 36, "var": "lstHand", "spaceY": -44, "repeatY": 16, "repeatX": 1, "height": 608 }, "compId": 12, "child": [{ "type": "Image", "props": { "y": 1, "x": 0, "width": 36, "skin": "game/hand_3.png", "name": "render", "height": 78 }, "compId": 15 }, { "type": "Image", "props": { "y": 589, "x": 0, "width": 36, "var": "imgDiscard", "skin": "game/hand_3.png", "height": 78 }, "compId": 21 }] }, { "type": "List", "props": { "x": 260, "width": 62, "var": "lstFlower", "spaceY": -20, "repeatY": 16, "repeatX": 1, "height": 564, "centerY": 0 }, "compId": 13, "child": [{ "type": "Image", "props": { "y": 1, "x": 0, "width": 62, "skin": "game/3/mingmah_41.png", "name": "render", "height": 54 }, "compId": 17, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 62, "skin": "game/flag_3.png", "name": "markImg", "height": 54 }, "compId": 37 }, { "type": "Label", "props": { "y": 19, "x": 57, "valign": "middle", "text": "2", "rotation": 90, "name": "countLabel", "fontSize": 19, "color": "#ffffff", "align": "center" }, "compId": 18 }] }, { "type": "Script", "props": { "y": 1, "x": 0, "viewPos": 3, "vid": 3, "runtime": "script/game/tileLayer/FlowerList.ts" }, "compId": 28 }] }, { "type": "List", "props": { "x": 325, "width": 62, "var": "lstOut", "spaceY": -20, "repeatY": 16, "repeatX": 1, "height": 564, "centerY": 0 }, "compId": 25, "child": [{ "type": "Image", "props": { "width": 62, "skin": "game/3/mingmah_41.png", "name": "render", "height": 54 }, "compId": 26, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 62, "skin": "game/flag_3.png", "name": "flagImage", "height": 54 }, "compId": 38 }, { "type": "Label", "props": { "y": 18, "x": 57, "valign": "middle", "text": "2", "rotation": 90, "name": "countLabel", "fontSize": 19, "color": "#ffffff", "align": "center" }, "compId": 27 }, { "type": "Image", "props": { "y": -19.5, "x": 35.56689453125, "skin": "game/biaoji.png", "name": "markImage" }, "compId": 40 }] }, { "type": "Script", "props": { "viewPos": 3, "vid": 3, "runtime": "script/game/tileLayer/OutList.ts" }, "compId": 29 }] }], "loadList": ["game/3/mingmah_41.png", "game/hand_3.png", "game/flag_3.png", "game/biaoji.png"], "loadList3D": [] };
            game.TileLayer3UI = TileLayer3UI;
            REG("ui.game.TileLayer3UI", TileLayer3UI);
            class TimePointLayerUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(TimePointLayerUI.uiView);
                }
            }
            TimePointLayerUI.uiView = { "type": "View", "props": { "width": 1920, "runtime": "script/game/TimePointLayer.ts", "height": 1080 }, "compId": 2, "child": [{ "type": "Text", "props": { "y": 648, "x": 844, "var": "lblRemainTile", "text": "牌桌剩余   50  张", "fontSize": 34, "color": "#2acc77", "align": "center", "runtime": "laya.display.Text" }, "compId": 9 }, { "type": "Image", "props": { "width": 213, "skin": "game/TimeBack.png", "height": 213, "centerY": -45, "centerX": 0 }, "compId": 12, "child": [{ "type": "ViewStack", "props": { "width": 213, "var": "pointStack", "height": 213 }, "compId": 14, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/TimePoint0.png", "name": "item0" }, "compId": 4 }, { "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/TimePoint1.png", "name": "item1" }, "compId": 5 }, { "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/TimePoint2.png", "name": "item2" }, "compId": 6 }, { "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/TimePoint3.png", "name": "item3" }, "compId": 7 }] }, { "type": "FontClip", "props": { "y": 87, "x": 77, "var": "lblCD", "value": "00", "skin": "game/num.png", "sheet": "0123456789", "align": "center" }, "compId": 13 }] }], "loadList": ["game/TimeBack.png", "game/TimePoint0.png", "game/TimePoint1.png", "game/TimePoint2.png", "game/TimePoint3.png", "game/num.png"], "loadList3D": [] };
            game.TimePointLayerUI = TimePointLayerUI;
            REG("ui.game.TimePointLayerUI", TimePointLayerUI);
        })(game = ui.game || (ui.game = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var index;
        (function (index) {
            class IndexUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("index/Index");
                }
            }
            index.IndexUI = IndexUI;
            REG("ui.index.IndexUI", IndexUI);
        })(index = ui.index || (ui.index = {}));
    })(ui || (ui = {}));
    (function (ui) {
        class LoadingViewUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("LoadingView");
            }
        }
        ui.LoadingViewUI = LoadingViewUI;
        REG("ui.LoadingViewUI", LoadingViewUI);
    })(ui || (ui = {}));
    (function (ui) {
        var popup;
        (function (popup) {
            class ResultDialogUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(ResultDialogUI.uiView);
                }
            }
            ResultDialogUI.uiView = { "type": "View", "props": { "runtime": "script/popup/ResultDialogUI.ts", "isShowEffect": false, "isPopupCenter": false, "centerY": 0, "centerX": 0 }, "compId": 2, "child": [{ "type": "Panel", "props": { "top": 0, "right": 0, "mouseThrough": false, "mouseEnabled": true, "left": 0, "bottom": 0, "bgColor": "#000000", "alpha": 0.5 }, "compId": 3 }, { "type": "Image", "props": { "y": 300, "x": 510, "width": 900, "skin": "game/GameResoultBack.png", "sizeGrid": "30,30,40,30", "height": 480, "centerY": 0, "centerX": 0 }, "compId": 4, "child": [{ "type": "Image", "props": { "top": 40, "skin": "game/GameResoultBack1.png", "sizeGrid": "32,38,46,38", "right": 16, "left": 16, "bottom": 20 }, "compId": 5 }, { "type": "Image", "props": { "y": 13, "skin": "game/Button_Resoult_Name1.png", "sizeGrid": "28,38,10,46", "right": 15, "left": 15 }, "compId": 6 }, { "type": "ViewStack", "props": { "y": -85, "width": 531, "var": "titleViewStack", "selectedIndex": 0, "height": 170, "centerX": 0 }, "compId": 8, "child": [{ "type": "Image", "props": { "width": 531, "skin": "game/WinBack.png", "name": "item0", "height": 170 }, "compId": 7 }, { "type": "Image", "props": { "y": 29, "width": 264, "skin": "game/LoseBack.png", "name": "item1", "height": 140, "centerX": 0 }, "compId": 9 }] }, { "type": "Image", "props": { "y": 85, "skin": "game/GameResoultScoreBack.png", "right": 25, "left": 25, "height": 100 }, "compId": 10, "child": [{ "type": "List", "props": { "y": 12, "x": 8, "width": 834, "var": "lstTile", "spaceX": -1, "repeatX": 17, "height": 76 }, "compId": 11, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 50, "skin": "game/2/mingmah_21.png", "name": "render", "height": 76 }, "compId": 12 }] }] }, { "type": "List", "props": { "y": 194, "x": 25, "width": 614, "var": "lstPlayer", "spaceY": 10, "repeatY": 4, "repeatX": 1, "height": 252 }, "compId": 16, "child": [{ "type": "Image", "props": { "width": 614, "skin": "game/GameResoultScoreBack.png", "name": "render", "height": 55 }, "compId": 18, "child": [{ "type": "Image", "props": { "y": -18.5, "x": -13, "skin": "game/zhuang.png", "name": "bankerImage" }, "compId": 19 }, { "type": "Label", "props": { "y": 12.5, "x": 31, "text": "玩家1 ", "name": "nameLabel", "fontSize": 30, "font": "SimHei", "color": "#865F3C" }, "compId": 20 }, { "type": "FontClip", "props": { "y": 7, "value": "+9998", "skin": "game/score.png", "sheet": "+-0123456789", "right": 30, "name": "scoreLabel", "height": 42, "align": "left" }, "compId": 21 }] }] }, { "type": "Image", "props": { "y": 194, "x": 648, "width": 227, "skin": "game/GameResoultScoreBack.png", "height": 252 }, "compId": 17 }, { "type": "HBox", "props": { "y": 480, "space": 100, "centerX": 0 }, "compId": 24, "child": [{ "type": "Button", "props": { "var": "btnQuit", "stateNum": 1, "skin": "game/btn_desk1.png", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "退出" }, "compId": 22 }, { "type": "Button", "props": { "x": 368, "var": "btnContinue", "stateNum": 1, "skin": "game/btn_desk2.png", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "再来一局" }, "compId": 23 }] }] }, { "type": "Script", "props": { "runtime": "FullScreen.ts" }, "compId": 25 }], "loadList": ["game/GameResoultBack.png", "game/GameResoultBack1.png", "game/Button_Resoult_Name1.png", "game/WinBack.png", "game/LoseBack.png", "game/GameResoultScoreBack.png", "game/2/mingmah_21.png", "game/zhuang.png", "game/score.png", "game/btn_desk1.png", "game/btn_desk2.png"], "loadList3D": [] };
            popup.ResultDialogUI = ResultDialogUI;
            REG("ui.popup.ResultDialogUI", ResultDialogUI);
        })(popup = ui.popup || (ui.popup = {}));
    })(ui || (ui = {}));

    class Endian {
    }
    Endian.LITTLE_ENDIAN = 'littleEndian';
    Endian.BIG_ENDIAN = 'bigEndian';
    class ByteArray {
        constructor(buffer, bufferExtSize = 0) {
            this.bufferExtSize = 0;
            this.EOF_byte = -1;
            this.EOF_code_point = -1;
            if (bufferExtSize < 0) {
                bufferExtSize = 0;
            }
            this.bufferExtSize = bufferExtSize;
            let bytes, wpos = 0;
            if (buffer) {
                let uint8;
                if (buffer instanceof Uint8Array) {
                    uint8 = buffer;
                    wpos = buffer.length;
                }
                else {
                    wpos = buffer.byteLength;
                    uint8 = new Uint8Array(buffer);
                }
                if (bufferExtSize === 0) {
                    bytes = new Uint8Array(wpos);
                }
                else {
                    let multi = (wpos / bufferExtSize | 0) + 1;
                    bytes = new Uint8Array(multi * bufferExtSize);
                }
                bytes.set(uint8);
            }
            else {
                bytes = new Uint8Array(bufferExtSize);
            }
            this.write_position = wpos;
            this._position = 0;
            this._bytes = bytes;
            this.data = new DataView(bytes.buffer);
            this.endian = Endian.BIG_ENDIAN;
        }
        get endian() {
            return this.$endian === 0 ? Endian.LITTLE_ENDIAN : Endian.BIG_ENDIAN;
        }
        set endian(value) {
            this.$endian = value === Endian.LITTLE_ENDIAN ? 0 : 1;
        }
        setArrayBuffer(buffer) {
        }
        get readAvailable() {
            return this.write_position - this._position;
        }
        get buffer() {
            return this.data.buffer.slice(0, this.write_position);
        }
        get rawBuffer() {
            return this.data.buffer;
        }
        set buffer(value) {
            let wpos = value.byteLength;
            let uint8 = new Uint8Array(value);
            let bufferExtSize = this.bufferExtSize;
            let bytes;
            if (bufferExtSize === 0) {
                bytes = new Uint8Array(wpos);
            }
            else {
                let multi = (wpos / bufferExtSize | 0) + 1;
                bytes = new Uint8Array(multi * bufferExtSize);
            }
            bytes.set(uint8);
            this.write_position = wpos;
            this._bytes = bytes;
            this.data = new DataView(bytes.buffer);
        }
        get bytes() {
            return this._bytes;
        }
        get dataView() {
            return this.data;
        }
        set dataView(value) {
            this.buffer = value.buffer;
        }
        get bufferOffset() {
            return this.data.byteOffset;
        }
        get position() {
            return this._position;
        }
        set position(value) {
            this._position = value;
            if (value > this.write_position) {
                this.write_position = value;
            }
        }
        get length() {
            return this.write_position;
        }
        set length(value) {
            this.write_position = value;
            if (this.data.byteLength > value) {
                this._position = value;
            }
            this._validateBuffer(value);
        }
        _validateBuffer(value) {
            if (this.data.byteLength < value) {
                let be = this.bufferExtSize;
                let tmp;
                if (be === 0) {
                    tmp = new Uint8Array(value);
                }
                else {
                    let nLen = ((value / be >> 0) + 1) * be;
                    tmp = new Uint8Array(nLen);
                }
                tmp.set(this._bytes);
                this._bytes = tmp;
                this.data = new DataView(tmp.buffer);
            }
        }
        get bytesAvailable() {
            return this.data.byteLength - this._position;
        }
        clear() {
            let buffer = new ArrayBuffer(this.bufferExtSize);
            this.data = new DataView(buffer);
            this._bytes = new Uint8Array(buffer);
            this._position = 0;
            this.write_position = 0;
        }
        readBoolean() {
            if (this.validate(1))
                return !!this._bytes[this.position++];
        }
        readByte() {
            if (this.validate(1))
                return this.data.getInt8(this.position++);
        }
        readBytes(bytes, offset = 0, length = 0) {
            if (!bytes) {
                return;
            }
            let pos = this._position;
            let available = this.write_position - pos;
            if (available < 0) {
                throw new Error('1025');
            }
            if (length === 0) {
                length = available;
            }
            else if (length > available) {
                throw new Error('1025');
            }
            bytes.validateBuffer(offset + length);
            bytes._bytes.set(this._bytes.subarray(pos, pos + length), offset);
            this.position += length;
        }
        readDouble() {
            if (this.validate(8)) {
                let value = this.data.getFloat64(this._position, this.$endian === 0);
                this.position += 8;
                return value;
            }
        }
        readFloat() {
            if (this.validate(4)) {
                let value = this.data.getFloat32(this._position, this.$endian === 0);
                this.position += 4;
                return value;
            }
        }
        readInt() {
            if (this.validate(4)) {
                let value = this.data.getInt32(this._position, this.$endian === 0);
                this.position += 4;
                return value;
            }
        }
        readShort() {
            if (this.validate(2)) {
                let value = this.data.getInt16(this._position, this.$endian === 0);
                this.position += 2;
                return value;
            }
        }
        readUnsignedByte() {
            if (this.validate(1))
                return this._bytes[this.position++];
        }
        readUnsignedInt() {
            if (this.validate(4)) {
                let value = this.data.getUint32(this._position, this.$endian === 0);
                this.position += 4;
                return value;
            }
        }
        readUnsignedShort() {
            if (this.validate(2)) {
                let value = this.data.getUint16(this._position, this.$endian === 0);
                this.position += 2;
                return value;
            }
        }
        readUTF() {
            let length = this.readUnsignedShort();
            if (length > 0) {
                return this.readUTFBytes(length);
            }
            else {
                return '';
            }
        }
        readUTFBytes(length) {
            if (!this.validate(length)) {
                return;
            }
            let data = this.data;
            let bytes = new Uint8Array(data.buffer, data.byteOffset + this._position, length);
            this.position += length;
            return this.decodeUTF8(bytes);
        }
        writeBoolean(value) {
            this.validateBuffer(1);
            this._bytes[this.position++] = +value;
        }
        writeByte(value) {
            this.validateBuffer(1);
            this._bytes[this.position++] = value & 0xff;
        }
        writeBytes(bytes, offset = 0, length = 0) {
            let writeLength;
            if (offset < 0) {
                return;
            }
            if (length < 0) {
                return;
            }
            else if (length === 0) {
                writeLength = bytes.length - offset;
            }
            else {
                writeLength = Math.min(bytes.length - offset, length);
            }
            if (writeLength > 0) {
                this.validateBuffer(writeLength);
                this._bytes.set(bytes._bytes.subarray(offset, offset + writeLength), this._position);
                this.position = this._position + writeLength;
            }
        }
        writeDouble(value) {
            this.validateBuffer(8);
            this.data.setFloat64(this._position, value, this.$endian === 0);
            this.position += 8;
        }
        writeFloat(value) {
            this.validateBuffer(4);
            this.data.setFloat32(this._position, value, this.$endian === 0);
            this.position += 4;
        }
        writeInt(value) {
            this.validateBuffer(4);
            this.data.setInt32(this._position, value, this.$endian === 0);
            this.position += 4;
        }
        writeShort(value) {
            this.validateBuffer(2);
            this.data.setInt16(this._position, value, this.$endian === 0);
            this.position += 2;
        }
        writeUnsignedInt(value) {
            this.validateBuffer(4);
            this.data.setUint32(this._position, value, this.$endian === 0);
            this.position += 4;
        }
        writeUnsignedShort(value) {
            this.validateBuffer(2);
            this.data.setUint16(this._position, value, this.$endian === 0);
            this.position += 2;
        }
        writeUTF(value) {
            let utf8bytes = this.encodeUTF8(value);
            let length = utf8bytes.length;
            this.validateBuffer(2 + length);
            this.data.setUint16(this._position, length, this.$endian === 0);
            this.position += 2;
            this._writeUint8Array(utf8bytes, false);
        }
        writeUTFBytes(value) {
            this._writeUint8Array(this.encodeUTF8(value));
        }
        toString() {
            return '[ByteArray] length:' + this.length + ', bytesAvailable:' + this.bytesAvailable;
        }
        _writeUint8Array(bytes, validateBuffer = true) {
            let pos = this._position;
            let npos = pos + bytes.length;
            if (validateBuffer) {
                this.validateBuffer(npos);
            }
            this.bytes.set(bytes, pos);
            this.position = npos;
        }
        validate(len) {
            let bl = this._bytes.length;
            if (bl > 0 && this._position + len <= bl) {
                return true;
            }
            else {
                console.error(1025);
            }
        }
        validateBuffer(len) {
            this.write_position = len > this.write_position ? len : this.write_position;
            len += this._position;
            this._validateBuffer(len);
        }
        encodeUTF8(str) {
            let pos = 0;
            let codePoints = this.stringToCodePoints(str);
            let outputBytes = [];
            while (codePoints.length > pos) {
                let code_point = codePoints[pos++];
                if (this.inRange(code_point, 0xD800, 0xDFFF)) {
                    this.encoderError(code_point);
                }
                else if (this.inRange(code_point, 0x0000, 0x007f)) {
                    outputBytes.push(code_point);
                }
                else {
                    let count, offset;
                    if (this.inRange(code_point, 0x0080, 0x07FF)) {
                        count = 1;
                        offset = 0xC0;
                    }
                    else if (this.inRange(code_point, 0x0800, 0xFFFF)) {
                        count = 2;
                        offset = 0xE0;
                    }
                    else if (this.inRange(code_point, 0x10000, 0x10FFFF)) {
                        count = 3;
                        offset = 0xF0;
                    }
                    outputBytes.push(this.div(code_point, Math.pow(64, count)) + offset);
                    while (count > 0) {
                        let temp = this.div(code_point, Math.pow(64, count - 1));
                        outputBytes.push(0x80 + (temp % 64));
                        count -= 1;
                    }
                }
            }
            return new Uint8Array(outputBytes);
        }
        decodeUTF8(data) {
            let fatal = false;
            let pos = 0;
            let result = '';
            let code_point;
            let utf8_code_point = 0;
            let utf8_bytes_needed = 0;
            let utf8_bytes_seen = 0;
            let utf8_lower_boundary = 0;
            while (data.length > pos) {
                let _byte = data[pos++];
                if (_byte === this.EOF_byte) {
                    if (utf8_bytes_needed !== 0) {
                        code_point = this.decoderError(fatal);
                    }
                    else {
                        code_point = this.EOF_code_point;
                    }
                }
                else {
                    if (utf8_bytes_needed === 0) {
                        if (this.inRange(_byte, 0x00, 0x7F)) {
                            code_point = _byte;
                        }
                        else {
                            if (this.inRange(_byte, 0xC2, 0xDF)) {
                                utf8_bytes_needed = 1;
                                utf8_lower_boundary = 0x80;
                                utf8_code_point = _byte - 0xC0;
                            }
                            else if (this.inRange(_byte, 0xE0, 0xEF)) {
                                utf8_bytes_needed = 2;
                                utf8_lower_boundary = 0x800;
                                utf8_code_point = _byte - 0xE0;
                            }
                            else if (this.inRange(_byte, 0xF0, 0xF4)) {
                                utf8_bytes_needed = 3;
                                utf8_lower_boundary = 0x10000;
                                utf8_code_point = _byte - 0xF0;
                            }
                            else {
                                this.decoderError(fatal);
                            }
                            utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                            code_point = null;
                        }
                    }
                    else if (!this.inRange(_byte, 0x80, 0xBF)) {
                        utf8_code_point = 0;
                        utf8_bytes_needed = 0;
                        utf8_bytes_seen = 0;
                        utf8_lower_boundary = 0;
                        pos--;
                        code_point = this.decoderError(fatal, _byte);
                    }
                    else {
                        utf8_bytes_seen += 1;
                        utf8_code_point = utf8_code_point + (_byte - 0x80) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);
                        if (utf8_bytes_seen !== utf8_bytes_needed) {
                            code_point = null;
                        }
                        else {
                            let cp = utf8_code_point;
                            let lower_boundary = utf8_lower_boundary;
                            utf8_code_point = 0;
                            utf8_bytes_needed = 0;
                            utf8_bytes_seen = 0;
                            utf8_lower_boundary = 0;
                            if (this.inRange(cp, lower_boundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
                                code_point = cp;
                            }
                            else {
                                code_point = this.decoderError(fatal, _byte);
                            }
                        }
                    }
                }
                if (code_point !== null && code_point !== this.EOF_code_point) {
                    if (code_point <= 0xFFFF) {
                        if (code_point > 0)
                            result += String.fromCharCode(code_point);
                    }
                    else {
                        code_point -= 0x10000;
                        result += String.fromCharCode(0xD800 + ((code_point >> 10) & 0x3ff));
                        result += String.fromCharCode(0xDC00 + (code_point & 0x3ff));
                    }
                }
            }
            return result;
        }
        encoderError(code_point) {
            console.error(1026, code_point);
        }
        decoderError(fatal, opt_code_point) {
            if (fatal) {
                console.error(1027);
            }
            return opt_code_point || 0xFFFD;
        }
        inRange(a, min, max) {
            return min <= a && a <= max;
        }
        div(n, d) {
            return Math.floor(n / d);
        }
        stringToCodePoints(str) {
            let cps = [];
            let i = 0, n = str.length;
            while (i < str.length) {
                let c = str.charCodeAt(i);
                if (!this.inRange(c, 0xD800, 0xDFFF)) {
                    cps.push(c);
                }
                else if (this.inRange(c, 0xDC00, 0xDFFF)) {
                    cps.push(0xFFFD);
                }
                else {
                    if (i === n - 1) {
                        cps.push(0xFFFD);
                    }
                    else {
                        let d = str.charCodeAt(i + 1);
                        if (this.inRange(d, 0xDC00, 0xDFFF)) {
                            let a = c & 0x3FF;
                            let b = d & 0x3FF;
                            i += 1;
                            cps.push(0x10000 + (a << 10) + b);
                        }
                        else {
                            cps.push(0xFFFD);
                        }
                    }
                }
                i += 1;
            }
            return cps;
        }
    }

    class WSClient {
        constructor() {
            this.JS_WS_CLIENT_TYPE = 'js-websocket';
            this.JS_WS_CLIENT_VERSION = '0.0.5';
            this.RES_OK = 200;
            this.RES_FAIL = 500;
            this.RES_OLD_CLIENT = 501;
            this.socket = null;
            this.callbacks = {};
            this.handlers = {};
            this.routeMap = {};
            this.heartbeatInterval = 0;
            this.heartbeatTimeout = 0;
            this.nextHeartbeatTimeout = 0;
            this.gapThreshold = 100;
            this.heartbeatId = null;
            this.heartbeatTimeoutId = null;
            this.handshakeCallback = null;
            this.initCallback = null;
            this._callbacks = {};
            this.reqId = 0;
            this.socket = null;
            this.callbacks = {};
            this.handlers = {};
            this.routeMap = {};
            this._message = new Message(this.routeMap);
            this._package = new Package();
            this.heartbeatInterval = 0;
            this.heartbeatTimeout = 0;
            this.nextHeartbeatTimeout = 0;
            this.gapThreshold = 100;
            this.heartbeatId = null;
            this.heartbeatTimeoutId = null;
            this.handshakeCallback = null;
            this.handshakeBuffer = {
                'sys': {
                    type: this.JS_WS_CLIENT_TYPE,
                    version: this.JS_WS_CLIENT_VERSION
                },
                'user': {}
            };
            this.initCallback = null;
            this.reqId = 0;
            this.handlers[Package.TYPE_HANDSHAKE] = this.handshake;
            this.handlers[Package.TYPE_HEARTBEAT] = this.heartbeat;
            this.handlers[Package.TYPE_DATA] = this.onData;
            this.handlers[Package.TYPE_KICK] = this.onKick;
        }
        init(params, cb) {
            this.initCallback = cb;
            let host = params.host;
            let port = params.port;
            this.handshakeBuffer.user = params.user;
            this.handshakeCallback = params.handshakeCallback;
            this.initWebSocket(host, port, cb);
        }
        initWebSocket(host, port, cb) {
            console.log('[Pinus] connect to:', host, port);
            let onopen = (event) => {
                this.onConnect();
            };
            let onmessage = (event) => {
                this.onMessage(event);
            };
            let onerror = (event) => {
                this.onIOError(event);
            };
            let onclose = (event) => {
                this.onClose(event);
            };
            let url = 'ws://' + host;
            if (port) {
                url += ':' + port;
            }
            let socket = new WebSocket(url);
            socket.binaryType = 'arraybuffer';
            socket.onopen = onopen;
            socket.onmessage = onmessage;
            socket.onerror = onerror;
            socket.onclose = onclose;
            this.socket = socket;
        }
        on(event, fn) {
            (this._callbacks[event] = this._callbacks[event] || []).push(fn);
        }
        request(route, msg, cb) {
            if (arguments.length === 2 && typeof msg === 'function') {
                cb = msg;
                msg = {};
            }
            else {
                msg = msg || {};
            }
            route = route || msg.route;
            if (!route) {
                return;
            }
            this.reqId++;
            if (this.reqId > 127) {
                this.reqId = 1;
            }
            let reqId = this.reqId;
            if (WSClient.DEBUG) {
                console.log(`REQUEST:route:${route} , reqId:${reqId}, msg:${msg}`);
            }
            this.sendMessage(reqId, route, msg);
            this.callbacks[reqId] = cb;
            this.routeMap[reqId] = route;
        }
        notify(route, msg) {
            this.sendMessage(0, route, msg);
        }
        onMessage(event) {
            this.processPackage(this._package.decode(new ByteArray(event.data)));
        }
        sendMessage(reqId, route, msg) {
            let byte;
            byte = this._message.encode(reqId, route, msg);
            byte = this._package.encode(Package.TYPE_DATA, byte);
            this.send(byte);
        }
        onConnect() {
            console.log('[Pinus] connect success');
            this.send(this._package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(this.handshakeBuffer))));
        }
        onClose(e) {
            console.error('[Pinus] connect close:', e);
        }
        onIOError(e) {
            console.error('socket error: ', e);
        }
        onKick(event) {
            event = JSON.parse(Protocol.strdecode(event));
            this.emit(WSClient.EVENT_KICK, event);
        }
        onData(data) {
            let msg = this._message.decode(data);
            if (msg.id > 0) {
                msg.route = this.routeMap[msg.id];
                delete this.routeMap[msg.id];
                if (!msg.route) {
                    return;
                }
            }
            this.processMessage(msg);
        }
        processMessage(msg) {
            if (!msg.id) {
                if (WSClient.DEBUG) {
                    console.log(`EVENT: Route:${msg.route} Msg:${msg.body}`);
                }
                this.emit(msg.route, msg.body);
                return;
            }
            if (WSClient.DEBUG) {
                console.log(`RESPONSE: Id:${msg.id} Msg:${msg.body}`);
            }
            let cb = this.callbacks[msg.id];
            delete this.callbacks[msg.id];
            if (typeof cb !== 'function') {
                return;
            }
            if (msg.body && msg.body.code === 500) {
                let obj = { 'code': 500, 'desc': '服务器内部错误', 'key': 'INTERNAL_ERROR' };
                msg.body.error = obj;
            }
            cb(msg.body);
            return;
        }
        heartbeat(data) {
            if (!this.heartbeatInterval) {
                return;
            }
            let obj = this._package.encode(Package.TYPE_HEARTBEAT);
            if (this.heartbeatTimeoutId) {
                clearTimeout(this.heartbeatTimeoutId);
                this.heartbeatTimeoutId = null;
            }
            if (this.heartbeatId) {
                return;
            }
            let self = this;
            self.heartbeatId = setTimeout(function () {
                self.heartbeatId = null;
                self.send(obj);
                self.nextHeartbeatTimeout = Date.now() + self.heartbeatTimeout;
                self.heartbeatTimeoutId = setTimeout(self.heartbeatTimeoutCb.bind(self, data), self.heartbeatTimeout);
            }, self.heartbeatInterval);
        }
        heartbeatTimeoutCb(data) {
            let gap = this.nextHeartbeatTimeout - Date.now();
            if (gap > this.gapThreshold) {
                this.heartbeatTimeoutId = setTimeout(this.heartbeatTimeoutCb.bind(this, data), gap);
            }
            else {
                console.error('server heartbeat timeout', data);
                this._disconnect();
            }
        }
        off(event, fn) {
            this.removeAllListeners(event, fn);
        }
        removeAllListeners(event, fn) {
            if (0 === arguments.length) {
                this._callbacks = {};
                return;
            }
            let callbacks = this._callbacks[event];
            if (!callbacks) {
                return;
            }
            if (event && !fn) {
                delete this._callbacks[event];
                return;
            }
            let i = this.index(callbacks, fn._off || fn);
            if (~i) {
                callbacks.splice(i, 1);
            }
            return;
        }
        index(arr, obj) {
            if ([].indexOf) {
                return arr.indexOf(obj);
            }
            for (let i = 0; i < arr.length; ++i) {
                if (arr[i] === obj)
                    return i;
            }
            return -1;
        }
        disconnect() {
            this._disconnect();
        }
        _disconnect() {
            console.warn('[Pinus] client disconnect ...');
            if (this.socket)
                this.socket.close();
            this.socket = null;
            if (this.heartbeatId) {
                clearTimeout(this.heartbeatId);
                this.heartbeatId = null;
            }
            if (this.heartbeatTimeoutId) {
                clearTimeout(this.heartbeatTimeoutId);
                this.heartbeatTimeoutId = null;
            }
        }
        processPackage(msg) {
            this.handlers[msg.type].apply(this, [msg.body]);
        }
        handshake(resData) {
            let data = JSON.parse(Protocol.strdecode(resData));
            if (data.code === this.RES_OLD_CLIENT) {
                return;
            }
            if (data.code !== this.RES_OK) {
                return;
            }
            this.handshakeInit(data);
            let obj = this._package.encode(Package.TYPE_HANDSHAKE_ACK);
            this.send(obj);
            if (this.initCallback) {
                this.initCallback(data);
                this.initCallback = null;
            }
        }
        handshakeInit(data) {
            if (data.sys) {
                Routedic.init(data.sys.dict);
                Protobuf.init(data.sys.protos);
            }
            if (data.sys && data.sys.heartbeat) {
                this.heartbeatInterval = data.sys.heartbeat * 1000;
                this.heartbeatTimeout = this.heartbeatInterval * 2;
            }
            else {
                this.heartbeatInterval = 0;
                this.heartbeatTimeout = 0;
            }
            if (typeof this.handshakeCallback === 'function') {
                this.handshakeCallback(data.user);
            }
        }
        send(byte) {
            if (this.socket) {
                this.socket.send(byte.buffer);
            }
        }
        emit(event, ...args) {
            let params = [].slice.call(arguments, 1);
            let callbacks = this._callbacks[event];
            if (callbacks) {
                callbacks = callbacks.slice(0);
                for (let i = 0, len = callbacks.length; i < len; ++i) {
                    callbacks[i].apply(this, params);
                }
            }
            return this;
        }
    }
    WSClient.DEBUG = false;
    WSClient.EVENT_IO_ERROR = 'io-error';
    WSClient.EVENT_CLOSE = 'close';
    WSClient.EVENT_KICK = 'onKick';
    WSClient.EVENT_HEART_BEAT_TIMEOUT = 'heartbeat timeout';
    class Package {
        encode(type, body) {
            let length = body ? body.length : 0;
            let buffer = new ByteArray();
            buffer.writeByte(type & 0xff);
            buffer.writeByte((length >> 16) & 0xff);
            buffer.writeByte((length >> 8) & 0xff);
            buffer.writeByte(length & 0xff);
            if (body)
                buffer.writeBytes(body, 0, body.length);
            return buffer;
        }
        decode(buffer) {
            let type = buffer.readUnsignedByte();
            let len = (buffer.readUnsignedByte() << 16 | buffer.readUnsignedByte() << 8 | buffer.readUnsignedByte()) >>> 0;
            let body;
            if (buffer.bytesAvailable >= len) {
                body = new ByteArray();
                if (len)
                    buffer.readBytes(body, 0, len);
            }
            else {
                console.log('[Package] no enough length for current type:', type);
            }
            return { type: type, body: body, length: len };
        }
    }
    Package.TYPE_HANDSHAKE = 1;
    Package.TYPE_HANDSHAKE_ACK = 2;
    Package.TYPE_HEARTBEAT = 3;
    Package.TYPE_DATA = 4;
    Package.TYPE_KICK = 5;
    class Message {
        constructor(routeMap) {
            this.routeMap = routeMap;
        }
        encode(id, route, msg) {
            let buffer = new ByteArray();
            let type = id ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
            let byte = Protobuf.encode(route, msg) || Protocol.strencode(JSON.stringify(msg));
            let rot = Routedic.getID(route) || route;
            buffer.writeByte((type << 1) | ((typeof (rot) === 'string') ? 0 : 1));
            if (id) {
                do {
                    let tmp = id % 128;
                    let next = Math.floor(id / 128);
                    if (next !== 0) {
                        tmp = tmp + 128;
                    }
                    buffer.writeByte(tmp);
                    id = next;
                } while (id !== 0);
            }
            if (rot) {
                if (typeof rot === 'string') {
                    buffer.writeByte(rot.length & 0xff);
                    buffer.writeUTFBytes(rot);
                }
                else {
                    buffer.writeByte((rot >> 8) & 0xff);
                    buffer.writeByte(rot & 0xff);
                }
            }
            if (byte) {
                buffer.writeBytes(byte);
            }
            return buffer;
        }
        decode(buffer) {
            let flag = buffer.readUnsignedByte();
            let compressRoute = flag & Message.MSG_COMPRESS_ROUTE_MASK;
            let type = (flag >> 1) & Message.MSG_TYPE_MASK;
            let route;
            let id = 0;
            if (type === Message.TYPE_REQUEST || type === Message.TYPE_RESPONSE) {
                let i = 0;
                let m;
                do {
                    m = buffer.readUnsignedByte();
                    id = id + ((m & 0x7f) * Math.pow(2, (7 * i)));
                    i++;
                } while (m >= 128);
            }
            if (type === Message.TYPE_REQUEST || type === Message.TYPE_NOTIFY || type === Message.TYPE_PUSH) {
                if (compressRoute) {
                    route = buffer.readUnsignedShort();
                }
                else {
                    let routeLen = buffer.readUnsignedByte();
                    route = routeLen ? buffer.readUTFBytes(routeLen) : '';
                }
            }
            else if (type === Message.TYPE_RESPONSE) {
                route = this.routeMap[id];
            }
            if (!id && !(typeof (route) === 'string')) {
                route = Routedic.getName(route);
            }
            let body = Protobuf.decode(route, buffer) || JSON.parse(Protocol.strdecode(buffer));
            return { id: id, type: type, route: route, body: body };
        }
    }
    Message.MSG_FLAG_BYTES = 1;
    Message.MSG_ROUTE_CODE_BYTES = 2;
    Message.MSG_ID_MAX_BYTES = 5;
    Message.MSG_ROUTE_LEN_BYTES = 1;
    Message.MSG_ROUTE_CODE_MAX = 0xffff;
    Message.MSG_COMPRESS_ROUTE_MASK = 0x1;
    Message.MSG_TYPE_MASK = 0x7;
    Message.TYPE_REQUEST = 0;
    Message.TYPE_NOTIFY = 1;
    Message.TYPE_RESPONSE = 2;
    Message.TYPE_PUSH = 3;
    class Protocol {
        static strencode(str) {
            let buffer = new ByteArray();
            buffer.length = str.length;
            buffer.writeUTFBytes(str);
            return buffer;
        }
        static strdecode(byte) {
            return byte.readUTFBytes(byte.bytesAvailable);
        }
    }
    class Protobuf {
        static init(protos) {
            this._clients = protos && protos.client || {};
            this._servers = protos && protos.server || {};
        }
        static encode(route, msg) {
            let protos = this._clients[route];
            if (!protos)
                return null;
            return this.encodeProtos(protos, msg);
        }
        static decode(route, buffer) {
            let protos = this._servers[route];
            if (!protos)
                return null;
            return this.decodeProtos(protos, buffer);
        }
        static encodeProtos(protos, msg) {
            let buffer = new ByteArray();
            for (let name in msg) {
                if (protos[name]) {
                    let proto = protos[name];
                    switch (proto.option) {
                        case 'optional':
                        case 'required':
                            buffer.writeBytes(this.encodeTag(proto.type, proto.tag));
                            this.encodeProp(msg[name], proto.type, protos, buffer);
                            break;
                        case 'repeated':
                            if (!!msg[name] && msg[name].length > 0) {
                                this.encodeArray(msg[name], proto, protos, buffer);
                            }
                            break;
                    }
                }
            }
            return buffer;
        }
        static decodeProtos(protos, buffer) {
            let msg = {};
            while (buffer.bytesAvailable) {
                let head = this.getHead(buffer);
                let name = protos.__tags[head.tag];
                switch (protos[name].option) {
                    case 'optional':
                    case 'required':
                        msg[name] = this.decodeProp(protos[name].type, protos, buffer);
                        break;
                    case 'repeated':
                        if (!msg[name]) {
                            msg[name] = [];
                        }
                        this.decodeArray(msg[name], protos[name].type, protos, buffer);
                        break;
                }
            }
            return msg;
        }
        static encodeTag(type, tag) {
            let value = this.TYPES[type] !== undefined ? this.TYPES[type] : 2;
            return this.encodeUInt32((tag << 3) | value);
        }
        static getHead(buffer) {
            let tag = this.decodeUInt32(buffer);
            return { type: tag & 0x7, tag: tag >> 3 };
        }
        static encodeProp(value, type, protos, buffer) {
            switch (type) {
                case 'uInt32':
                    buffer.writeBytes(this.encodeUInt32(value));
                    break;
                case 'int32':
                case 'sInt32':
                    buffer.writeBytes(this.encodeSInt32(value));
                    break;
                case 'float':
                    let floats = new ByteArray();
                    floats.endian = Endian.LITTLE_ENDIAN;
                    floats.writeFloat(value);
                    buffer.writeBytes(floats);
                    break;
                case 'double':
                    let doubles = new ByteArray();
                    doubles.endian = Endian.LITTLE_ENDIAN;
                    doubles.writeDouble(value);
                    buffer.writeBytes(doubles);
                    break;
                case 'string':
                    buffer.writeBytes(this.encodeUInt32(value.length));
                    buffer.writeUTFBytes(value);
                    break;
                default:
                    let proto = protos.__messages[type] || this._clients['message ' + type];
                    if (!!proto) {
                        let buf = this.encodeProtos(proto, value);
                        buffer.writeBytes(this.encodeUInt32(buf.length));
                        buffer.writeBytes(buf);
                    }
                    break;
            }
        }
        static decodeProp(type, protos, buffer) {
            switch (type) {
                case 'uInt32':
                    return this.decodeUInt32(buffer);
                case 'int32':
                case 'sInt32':
                    return this.decodeSInt32(buffer);
                case 'float':
                    let floats = new ByteArray();
                    buffer.readBytes(floats, 0, 4);
                    floats.endian = Endian.LITTLE_ENDIAN;
                    let float = buffer.readFloat();
                    return floats.readFloat();
                case 'double':
                    let doubles = new ByteArray();
                    buffer.readBytes(doubles, 0, 8);
                    doubles.endian = Endian.LITTLE_ENDIAN;
                    return doubles.readDouble();
                case 'string':
                    let length = this.decodeUInt32(buffer);
                    return buffer.readUTFBytes(length);
                default:
                    let proto = protos && (protos.__messages[type] || this._servers['message ' + type]);
                    if (proto) {
                        let len = this.decodeUInt32(buffer);
                        let buf;
                        if (len) {
                            buf = new ByteArray();
                            buffer.readBytes(buf, 0, len);
                        }
                        return len ? Protobuf.decodeProtos(proto, buf) : false;
                    }
                    break;
            }
        }
        static isSimpleType(type) {
            return (type === 'uInt32' ||
                type === 'sInt32' ||
                type === 'int32' ||
                type === 'uInt64' ||
                type === 'sInt64' ||
                type === 'float' ||
                type === 'double');
        }
        static encodeArray(array, proto, protos, buffer) {
            let isSimpleType = this.isSimpleType;
            if (isSimpleType(proto.type)) {
                buffer.writeBytes(this.encodeTag(proto.type, proto.tag));
                buffer.writeBytes(this.encodeUInt32(array.length));
                let encodeProp = this.encodeProp;
                for (let i = 0; i < array.length; i++) {
                    encodeProp(array[i], proto.type, protos, buffer);
                }
            }
            else {
                let encodeTag = this.encodeTag;
                for (let j = 0; j < array.length; j++) {
                    buffer.writeBytes(encodeTag(proto.type, proto.tag));
                    this.encodeProp(array[j], proto.type, protos, buffer);
                }
            }
        }
        static decodeArray(array, type, protos, buffer) {
            let isSimpleType = this.isSimpleType;
            let decodeProp = this.decodeProp;
            if (isSimpleType(type)) {
                let length = this.decodeUInt32(buffer);
                for (let i = 0; i < length; i++) {
                    array.push(decodeProp(type, protos, buffer));
                }
            }
            else {
                array.push(decodeProp(type, protos, buffer));
            }
        }
        static encodeUInt32(n) {
            let result = new ByteArray();
            do {
                let tmp = n % 128;
                let next = Math.floor(n / 128);
                if (next !== 0) {
                    tmp = tmp + 128;
                }
                result.writeByte(tmp);
                n = next;
            } while (n !== 0);
            return result;
        }
        static decodeUInt32(buffer) {
            let n = 0;
            for (let i = 0; i < buffer.length; i++) {
                let m = buffer.readUnsignedByte();
                n = n + ((m & 0x7f) * Math.pow(2, (7 * i)));
                if (m < 128) {
                    return n;
                }
            }
            return n;
        }
        static encodeSInt32(n) {
            n = n < 0 ? (Math.abs(n) * 2 - 1) : n * 2;
            return this.encodeUInt32(n);
        }
        static decodeSInt32(buffer) {
            let n = this.decodeUInt32(buffer);
            let flag = ((n % 2) === 1) ? -1 : 1;
            n = ((n % 2 + n) / 2) * flag;
            return n;
        }
    }
    Protobuf.TYPES = {
        uInt32: 0,
        sInt32: 0,
        int32: 0,
        double: 1,
        string: 2,
        message: 2,
        float: 5
    };
    Protobuf._clients = {};
    Protobuf._servers = {};
    class Routedic {
        static init(dict) {
            this._names = dict || {};
            let _names = this._names;
            let _ids = this._ids;
            for (let name in _names) {
                _ids[_names[name]] = name;
            }
        }
        static getID(name) {
            return this._names[name];
        }
        static getName(id) {
            return this._ids[id];
        }
    }
    Routedic._ids = {};
    Routedic._names = {};

    class Net extends WSClient {
        constructor(name) {
            super();
            this.name = name;
            this.eventDispatcher = new Laya.EventDispatcher();
        }
        static getMultiton(cname) {
            if (!this.multiton[cname]) {
                this.multiton[cname] = new this(cname);
            }
            return this.multiton[cname];
        }
        static get Login() {
            return this.getMultiton('login');
        }
        static get Room() {
            return this.getMultiton('room');
        }
        sendCommand(cmd, msg) {
            if (this.name != 'room') {
                throw "This method only call with room.";
            }
            this.notify('game.roomHandler.notifyCommand', { cmd, msg });
        }
        add(route, caller, listener, priority = 0) {
            if (!this.eventDispatcher.hasListener(route)) {
                this.on(route, (msg) => {
                    this.eventDispatcher.event(route, msg);
                });
            }
            this.eventDispatcher.on(route, caller, listener);
            let ed = this.eventDispatcher;
            let listeners = ed._events[route];
            if (listeners.run) {
                listeners.priority = priority;
            }
            else {
                let handler = listeners[listeners.length - 1];
                handler.priority = priority;
                listeners.sort((a, b) => a.priority - b.priority);
            }
        }
        remove(route, caller, listener) {
            this.eventDispatcher.off(route, caller, listener);
        }
        removeAll(route) {
            this.eventDispatcher.offAll(route);
        }
        removeAllCaller(caller) {
            this.eventDispatcher.offAllCaller(caller);
        }
    }
    Net.multiton = {};

    var CMD;
    (function (CMD) {
        CMD[CMD["S_USER_ENTER"] = 1] = "S_USER_ENTER";
        CMD[CMD["S_USER_LEAVE"] = 2] = "S_USER_LEAVE";
        CMD[CMD["S_ROOM_STATUS"] = 3] = "S_ROOM_STATUS";
        CMD[CMD["S_START_GAME"] = 4] = "S_START_GAME";
        CMD[CMD["S_START_DICE"] = 5] = "S_START_DICE";
        CMD[CMD["S_SET_BANKER"] = 6] = "S_SET_BANKER";
        CMD[CMD["S_DRAW_JOKER"] = 7] = "S_DRAW_JOKER";
        CMD[CMD["S_DEAL_TILES"] = 8] = "S_DEAL_TILES";
        CMD[CMD["S_SYNC_REMAIN_TILE"] = 9] = "S_SYNC_REMAIN_TILE";
        CMD[CMD["S_TURN_PLAYER"] = 10] = "S_TURN_PLAYER";
        CMD[CMD["S_OUT_TILE"] = 11] = "S_OUT_TILE";
        CMD[CMD["C_OUT_TILE"] = 12] = "C_OUT_TILE";
        CMD[CMD["S_EXCH_FLOWER"] = 13] = "S_EXCH_FLOWER";
        CMD[CMD["S_DRAW_FLOWER"] = 14] = "S_DRAW_FLOWER";
        CMD[CMD["S_DRAW"] = 15] = "S_DRAW";
        CMD[CMD["S_USER_ACTION"] = 16] = "S_USER_ACTION";
        CMD[CMD["C_USER_ACTION"] = 17] = "C_USER_ACTION";
        CMD[CMD["S_USER_HU"] = 18] = "S_USER_HU";
        CMD[CMD["S_USER_EAT"] = 19] = "S_USER_EAT";
        CMD[CMD["S_USER_PONG"] = 20] = "S_USER_PONG";
        CMD[CMD["S_EXPOSED_KONG"] = 21] = "S_EXPOSED_KONG";
        CMD[CMD["S_CONCEALED_KONG"] = 22] = "S_CONCEALED_KONG";
        CMD[CMD["S_KICK"] = 23] = "S_KICK";
    })(CMD || (CMD = {}));
    const ROUTE_ROOM_COMMAND = "onRoomCommand";

    var TileMask;
    (function (TileMask) {
        TileMask[TileMask["HAND"] = 256] = "HAND";
        TileMask[TileMask["DISCARD"] = 512] = "DISCARD";
        TileMask[TileMask["CHOW_PONG"] = 1024] = "CHOW_PONG";
        TileMask[TileMask["FLOWER"] = 2048] = "FLOWER";
        TileMask[TileMask["EXPOSED_KONG"] = 4096] = "EXPOSED_KONG";
        TileMask[TileMask["CONCEALED_KONG"] = 8192] = "CONCEALED_KONG";
    })(TileMask || (TileMask = {}));
    var RoomState;
    (function (RoomState) {
        RoomState[RoomState["IDLE"] = 1] = "IDLE";
        RoomState[RoomState["GAMING"] = 2] = "GAMING";
    })(RoomState || (RoomState = {}));
    var PlayerState;
    (function (PlayerState) {
        PlayerState[PlayerState["UNKONW"] = 1] = "UNKONW";
        PlayerState[PlayerState["ONLINE"] = 2] = "ONLINE";
        PlayerState[PlayerState["OFFLINE"] = 3] = "OFFLINE";
    })(PlayerState || (PlayerState = {}));
    var SeatMask;
    (function (SeatMask) {
        SeatMask[SeatMask["SELF"] = 0] = "SELF";
        SeatMask[SeatMask["RIGHT"] = 1] = "RIGHT";
        SeatMask[SeatMask["TOP"] = 2] = "TOP";
        SeatMask[SeatMask["LEFT"] = 3] = "LEFT";
    })(SeatMask || (SeatMask = {}));
    const INVALID_SEAT = -1;
    const INVALID_TID = -1;
    class RoomStatus {
        constructor(cfg) {
            this.cfg = cfg;
            this.tileCount = 0;
            this.round = 0;
            if (this.cfg) {
                this.seats = new Array(this.cfg.maxPlayer).fill(this.emptySeat);
            }
            this.reset();
        }
        set currSeat(value) {
            this.prevSeat = this._currSeat;
            this._currSeat = value;
        }
        get currSeat() {
            return this._currSeat;
        }
        get emptySeat() {
            return {
                uid: '',
                playerState: PlayerState.UNKONW,
                lastDrawnTileId: INVALID_TID,
                lastDiscardedTileId: INVALID_TID
            };
        }
        reset() {
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
        copyFromStatus(status) {
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
        addTiles(pos, tileMask, tiles) {
            tiles.forEach(tid => {
                this.tiles[pos].push(tid | tileMask);
            });
        }
        delTiles(pos, tileMask, tid, count = 1) {
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
        updateTiles(pos, tileMask, tiles) {
            this.tiles[pos] = this.tiles[pos].filter(el => this.getMask(el) != tileMask);
            this.addTiles(pos, tileMask, tiles);
        }
        getTiles(pos, tileMask) {
            return this.tiles[pos].filter(el => this.getMask(el) == tileMask).map(el => this.getId(el));
        }
        getTileStacks(pos, tileMask) {
            let tiles = this.getTiles(pos, tileMask);
            let counts = _.countBy(tiles);
            let uniqTiles = _.uniq(tiles);
            return uniqTiles.map(tid => [tid, counts[tid]]);
        }
        getMask(value) {
            return value & 0xFF00;
        }
        getId(value) {
            return value & 0xFF;
        }
        getSeat(pos) {
            return this.seats[pos];
        }
        playerSeat(pos, uid) {
            let seat = this.getSeat(pos);
            if (seat.uid != uid) {
                seat.uid = uid;
                seat.playerState = PlayerState.ONLINE;
                this.playerCount++;
            }
        }
    }

    class ViewType {
    }
    ViewType.IndexView = "index/Index.scene";
    ViewType.GameView = "game/Game.scene";
    ViewType.ResultDialog = "popup/ResultDialog.scene";

    class GameController extends Laya.Script {
        constructor() {
            super();
            this.status = null;
            this.mPos = INVALID_SEAT;
            GameController.instance = this;
            this.status = new RoomStatus();
        }
        onEnterRoom(roomInfo) {
            this.mPos = roomInfo.pos;
            this.status.copyFromStatus(roomInfo.status);
        }
        onEnable() {
            Net.Room.add("onRoomCommand", this, this.onRoomCommand, -1);
        }
        onDisable() {
            Net.Room.removeAllCaller(this);
        }
        onRoomCommand(data) {
            const status = this.status;
            const msg = data.msg;
            console.log(JSON.stringify({ cmd: CMD[data.cmd], msg: msg }));
            switch (data.cmd) {
                case CMD.S_USER_ENTER: {
                    status.playerSeat(msg.pos, msg.uid);
                    break;
                }
                case CMD.S_START_GAME: {
                    status.reset();
                    break;
                }
                case CMD.S_START_DICE: {
                    break;
                }
                case CMD.S_SET_BANKER: {
                    status.bankerPos = msg.pos;
                    break;
                }
                case CMD.S_DEAL_TILES: {
                    if (msg.pos == this.mPos) {
                        status.updateTiles(msg.pos, TileMask.HAND, msg.tiles);
                    }
                    else {
                        status.updateTiles(msg.pos, TileMask.HAND, new Array(msg.count).fill(TileMask.HAND));
                    }
                    break;
                }
                case CMD.S_EXCH_FLOWER: {
                    if (this.mPos == msg.pos) {
                        status.updateTiles(msg.pos, TileMask.HAND, msg.handTiles);
                    }
                    status.updateTiles(msg.pos, TileMask.FLOWER, msg.flowers);
                    break;
                }
                case CMD.S_DRAW_JOKER: {
                    this.status.joker = msg.joker;
                    break;
                }
                case CMD.S_SYNC_REMAIN_TILE: {
                    status.tileCount = msg.count;
                    break;
                }
                case CMD.S_DRAW_FLOWER: {
                    status.addTiles(msg.pos, TileMask.FLOWER, [msg.tileId]);
                    status.tileCount--;
                    break;
                }
                case CMD.S_TURN_PLAYER: {
                    if (msg.pos != INVALID_SEAT) {
                        status.currSeat = msg.pos;
                    }
                    break;
                }
                case CMD.S_DRAW: {
                    if (msg.pos == this.mPos) {
                        status.getSeat(msg.pos).drawId = msg.tileId;
                        status.addTiles(msg.pos, TileMask.HAND, [msg.tileId]);
                    }
                    else {
                        status.addTiles(msg.pos, TileMask.HAND, [TileMask.HAND]);
                    }
                    status.currSeat = msg.pos;
                    status.tileCount--;
                    break;
                }
                case CMD.S_OUT_TILE: {
                    let seat = status.getSeat(msg.pos);
                    seat.drawId = 0;
                    seat.discardId = msg.tileId;
                    status.delTiles(msg.pos, TileMask.HAND, msg.tileId);
                    status.addTiles(msg.pos, TileMask.DISCARD, [msg.tileId]);
                    status.currSeat = msg.pos;
                    break;
                }
                case CMD.S_USER_ACTION: {
                    break;
                }
                case CMD.S_USER_EAT: {
                    status.delTiles(msg.targetPos, TileMask.DISCARD, msg.removeTile);
                    msg.eatTiles.forEach(tid => {
                        if (tid != msg.removeTile) {
                            status.delTiles(msg.pos, TileMask.HAND, tid);
                        }
                    });
                    msg.eatTiles.sort((a, b) => a - b);
                    status.addTiles(msg.pos, TileMask.CHOW_PONG, msg.eatTiles);
                    status.currSeat = msg.pos;
                    break;
                }
                case CMD.S_USER_PONG: {
                    status.getSeat(msg.pos).drawId = 0;
                    status.delTiles(msg.targetPos, TileMask.DISCARD, msg.removeTile);
                    status.delTiles(msg.pos, TileMask.HAND, msg.removeTile, 2);
                    status.addTiles(msg.pos, TileMask.CHOW_PONG, msg.pongArray);
                    status.currSeat = msg.pos;
                    break;
                }
                case CMD.S_EXPOSED_KONG: {
                    status.delTiles(msg.targetPos, TileMask.DISCARD, msg.removeTile);
                    status.delTiles(msg.pos, TileMask.HAND, msg.removeTile, 3);
                    status.addTiles(msg.pos, TileMask.EXPOSED_KONG, msg.options);
                    status.currSeat = msg.pos;
                    break;
                }
                case CMD.S_CONCEALED_KONG: {
                    status.delTiles(msg.pos, TileMask.HAND, msg.options[0], 4);
                    status.addTiles(msg.pos, TileMask.CONCEALED_KONG, msg.options);
                    status.currSeat = msg.pos;
                    break;
                }
                case CMD.S_USER_HU: {
                    Laya.Scene.open(ViewType.ResultDialog, false, msg);
                    break;
                }
            }
        }
        static isMyTurn() {
            return GameController.instance.mPos == GameController.instance.status.currSeat;
        }
        static getViewPos(pos) {
            return (pos - GameController.instance.mPos + 4) % 4;
        }
    }
    GameController.instance = null;
    var ActionType;
    (function (ActionType) {
        ActionType[ActionType["Bu"] = 0] = "Bu";
        ActionType[ActionType["Eat"] = 1] = "Eat";
        ActionType[ActionType["Pong"] = 2] = "Pong";
        ActionType[ActionType["Kong"] = 3] = "Kong";
        ActionType[ActionType["Hu"] = 4] = "Hu";
    })(ActionType || (ActionType = {}));

    class ActionEffectLayer extends ui.game.ActionEffectLayerUI {
        constructor() {
            super();
            this.ACTION_SKINS = [
                'game/bu.png',
                'game/Button_ChiAction.png',
                'game/Button_PengAction.png',
                'game/Button_GangAction.png',
                'game/Button_HuAction.png',
            ];
        }
        onEnable() {
            this.visible = false;
            Net.Room.add(ROUTE_ROOM_COMMAND, this, (data) => {
                this.onRoomCommand(data.cmd, data.msg);
            });
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_EXCH_FLOWER:
                case CMD.S_DRAW_FLOWER: {
                    this.showAction(ActionType.Bu, msg.pos);
                    break;
                }
                case CMD.S_USER_EAT: {
                    this.showAction(ActionType.Eat, msg.pos);
                    break;
                }
                case CMD.S_USER_PONG: {
                    this.showAction(ActionType.Pong, msg.pos);
                    break;
                }
                case CMD.S_EXPOSED_KONG:
                case CMD.S_CONCEALED_KONG: {
                    this.showAction(ActionType.Kong, msg.pos);
                    break;
                }
                case CMD.S_USER_HU: {
                    this.showAction(ActionType.Hu, msg.pos);
                    break;
                }
            }
        }
        showAction(act, pos) {
            this.visible = true;
            const viewPos = GameController.getViewPos(pos);
            this.actionStack.selectedIndex = viewPos;
            let item = this.actionStack.getChildAt(viewPos);
            item.skin = this.ACTION_SKINS[act];
            item.alpha = 1;
            Laya.Tween.to(item, { alpha: 0 }, 1000);
        }
        onDisable() {
            Net.Room.removeAllCaller(this);
        }
    }

    class _GameEvent extends Laya.EventDispatcher {
        constructor() {
            super(...arguments);
            this.SHOW_EAT_OPTIONS = 'SHOW_EAT_OPTIONS';
            this.ON_TILE_SELECTED = 'ON_TILE_SELECTED';
        }
    }
    const GameEvent = new _GameEvent();

    class ActionMenu extends ui.game.ActionMenuUI {
        constructor() { super(); }
        onEnable() {
            this.visible = false;
            this.lstAction.renderHandler = new Laya.Handler(this, this.updateButton);
            Net.Room.add(ROUTE_ROOM_COMMAND, this, (data) => {
                this.onRoomCommand(data.cmd, data.msg);
            });
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_USER_ACTION: {
                    this.visible = true;
                    this.eatOptions = msg.eatOptions;
                    this.onUserAction(msg.actions);
                    break;
                }
                case CMD.S_OUT_TILE: {
                    this.visible = false;
                    break;
                }
                case CMD.S_TURN_PLAYER: {
                    if (msg.pos != INVALID_SEAT) {
                        this.visible = false;
                    }
                    break;
                }
            }
        }
        updateButton(cell, index) {
            const skins = [
                'game/chi.png',
                'game/peng.png',
                'game/gang.png',
                'game/hu.png',
                'game/operat_guo.png',
            ];
            let btnAction = cell.getChildAt(0);
            btnAction.offAll(Laya.Event.CLICK);
            btnAction.on(Laya.Event.CLICK, this, () => {
                if (btnAction.gray) {
                    return;
                }
                if (index == 0) {
                    this.processEat();
                    return;
                }
                Net.Room.sendCommand(CMD.C_USER_ACTION, { act: index });
                this.visible = false;
            });
            btnAction.skin = skins[index];
            btnAction.gray = cell.dataSource === 0;
        }
        processEat() {
            if (this.eatOptions.length > 1) {
                GameEvent.event(GameEvent.SHOW_EAT_OPTIONS, [this.eatOptions]);
            }
            else {
                Net.Room.sendCommand(CMD.C_USER_ACTION, { act: 0, eatIndex: 0 });
                this.visible = false;
            }
        }
        onUserAction(actions) {
            if (actions) {
                this.visible = true;
                this.lstAction.array = actions;
            }
        }
        onDisable() {
            Net.Room.removeAllCaller(this);
        }
    }

    class DiceLayer extends ui.game.DiceLayerUI {
        constructor() { super(); }
        onEnable() {
            this.visible = false;
            this.lstDice.renderHandler = new Laya.Handler(this, this.updateDice);
            Net.Room.add(ROUTE_ROOM_COMMAND, this, (data) => {
                if (data.cmd == CMD.S_START_DICE) {
                    this.onStartDice(data.msg.dice);
                }
            });
        }
        onStartDice(dice) {
            this.visible = true;
            this.lstDice.visible = false;
            this.boxAni.visible = true;
            this.aniDice.play(0, true, "dice");
            this.aniDice.on(Laya.Event.COMPLETE, this, this.showDice, [dice]);
        }
        showDice(dice) {
            this.boxAni.visible = false;
            this.lstDice.array = dice;
            this.lstDice.visible = true;
            this.timer.once(2000, this, () => {
                this.visible = false;
            });
        }
        updateDice(item, index) {
            item.skin = `game/shaiziAnim/shaizi${this.lstDice.array[index] + 1}.png`;
        }
        onDisable() {
            Net.Room.removeAllCaller(this);
        }
    }

    class EatOptionLayer extends ui.game.EatOptionLayerUI {
        constructor() { super(); }
        onEnable() {
            this.visible = false;
            GameEvent.on(GameEvent.SHOW_EAT_OPTIONS, this, this.showUI);
            [this.lst1, this.lst2, this.lst3, this.lst4, this.lst5].forEach(lst => {
                lst.renderHandler = new Laya.Handler(this, this.onRenderItem, [lst]);
                lst.on(Laya.Event.CLICK, this, this.onOptionClick, [lst]);
            });
        }
        showUI(opts) {
            this.visible = true;
            this.optStack.selectedIndex = opts.length - 2;
            if (opts.length == 2) {
                this.lst1.array = opts[0];
                this.lst2.array = opts[1];
            }
            else {
                this.lst3.array = opts[0];
                this.lst4.array = opts[1];
                this.lst5.array = opts[2];
            }
        }
        onOptionClick(lst) {
            this.visible = false;
            Net.Room.sendCommand(CMD.C_USER_ACTION, { act: 0, eatIndex: +lst.name });
        }
        onRenderItem(lst, item, index) {
            item.skin = `game/2/handmah_${lst.array[index]}.png`;
        }
        onDisable() {
            GameEvent.offAllCaller(this);
        }
    }

    class GameUI extends ui.game.GameUI {
        constructor() {
            super();
        }
        onEnable() {
        }
        onOpened(param) {
            GameUI.controller = this.getComponent(GameController);
            if (param) {
                GameUI.controller.onEnterRoom(param);
            }
        }
    }

    class BaseGameScript extends Laya.Script {
        onAwake() {
            let self = this;
            if (self.onRoomCommand) {
                Net.Room.add(ROUTE_ROOM_COMMAND, this, (data) => {
                    self.onRoomCommand(data.cmd, data.msg);
                });
            }
        }
        onDestroy() {
            Net.Room.removeAllCaller(this);
        }
        getViewPos(pos) {
            return GameController.getViewPos(pos);
        }
        get status() {
            return GameUI.controller.status;
        }
    }

    class JokerScript extends BaseGameScript {
        onEnable() {
            this.owner.visible = false;
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_DRAW_JOKER: {
                    this.owner.visible = true;
                    this.owner.skin = `game/2/handmah_${msg.joker}.png`;
                    break;
                }
                case CMD.S_START_GAME: {
                    this.owner.visible = false;
                    break;
                }
            }
        }
    }

    class GameConstants {
    }
    GameConstants.MAX_HAND = 16;
    GameConstants.MAX_OUT = 16;
    GameConstants.MAX_EAT = 5;
    GameConstants.INVALID_TID = -1;
    GameConstants.KONG_TID = 2;
    GameConstants.INVALID_CHAIR = -1;
    GameConstants.SELF_VID = 0;
    GameConstants.TOP_VID = 2;
    GameConstants.LEFT_VID = 3;
    GameConstants.RIGHT_VID = 1;

    class TimePointLayer extends ui.game.TimePointLayerUI {
        constructor() {
            super();
            this.TIMEOUT = 15000;
            this.cdTime = 0;
            this.suspended = true;
        }
        onEnable() {
            this.visible = false;
            this.resetUI();
            Net.Room.add(ROUTE_ROOM_COMMAND, this, (data) => {
                this.onRoomCommand(data.cmd, data.msg);
            });
            this.timer.frameLoop(1, this, this.onUpdate);
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_START_GAME: {
                    this.resetUI();
                    break;
                }
                case CMD.S_SYNC_REMAIN_TILE:
                case CMD.S_DRAW:
                case CMD.S_DRAW_FLOWER: {
                    this.updateRemainTile(GameUI.controller.status.tileCount);
                    break;
                }
                case CMD.S_SET_BANKER: {
                    this.visible = true;
                    break;
                }
                case CMD.S_USER_EAT:
                case CMD.S_USER_PONG:
                case CMD.S_EXPOSED_KONG:
                case CMD.S_CONCEALED_KONG:
                case CMD.S_TURN_PLAYER: {
                    this.onTurnPlayer(msg.pos);
                    break;
                }
                case CMD.S_OUT_TILE: {
                    this.suspended = true;
                    break;
                }
            }
        }
        resetUI() {
            this.updateRemainTile(0);
            this.cdTime = 0;
            this.pointStack.visible = false;
        }
        onTurnPlayer(pos) {
            this.suspended = false;
            this.cdTime = this.TIMEOUT;
            if (pos == GameConstants.INVALID_CHAIR) {
                this.pointStack.visible = false;
                return;
            }
            const viewPos = GameController.getViewPos(pos);
            this.pointStack.visible = true;
            this.pointStack.selectedIndex = viewPos;
        }
        onUpdate() {
            if (this.suspended) {
                return;
            }
            if (this.cdTime > 0) {
                this.cdTime -= this.timer.delta;
                this.updateTime(Math.floor(this.cdTime / 1000 + 0.5));
            }
            else {
                this.updateTime(0);
            }
        }
        updateTime(sec) {
            const value = ("0" + sec);
            this.lblCD.value = value.substr(value.length - 2, 2);
        }
        updateRemainTile(count) {
            this.lblRemainTile.text = `牌桌剩余   ${count}  张`;
        }
        onDisable() {
            this.timer.clear(this, this.onUpdate);
            GameEvent.offAllCaller(this);
        }
    }

    class ShowOutLayer extends ui.game.ShowOutLayerUI {
        constructor() { super(); }
        onEnable() {
            this.visible = false;
            Net.Room.add(ROUTE_ROOM_COMMAND, this, (data) => {
                this.onRoomCommand(data.cmd, data.msg);
            });
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_OUT_TILE: {
                    this.showTile(msg.pos, msg.tileId);
                    break;
                }
            }
        }
        showTile(pos, tid) {
            this.visible = true;
            const viewPos = GameController.getViewPos(pos);
            this.tileStack.selectedIndex = viewPos;
            let item = this.tileStack.getChildAt(viewPos).getChildAt(0);
            item.skin = `game/2/mingmah_${tid}.png`;
            this.timer.once(1500, this, () => this.visible = false);
        }
        onDisable() {
            Net.Room.removeAllCaller(this);
        }
    }

    class TileLayer extends BaseGameScript {
        onEnable() {
            this.owner.visible = false;
            this.owner.lstHand.renderHandler = new Laya.Handler(this, this.onRenderItem);
        }
        onDisable() {
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_START_GAME: {
                    this.clearUI();
                    break;
                }
                case CMD.S_TURN_PLAYER:
                case CMD.S_EXCH_FLOWER:
                case CMD.S_DEAL_TILES:
                case CMD.S_OUT_TILE:
                case CMD.S_DRAW: {
                    if (msg.pos != INVALID_SEAT && this.getViewPos(msg.pos) == this.viewPos) {
                        this.updateUI(msg.pos);
                    }
                    break;
                }
            }
        }
        clearUI() {
            this.owner.lstHand.array = [];
            this.owner.imgDiscard.visible = false;
        }
        updateUI(pos) {
            this.owner.visible = true;
            this.owner.imgDiscard.visible = false;
            let tiles = this.status.getTiles(pos, TileMask.HAND);
            if (tiles.length % 3 == 2) {
                let tid = tiles.pop();
                this.owner.imgDiscard.visible = true;
            }
            if (this.viewPos == SeatMask.LEFT) {
                let array = new Array(GameConstants.MAX_HAND - tiles.length).fill(INVALID_TID);
                this.owner.lstHand.array = array.concat(tiles);
            }
            else {
                this.owner.lstHand.array = tiles;
            }
        }
        onRenderItem(item, index) {
            const tid = this.owner.lstHand.array[index];
            item.visible = tid != INVALID_TID;
        }
    }

    class TileLayerSelf extends TileLayer {
        onEnable() {
            this.owner.visible = false;
            this.owner.lstHand.renderHandler = new Laya.Handler(this, this.onRenderItem);
        }
        onRoomCommand(cmd, msg) {
            super.onRoomCommand(cmd, msg);
            switch (cmd) {
                case CMD.S_START_GAME: {
                    this.clearUI();
                    break;
                }
                case CMD.S_DRAW_JOKER: {
                    this.updateUI(GameUI.controller.mPos);
                    break;
                }
            }
        }
        onDisable() {
            GameEvent.offAllCaller(this);
        }
        updateUI(pos) {
            this.owner.visible = true;
            this.owner.imgDiscard.visible = false;
            let tiles = this.status.getTiles(pos, TileMask.HAND);
            tiles.sort((a, b) => a - b);
            if (tiles.length % 3 == 2) {
                let tid = 0;
                let drawId = this.status.getSeat(pos).drawId;
                if (drawId > 0) {
                    let index = tiles.indexOf(drawId);
                    if (index >= 0) {
                        tid = tiles.splice(index, 1)[0];
                    }
                }
                if (tid == 0) {
                    tid = tiles.pop();
                }
                this.owner.imgDiscard.visible = true;
                this.updateTileUI(this.owner.imgDiscard, tid);
            }
            let array = new Array(GameConstants.MAX_HAND - tiles.length).fill(INVALID_TID);
            this.owner.lstHand.array = array.concat(tiles);
        }
        onRenderItem(item, index) {
            const tid = this.owner.lstHand.array[index];
            item.visible = tid != INVALID_TID;
            if (item.visible) {
                this.updateTileUI(item, tid);
            }
        }
        updateTileUI(imgTile, tid) {
            this.getTouchScript(imgTile).tildId = tid;
            imgTile.skin = `game/2/handmah_${tid}.png`;
            imgTile.removeChildren();
            if (tid == this.status.joker) {
                imgTile.addChild(new Laya.Image("game/jin.png"));
            }
        }
        getTouchScript(imgTile) {
            return imgTile.getComponent(Laya.Script);
        }
    }

    class FlowerList extends BaseGameScript {
        onEnable() {
            this.owner.renderHandler = new Laya.Handler(this, this.onRenderItem);
        }
        onDisable() {
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_START_GAME: {
                    this.clearUI();
                    break;
                }
                case CMD.S_EXCH_FLOWER:
                case CMD.S_DRAW_FLOWER: {
                    if (this.getViewPos(msg.pos) == this.viewPos) {
                        this.updateUI(msg.pos);
                    }
                    break;
                }
            }
        }
        clearUI() {
            this.owner.array = [];
        }
        updateUI(pos) {
            let tiles = this.status.getTileStacks(pos, TileMask.FLOWER);
            if (this.viewPos == SeatMask.RIGHT || this.viewPos == SeatMask.TOP) {
                let array = new Array(GameConstants.MAX_OUT - tiles.length).fill([INVALID_TID]);
                this.owner.array = array.concat(tiles);
            }
            else {
                this.owner.array = tiles;
            }
        }
        onRenderItem(item, index) {
            const [tileId, count] = this.owner.array[index];
            if (tileId == INVALID_TID) {
                item.visible = false;
                return;
            }
            item.visible = true;
            item.skin = `game/${this.viewPos == 0 ? 2 : this.viewPos}/mingmah_${tileId}.png`;
            const markImg = item.getChildByName('markImg');
            const countLabel = item.getChildByName('countLabel');
            markImg.visible = countLabel.visible = count > 1;
            countLabel.text = "" + count;
        }
    }

    class OutList extends BaseGameScript {
        constructor() {
            super(...arguments);
            this.currDiscardId = -1;
        }
        onEnable() {
            this.owner.renderHandler = new Laya.Handler(this, this.onRenderItem);
        }
        onDisable() {
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_START_GAME: {
                    this.clearUI();
                    break;
                }
                case CMD.S_USER_EAT:
                case CMD.S_USER_PONG:
                case CMD.S_EXPOSED_KONG: {
                    if (msg.removeTile && this.getViewPos(msg.targetPos) == this.viewPos) {
                        let tiles = this.owner.array;
                        let index = tiles.findIndex(el => el[0] == msg.removeTile);
                        if (index < 0) {
                            break;
                        }
                        let targetImage = this.owner.getCell(index);
                        let showImage = new Laya.Image(this.getSkin(msg.removeTile));
                        showImage.anchorX = showImage.anchorY = 0.5;
                        showImage.width = targetImage.width;
                        showImage.height = targetImage.height;
                        showImage.pos(showImage.width / 2, showImage.height / 2);
                        targetImage.addChild(showImage);
                        let tl = Laya.TimeLine
                            .to(showImage, { scaleX: 1.4, scaleY: 1.4 }, 100)
                            .to(showImage, { scaleX: 1, scaleY: 1 }, 100)
                            .to(showImage, { scaleX: 1.4, scaleY: 1.4 }, 150)
                            .to(showImage, { scaleX: 1, scaleY: 1 }, 150)
                            .to(showImage, { scaleX: 1.4, scaleY: 1.4 }, 100)
                            .to(showImage, { scaleX: 1, scaleY: 1 }, 100);
                        tl.on(Laya.Event.COMPLETE, this, () => {
                            showImage.removeSelf();
                            this.updateUI(msg.targetPos);
                        });
                        tl.play();
                    }
                    break;
                }
                case CMD.S_OUT_TILE: {
                    if (this.getViewPos(msg.pos) == this.viewPos) {
                        this.currDiscardId = msg.tileId;
                        this.updateUI(msg.pos);
                    }
                    break;
                }
            }
        }
        clearUI() {
            this.owner.array = [];
        }
        updateUI(pos) {
            let tiles = this.status.getTileStacks(pos, TileMask.DISCARD);
            if (this.viewPos == SeatMask.SELF || this.viewPos == SeatMask.LEFT) {
                let array = new Array(GameConstants.MAX_OUT - tiles.length).fill([INVALID_TID]);
                this.owner.array = array.concat(tiles.reverse());
            }
            else {
                this.owner.array = tiles;
            }
        }
        onRenderItem(item, index) {
            const [tileId, count] = this.owner.array[index];
            if (tileId == INVALID_TID) {
                item.visible = false;
                return;
            }
            item.visible = true;
            item.skin = this.getSkin(tileId);
            const flagImage = item.getChildByName('flagImage');
            const countLabel = item.getChildByName('countLabel');
            flagImage.visible = countLabel.visible = count > 1;
            countLabel.text = "" + count;
            const markImage = item.getChildByName('markImage');
            markImage.visible = tileId == this.currDiscardId;
        }
        getSkin(tileId) {
            return `game/${this.viewPos == 0 ? 2 : this.viewPos}/mingmah_${tileId}.png`;
        }
    }

    class SelfTileTouchScript extends Laya.Script {
        constructor() {
            super(...arguments);
            this.isTouchDown = false;
        }
        set tildId(tid) {
            this._tileId = tid;
            this.isTouchDown = false;
            this.owner.y = 0;
        }
        onEnable() {
            GameEvent.on(GameEvent.ON_TILE_SELECTED, this, sender => {
                if (this.isTouchDown && sender != this) {
                    this.owner.y = 0;
                }
            });
        }
        onDisable() {
            GameEvent.offAllCaller(this);
        }
        onClick() {
            if (!GameController.isMyTurn()) {
                return;
            }
            if (this._tileId == GameUI.controller.status.joker) {
                return;
            }
            if (this.isTouchDown) {
                this.isTouchDown = false;
                Net.Room.sendCommand(CMD.C_OUT_TILE, { tileId: this._tileId });
            }
            else {
                this.isTouchDown = true;
                this.owner.y = -20;
                GameEvent.event(GameEvent.ON_TILE_SELECTED, this);
            }
        }
    }

    class EatList extends BaseGameScript {
        onEnable() {
            this.owner.renderHandler = new Laya.Handler(this, this.onRenderItem);
            Net.Room.add(ROUTE_ROOM_COMMAND, this, (data) => {
                this.onRoomCommand(data.cmd, data.msg);
            });
        }
        onDisable() {
            GameEvent.offAllCaller(this);
        }
        onRoomCommand(cmd, msg) {
            switch (cmd) {
                case CMD.S_START_GAME: {
                    this.clearUI();
                    break;
                }
                case CMD.S_EXPOSED_KONG:
                case CMD.S_CONCEALED_KONG:
                case CMD.S_USER_EAT:
                case CMD.S_USER_PONG: {
                    if (this.getViewPos(msg.pos) == this.viewPos) {
                        this.updateUI(msg.pos);
                    }
                    break;
                }
            }
        }
        clearUI() {
            this.owner.array = [];
        }
        updateUI(pos) {
            let tiles = [];
            [TileMask.EXPOSED_KONG, TileMask.CONCEALED_KONG].forEach(el => {
                let kongTiles = this.status.getTiles(pos, el);
                for (let i = 0; i < kongTiles.length / 4; i++) {
                    tiles.push(kongTiles.slice(i * 4, i * 4 + 4));
                }
            });
            let eatTiles = this.status.getTiles(pos, TileMask.CHOW_PONG);
            for (let i = 0; i < eatTiles.length / 3; i++) {
                tiles.push(eatTiles.slice(i * 3, i * 3 + 3));
            }
            if (this.viewPos == SeatMask.RIGHT || this.viewPos == SeatMask.TOP) {
                let array = new Array(GameConstants.MAX_EAT - tiles.length).fill([INVALID_TID]);
                this.owner.array = array.concat(tiles);
            }
            else {
                this.owner.array = tiles;
            }
        }
        onRenderItem(item, index) {
            const tids = this.owner.array[index];
            if (tids[0] == INVALID_TID) {
                item.visible = false;
                return;
            }
            item.visible = true;
            for (let i = 0; i < 3; i++) {
                let tid = tids[i];
                let img = item.getChildAt(i);
                let img2 = img.getChildAt(0);
                if (i == 1) {
                    if (tids.length == 3) {
                        img2.visible = false;
                    }
                    else {
                        img2.visible = true;
                        img2.skin = this.getSkin(tid);
                    }
                }
                img.skin = this.getSkin(tid);
            }
        }
        getSkin(tid) {
            return `game/${this.viewPos == 0 ? 2 : this.viewPos}/mingmah_${('00' + tid).slice(-2)}.png`;
        }
    }

    class IndexUI extends ui.index.IndexUI {
        constructor() {
            super();
        }
        onAwake() {
            this.btnQuickStart.on(Laya.Event.CLICK, this, this.onQuickStartClick);
            this.timer.once(10, this, this.loginLobby);
        }
        onEnable() {
        }
        onQuickStartClick() {
            Laya.Scene.showLoadingPage();
            Net.Room.init({
                host: "192.168.1.5",
                port: "3011"
            }, () => {
                Net.Room.request('game.roomHandler.entry', { isRobot: 0, name: "alex1", auth: this.auth }, (resp) => {
                    console.warn('game entry:', JSON.stringify(resp));
                    if (resp.code && resp.code == 200) {
                        Net.Room.request('game.roomHandler.join', {}, (resp) => {
                            console.warn('join resp:', JSON.stringify(resp));
                            Laya.Scene.hideLoadingPage();
                            if (resp.status) {
                                Laya.Scene.open(ViewType.GameView, true, resp);
                            }
                        });
                    }
                });
            });
        }
        loginLobby() {
            Laya.Scene.showLoadingPage();
            Net.Login.init({
                host: "192.168.1.5",
                port: "3010"
            }, () => {
                Net.Login.request('login.loginHandler.entry', { name: "alex1", password: "123" }, (resp) => {
                    Laya.Scene.hideLoadingPage();
                    console.warn('login resp:', JSON.stringify(resp));
                    this.auth = resp.auth;
                });
            });
        }
    }

    class FullScreen extends Laya.Script {
        set owner(value) {
            this._owner = value;
            if (value) {
                value.width = Laya.stage.width;
                value.height = Laya.stage.height;
            }
        }
        get owner() {
            return this._owner;
        }
    }

    class ResultDialogUI extends ui.popup.ResultDialogUI {
        constructor() {
            super();
        }
        onAwake() {
            this.btnQuit.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.close(ViewType.ResultDialog);
                Laya.Scene.open(ViewType.IndexView);
            });
            this.btnContinue.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.close(ViewType.ResultDialog);
            });
            this.lstTile.renderHandler = new Laya.Handler(this, this.onRenderTile);
            this.lstPlayer.renderHandler = new Laya.Handler(this, this.onRenderPlayer);
        }
        onOpened(param) {
            this.lstTile.array = param.handTiles;
            this.lstPlayer.array = new Array(4).fill(param);
        }
        onRenderTile(item, index) {
            item.skin = `game/2/mingmah_${item.dataSource}.png`;
        }
        onRenderPlayer(item, index) {
            const status = GameUI.controller.status;
            const bankerImage = item.getChildByName("bankerImage");
            const nameLabel = item.getChildByName("nameLabel");
            const scoreLabel = item.getChildByName("scoreLabel");
            bankerImage.visible = index == status.bankerPos;
            nameLabel.text = status.getSeat(index).uid;
            if (index == item.dataSource.pos) {
                scoreLabel.gray = false;
                scoreLabel.value = `+${item.dataSource.score}`;
            }
            else {
                scoreLabel.gray = true;
                scoreLabel.value = `-${item.dataSource.score / 3}`;
            }
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/game/ActionEffectLayer.ts", ActionEffectLayer);
            reg("script/game/ActionMenu.ts", ActionMenu);
            reg("script/game/DiceLayer.ts", DiceLayer);
            reg("script/game/EatOptionLayer.ts", EatOptionLayer);
            reg("script/GameUI.ts", GameUI);
            reg("script/GameController.ts", GameController);
            reg("script/game/tile/JokerScript.ts", JokerScript);
            reg("script/game/TimePointLayer.ts", TimePointLayer);
            reg("script/game/ShowOutLayer.ts", ShowOutLayer);
            reg("script/game/tileLayer/TileLayerSelf.ts", TileLayerSelf);
            reg("script/game/tileLayer/FlowerList.ts", FlowerList);
            reg("script/game/tileLayer/OutList.ts", OutList);
            reg("script/game/tile/SelfTileTouchScript.ts", SelfTileTouchScript);
            reg("script/game/tileLayer/EatList.ts", EatList);
            reg("script/game/tileLayer/TileLayer.ts", TileLayer);
            reg("script/IndexUI.ts", IndexUI);
            reg("FullScreen.ts", FullScreen);
            reg("script/popup/ResultDialogUI.ts", ResultDialogUI);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "index/Index.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Laya.Scene.load("LoadingView.scene", Laya.Handler.create(null, () => {
                Laya.Scene.setLoadingPage(new ui.LoadingViewUI());
                GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
            }));
        }
    }
    class MyButton extends Laya.Button {
        constructor() {
            super();
            this.imgZoomOut = null;
            this.on(Laya.Event.MOUSE_DOWN, this, this.onmousedown);
            this.on(Laya.Event.MOUSE_UP, this, this.onmouseup);
            this.on(Laya.Event.MOUSE_OUT, this, this.onmouseup);
        }
        onmousedown() {
            this.imgZoomOut = new Laya.Image(this.skin);
            let scaleFactor = 1.05;
            this.imgZoomOut.scale(scaleFactor, scaleFactor, true);
            this.imgZoomOut.pos(-(this.width * scaleFactor - this.width) / 2, -(this.height * scaleFactor - this.height) / 2);
            this.addChild(this.imgZoomOut);
            this.text.removeSelf();
            this.addChild(this.text);
        }
        onmouseup() {
            if (this.imgZoomOut) {
                this.imgZoomOut.removeSelf();
                this.imgZoomOut = null;
            }
        }
    }
    Laya.View.regComponent("Button", MyButton);
    new Main();

}());
//# sourceMappingURL=bundle.js.map
