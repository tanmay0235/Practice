function addtwonumbers(a,b){
    try{
        if(typeof(a)!="number"){
            console.log("The first argument is not a number")
        }
        else if (typeof(b)!="number"){
            console.log("The second argument is not a number")
        }
        else{ 
            console.log(a+b);
        }
    }
    catch(erre){
        console.log(erre)
    }
    
    
}
addtwonumbers(5,"5");

console.log("IT still works")