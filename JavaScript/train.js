class Train{
    constructor(color,lightson){
        this.color=color;
        this.lightson=lightson;

    }
    toggleLights(){
        this.lightson=!this.lightson;
    }
    lightStatus(){
        console.log('Lights on ?',this.lightson);
    }
    getself(){
        console.log(this);
        }
    getPrototype(){
        var proto=Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myFristTrain= new Train('White',false);
// console.log(myFristTrain);

var train4=new Train('Yellow',false);
/* train4.toggleLights();
train4.lightStatus();
train4.getself();
train4.getPrototype(); */

class Highspeed extends Train{
    constructor (passengers,highspeedon,color,lightson){
        super(color,lightson);
        this.passengers=passengers;
        this.highspeedon=highspeedon;
    }
    toogleHighspeed(){
        this.highspeedon=!this.highspeedon;
        console.log('High speed status',this.highspeedon);
    }
    toogleLights(){
        super.toggleLights();
        super.lightStatus();
        console.log("Lights are 100% operational.")
    }
}
var train5= new Train("Blue",false);
var highspeed1= new Highspeed (200,false,"Green",false);
train5.toggleLights();
train5.lightStatus();
train5.getPrototype();