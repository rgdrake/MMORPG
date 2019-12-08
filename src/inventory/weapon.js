import * as Item from './item';

class Weapon extends Item {
    constructor(name, wei, damage) {
        super(name, wei);
        this.damage = damage;
    }
}

class Sword extends Weapon {
    constructor() {
        super("Sword", 3, 6);
    }
}

