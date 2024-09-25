var Currency1=100;
var Currency2=0;
var Exchangerate=1.2;

function convertCurrency(amount,rate){
    return amount*rate;
}
Currency2=convertCurrency(Currency1,Exchangerate);
console.log(Currency2);