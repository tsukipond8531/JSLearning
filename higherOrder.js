var data=[2,6,9,10];
Array.prototype.custom=function(x){
    var res=[]
for (let i = 0; i < this.length; i++) {
    
    res.push(x(this[i]))
}
return res;
}
var output=data.custom((item)=>x*2)
console.log(output);