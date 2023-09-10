var arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`----------------------STEP1-----------------------`);
arrayRollNumbers.reverse();
console.log(`Reverse the Array:${arrayRollNumbers}`);
console.log(`----------------------STEP2-----------------------`);
arrayRollNumbers.sort();
console.log(`sort without custom logic:${arrayRollNumbers}`);
console.log(`----------------------STEP3-----------------------`);
var asc=arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2?1:-1;
})
console.log(`Sort array from ascensing order:${asc}`);
console.log(`----------------------STEP4-----------------------`);
let length=arrayRollNumbers.length;
console.log(`Greatest number from the array:${arrayRollNumbers[length-1]}`);
console.log(`----------------------STEP5-----------------------`);
console.log(`Smallest number from the array:${arrayRollNumbers[0]}`);
console.log(`----------------------STEP6-----------------------`);
arrayRollNumbers=[...new Set(arrayRollNumbers)]
console.log(`Remove duplicate from the Array: ${arrayRollNumbers}`);