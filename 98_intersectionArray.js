var arr1=[1,2,3,4,4,4,5];
var arr2=[1,2,3,4];
var ans=arr1.filter((ele)=>{
    return arr2.includes(ele)
})
console.log([...new Set(ans)]);

//union of array
function union(arr1,arr2){
    console.log([...new Set(arr1.concat(arr2))]);

}
union(arr1,arr2)
var string="kishor how are you suhas";
var ans=string.split(" ").map((word)=>{
   return word.charAt(0).toUpperCase()+word.slice(1)
})
console.log(ans.join(" "));
a=0;
b=1;
// console.log(a);
// console.log(b);
for (let i = 0; i <=8; i++) {
    var temp=a+b;
    a=b;
    b=temp;
    console.log(temp);
    
}