
console.log(`_________________STEP1_______________________`);
var square=function(num){
console.log(`Square of ${num} is ${num*num}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(`_________________STEP2_______________________`);
console.log(`Type of fuction :${typeof square}`);
console.log(`_________________STEP3_______________________`);
var rectangleArea=function(length,width){
console.log(`area of rectangle plot is: ${length*width}`);

}
rectangleArea(499,917);
console.log(`_________________STEP4_______________________`);
 var swapvalues=function(n1,n2){
    console.log(`Before swaping values:  ${n1}   ${n2}`);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log(`After swaping values:   ${n1}    ${n2}`);
 }
 swapvalues('mahi','Raina');
 swapvalues(55,77);
console.log(`_________________STEP5_______________________`);
var strOperation=function(str){
console.log(`Total character availabe in the string: ${str.length}`);
 console.log(`charater at index 6:${str.charAt(6)}`);
 console.log(`charater at index 11:${str.charAt(11)}`);
console.log(`last character using length property: ${str.charAt(str.length-1)}`);
console.log(`first character from the given string:${str.charAt(0)}`);
console.log(`Third last character from the given string:${str.charAt((str.length-1)-2)}`);
var str= str.split(" ");
   var wordCount  = str.length;
   console.log(`In Given String - ${str}`);
console.log(`total words of the given string: ${wordCount}`);
console.log(`The square of total number of words:${wordCount*wordCount}`);


}
strOperation("JS the most popular language of Internet");
