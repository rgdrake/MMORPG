class Entity3D{
    constructor(options){
        Object.assign(this,options);
    }
    texture(_) {
        if(_) {
            this._texture = _;
            if(this._material){
                this._material.map = this._texture;
                this._material.needsUpdateOrWhatever
            }
            return this;
        }
        return this._texture;
    }
    material(_) {
        if(_) {
            this._material = _;
            return this;
        }
        return this._material;
    }
    geometry(_) {
        if(_) {
            this._geometry = _;
            return this;
        }
        return this._geometry;
    }
    mesh(_) {
        if(_) {
            this._mesh = _;
            return this;
        }
        return this._mesh;
    }
}