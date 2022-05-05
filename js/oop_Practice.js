class Character{
    constructor(name, health, strength, xp) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`; 
    }
}