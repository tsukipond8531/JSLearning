
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(` _________The total elements available or length ______`);
console.log(arrayNumbers.length);
console.log(` _________Log the first element and last element in arrayNumbers and log on console___`);

console.log(arrayNumbers[0]);
var length=arrayNumbers.length;
console.log(arrayNumbers[length-1]);
console.log(`__________Log the thirst last element using length property and log on console_____`);
console.log(arrayNumbers[length-3]);
console.log(`__________the all even numbers using for in loop___________`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        console.log(element);
    }
    
}

console.log(`__________the all old numbers using for in loop___________`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        console.log(element);
    }
    
}
console.log(` ____ all the even positioned elements from arrayNumbers, sum it and log on console`);
var count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        count=count+element;
    }
 }
 console.log(`Sum of Even Positioned is : ${count}`);
 console.log(` ____ all the old positioned elements from arrayNumbers, sum it and log on console`);
 var count=0;
 for (let index = 0; index < arrayNumbers.length; index++) {
     const element = arrayNumbers[index];
     if (element%2!=0) {
         count=count+element;
     }
  }
  console.log(`Sum of old Positioned is : ${count}`);

console.log(`________the sum of all elements from arrayNumbers, log on console______`);
var counts=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    counts+=element;
    
}
console.log(`Sum of ALL element  is : ${counts}`);
console.log(`Find the numbers which are multiple of 5`);
var count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(element);
    }
 }
console.log(`____Is number 115 available in arrayNumbers ?____________`);
let isAvailable = arrayNumbers.includes(115);
console.log(`Is 115 available : ${isAvailable}`);
console.log(`________Is number 23 available in arrayNumbers ?________`);
let isAvailables = arrayNumbers.includes(23);
console.log(`Is 23 available : ${isAvailables}`);
console.log(`________Insert numbers → 55, 66 before index 3 and log array on console_________`);
let a=arrayNumbers.splice(3,0,55,66,);
console.log(arrayNumbers);



console.log(`__________Delete 3 elements starting from index 4 and log arrayNumbers on console_________`);

 console.log(`3 element starting from 4 is delete:${arrayNumbers.splice(4,3)}`);
console.log(arrayNumbers);
