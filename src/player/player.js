const { Sword } = require('../inventory/weapon.js');

class Player {
	constructor() {
		this.name = "";
		this.attributes = {
			str: 0,    //Strength
			int: 0,    //Intelligence
			wis: 0,    //Wisdom
			dex: 0,    //Dexterity
			con: 0,    //Constitution
			cha: 0     //Charisma
		};
		this.hitpoints = 0;
		this.spellpoints = 0;
		this.x = 0;
		this.y = 0;
		this.inventory = [];
		this.inventory.push(new Sword());
	}

	rollAttribute() {
		let min = 1;
		let max = 6;

		//For the bell curve
		let die1 = Math.floor(Math.random() * (max - min + 1)) + min;
		let die2 = Math.floor(Math.random() * (max - min + 1)) + min;
		let die3 = Math.floor(Math.random() * (max - min + 1)) + min;
		return die1 + die2 + die3;
	}

	rollCharacter() {
		this.attributes.str = this.rollAttribute();
		this.attributes.int = this.rollAttribute();
		this.attributes.wis = this.rollAttribute();
		this.attributes.dex = this.rollAttribute();
		this.attributes.con = this.rollAttribute();
		this.attributes.cha = this.rollAttribute();
	}


	toHtml() {
		let html = `Strength: ${this.attributes.str} <br />
        Intelligence: ${this.attributes.int} <br />
        Wisdom: ${this.attributes.wis} <br />
        Dexterity: ${this.attributes.dex} <br />
        Constitution: ${this.attributes.con} <br />
        Charisma: ${this.attributes.cha}`;
		return html;
	}
}



let player = new Player();
player.rollCharacter();
console.log(player.inventory);
//console.log(JSON.stringify(player));
