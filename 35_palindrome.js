// function palchecked(str){
// var reversed=str.split("").reverse().join("");
// var a=(str==reversed)?'string is palindrome':'string is not palindrome';
// return a;
// }
// console.log(palchecked("madam"));
//  console.log(palchecked("madan"));
//  console.log(palchecked("12345"));
 

// 2nd way
// var str="madam";
// var len=str.length;
// var msg=" It is palindrom"
// for (let i = 0; i < len/2; i++) {
//     if (str[i] != str[len-1-i]) {
//         msg=`It is not palindrome`
//     } 
   
// }
// console.log(`${str}:${msg}`);
//from user
var str=prompt("Enter the String");
var len=str.length;
var msg=" It is palindrom"
for (let i = 0; i < len/2; i++) {
    if (str[i] != str[len-1-i]) {
        msg=`It is not palindrome`
    } 
   
}
console.log(`${str}:${msg}`);