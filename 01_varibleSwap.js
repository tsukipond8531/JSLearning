

// var a=100;
// var b=200;
// console.log('num1:',a);
// console.log('num2:',b);
// var temp=a;
// a=b;
// b=temp;
// console.log(temp,a,b);
// console.log("after",a,b);

var num1 = 100; // 200
var num2 = 200; // 100
console.log( 'Before Swap' ,'num1 - ', num1, ' num2 - ', num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log(temp, num1, num2);
console.log( 'After Swap' ,'num1 - ', num1, ' num2 - ', num2);