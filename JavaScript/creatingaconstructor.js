function Car(color){
    this.color=color;
    this.Start=function(){
      console.log(`The ${this.color} car is started to Move`)
    }
}
let car=new Car(Blue);
let Redcar=ne