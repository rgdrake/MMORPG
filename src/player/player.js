const { Sword } = require('../inventory/weapon.js');
const { Dice } = require('../dice/randomedice');

class Player {
	constructor() {
		this.name = "";
		this.stats = [];
		this.hitpoints = 0;
		this.x = 0;
		this.y = 0;
		this.inventory = [];
		this.inventory.push(new Sword());
	}





}
