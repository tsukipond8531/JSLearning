const array = [2, 4, 7, 9, 11];
let sum = 0; // 6
for (const element of array) { // 4
    sum = sum + element; // 2 + 4
}
console.log(sum);

console.log(`Finding sum using reduce() `);

const totalSum = array.reduce( (runningTotal, element) => {
    return runningTotal + element;
} );
console.log(totalSum);

console.log(`Finding multiplication using reduce() `);
const totalMul= array.reduce( (runningMultiplication, element) => {
    return runningMultiplication * element;
} );
console.log(totalMul);
