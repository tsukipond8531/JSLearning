var ArrayNumber=[1,2,7,8];
var largest=(arr)=>{
    var first=Math.max(...arr);
    
    var index=arr.indexOf(first);
    arr.splice(index,1);
    var second=Math.max(...arr);
    return second;
    
  
}
console.log(largest(ArrayNumber));

  