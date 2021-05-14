//base Card class
class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

//Unit card
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    //Attack a unit
    attack(target){
        if(target instanceof Unit){
            target.res -= this.power;
        }else{
            throw new Error( "Target must be a unit!" );
        }
    }

    //See card's status
    status(){
        console.log(`This card's (${this.name}) current status is:`);
        console.log(`Power: ${this.power}`);
        console.log(`Resillience: ${this.res}`);
    }
}

//effect card
class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    //play the card
    play(target){
        if(target instanceof Unit){
            //Check for which stat to target
            if(this.stat.toLowerCase() === "resilience"){
                target.res += this.magnitude;
            }else if(this.stat.toLowerCase() === "power"){
                target.power += this.magnitude;
            }
        }else{
            throw new Error( "Target must be a unit!" );
        }
    }
}

//Playtesting
//Turn 1
const card1 = new Unit("Red Belt Ninja", 3, 3, 4);
card1.status();
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
effect1.play(card1);
console.log("Played 'Hard Algorithm' on 'Red Belt Ninja'")
card1.status();
console.log("")

//Turn 2
const card2 = new Unit("Black Belt Ninja", 4, 5, 4);
card2.status();
const effect2 = new Effect("Unhandled Promise Rejection", 2, "reduce target's resilience by 2", "resilience", -2);
effect2.play(card1);
console.log("Played 'Unhandled Promise Rejection' on 'Red Belt Ninja'");
card1.status();
console.log("")

//Turn 3
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
effect3.play(card1)
console.log("Played 'Pair Programming' on 'Red Belt Ninja'");
card1.status();
console.log("'Red Belt Ninja' attacks 'Black Belt Ninja'")
card1.attack(card2);
card2.status();
console.log("")



