const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log('--------------sum of number using reduce() method----------');
const sum=array_numbers.reduce((run,ele)=>{
    return run+ele
})
console.log(`Sum of number:${sum}`);

console.log('--------------sum of number using traditional way----------');
var suma=0;
for (const ele of array_numbers) {
    suma=suma+ele;
}
console.log(`Sum of number using traditional way:${suma}`);
console.log(`---------------Find multiple of 5  and sum it-------------------`);
let mul=array_numbers.filter((ele)=>{
    return ele%5==0
})
// console.log(mul);

var ram=mul.reduce((run,ele)=>{
    return run+ele;
})
console.log(`sum of multiple of 5: ${ram}`);
// var su=0;
// for (const ele of mul) {
//     su=su+ele;
    
// }
// console.log(su);
console.log("Average salary from the reduce method");
const array=[20,11,40,25,26];
const newsum=array.reduce((run,ele)=>{
    return run+ele;
})
console.log(`average ${newsum/array.length}`);