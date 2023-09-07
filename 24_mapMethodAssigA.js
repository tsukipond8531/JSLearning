const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`----------Add 10 into each element---------------`);
const newarray=arrayNumbers.map((currentvalue)=>{
    return currentvalue+10;
    return currentvalue*currentvalue*currentvalue;
})
console.log(newarray);
console.log(`------------Cube of array---------------`);
const newarray1=arrayNumbers.map((currentvalue)=>{
    return currentvalue*currentvalue*currentvalue;
})
console.log(newarray1);
console.log(`---------------Add index values to corresponding element-------------`);
const newarray2=arrayNumbers.map((currentvalue,index)=>{
    return currentvalue+index;

})
console.log(newarray2);