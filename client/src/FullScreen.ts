
export default class FullScreen extends Laya.Script {
    private _owner: any;
    public set owner(value: Laya.Sprite) {
        this._owner = value;
        if (value) {
            value.width = Laya.stage.width;
            value.height = Laya.stage.height;
        }
    }

    public get owner() {
        return this._owner;
    }
}