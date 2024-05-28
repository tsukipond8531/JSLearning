const numbers=[10,20,30];
let sum=0;
const ans=numbers.map((ele)=>{
   return  sum=sum+ele;
})
console.log(sum);
console.log(sum/numbers.length);
const re=numbers.reduce((acc,num)=>{
   return acc+=num;
})
console.log(`sum is ${re}`);
console.log(`sum is ${re/numbers.length}`)
//using trational way
const numberss=[10,20,30,40];
 sum=0;
// for (const ele of number) {
//    sum=sum+ele; 
// }
// console.log(`The sum is ${sum}`);
// console.log(`The Average is ${sum/number.length}`);
for (let i = 0; i <numberss.length; i++) {
   sum=sum+numberss[i];
   
}
console.log(`The sum is ${sum}`);
console.log(`The Average is ${sum/numberss.length}`);