class Character {
    constructor(options){
        this.name = "";
        this.level = 1;
        this.experience = 0;
        this.race = "";
        this.stats = {};
        this.stats.WIS = 1;
		this.stats.INT = 1;
		this.stats.STR = 1;
		this.stats.CON = 1; // fun fact: a folder on any(?) windows OS can't have the name 'con' (try creating one lol)
		this.stats.DEX = 1;
        this.stats.CHA = 1;
        
        Object.assign(this,options);
        
        this.HEALTH = this.calculateMaxHealth();
        this.AC = this.calculateMaxHealth();
        this.THAC0 = 10;
    }
    calculateMaxHealth() {
        let maxHealth = 10;
        maxHealth += this.statModifier(this.stats.CON);
        maxHealth += this.boni.healthPerLevel ? this.boni.healthPerLevel : 0;
        maxHealth += this.mali.healthPerLevel ? this.mali.healthPerLevel : 0;
        return maxHealth * this.level;
    }
    statModifier(stat) {
        return Math.floor((stat - 10)/2);
    }
    calculateAC() {
        let ac = 10;
        ac -= this.statModifier(this.stats.DEX);
        if(this.equipment && this.equipment.armor){
            ac -= this.equipment.armor.boni.ac;
        }
        if(this.boni && this.boni.ac){
            ac -= this.boni.ac;
        }
        if(this.mali && this.mali.ac){
            ac -= this.mali.ac;
        }
        return ac;
    }
    calculateRewards(target) {
        // TODO: add party shared experience
        this.experience += target.experienceWorth;
        
        // TODO: figure out exp per level
    }
}