const arr1=[];
const obj={
    speed:100,
    color:"red"
}
var obj1=Object.keys(obj);
obj1.forEach(function(key){
    arr1.push(key,obj[key])
})
console.log(arr1);
