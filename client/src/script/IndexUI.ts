import { ui } from "../ui/layaMaxUI";
import Net from "../net/Net";
import ViewType from "../game/ViewDefine";

export default class IndexUI extends ui.index.IndexUI {
    private auth: string;
    constructor() {
        super();
    }

    onAwake(): void {
        this.btnQuickStart.on(Laya.Event.CLICK, this, this.onQuickStartClick);
        this.timer.once(10, this, this.loginLobby);
    }

    onEnable(): void {

    }

    private onQuickStartClick() {
        Laya.Scene.showLoadingPage();

        Net.Room.init({
            host: "192.168.1.5",
            port: "3011"
        }, () => {
            Net.Room.request('game.roomHandler.entry', { isRobot: 0, name: "alex1", auth: this.auth }, (resp: any) => {
                console.warn('game entry:', JSON.stringify(resp));
                if (resp.code && resp.code == 200) {
                    Net.Room.request('game.roomHandler.join', {}, (resp: any) => {
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

    private loginLobby() {
        Laya.Scene.showLoadingPage();

        Net.Login.init({
            host: "192.168.1.5",
            port: "3010"
        }, () => {
            Net.Login.request('login.loginHandler.entry', { name: "alex1", password: "123" }, (resp: any) => {
                Laya.Scene.hideLoadingPage();
                console.warn('login resp:', JSON.stringify(resp));
                this.auth = resp.auth;
            });
        });
    }
}