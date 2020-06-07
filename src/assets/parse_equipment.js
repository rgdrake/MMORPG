const fs = require('fs');

const equipment = require("./reference_data/dnd/equipment.json");

const armor = [];
equipment.Equipment.Armor["Armor List"]["Light Armor"].table.Armor.forEach((n,i)=>{
    armor.push({
        name: n,
        cost: equipment.Equipment.Armor["Armor List"]["Light Armor"].table.Cost[i],
        ac: equipment.Equipment.Armor["Armor List"]["Light Armor"].table["Armor Class (AC)"][i],
        strength: equipment.Equipment.Armor["Armor List"]["Light Armor"].table.Strength[i],
        stealth: equipment.Equipment.Armor["Armor List"]["Light Armor"].table.Stealth[i],
        weight: equipment.Equipment.Armor["Armor List"]["Light Armor"].table.Weight[i],
    });
})
equipment.Equipment.Armor["Armor List"]["Medium Armor"].table.Armor.forEach((n,i)=>{
    armor.push({
        name: n,
        cost: equipment.Equipment.Armor["Armor List"]["Medium Armor"].table.Cost[i],
        ac: equipment.Equipment.Armor["Armor List"]["Medium Armor"].table["Armor Class (AC)"][i],
        strength: equipment.Equipment.Armor["Armor List"]["Medium Armor"].table.Strength[i],
        stealth: equipment.Equipment.Armor["Armor List"]["Medium Armor"].table.Stealth[i],
        weight: equipment.Equipment.Armor["Armor List"]["Medium Armor"].table.Weight[i],
    });
})
equipment.Equipment.Armor["Armor List"]["Heavy Armor"].table.Armor.forEach((n,i)=>{
    armor.push({
        name: n,
        cost: equipment.Equipment.Armor["Armor List"]["Heavy Armor"].table.Cost[i],
        ac: equipment.Equipment.Armor["Armor List"]["Heavy Armor"].table["Armor Class (AC)"][i],
        strength: equipment.Equipment.Armor["Armor List"]["Heavy Armor"].table.Strength[i],
        stealth: equipment.Equipment.Armor["Armor List"]["Heavy Armor"].table.Stealth[i],
        weight: equipment.Equipment.Armor["Armor List"]["Heavy Armor"].table.Weight[i],
    });
})

const weapons = [];
equipment.Equipment.Weapons["Weapons List"]["Simple Melee Weapons"].table.Name.forEach((n,i)=>{
    weapons.push({
        name: n,
        cost: equipment.Equipment.Weapons["Weapons List"]["Simple Melee Weapons"].table.Cost[i],
        damage: equipment.Equipment.Weapons["Weapons List"]["Simple Melee Weapons"].table.Damage[i],
        properties: equipment.Equipment.Weapons["Weapons List"]["Simple Melee Weapons"].table.Properties[i],
        weight: equipment.Equipment.Weapons["Weapons List"]["Simple Melee Weapons"].table.Weight[i]
    });
})
equipment.Equipment.Weapons["Weapons List"]["Simple Ranged Weapons"].table.Name.forEach((n,i)=>{
    weapons.push({
        name: n,
        cost: equipment.Equipment.Weapons["Weapons List"]["Simple Ranged Weapons"].table.Cost[i],
        damage: equipment.Equipment.Weapons["Weapons List"]["Simple Ranged Weapons"].table.Damage[i],
        properties: equipment.Equipment.Weapons["Weapons List"]["Simple Ranged Weapons"].table.Properties[i],
        weight: equipment.Equipment.Weapons["Weapons List"]["Simple Ranged Weapons"].table.Weight[i]
    });
})
equipment.Equipment.Weapons["Weapons List"]["Martial Melee Weapons"].table.Name.forEach((n,i)=>{
    weapons.push({
        name: n,
        cost: equipment.Equipment.Weapons["Weapons List"]["Martial Melee Weapons"].table.Cost[i],
        damage: equipment.Equipment.Weapons["Weapons List"]["Martial Melee Weapons"].table.Damage[i],
        properties: equipment.Equipment.Weapons["Weapons List"]["Martial Melee Weapons"].table.Properties[i],
        weight: equipment.Equipment.Weapons["Weapons List"]["Martial Melee Weapons"].table.Weight[i]
    });
})
equipment.Equipment.Weapons["Weapons List"]["Martial Ranged Weapons"].table.Name.forEach((n,i)=>{
    weapons.push({
        name: n,
        cost: equipment.Equipment.Weapons["Weapons List"]["Martial Ranged Weapons"].table.Cost[i],
        damage: equipment.Equipment.Weapons["Weapons List"]["Martial Ranged Weapons"].table.Damage[i],
        properties: equipment.Equipment.Weapons["Weapons List"]["Martial Ranged Weapons"].table.Properties[i],
        weight: equipment.Equipment.Weapons["Weapons List"]["Martial Ranged Weapons"].table.Weight[i]
    });
})

const rarity = { // TODO: Move this somewhere more appropriate
    grey: "#9d9d9d",
    white: "#ffffff",
    green: "#1eff00",
    blue: "#0070dd",
};

armor.forEach(n=>{
    if(n.cost.indexOf("gp")!==-1) {
        n.costColor = "goldenrod";
        n.rarityColor = n.cost.length > 5 ? rarity.blue : rarity.green;
    }
    if(n.cost.indexOf("sp")!==-1) {
        n.costColor = "#BDC3C7";
        n.rarityColor = rarity.white;
    }
    if(n.cost.indexOf("cp")!==-1) {
        n.costColor = "#DC7633";
        n.rarityColor = rarity.grey;
    }
})
weapons.forEach(n=>{
    if(n.cost.indexOf("gp")!==-1) {
        n.costColor = "goldenrod";
        n.rarityColor = n.cost.length > 5 ? rarity.rare : rarity.green;
    }
    if(n.cost.indexOf("sp")!==-1) {
        n.costColor = "#BDC3C7";
        n.rarityColor = rarity.white;
    }
    if(n.cost.indexOf("cp")!==-1) {
        n.costColor = "#DC7633";
        n.rarityColor = rarity.grey;
    }
})

fs.writeFileSync("./dnd_armor.json",JSON.stringify(armor,null,4));
fs.writeFileSync("./dnd_weapons.json",JSON.stringify(weapons,null,4));