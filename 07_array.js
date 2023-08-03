var array = [10, 20, 30, 50, 10, 80, 20];
console.log(array);
console.log(`Type of array is: ${typeof array}`);

console.log(`Total number of elements in array is: ${array.length}`);
let element2 = array[2];
console.log(`Element stored at index 2 is: ${element2}`);

let element1 = array[0];
console.log(`Element stored at index 1 is: ${element1}`);
let arrayLength = array.length;
let elementLast = array[arrayLength-1];
console.log(`Last element is : ${elementLast}`);

console.log(`---------------------------`);
array[1] = 100;
console.log(array);

let isAvailable = array.includes(80);
console.log(`Is 80 available : ${isAvailable}`);

let indexOfElement = array.indexOf(50);
console.log(`Index of 50 is : ${indexOfElement}`);

console.log(`----------- Array traversing -----------`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
console.log(`----------- Array traversing in reverse order -----------`);

for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
}

console.log(`----------- Log even indexed element -----------`);
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        console.log(element); 
    }
}

console.log(`Inserting element in the first and last position`);
var array = [10, 20, 30, 50, 10, 80, 20];
array.push(70);
array.push(300, 500);
array.unshift(60);
array.unshift(21, 41, 69);
console.log(array);

console.log(`Remove element in the oth index and last index`);
var array = [10, 20, 30, 50, 10, 80, 20];
array.pop();
array.shift();
console.log(array);

console.log(`Getting the slice from array`);
var array = [10, 20, 30, 50, 10, 80, 20];
console.log(array.slice(3));
console.log(array.slice(1, 4));

console.log(` Removing the array element using splice()`);
var array = [10, 20, 30, 50, 10, 80, 20];
let removedElement = array.splice(4);
console.log(array);
console.log(removedElement);

var array = [10, 20, 30, 50, 10, 80, 20];
let elementRemoved = array.splice(4, 2)
console.log(array);
console.log(elementRemoved);

console.log(` Inserting the array element using splice()`);
var array = [10, 20, 30, 50, 10, 80, 20];
array.splice(3, 0, 100, 200, 300, 600)
console.log(array);

var array = [10, 20, 30, 50, 10, 80, 20];
array.splice(4, 2, 33, 55, 66, 77 );
console.log(array);

console.log(`------ concat ----------`);
let array1 = [3, 4, 5, 6];
let array2 = [6, 7, 8, 9];
let array3 = array1.concat(array2);
console.log(array3);

console.log(`------ join ----------`);
let result = array1.join(",");
console.log(result);
console.log(`------ for of loop ----------`);
for (const element of array3) {
    console.log(element);
}
console.log(`------ spread operator ... ----------`);
let array5 = [4, 5, 6, 7, 8, 9];
console.log(array5);
console.log(...array5);