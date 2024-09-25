class animal {
    constructor(color,energy){
        this.color;
        this.energy;
    }
    isActive(){
        if(this.energy>0){
            this.energy-=20;
            console.log("Energy is Decreasing,currently at :" ,this.energy)
        }
        else if(this.energy==0){
            this.sleep();
        }

    }
    sleep(){
        this.energy+=20;
        console.log("Energy is Increasing,currently at :" ,this.energy)

    }
    getColor(){
        console.log(this.color);
    }
}
class Cat extends animal{
    constructor(sound,canjumpHigh,canclimbTrees,color,energy){
        super(color,energy);
        this.sound=sound;
        this.canjumpHigh=canjumpHigh;
        this.canclimbTrees=canclimbTrees;
       
    }
    makesound(){
        console.log(this.sound);
    }
    
}
class Bird extends animal{
    constructor(sound="chirp",canfly,color,energy){
        this.sound=sound;
        this.canfly=canfly;
        super(color,energy);
       

    }
    makesound(){
        console.log();
    }
}

class houseCat extends animal{
    constructor(houseCatsound="meow",sound,canjumpHigh,canclimbTrees,color,energy){
        super(sound,canjumpHigh,canclimbTrees,color,energy);
        this.houseCatsound=houseCatsound;

    }
    makesound(option){
        if(option){
            super.makesound();
        }
        console.log(this.houseCatsound);
    }

}

class Tiger extends Cat{
    constructor(tigersound="roar",sound,canjumpHigh,canclimbTrees,color,energy){
        super(sound,canjumpHigh,canclimbTrees,color,energy)
        this.tigersound=tigersound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var prt1= new Parrot(true);
var part2=new Parrot(false);
