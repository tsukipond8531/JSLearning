var arr=[1,0,2,47,8,9];
var ans=arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(ans);