var pet={
    sleepy:true,
    nap:function(){
        this.sleepy=false;
    }

}
console.log(pet.sleepy);
pet.nap();
console.log(pet.sleepy);
