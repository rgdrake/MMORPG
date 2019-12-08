function Item() {
    this.itemName = "";
    this.weight = 0;
};

Item.prototype.fromPrototype = function(prototype, object) {
    let newObject = Object.create(prototype);

    for(let prop in object) {
        if(object.hasOwnProperty(prop)) {
            newObject[prop] = object[prop];
        }
    }
    return newObject;
}

Item.prototype.setItemName = function(name) {
    this.itemName = name;
}

Item.prototype.getItemName = function() {
    return this.itemName;
}

Item.prototype.setWeight = function(weight) {
    this.weight = weight;
}

Item.prototype.getWeight = function() {
    return this.weight;
}

export {Item};