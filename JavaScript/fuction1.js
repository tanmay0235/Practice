function addTwonumber(a,b){
    console.log(a+b);
}
function randomnum(){
    return Math.floor((Math.random()*10)+1);
}
 function specificnum(){
    return 42;
}
var useRandom=true;

var gerNumber;

if(useRandom){
    getNumber=randomnum;
}

else{
    getNumber =specificnum;
}

addTwonumber(getNumber(),getNumber());