console.log(`______________________STEP1_________________________`);
    var greaterNumber= function(arg1,arg2){
    var result=arg1>arg2?arg1:arg2;
    console.log(`the greater number amongst ${arg1} and ${arg2}:${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899)
console.log(`______________________STEP2_________________________`);
var isEvenOldNum=function(num){
var result=num%2===0?'Even':'old';
console.log(`The number ${num} is ${result}`);

}
isEvenOldNum(29);
isEvenOldNum(44);
isEvenOldNum(0);
isEvenOldNum(101);
console.log(`______________________STEP3_________________________`);
var wordLength=function(str){
var result=str.length%2===0?'Even':'Old';
console.log(`The word ${str} is ${result}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google")