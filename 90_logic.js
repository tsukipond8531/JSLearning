// kishor how are you

const { isArray } = require("jquery");

//r                  y
var string="Kishor how are you";
var result=string.split(" ").map(word=>{
    return word.split("").reverse().join("");
});
console.log(result.join(" "));
//object is array?
function cheched(arr){
 return Array.isArray(arr);
}
console.log(cheched([]));
//empty arry and resize the array
var arr=[1,2,3,4,5];
arr.length=0;
console.log(arr);
//number=>integer
var number=30.6;
console.log(Number.isInteger(number));
if(number%1==0){
    console.log("Integer");
}else{
    console.log("Integer not ");
}
//duplicate[1,2,3]=[1,2,3,1,2,3]
function duplicate(arr){
return arr.concat(arr)
}
console.log(duplicate([1,2,3]));
//reverse a number
number=123;
var temp=number.toString();
var result=temp.split("").reverse().join("");
console.log(result);
//2nd way
function reverse(num){
    var rev=0;
    while (num>0) {
       var digit=num%10;
       rev=rev*10+digit;
       var num=Math.floor(num/10) 
    }
    return rev;

}
console.log(reverse(1234));
//palindrome
var string="madamji";
var result=string.split("").reverse().join("");
if (result===string) {
    console.log("palindrome");
}else{
    console.log("not palindrome");  
}
//2nd way
var string1="navvan";
var len=string1.length;
var msg="palindrome";
for (let i = 0; i < len/2; i++) {
    if (string1[i]!=string1[len-1-i]) {
        msg="Not Palindrome"
    }
    
}
console.log(msg);
//aphabetic order
function alpha(ele){
return ele.split("").sort().join("")
}
console.log(alpha("kishor"));
function first(str){
   var res= str.split(" ").map(word=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    })
    console.log(res.join(" "));

}
first("kishor bhai kasai ho i am good bro");
//ab=>a=1,b=1;
function occ(str){
   var newString={};
   str.split("").forEach(element => {
   if (newString.hasOwnProperty(element)) {
    return newString[element]++;
   } else{
    return newString[element]=1;
   }
   });
   console.log(newString);
}
occ("ramram")

var arr=[1,2,3,4,5,6];
var sum=0;
// for (let i = 0; i <= arr.length; i++) {

//     sum+=i;
// }
// console.log(sum);
// arr.forEach(ele=>{
//     sum=sum+ele;
//  } )
    // console.log(sum);
// var arr1=['rammam',123,"jdjdjd",3,"skskks",4,"akak"];
// for (const ele of arr1) {
//     if (typeof ele=='number') {
//         console.log(ele);
//     }
// }
// console.log(sum);
// var arr1 = ['rammam', 123, "jdjdjd", 3, "skskks", 4, "akak"];

// // Sort the array in ascending order
// arr1.sort((a, b)=> {
// if(typeof a==='number' && typeof b==='number'){
//     return a-b;
// }else if(typeof a==='number' && typeof b==='number'){
//     return a.localeCompare(b);
// }else{
//     return typeof a==='number'?-1:1;
//     }
// })
// console.log(arr1);
// //2nd way without using predefiend method
// function sort(arr){

// }
// sort(arr1);
// // Sort the array in ascending order
// arr1.sort((a, b)=> {
// if(typeof a==='number' && typeof b==='number'){
//     return a-b;
// }else if(typeof a==='number' && typeof b==='number'){
//     return a.localeCompare(b);
// }else{
//     return typeof a==='number'?-1:1;
//     }
// })
var arr1 = ['rammam', 123, "jdjdjd", 3, "skskks", 4, "akak"];
arr1.sort((a,b)=>{
    if(typeof a==='number' && typeof b==='number'){
        return a-b;
    }else if(typeof a==='string' && typeof b==='string'){
       return a.localeCompare(b);
    }else{
      return  typeof a==='number'?-1:1;
    }
})
console.log(arr1);
var arr=[1,2,3,4,5,3,3,3,3,2];
count={};
for (let i = 0; i < arr.length; i++) {
    var num=arr[i];
    count[num]=count[num]?count[num]+1:1;
}
console.log(count);
var arr=[1,2,3,4];
var len=arr.length;
for (const ele of arr) {console.log(ele*len);
    
}
var result=arr.map((num)=>{
    return num*len;
})
console.log(result);
//i remove a specific item from the array
var arr=[2,5,7];
console.log(arr.splice(1,1,2,3,4));
console.log(arr);
//without using predefined method
var num=[1,2,3,4,5];
count=0;
del=5;
outputarr=[];
for (let i = 0; i < num.length; i++) {
    if ( num[i]==del && count===0) {
      count++;  
    }else{
        outputarr.push(num[i]);
    }
    }
    console.log(outputarr);
    var arr=[10,20,30];
    var res=arr.reduce((acc,num)=>{
        return acc+=num;
    })
    console.log(res/arr.length  );
