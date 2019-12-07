function Player() {
    this.name = "";
    this.attributes = {
        str: "",    //Strength
        int: "",    //Intelligence
        wis: "",    //Wisdom
        dex: "",    //Dexterity
        con: "",    //Constitution
        cha: ""     //Charisma
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
    this.attributes.str = "Strenght:     " + this.rollAttribute();
    this.attributes.int = "Intelligence: " + this.rollAttribute();
    this.attributes.wis = "Wisdom:       " + this.rollAttribute();
    this.attributes.dex = "Dexterity:    " + this.rollAttribute();
    this.attributes.con = "Constitution: " + this.rollAttribute();
    this.attributes.cha = "Charisma:     " + this.rollAttribute();
}

Player.prototype.constructor = Player;

let player = new Player();
player.rollCharacter();
console.log(JSON.stringify(player));

