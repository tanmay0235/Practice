const car={
    engine:true,
    steering:true,
    speed:"slow"
}
const sportscar =Object.create(car);
sportscar.speed="Fast";
console.log("The sportscarbobject: ", sportscar);
console.log("---------for-in is unreliable---------");
for(prop in sportscar){
    console.log(prop);
}
console.log("Iterating over object and its prototype!");
console.log("------=for-of is reliable-------");
for(prop of Object.keys(sportscar)){
    console.log(prop+":"+sportscar[prop]);
}
console.log("Iterating over object's Own property");