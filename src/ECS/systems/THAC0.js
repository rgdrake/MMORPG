const THAC0 = {
    attack(attacker, target, method) {
        let damage = 0;
        console.group(`${attacker.name} uses ${method.name} to attack ${target.name}`);
        const roll = RandomDice.roll(1,20);
        const isHit = roll - attacker.THAC0 < target.AC;
        if(isHit) { // evidently the lower AC is... the harder to hit? NWN was the opposite (IIRC)
            console.groupCollapsed(`The attack hits... calculating damage...`);
            console.log('initial damage === ',damage);
            damage = weapon.calculateDamage(attacker, target);
            console.log('after weapon.calculateDamage === ',damage);
            if(damage < 1) {
                damage = 1;
            }
            console.groupEnd();
            target.HEALTH -= damage;
            console.log(`${target.name} takes ${damage} damage`);
            if(target.HEALTH <= 0) {
                console.log(`${target.name} dies.`);
                attacker.calculateRewards(target);
            }
        } else {
            console.log(`${attacker.name} misses`);
        }
        console.groupEnd();
    },
}