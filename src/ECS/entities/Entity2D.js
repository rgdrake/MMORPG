class Entity2D{
    constructor(options){
        this._animation = {};
        Object.assign(this,options);
    }
    setAnimation(name="idle",offsetX=0,offsetY=0,frameCount=1,reverseOnEnd=false) {
        this._animation[name] = {
            offsetX,
            offsetY,
            frameCount,
            reverseOnEnd
        };
        return this;
    }
    playAnimation(name) {
        // TODO
    }
}