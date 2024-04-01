class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll (mod = 0) {
        const diceRoll = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${diceRoll}.`);
    }
}

class Adventurer extends Character {
    constructor (name, role){
        super(name);
        this.role = role;
        this.inventory.push('bedroll', '50 gold coins');
    }
    
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character{
    constructor (name, role){
        super(name);
        this.role = role;
    }
    
    support() {
        switch(this.role) {
            case 'healer':
                console.log(`${this.name} is casting a healing spell.`);
                break;
            case 'enchanter':
                console.log(`${this.name} is enhancing damage.`);
                break;
            case 'scavenger':
                console.log(`${this.name} is searching for items.`);
                break;
            default:
                console.log(`${this.name} is following the adventurer.`);
        }
    }
}

const robin = new Adventurer("Robin", "Wizard");
robin.inventory.push("potion", 'staff', 'wizard hat');
robin.companion = new Companion('Leo', "healer");
robin.companion.support();
robin.companion.companion = new Companion('Frank', 'enchanter');
robin.companion.companion.support();
robin.companion.inventory.push('Healing potion', 'Reviving Potion', 'Healing fruit');
robin.companion.companion.inventory.push('Damage potion', 'Strength potion', 'magic hat');
console.log(robin.companion.inventory);
console.log(robin.companion.companion.inventory);


