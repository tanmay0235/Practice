class Animal{
    usetail(){
        console.log("sweep floor")
    }
}
class monkey extends Animal{
    usetail(){
        console.log("Hanging on the tree");
    }
}
class myMonkey extends monkey{
    usetail(){
        console.log("Do Nothing!!!")
    }
}
var Gkmonkey = new monkey();
var hkmonkey= new myMonkey();
Gkmonkey.usetail();
hkmonkey.usetail();
new Date();
console.log(Date());