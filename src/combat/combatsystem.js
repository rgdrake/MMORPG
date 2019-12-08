class CombatSystem {
    constructor(mob1, mob2) {
        this.mob1 = mob1;   //but what if it's 1 player vs a bunch of mobs?
        this.mob2 = mob2;
    }

    d20() {
        let min = 1;
        let max = 20;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    fight() {
        
    }
}