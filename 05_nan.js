// NaN - Not a Number
var num1 = 0;
var num2 = 0;
var result = num1/num2;
console.log(result);

var num3 = "100";
console.log(`Type of num3 is: ${typeof num3}`);
var result = +num3;
console.log(`Type of result is: ${result}`);
console.log(`Type of result is: ${typeof result}`);

console.log(`---------------------`);
var num4 = "GK";
var resultNum4 = +num4; 
//  var resultNum4 = NaN;
console.log(`Type of resultNum4 is: ${resultNum4}`);
console.log(`Type of resultNum4 is: ${typeof resultNum4}`);


console.log(`----- Implicit conversion -----`);
var result = '5' + 6;
console.log(result);

var result = '80' + true;
console.log(result);
console.log(`Why result is 80true because their is implicit conversion from boolean value true to string 'true'`);

var result = '80' - true;
console.log(result);
console.log(`Result is 79 bcz `);

console.log(`----- Explicit Conversion --------`);
var num = '22';
var result = +num;
console.log(`Result is ${result} and it's type is: ${typeof result}` );

console.log(`Second way of string to number explicit conversion`);
var result = Number(num);
console.log(`Result is ${result} and it's type is: ${typeof result}` );

var result = Number("Virat");
console.log(`Result is ${result} and it's type is: ${typeof result}` );

var num = 100;
console.log(`Value of num: ${num} and it's typeof ${typeof num}`);
var result = String(num);
console.log(`Result is ${result} and it's type is: ${typeof result}` );

var num = 100;
var result = Boolean(num);
console.log(`Result is ${result} and it's type is: ${typeof result}` );

console.log('------');
var num = "50";
var result = Boolean(num);
console.log(`Result is ${result} and it's type is: ${typeof result}` );

var isMarried = true;
var result = String(isMarried);
console.log(`Result is ${result} and it's type is: ${typeof result}` );