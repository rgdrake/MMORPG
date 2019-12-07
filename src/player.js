function Player() {
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
}

Player.prototype.rollAttribute = function() {
    let min = 1;
    let max = 6;
    //using the below procedure to get a bell curve of attribute distribution
    let die1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let die2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let die3 = Math.floor(Math.random() * (max - min + 1)) + min;
    return die1 + die2 + die3;
}

Player.prototype.rollCharacter = function() {
    this.attributes.str = this.rollAttribute();
    this.attributes.int = this.rollAttribute();
    this.attributes.wis = this.rollAttribute();
    this.attributes.dex = this.rollAttribute();
    this.attributes.con = this.rollAttribute();
    this.attributes.cha = this.rollAttribute();
}

Player.prototype.toHtml = function() {
    let html = `Strength: ${this.attributes.str} <br />
Intelligence: ${this.attributes.int} <br />
Wisdom: ${this.attributes.wis} <br />
Dexterity: ${this.attributes.dex} <br />
Constitution: ${this.attributes.con} <br />
Charisma: ${this.attributes.cha}`;
    return html;
}

Player.prototype.constructor = Player;

let player = new Player();
player.rollCharacter();
console.log(player.toHtml());
console.log(JSON.stringify(player));
