/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.game {
    export class ActionEffectLayerUI extends Laya.View {
		public actionStack:Laya.ViewStack;
        public static  uiView:any ={"type":"View","props":{"width":1920,"runtime":"script/game/ActionEffectLayer.ts","height":1080},"compId":2,"child":[{"type":"ViewStack","props":{"y":10,"x":10,"var":"actionStack","top":0,"right":0,"left":0,"bottom":0},"compId":3,"child":[{"type":"Image","props":{"skin":"game/bu.png","name":"item0","centerX":0,"bottom":200},"compId":4},{"type":"Image","props":{"skin":"game/bu.png","right":200,"name":"item1","centerY":0},"compId":5},{"type":"Image","props":{"y":150,"skin":"game/bu.png","name":"item2","centerX":0},"compId":6},{"type":"Image","props":{"x":200,"skin":"game/bu.png","name":"item3","centerY":0},"compId":7}]}],"loadList":["game/bu.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(ActionEffectLayerUI.uiView);
        }
    }
    REG("ui.game.ActionEffectLayerUI",ActionEffectLayerUI);
    export class ActionMenuUI extends Laya.View {
		public lstAction:Laya.List;
        public static  uiView:any ={"type":"View","props":{"width":1920,"runtime":"script/game/ActionMenu.ts","height":1080},"compId":2,"child":[{"type":"Panel","props":{"top":0,"right":0,"left":0,"bottom":0,"bgColor":"#000000","alpha":0.2},"compId":12},{"type":"List","props":{"y":10,"width":1540,"var":"lstAction","spaceX":10,"right":50,"repeatX":5,"height":300,"bottom":200},"compId":3,"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"name":"render","height":300},"compId":4,"child":[{"type":"Button","props":{"stateNum":1,"skin":"game/chi.png","centerX":0,"bottom":0},"compId":5}]}]}],"loadList":["game/chi.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(ActionMenuUI.uiView);
        }
    }
    REG("ui.game.ActionMenuUI",ActionMenuUI);
    export class DiceLayerUI extends Laya.View {
		public aniDice:Laya.FrameAnimation;
		public boxAni:Laya.Box;
		public lstDice:Laya.List;
        public static  uiView:any ={"type":"View","props":{"width":1920,"runtime":"script/game/DiceLayer.ts","height":1080},"compId":2,"child":[{"type":"Box","props":{"width":0,"var":"boxAni","height":0,"centerY":-70,"centerX":-85},"compId":4,"child":[{"type":"Image","props":{"skin":"game/shaiziAnim/shaizi_anmi1.png"},"compId":7}]},{"type":"List","props":{"width":164,"var":"lstDice","spaceX":40,"repeatY":1,"repeatX":2,"height":72,"centerY":25,"centerX":0},"compId":5,"child":[{"type":"Image","props":{"width":62,"skin":"game/shaiziAnim/shaizi1.png","name":"render","height":72},"compId":6}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":35},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":45},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":50}],"skin":[{"value":"game/shaiziAnim/shaizi_anmi1.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":0},{"value":"game/shaiziAnim/shaizi_anmi2.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":5},{"value":"game/shaiziAnim/shaizi_anmi3.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":10},{"value":"game/shaiziAnim/shaizi_anmi4.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":15},{"value":"game/shaiziAnim/shaizi_anmi5.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":20},{"value":"game/shaiziAnim/shaizi_anmi6.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":25},{"value":"game/shaiziAnim/shaizi_anmi7.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":30},{"value":"game/shaiziAnim/shaizi_anmi11.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":35},{"value":"game/shaiziAnim/shaizi_anmi8.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":40},{"value":"game/shaiziAnim/shaizi_anmi9.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":45},{"value":"game/shaiziAnim/shaizi_anmi10.png","tweenMethod":"linearNone","tween":false,"target":7,"key":"skin","index":50}]}}],"name":"aniDice","id":1,"frameRate":60,"action":0}],"loadList":["game/shaiziAnim/shaizi_anmi1.png","game/shaiziAnim/shaizi1.png","game/shaiziAnim/shaizi_anmi2.png","game/shaiziAnim/shaizi_anmi3.png","game/shaiziAnim/shaizi_anmi4.png","game/shaiziAnim/shaizi_anmi5.png","game/shaiziAnim/shaizi_anmi6.png","game/shaiziAnim/shaizi_anmi7.png","game/shaiziAnim/shaizi_anmi11.png","game/shaiziAnim/shaizi_anmi8.png","game/shaiziAnim/shaizi_anmi9.png","game/shaiziAnim/shaizi_anmi10.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(DiceLayerUI.uiView);
        }
    }
    REG("ui.game.DiceLayerUI",DiceLayerUI);
    export class EatOptionLayerUI extends Laya.View {
		public optStack:Laya.ViewStack;
		public lst1:Laya.List;
		public lst2:Laya.List;
		public lst3:Laya.List;
		public lst4:Laya.List;
		public lst5:Laya.List;
        public static  uiView:any ={"type":"View","props":{"width":1920,"runtime":"script/game/EatOptionLayer.ts","height":1080},"compId":2,"child":[{"type":"Panel","props":{"top":0,"right":0,"left":0,"bottom":0,"bgColor":"#000000","alpha":0.2},"compId":14},{"type":"ViewStack","props":{"y":712,"width":848,"var":"optStack","selectedIndex":1,"height":154,"centerX":0},"compId":16,"child":[{"type":"Image","props":{"y":0,"width":566,"visible":false,"skin":"game/GoldBack.png","sizeGrid":"16,17,15,20","name":"item0","height":154,"centerX":0},"compId":3,"child":[{"type":"List","props":{"y":10,"x":10,"width":263,"var":"lst1","spaceX":-2,"space":12,"repeatX":3,"name":"0","height":135,"align":"top"},"compId":4,"child":[{"type":"Image","props":{"width":89,"skin":"game/2/handmah_12.png","name":"render","height":135},"compId":5}]},{"type":"List","props":{"y":9.5,"x":292,"width":263,"var":"lst2","spaceX":-2,"space":12,"repeatX":3,"name":"1","height":135,"align":"top"},"compId":10,"child":[{"type":"Image","props":{"width":89,"skin":"game/2/handmah_12.png","name":"render","height":135},"compId":11}]}]},{"type":"Image","props":{"width":848,"visible":false,"skin":"game/GoldBack.png","sizeGrid":"16,17,15,20","name":"item1","height":154,"centerX":0},"compId":17,"child":[{"type":"List","props":{"y":10,"x":10,"width":263,"var":"lst3","spaceX":-2,"space":12,"repeatX":3,"name":"0","height":135,"align":"top"},"compId":18,"child":[{"type":"Image","props":{"width":89,"skin":"game/2/handmah_12.png","name":"render","height":135},"compId":19}]},{"type":"List","props":{"y":9.5,"x":292,"width":263,"var":"lst4","spaceX":-2,"space":12,"repeatX":3,"name":"1","height":135,"align":"top"},"compId":20,"child":[{"type":"Image","props":{"width":89,"skin":"game/2/handmah_12.png","name":"render","height":135},"compId":21}]},{"type":"List","props":{"y":9.5,"x":574,"width":263,"var":"lst5","spaceX":-2,"space":12,"repeatX":3,"name":"2","height":135,"align":"top"},"compId":22,"child":[{"type":"Image","props":{"width":89,"skin":"game/2/handmah_12.png","name":"render","height":135},"compId":23}]}]}]}],"loadList":["game/GoldBack.png","game/2/handmah_12.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(EatOptionLayerUI.uiView);
        }
    }
    REG("ui.game.EatOptionLayerUI",EatOptionLayerUI);
    export class GameUI extends Laya.View {
		public btnExit:Laya.Button;
		public btnSetting:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/Game");
        }
    }
    REG("ui.game.GameUI",GameUI);
    export class ShowOutLayerUI extends Laya.View {
		public tileStack:Laya.ViewStack;
        public static  uiView:any ={"type":"View","props":{"width":1920,"runtime":"script/game/ShowOutLayer.ts","height":1080},"compId":2,"child":[{"type":"ViewStack","props":{"width":200,"var":"tileStack","selectedIndex":0,"height":200,"centerY":-45,"centerX":0},"compId":3,"child":[{"type":"Image","props":{"y":220,"width":113,"skin":"game/handmah_mask.png","name":"item0","height":162,"centerX":0},"compId":4,"child":[{"type":"Image","props":{"x":0,"width":89,"skin":"game/2/mingmah_31.png","height":135,"centerY":0,"centerX":0},"compId":10}]},{"type":"Image","props":{"y":30,"x":450,"width":113,"skin":"game/handmah_mask.png","name":"item1","height":162},"compId":5,"child":[{"type":"Image","props":{"y":0,"x":0,"width":89,"skin":"game/2/mingmah_31.png","height":135,"centerY":0,"centerX":0},"compId":11}]},{"type":"Image","props":{"y":-180,"width":113,"skin":"game/handmah_mask.png","name":"item2","height":162,"centerX":0},"compId":6,"child":[{"type":"Image","props":{"y":0,"x":0,"width":89,"skin":"game/2/mingmah_31.png","height":135,"centerY":0,"centerX":0},"compId":12}]},{"type":"Image","props":{"y":30,"x":-400,"width":113,"skin":"game/handmah_mask.png","name":"item3","height":162},"compId":7,"child":[{"type":"Image","props":{"y":0,"x":0,"width":89,"skin":"game/2/mingmah_31.png","height":135,"centerY":0,"centerX":0},"compId":13}]}]}],"loadList":["game/handmah_mask.png","game/2/mingmah_31.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(ShowOutLayerUI.uiView);
        }
    }
    REG("ui.game.ShowOutLayerUI",ShowOutLayerUI);
    export class TileLayer0UI extends Laya.View {
		public lstFlower:Laya.List;
		public lstOut:Laya.List;
		public lstHand:Laya.List;
		public imgDiscard:Laya.Image;
		public lstEat:Laya.List;
        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"compId":2,"child":[{"type":"Script","props":{"viewPos":0,"runtime":"script/game/tileLayer/TileLayerSelf.ts"},"compId":18},{"type":"List","props":{"width":1025,"var":"lstFlower","spaceX":-1,"repeatY":1,"repeatX":16,"height":98,"centerX":12,"bottom":160},"compId":19,"child":[{"type":"Image","props":{"width":65,"skin":"game/2/mingmah_41.png","name":"render","height":98},"compId":20,"child":[{"type":"Image","props":{"y":0,"x":0,"width":65,"skin":"game/flag_2.png","name":"markImg","height":98},"compId":41},{"type":"Label","props":{"y":1,"text":"2","right":4,"name":"countLabel","fontSize":20,"color":"#ffffff"},"compId":21}]},{"type":"Script","props":{"viewPos":0,"vid":0,"runtime":"script/game/tileLayer/FlowerList.ts"},"compId":27}]},{"type":"List","props":{"x":479,"width":1025,"var":"lstOut","spaceX":-1,"repeatY":1,"repeatX":16,"height":98,"centerX":12,"bottom":260},"compId":22,"child":[{"type":"Image","props":{"width":65,"skin":"game/2/mingmah_41.png","name":"render","height":98},"compId":23,"child":[{"type":"Image","props":{"y":0,"x":0,"width":65,"skin":"game/flag_2.png","name":"flagImage","height":98},"compId":39},{"type":"Label","props":{"y":1,"text":"2","right":4,"name":"countLabel","fontSize":20,"color":"#ffffff"},"compId":24},{"type":"Image","props":{"y":-18,"x":16.5,"skin":"game/biaoji.png","name":"markImage"},"compId":43}]},{"type":"Script","props":{"viewPos":0,"vid":0,"runtime":"script/game/tileLayer/OutList.ts"},"compId":28}]},{"type":"List","props":{"x":310,"width":1362,"var":"lstHand","spaceX":-2,"selectEnable":false,"repeatY":1,"repeatX":16,"hitTestPrior":false,"height":135,"bottom":15},"compId":5,"child":[{"type":"Image","props":{"width":87,"skin":"game/2/handmah_11.png","name":"render","mouseEnabled":true,"height":135},"compId":25,"child":[{"type":"Script","props":{"runtime":"script/game/tile/SelfTileTouchScript.ts"},"compId":31}]},{"type":"Image","props":{"y":0,"width":87,"var":"imgDiscard","skin":"game/2/handmah_11.png","right":-130,"mouseEnabled":true,"height":135},"compId":26,"child":[{"type":"Script","props":{"runtime":"script/game/tile/SelfTileTouchScript.ts"},"compId":29}]}]},{"type":"List","props":{"y":944,"x":310,"width":1280,"var":"lstEat","repeatX":5,"mouseEnabled":false,"height":121,"bottom":15},"compId":32,"child":[{"type":"HBox","props":{"y":0,"x":0,"width":256,"space":-3,"name":"render","height":121,"align":"bottom"},"compId":37,"child":[{"type":"Image","props":{"x":0,"width":80,"skin":"game/2/mingmah_39.png","height":121},"compId":33},{"type":"Image","props":{"x":80,"width":80,"skin":"game/2/mingmah_39.png","height":121},"compId":34,"child":[{"type":"Image","props":{"y":-25,"x":0,"width":80,"skin":"game/2/mingmah_39.png","height":121},"compId":42}]},{"type":"Image","props":{"y":0,"x":160,"width":80,"skin":"game/2/mingmah_39.png","height":121},"compId":35}]},{"type":"Script","props":{"viewPos":0,"vid":0,"runtime":"script/game/tileLayer/EatList.ts"},"compId":38}]}],"loadList":["game/2/mingmah_41.png","game/flag_2.png","game/biaoji.png","game/2/handmah_11.png","game/2/mingmah_39.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(TileLayer0UI.uiView);
        }
    }
    REG("ui.game.TileLayer0UI",TileLayer0UI);
    export class TileLayer1UI extends Laya.View {
		public lstHand:Laya.List;
		public imgDiscard:Laya.Image;
		public lstFlower:Laya.List;
		public lstOut:Laya.List;
		public lstEat:Laya.List;
        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"compId":2,"child":[{"type":"List","props":{"y":269,"width":36,"var":"lstHand","spaceY":-44,"right":200,"repeatY":16,"repeatX":1,"height":588},"compId":6,"child":[{"type":"Image","props":{"y":1,"x":0,"width":36,"skin":"game/hand_1.png","name":"render","height":78},"compId":289},{"type":"Image","props":{"y":-79,"x":0,"width":36,"var":"imgDiscard","skin":"game/hand_1.png","height":78},"compId":290}]},{"type":"List","props":{"width":62,"var":"lstFlower","spaceY":-20,"right":260,"repeatY":16,"repeatX":1,"height":564,"centerY":0},"compId":292,"child":[{"type":"Image","props":{"width":62,"skin":"game/1/mingmah_41.png","name":"render","height":54},"compId":293,"child":[{"type":"Image","props":{"y":0,"x":0,"width":62,"skin":"game/flag_1.png","name":"markImg","height":54},"compId":325},{"type":"Label","props":{"y":12,"x":4,"valign":"middle","text":"2","rotation":-90,"name":"countLabel","fontSize":19,"color":"#ffffff","align":"center"},"compId":294}]},{"type":"Script","props":{"viewPos":1,"vid":1,"runtime":"script/game/tileLayer/FlowerList.ts"},"compId":304}]},{"type":"List","props":{"y":0,"width":62,"var":"lstOut","spaceY":-20,"right":325,"repeatY":16,"repeatX":1,"height":564,"centerY":0},"compId":301,"child":[{"type":"Image","props":{"width":62,"skin":"game/1/mingmah_41.png","name":"render","height":54},"compId":302,"child":[{"type":"Image","props":{"y":0,"x":0,"width":62,"skin":"game/flag_1.png","name":"flagImage","height":54},"compId":326},{"type":"Label","props":{"y":12,"x":4,"valign":"middle","text":"2","rotation":-90,"name":"countLabel","fontSize":19,"color":"#ffffff","align":"center"},"compId":303},{"type":"Image","props":{"y":-19.5,"x":31,"skin":"game/biaoji.png","name":"markImage"},"compId":328}]},{"type":"Script","props":{"viewPos":1,"vid":1,"runtime":"script/game/tileLayer/OutList.ts"},"compId":305}]},{"type":"List","props":{"y":350,"x":1685,"width":54,"var":"lstEat","spaceY":0,"repeatY":5,"height":510},"compId":307,"child":[{"type":"VBox","props":{"y":0,"x":0,"width":54,"space":-18,"name":"render","height":102,"align":"left"},"compId":308,"child":[{"type":"Image","props":{"y":0,"x":0,"width":54,"skin":"game/1/mingmah_41.png","height":47},"compId":309},{"type":"Image","props":{"y":30,"x":0,"width":54,"skin":"game/1/mingmah_41.png","height":47},"compId":310,"child":[{"type":"Image","props":{"y":-15,"x":0,"width":54,"skin":"game/1/mingmah_41.png","height":47},"compId":327}]},{"type":"Image","props":{"y":60,"x":0,"width":54,"skin":"game/1/mingmah_41.png","height":47},"compId":311}]},{"type":"Script","props":{"viewPos":1,"vid":1,"runtime":"script/game/tileLayer/EatList.ts"},"compId":312}]},{"type":"Script","props":{"viewPos":1,"runtime":"script/game/tileLayer/TileLayer.ts"},"compId":324}],"loadList":["game/hand_1.png","game/1/mingmah_41.png","game/flag_1.png","game/biaoji.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(TileLayer1UI.uiView);
        }
    }
    REG("ui.game.TileLayer1UI",TileLayer1UI);
    export class TileLayer2UI extends Laya.View {
		public lstHand:Laya.List;
		public imgDiscard:Laya.Image;
		public lstFlower:Laya.List;
		public lstOut:Laya.List;
		public lstEat:Laya.List;
        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"compId":2,"child":[{"type":"List","props":{"y":38,"x":570,"width":837,"var":"lstHand","spaceX":-5,"repeatY":1,"repeatX":16,"height":83},"compId":5,"child":[{"type":"Image","props":{"width":57,"skin":"game/hand_2.png","name":"render","height":83},"compId":12},{"type":"Image","props":{"y":0,"x":-70,"width":57,"var":"imgDiscard","skin":"game/hand_2.png","height":83},"compId":13}]},{"type":"List","props":{"y":126,"width":833,"var":"lstFlower","spaceX":-1,"repeatY":1,"repeatX":16,"height":80,"centerX":0},"compId":14,"child":[{"type":"Image","props":{"width":53,"skin":"game/2/mingmah_41.png","name":"render","height":80},"compId":16,"child":[{"type":"Image","props":{"y":0,"x":0,"width":53,"skin":"game/flag_2.png","name":"markImg","height":80},"compId":34},{"type":"Label","props":{"text":"2","right":3,"name":"countLabel","fontSize":18,"color":"#ffffff"},"compId":17}]},{"type":"Script","props":{"viewPos":2,"vid":2,"runtime":"script/game/tileLayer/FlowerList.ts"},"compId":23}]},{"type":"List","props":{"y":206,"x":0,"width":833,"var":"lstOut","spaceX":-1,"repeatY":1,"repeatX":16,"height":80,"centerX":0},"compId":20,"child":[{"type":"Image","props":{"width":53,"skin":"game/2/mingmah_41.png","name":"render","height":80},"compId":21,"child":[{"type":"Image","props":{"y":0,"x":0,"width":53,"skin":"game/flag_2.png","name":"flagImage","height":80},"compId":35},{"type":"Label","props":{"text":"2","right":3,"name":"countLabel","fontSize":18,"color":"#ffffff"},"compId":22},{"type":"Image","props":{"y":-21,"x":10.5,"skin":"game/biaoji.png","name":"markImage"},"compId":37}]},{"type":"Script","props":{"viewPos":2,"vid":2,"runtime":"script/game/tileLayer/OutList.ts"},"compId":24}]},{"type":"List","props":{"y":46,"x":637,"width":810,"var":"lstEat","scaleY":0.96,"scaleX":0.96,"repeatX":5,"height":76},"compId":25,"child":[{"type":"HBox","props":{"width":162,"name":"render","height":76},"compId":26,"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"skin":"game/2/mingmah_39.png","height":76},"compId":27},{"type":"Image","props":{"y":0,"x":52,"width":50,"skin":"game/2/mingmah_39.png","height":76},"compId":31,"child":[{"type":"Image","props":{"y":-16,"x":0,"width":50,"skin":"game/2/mingmah_39.png","height":76},"compId":36}]},{"type":"Image","props":{"y":0,"x":104,"width":50,"skin":"game/2/mingmah_39.png","height":76},"compId":32}]},{"type":"Script","props":{"viewPos":2,"vid":2,"runtime":"script/game/tileLayer/EatList.ts"},"compId":30}]},{"type":"Script","props":{"viewPos":2,"runtime":"script/game/tileLayer/TileLayer.ts"},"compId":33}],"loadList":["game/hand_2.png","game/2/mingmah_41.png","game/flag_2.png","game/biaoji.png","game/2/mingmah_39.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(TileLayer2UI.uiView);
        }
    }
    REG("ui.game.TileLayer2UI",TileLayer2UI);
    export class TileLayer3UI extends Laya.View {
		public lstEat:Laya.List;
		public lstHand:Laya.List;
		public imgDiscard:Laya.Image;
		public lstFlower:Laya.List;
		public lstOut:Laya.List;
        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"compId":2,"child":[{"type":"Script","props":{"y":0,"x":0,"viewPos":3,"runtime":"script/game/tileLayer/TileLayer.ts"},"compId":36},{"type":"List","props":{"y":190,"x":176,"width":54,"var":"lstEat","spaceY":0,"repeatY":5,"height":510},"compId":30,"child":[{"type":"VBox","props":{"y":0,"x":0,"width":54,"space":-18,"name":"render","height":102,"align":"left"},"compId":31,"child":[{"type":"Image","props":{"y":0,"x":0,"width":54,"skin":"game/3/mingmah_41.png","height":47},"compId":32},{"type":"Image","props":{"y":30,"x":0,"width":54,"skin":"game/3/mingmah_41.png","height":47},"compId":33,"child":[{"type":"Image","props":{"y":-15,"x":0,"width":54,"skin":"game/3/mingmah_41.png","height":47},"compId":39}]},{"type":"Image","props":{"y":60,"x":0,"width":54,"skin":"game/3/mingmah_41.png","height":47},"compId":34}]},{"type":"Script","props":{"viewPos":3,"vid":3,"runtime":"script/game/tileLayer/EatList.ts"},"compId":35}]},{"type":"List","props":{"y":192,"x":197,"width":36,"var":"lstHand","spaceY":-44,"repeatY":16,"repeatX":1,"height":608},"compId":12,"child":[{"type":"Image","props":{"y":1,"x":0,"width":36,"skin":"game/hand_3.png","name":"render","height":78},"compId":15},{"type":"Image","props":{"y":589,"x":0,"width":36,"var":"imgDiscard","skin":"game/hand_3.png","height":78},"compId":21}]},{"type":"List","props":{"x":260,"width":62,"var":"lstFlower","spaceY":-20,"repeatY":16,"repeatX":1,"height":564,"centerY":0},"compId":13,"child":[{"type":"Image","props":{"y":1,"x":0,"width":62,"skin":"game/3/mingmah_41.png","name":"render","height":54},"compId":17,"child":[{"type":"Image","props":{"y":0,"x":0,"width":62,"skin":"game/flag_3.png","name":"markImg","height":54},"compId":37},{"type":"Label","props":{"y":19,"x":57,"valign":"middle","text":"2","rotation":90,"name":"countLabel","fontSize":19,"color":"#ffffff","align":"center"},"compId":18}]},{"type":"Script","props":{"y":1,"x":0,"viewPos":3,"vid":3,"runtime":"script/game/tileLayer/FlowerList.ts"},"compId":28}]},{"type":"List","props":{"x":325,"width":62,"var":"lstOut","spaceY":-20,"repeatY":16,"repeatX":1,"height":564,"centerY":0},"compId":25,"child":[{"type":"Image","props":{"width":62,"skin":"game/3/mingmah_41.png","name":"render","height":54},"compId":26,"child":[{"type":"Image","props":{"y":0,"x":0,"width":62,"skin":"game/flag_3.png","name":"flagImage","height":54},"compId":38},{"type":"Label","props":{"y":18,"x":57,"valign":"middle","text":"2","rotation":90,"name":"countLabel","fontSize":19,"color":"#ffffff","align":"center"},"compId":27},{"type":"Image","props":{"y":-19.5,"x":35.56689453125,"skin":"game/biaoji.png","name":"markImage"},"compId":40}]},{"type":"Script","props":{"viewPos":3,"vid":3,"runtime":"script/game/tileLayer/OutList.ts"},"compId":29}]}],"loadList":["game/3/mingmah_41.png","game/hand_3.png","game/flag_3.png","game/biaoji.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(TileLayer3UI.uiView);
        }
    }
    REG("ui.game.TileLayer3UI",TileLayer3UI);
    export class TimePointLayerUI extends Laya.View {
		public lblRemainTile:laya.display.Text;
		public pointStack:Laya.ViewStack;
		public lblCD:Laya.FontClip;
        public static  uiView:any ={"type":"View","props":{"width":1920,"runtime":"script/game/TimePointLayer.ts","height":1080},"compId":2,"child":[{"type":"Text","props":{"y":648,"x":844,"var":"lblRemainTile","text":"牌桌剩余   50  张","fontSize":34,"color":"#2acc77","align":"center","runtime":"laya.display.Text"},"compId":9},{"type":"Image","props":{"width":213,"skin":"game/TimeBack.png","height":213,"centerY":-45,"centerX":0},"compId":12,"child":[{"type":"ViewStack","props":{"width":213,"var":"pointStack","height":213},"compId":14,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"game/TimePoint0.png","name":"item0"},"compId":4},{"type":"Image","props":{"y":0,"x":0,"skin":"game/TimePoint1.png","name":"item1"},"compId":5},{"type":"Image","props":{"y":0,"x":0,"skin":"game/TimePoint2.png","name":"item2"},"compId":6},{"type":"Image","props":{"y":0,"x":0,"skin":"game/TimePoint3.png","name":"item3"},"compId":7}]},{"type":"FontClip","props":{"y":87,"x":77,"var":"lblCD","value":"00","skin":"game/num.png","sheet":"0123456789","align":"center"},"compId":13}]}],"loadList":["game/TimeBack.png","game/TimePoint0.png","game/TimePoint1.png","game/TimePoint2.png","game/TimePoint3.png","game/num.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(TimePointLayerUI.uiView);
        }
    }
    REG("ui.game.TimePointLayerUI",TimePointLayerUI);
}
export module ui.index {
    export class IndexUI extends Laya.View {
		public btnQuickStart:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("index/Index");
        }
    }
    REG("ui.index.IndexUI",IndexUI);
}
export module ui {
    export class LoadingViewUI extends Laya.View {
		public ani1:Laya.FrameAnimation;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("LoadingView");
        }
    }
    REG("ui.LoadingViewUI",LoadingViewUI);
}
export module ui.popup {
    export class ResultDialogUI extends Laya.View {
		public titleViewStack:Laya.ViewStack;
		public lstTile:Laya.List;
		public lstPlayer:Laya.List;
		public btnQuit:Laya.Button;
		public btnContinue:Laya.Button;
        public static  uiView:any ={"type":"View","props":{"runtime":"script/popup/ResultDialogUI.ts","isShowEffect":false,"isPopupCenter":false,"centerY":0,"centerX":0},"compId":2,"child":[{"type":"Panel","props":{"top":0,"right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0,"bgColor":"#000000","alpha":0.5},"compId":3},{"type":"Image","props":{"y":300,"x":510,"width":900,"skin":"game/GameResoultBack.png","sizeGrid":"30,30,40,30","height":480,"centerY":0,"centerX":0},"compId":4,"child":[{"type":"Image","props":{"top":40,"skin":"game/GameResoultBack1.png","sizeGrid":"32,38,46,38","right":16,"left":16,"bottom":20},"compId":5},{"type":"Image","props":{"y":13,"skin":"game/Button_Resoult_Name1.png","sizeGrid":"28,38,10,46","right":15,"left":15},"compId":6},{"type":"ViewStack","props":{"y":-85,"width":531,"var":"titleViewStack","selectedIndex":0,"height":170,"centerX":0},"compId":8,"child":[{"type":"Image","props":{"width":531,"skin":"game/WinBack.png","name":"item0","height":170},"compId":7},{"type":"Image","props":{"y":29,"width":264,"skin":"game/LoseBack.png","name":"item1","height":140,"centerX":0},"compId":9}]},{"type":"Image","props":{"y":85,"skin":"game/GameResoultScoreBack.png","right":25,"left":25,"height":100},"compId":10,"child":[{"type":"List","props":{"y":12,"x":8,"width":834,"var":"lstTile","spaceX":-1,"repeatX":17,"height":76},"compId":11,"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"skin":"game/2/mingmah_21.png","name":"render","height":76},"compId":12}]}]},{"type":"List","props":{"y":194,"x":25,"width":614,"var":"lstPlayer","spaceY":10,"repeatY":4,"repeatX":1,"height":252},"compId":16,"child":[{"type":"Image","props":{"width":614,"skin":"game/GameResoultScoreBack.png","name":"render","height":55},"compId":18,"child":[{"type":"Image","props":{"y":-18.5,"x":-13,"skin":"game/zhuang.png","name":"bankerImage"},"compId":19},{"type":"Label","props":{"y":12.5,"x":31,"text":"玩家1 ","name":"nameLabel","fontSize":30,"font":"SimHei","color":"#865F3C"},"compId":20},{"type":"FontClip","props":{"y":7,"value":"+9998","skin":"game/score.png","sheet":"+-0123456789","right":30,"name":"scoreLabel","height":42,"align":"left"},"compId":21}]}]},{"type":"Image","props":{"y":194,"x":648,"width":227,"skin":"game/GameResoultScoreBack.png","height":252},"compId":17},{"type":"HBox","props":{"y":480,"space":100,"centerX":0},"compId":24,"child":[{"type":"Button","props":{"var":"btnQuit","stateNum":1,"skin":"game/btn_desk1.png","labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"退出"},"compId":22},{"type":"Button","props":{"x":368,"var":"btnContinue","stateNum":1,"skin":"game/btn_desk2.png","labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"再来一局"},"compId":23}]}]},{"type":"Script","props":{"runtime":"FullScreen.ts"},"compId":25}],"loadList":["game/GameResoultBack.png","game/GameResoultBack1.png","game/Button_Resoult_Name1.png","game/WinBack.png","game/LoseBack.png","game/GameResoultScoreBack.png","game/2/mingmah_21.png","game/zhuang.png","game/score.png","game/btn_desk1.png","game/btn_desk2.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(ResultDialogUI.uiView);
        }
    }
    REG("ui.popup.ResultDialogUI",ResultDialogUI);
}