//const { Player } = require("../player/player.js");

class CombatSystem {
	d20() {
		let min = 1;
		let max = 20;

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	fight(mob1, mob2) {
		if (this.d20() > 10) {
			mob2.dead = true;
		} else {
			mob1.dead = true;
		}

	}

}
}