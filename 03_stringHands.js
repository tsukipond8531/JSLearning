var string="     Hey you are doing good , keep it up     ";
function stringHandsOn(){
    console.log(`_______________STEP1______________`);
console.log(`     Hey you are doing good, keep it up     `);
console.log(`_______________STEP2______________`);
var len=string.length;
console.log(`length of String:${len}`);
console.log(`_______________STEP3______________`);
var lending=string.trim();
var newString=lending.length;
console.log(`Remoning leading and trailing extra spaces of string:${lending} ,and it's length is:${newString}`);
console.log(`_______________STEP4______________`);
var resultTrimstart=string.trimStart();
var trimStartLength = resultTrimstart.length; 
var startSpaces = string.length - trimStartLength;
var resultTrimEnd = string.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = string.length - trimEndLength;
var count=startSpaces+endSpaces;
console.log(`Total number extra spaces count that is remove step 3:${count}`);
console.log(`_______________STEP5______________`);
var first=lending.charAt(0);
var last=lending.charAt(newString-1);
console.log(`first  charater after trim:${first}, Last  charater after trim: ${last}`);
console.log(`_______________STEP6______________`);
var result =lending.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);
console.log(`_______________STEP7______________`);
var result=lending.indexOf("good");
console.log(`Index of ${"good"} word from string ${result}`);
console.log();
console.log(`_______________STEP8______________`);
var result=lending.slice(22);
console.log(`substring starting from index 22:${result}`);
console.log(`_______________STEP9______________`);
var end=lending.endsWith(`up`);
console.log(`String end with word ${'up'}: ${end}`);
console.log(`_______________STEP10______________`);
var start=lending.startsWith('Hey');
console.log(`String start with word ${'Hey'}:${start}`);


}
stringHandsOn();