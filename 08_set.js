let mySet = new Set();
mySet.add(2);
mySet.add(4);
mySet.add(6);
mySet.add(7);
console.log(mySet);

mySet.add(4);
console.log(mySet);

let isAvailable = mySet.has(6)
console.log(isAvailable);

let is9Available = mySet.has(9)
console.log(is9Available);

console.log(`Set size is ${mySet.size}`);

mySet.delete(4);
console.log(mySet);

// mySet.clear();
for (const element of mySet) {
    console.log(element);
}

let array = [4, 5, 4, 5, 8, 5];
let setOfNumbers = new Set();
for (const value of array) {
    setOfNumbers.add(value);
}
console.log(array);
console.log(setOfNumbers);

console.log(`Removing duplicate elements from array using spread operator`);
let arrayNew = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
arrayNew = [...new Set(arrayNew)];
console.log(arrayNew);
// console.log(newSet);