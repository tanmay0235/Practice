var shoes=100;
var statetax=1.2;
function totalPrice(shoes,tax){
    return shoes*tax;
}
var topay=totalPrice(shoes,statetax);
console.log(topay);