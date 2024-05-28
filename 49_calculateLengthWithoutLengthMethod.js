function callength(arr){
// console.log(arr.length);
let len=0;
while (arr[len]!=undefined) {
    len++;
    
}
return len;
}
console.log(callength([10,20,30,40,50,60,70]));