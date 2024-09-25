const fruits=['apple','pear','plum'];
const berries=['blueberry','strawberry'];
const fruitsAndberries=[...fruits, ...berries];//concatenate
fruitsAndberries.push("Banana");
fruitsAndberries.pop();
 //console.log(fruitsAndberries);

// Joining the object
const flying={wings:2};
const car={wheels:4};
const flyingcar={...flying, ...car};
// console.log(flyingcar);

// anding new mwmber

let veggies=['Onion','Parsley'];
veggies=[...veggies,'carrot','beetroot'];
//console.log(veggies);

//Converting string into array
const greeting='Hello';
const array=[...greeting];
//console.log(array);

//copying obect or an array into seprate one

const car1={
  speed:200,
  color:'Yellow'
}

const car2={...car1};

car1.speed=201

//console.log(car1.speed, car2.speed);

const fruit1=['apple','banana'];
const fruit2=[...fruit1];
fruit1.pop();

//console.log(fruit1,"not",fruit2);


