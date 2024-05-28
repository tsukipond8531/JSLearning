const nestedArray = [1, [2, [3, 4], 5]];
console.log(nestedArray);
console.log(nestedArray.flat(2));

//square root of number
// console.log(Math.sqrt(64));
//area of triagle
// var a=10;
// var b=5;
// var c=10;
// var s=(a+b+c)/2;
// var temp=s*(s-a)*(s-b)*(s-c);
// console.log(Math.sqrt(temp));
//swapping ,fibbonacci,addition and print
//armstrong number
// var number=153;
// var len=number.toString().length;
// console.log(len);
// var temp=number;
// var sum=0;
// while (temp>0) {
//     var digit=temp%10;
//     console.log(digit);
//     var sum=sum+digit**len;
//     console.log(sum);
//     var temp=parseInt(temp/10)
//     console.log(temp);
    
// }
// if (number===sum) {
//  console.log(`${number} is Armstrong `);   
// }else{
//      console.log(`${number} is not Armstrong `);   
// }
//Armstrong number find specific interval
// var lower=1;
// var upper=10;
// for (let i = lower; i <=upper; i++){
//     var len=i.toString().length;  
//     var temp=i;
//     var sum=0;
//     while (temp>0) {
//         var digit=temp%10;
    
//         var sum=sum+digit**len;
        
//         var temp=parseInt(temp/10)

        
//     }
//     if (sum===i) {
//      console.log(`${i} `);   
//     }
// }
//factor of number
// var number=12;
// //1,2,3,4,6,12
// for (let i = 0; i <=12; i++) {
//     if (number%i===0) {
//         console.log(i);
//     }
    
// }

//rearrage string
var string = "kishor";

    // Rearrange the characters based on the specified pattern
    var res =string[0]+ string[1] + string[2] + string[5] + string[4] + string[3];

    
console.log(string);
console.log(res);
//dynamic
var string = "kishor";
var res = "";

// Define the rearrangement pattern as an array of indices
var pattern = [0, 1, 2, 5, 4, 3];

// Rearrange the characters based on the specified pattern
for (let i = 0; i < pattern.length; i++) {
    res += string[pattern[i]];
}

console.log("Original String:", string);
console.log("Rearranged String:", res);
//convert kms to miles
var kms=13;
var miles=kms*0.621371;
console.log(miles);
//convert celsius to fahrenheint
var cel=12;
var fah=(cel*1.8)+32;
console.log(fah);
//even or old
var number=50;

if (number%2==0) {
    console.log("even");
}else{
    console.log("old");
}
//prime number
// var number=22;
// if (number===1) {
//     console.log("not prime it composite number");
// } else if(number<1){
//     console.log("not prime  number")  
// }else{
//     isprime=true;
// for (let i = 2; i < number; i++) {
//     if (number%i==0) {
//         isprime=false;
//     }
    
// }
// }
// if (isprime && number>1) {
//     console.log("Prime");
// }else{
//     console.log("Not prime");
// }
//palindrome string
// var string="kishor";
// var res=string.split("").reverse().join("");
// if (res===string) {
//     console.log("palindrome");
// }else{
//     console.log("Not Palindrome");
// }
// var string="madam";
// var len=string.length;
// msg="palindrome"
// for (let i = 0; i < len/2; i++) {

//     if (string[i]!==string[len-1-i]) {
//         msg="not palindrome" 
//     }
// }
// console.log(msg);
// //check the number is positive ,nrgative,zero;
// var number=-12;
// var check=Math.sign(number);
// console.log(check);
// if (number>0) {
//     console.log("positive");
// } else if (number<0) {
//     console.log("Negative");
// }else if(number===0) {
//     console.log("zero");
// }
//random number
// var a=Math.random()*(10-1)+1;
// console.log(a);
//Integer random number
// var a=Math.floor(Math.random()*(100-10)+1);
// console.log(a);
//find largrst number among three number
var a=120;
var b=100;
var c=78;
// var res=Math.max(a,b,c);
// console.log(res);
if (a>=b && a>=c) {
console.log(`${a},${b},${c}:largest =${a}`);
}else if(b>=a && b>=c){
    console.log(`${a},${b},${c}:largest =${b}`);
}else{
    console.log(`${a},${b},${c}:largest =${c}`);
}
//factorial and using recorning factorial 
// var number=-1;
// var fact=1;
// for (let i = 1; i <= number; i++) {
//     fact*=i;
    
// }
// console.log(`factorial of ${number}:${fact}`);
// function factorial(n){
// if (n==0 || n==1) {
//     return 1;
// }else{
//     return n*factorial(n-1)
// }
// }
// const num = 5; // Replace this with the number for which you want to calculate the factorial
// const result = factorial(num);

// console.log(`The factorial of ${num} is: ${result}`);
// var number=5;
// fact=1;
// function factr(n){
//     if (n>number) {
//         return;
//     }
//     fact=fact*n;
//     n++;
//     factr(n);
// }
// factr(1)
// console.log(`The factorial of ${number} is: ${fact}`);
// var number=5;
// for (let i = 1; i <=10; i++) {
//     console.log(`${number}X${i}=`,number*i);
    
// }
//calculator used switch;
//number have same last digit;
// var a=10;
// var b=20;
// var c=30;

// var rem1=a%11;
// var rem2=b%10;
// var rem3=c%10; 
// if (rem1===rem2 && rem2===rem3) {
//     console.log(`${a},${b},${c} are having same last digit`);
// }else{
//     console.log(`${a},${b},${c} are having not same last digit`);
// }
// //sum of natural number
// function sum(num){
// if(num>0){
//     return num+sum(num-1);
// }else{
// return num;
// }
// }
// console.log(`sum of number`,sum(-1));
// //sort the word in alhabetic order
// var string="kishor";//hikors
// var res=string.split("").sort().join("");
// console.log(res);
//replace
//reverse a string
// var string="kishor ubhale";
// // var res=string.split("").reverse().join("");
// // console.log(res);
// var len=string.length;
// var revstring='';
// for (let i =len-1 ; i >=0; i--){
//     revstring=revstring+string[i]
   
// }
// console.log(revstring);
// //first letter is capitals
// var string="ram ";
// var first=string.charAt(0);
// var firstupp=first.toUpperCase();
// var rem=string.slice(1);
// var cap=firstupp+rem;
// console.log(cap);
//occurence of character
// var string="ramrama";
// var letter="a";
// var count=0;
// for (let i = 0; i < string.length; i++) {
//     if (string[i]==letter) {
//         count++;
//     }
    
// }
// console.log(`${string}=>${letter}=>${count}`);
//vowel
// var string="kishor";
// var count=0;
// for (let i = 0; i < string.length; i++) {
//     var char=string.charAt(i) ;

//     if (char=="a" || char=="e" ||char=="i" ||char=="o" ||char=="u"||char=="A" || char=="E" ||char=="I" ||char=="O" ||char=="U") {
//         console.log(char);
//         count++
//     }
    
// }
// console.log(count);

var string="kishor";
var regex=/[aeiou]/gi;
var char=string.match(regex);
console.log(char.join(","));
console.log(char.length);
var string="I am a Angualr developer";
var substring="am";
var result=string.includes(substring);
console.log(result);





