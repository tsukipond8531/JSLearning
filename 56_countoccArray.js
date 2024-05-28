const arr=[1,2,3,4,3,3,3,3,3,3,3,2,1];
counts={};
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    counts[num]=counts[num]?counts[num]+1:1;
      
}
var str='kishor ubhale'
console.log(counts);
for(var i=str.length-1;i>0;i--){
console.log(str[i]);
}