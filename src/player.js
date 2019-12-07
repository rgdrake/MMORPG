var MMORPG = MMORPG || {};

MMORPG.Player = {
    name: "",
    attributes: {
        strength: "",
        intelligence: "",
        wisdom: "",
        dexterity: "",
        constitution: "",
        charisma: ""
    },
    hit_points: 0,
    spell_points: 0,
    rollAttribute: function() { //done this way for the bell curve
        let min = 1;
        let max = 6;
        let die1 = Math.floor(Math.random() * (max - min + 1)) + min;
        let die2 = Math.floor(Math.random() * (max - min + 1)) + min;
        let die3 = Math.floor(Math.random() * (max - min + 1)) + min;
        return die1 + die2 + die3;
    },
    rollCharacter: function() {
        //let sheet = document.getElementById('charSheet');
        this.attributes.strength = "Str: " + this.rollAttribute();
        this.attributes.intelligence = "Int: " + this.rollAttribute();
        this.attributes.wisdom = "Wis: " + this.rollAttribute();
        this.attributes.dexterity = "Dex: " + this.rollAttribute();
        this.attributes.constitution = "Con: " + this.rollAttribute();
        this.attributes.charisma = "Cha: " + this.rollAttribute();
    }
}

MMORPG.Player.rollCharacter();
console.log(MMORPG.Player.attributes);