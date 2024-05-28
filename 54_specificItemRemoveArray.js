const a=[2,5,7];
var i=a.indexOf(5);
if(i>-1){
    a.splice(i,1);
}
//console.log(a.splice(1,1));
console.log(a);
const b=[1,2,3,4,5,6];
let value=3;
let ans=b.filter((ele)=>{
    return ele!=value;
})
console.log(ans);
//without using predefined method
const c=[1,2,3,4,5];
count=0;
var search=2;
let outArray=[];
for (let i = 0; i < c.length; i++) {
    if (c[i]===search && count===0) {
        count++;
    }else{
        outArray.push(c[i])
    }
    
}
console.log(outArray);
