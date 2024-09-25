const { yellow } = require("color-name");

let Taxprice=["1.Italian pasta Price (incl.tax): $ 11.46","2.Rice with veggies Price (incl.tax): $ 10.38","3.Chicken with potatoes Price (incl.tax): $ 18.66","4.Vegetarian Pizza Price (incl.tax): $ 7.74"];
let WithoutTaxprice=["1.Italian pasta Price (incl.tax): $ 9.55",
    "2.Rice with veggies Price (incl.tax): $ 8.65",
    "3.Chicken with potatoes Price (incl.tax): $ 15.55",
    "4.Vegetarian Pizza Price (incl.tax): $ 6.45"];

function priceCalculator(price){
if(price==true){
    for(i=0;i<=3;i++){
console.log(Taxprice[i]);
    }
}
else if(price==false){
    for(i=0;i<=3;i++){
        console.log(WithoutTaxprice[i]);
            }
}
else{
    console.log("Plese Input Valid Data");
}

}
priceCalculator(yellow);