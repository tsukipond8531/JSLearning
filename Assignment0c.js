
var result='3'+2;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from Number value 2 to string '2'`);
console.log(`___________________________________________________________-`);

var result='3'+true;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from boolean value true to string 'true'`);

console.log(`___________________________________________________________-`);
var result='3'+undefined;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from undefined value to string 'undefined'`);

console.log(`___________________________________________________________-`);
var result='3'+null;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from null value  to string 'null'`);

console.log(`___________________________________________________________-`);
var result='4'-true;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from boolean value true to string 'true'`);

console.log(`___________________________________________________________-`);
var result=4+true;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from boolean value true to number'1'`);

console.log(`___________________________________________________________-`);
var result=4+false;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from boolean value false to number '0'`);

console.log(`___________________________________________________________-`);
var result='4'-'2';
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from string value to number '2'`);

console.log(`___________________________________________________________-`);
var result='4'-2;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from  number 2 to string value '2`);

console.log(`___________________________________________________________-`);
var result='4'* 2;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from string value '4' to number 4`);

console.log(`___________________________________________________________-`);
var result='4'/2;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from string value '4 to number 4`);


console.log(`___________________________________________________________-`);
var result=4+undefined;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from undefined to undefined it is non-Numeric string is NAN`);

console.log(`___________________________________________________________-`);
var result=4-undefined;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from undefined to undefined it is non-Numeric string is NAN`);

console.log(`___________________________________________________________-`);
var result=true+undefined;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from undefined to undefined 
it is non-Numeric string is NAN
`);


console.log(`___________________________________________________________-`);
var result=null+undefined;
console.log(`${result}`);
console.log(`Why is ${result} because their is implicit conversion from undefined to undefined it is non-Numeric string is NAN`);
console.log(`_______________________Assignment2_____________________________________`);
console.log(`${0=='0'}`);
console.log(`Why ${0=='0'} is because their is implicit conversion from string 0 to number 0
`);
console.log(`___________________________________________________________-`);
console.log(`${0==''}`);
console.log(`Why ${0==''} is because their is implicit conversion from string '' to number 0
`);
console.log(`___________________________________________________________-`);
console.log(`${0==false}`);
console.log(`Why ${0==false} is because their is implicit conversion from boolean value false to number 0
`);
console.log(`___________________________________________________________-`);
console.log(`${null==undefined}`);
console.log(`Why ${null==undefined} is because their is implicit conversion from null to undefined
`);
console.log(`___________________________________________________________-`);
console.log(`${1==[1]}`);
console.log(`Why ${1==[1]} is because their is implicit conversion from array[1] to number 1
`);
console.log(`___________________________________________________________-`);
console.log(`${1==true}`);
console.log(`Why ${0=='0'} is because their is implicit conversion from boolean true to number 0
`);
console.log(`___________________________________________________________-`);
console.log(`${1=='1'}`);
console.log(`Why ${0=='0'} is because their is implicit conversion from string 1 to number 1
`);
console.log(`___________________________________________________________-`);