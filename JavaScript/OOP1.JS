var  purchase1={
shoes:120,
statetax:1.2,
totalprice: function(){
    var calculation=this.shoes*this.statetax;
    console.log('Total Price: ',calculation)
}
}
purchase1.totalprice();
var  purchase2={
    shoes:50,
    statetax:1.2,
    totalprice: function(){
        var calculation=this.shoes*this.statetax;
        console.log('Total Price: ',calculation)
    }
    }
    purchase2.totalprice();
    