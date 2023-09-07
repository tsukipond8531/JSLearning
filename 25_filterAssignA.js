const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`------------Greter than 50 numbers----------------------`);
const value=arrayNumbers.filter((currentValue)=>{
return currentValue>50;
})
console.log(value);
console.log(`------------Even numbers----------------------`);
const even=arrayNumbers.filter((currentValue)=>{
return currentValue%2==0;
})
console.log(even);
console.log(`------------old numbers----------------------`);
const old=arrayNumbers.filter((currentValue)=>{
return currentValue%2!=0;
})
console.log(old);
console.log(`------------Multiple of 5 numbers----------------------`);
const multiple=arrayNumbers.filter((currentValue)=>{
return currentValue%5==0;
})
console.log(multiple);
console.log(`------------ numbers between 20 and 50----------------------`);
const bet=arrayNumbers.filter((currentValue)=>{
return currentValue>=20 && currentValue<=50;
})
console.log(bet);