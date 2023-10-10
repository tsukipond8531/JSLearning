const array=[
    {name:"jenny" , gender:"female"},
    {name:"jack" , gender:"male"},
    {name:"julliya",gender:"female"},
    {name:"stev",gender:"male"},
    {name:"chanda",gender:"other"},
    {name:"alia",gender:"female"}
]
const males=array.filter((ele)=>{
    return ele.gender==="male"
})
// console.log(males);
for (const ele of males) {
    console.log(ele);
}
// Second way
let count=0;
const a=array.forEach((elem)=>{
    if(elem.gender!=="male"){
        count++;
    }})
    
   for (let i = 0; i <=count; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[j].gender!=="male"){
            array.splice(j,1);
        }
    }}
    console.table(array);