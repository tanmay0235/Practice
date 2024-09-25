class Stationarybikes{
    constructor(position,gears){
        this.position=position;
        this.gears=gears;
    }
}

class TreadMill{
    constructor(position,modes){
     this.position=position;
     this.modes=modes;
    }
}
class gym{
    constructor(openhrs,stationarybikes,treadMillsos){
      this.openhrs=openhrs;
      this.stationarybikes=new Stationarybikes(stationarybikes,8);
      this.treadMillsos=new TreadMill(treadMillsos,5)
    }
}
var boxingGym= new gym("7-12","right corner","left corner");
console.log(boxingGym.openhrs);
console.log(boxingGym.stationarybikes);
console.log(boxingGym.treadMillsos);