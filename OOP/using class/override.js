class Food {
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    getDetails(){
        return "Not poisons to human"
    }
}

class Fruit extends Food {
    constructor(name,eat){
        super(name);
        this.eat=eat;
    }
    getDetails(){
        return this.name+"Can be eaten raw with some "+this.eat ;
    }
}

class Vegetable extends Food{
    constructor(name,eat){
        super(name);
        this.eat=eat
    }
    getDetails(){
        return this.name+"Can be eaten after boiled for "+this.eat+"minutes";
    }
}

let Apple = new Fruit("Apple",["Sugar","Solt","As Juice"]);
let Carrot = new Vegetable("Carrot",10);

let Pizza = new Food("Pizza");
console.log(Pizza.getDetails());
console.log(Apple.getDetails());
console.log(Carrot.getDetails());