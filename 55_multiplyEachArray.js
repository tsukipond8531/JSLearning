const arr=[1,2,3,4];
var len=arr.length
//console.log(len);
for (const ele of arr) {
    console.log(ele*len);
}

let ans=arr.map((ele)=>{
   return ele*arr.length
})
console.log(ans);