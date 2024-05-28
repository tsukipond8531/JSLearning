//1)missing word in array
var arr=[1,2,7,8,9,10];
var min=Math.min(...arr);
var max=Math.max(...arr);
var missingArray=[]
for (let i = min; i <max; i++) {
    if (arr.indexOf(i)<0) {
        missingArray.push(i);
    }
    
}
console.log(missingArray);
//2 and 3)swap a program with and without using third variable
// var a=prompt("Enter a number first");
// var b=prompt("Enter a number second");
// console.log("Before swaping  a "+ a);
// console.log("Before swaping  b "+ b);
// // var temp=a;
// // a=b;
// // b=temp;
// a=a+b;//2+3=5;
// b=a-b;//5-3=2;
// a=a-b;//5-2=3
// console.log("after swaping  a "+ a);
// console.log("after swaping  b "+ b);
var salary=null;
console.log(typeof salary);
//4)even and old number using conditonal operator
// var a=prompt("Enter a number first");
// var res=a%2==0?'even':'old';
// console.log(res);
//5)prime number
var num=prompt("Enter a number first");
if (num==1) {
    console.log(`${num} is not prime it is composite number`);
}else if(num<1){
    console.log(`${num} is not prime`); 
}else{
    var isprime=true;
    for (let i = 2; i <num; i++) {
        if (num%i==0) {
            isprime=false;
        }
        
    }
  
}
if (isprime && num>1) {
    console.log(`${num} is  prime`); 
 }else{
     console.log(`${num} is not prime`);   
 }
 //6)find the vowel using regex;
 var string="kishor eknath ubhale";
 var reg=/[aeiou]/gi;
 var s=string.match(reg);
 console.log(s+" ");
 console.log(s.length);
 //7)reverse a string ;
 var string="kishor  how are you";
 var res=string.split("").reverse().join("");
 console.log(res);
 //8)reverse a each word ;
 var string="kishor  how are you";
 var res=string.split(" ").map((wold)=>{
return  wold.split("").reverse().join("");
 })
console.log( res.join(" "));
//9)reverse each word without using predefined method
function reverseword(stentence){
    let word=[];
    let currentwods='';
    for (let i = 0; i < stentence.length; i++) {
        let char=stentence[i];
        console.log(char);
        if (char!=' ') {
            currentwods+=char;
        }else{
            word.push(currentwods);
             currentwods='';

        }
        
    }
    word.push(currentwods);
    let reverseword=[];
    for (const w of word) {
        reversewor='';
        for (let  i= w.length-1;i>=0; i--) {
            reversewor+=w[i];
            
        }
        reverseword.push(reversewor);
    }
    return reverseword.join(" ");
}
var result=reverseword("I am happy")
console.log(result);
//10)reverse string without using predefined method
function reverse(sts){
    
    reverses='';
    for (let i = sts.length-1; i >=0 ; i--) {
         reverses += sts[i];
        
    }
    return reverses;


}
var r=reverse("kishor");
console.log(r);
//11)additon without using any arithmetic operation
function addWithoutOperator(a, b) {
while (b!==0) {
    let carry =a&b;
    a=a^b;
    b=carry<<1;
}
return a;
}

// Example usage:

let sum = addWithoutOperator(10, 20);
console.log("Sum:", sum); 

//12)palindrome string
var string="madam";
var len=string.length;
var msg="String is palindrome";
for (let i = 0; i <len/2; i++) {
    if (string[i]!==string[len-1-i]) {
        msg="String is not palindrome";  
    }
  
    
}
console.log(msg);
//13)palindrome string using inbuilt function
var str="dad";
var result=str.split("").reverse().join("");
var res=result===str?'palindrome':'not palindrome';
console.log(res);
//14)Armstrong number
var number=153;
var len=number.toString().length;
var temp=number;
var suma=0;
while (temp>0) {
    var lastdigit=temp%10;
     suma+=lastdigit**len;
    temp=parseInt(temp/10);  
}
if (suma==number) {
    console.log("Armstrong Number");
}else{
    console.log("Not Armstrong Number"); 
}
//15)fibbonacci series
var a=0;
var b=1;
for (let i = -1; i <8; i++){
    
var temp=a+b;
a=b;
b=temp;
console.log(temp);   
}
//16






