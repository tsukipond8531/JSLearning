
let str="kishor how are you";
const array=str.split(" ").map((word)=>{
    return word.split("").reverse().join("")
})
console.log(array.join(" "));
//reverge the word
let str1="hello"
console.log(str1.split("").reverse().join(""));
