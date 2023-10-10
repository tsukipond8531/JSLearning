// 1. Object Destructuring
'use strict'
let student = {
    rollNumber: 2233,
    state: "MH",
    city: "Pune",
    college: "COEP Pune"
}
// let state = student.state;
// let college = student.college;
// let city = student.city;
const {rollNumber,state, college,  city="mumbai", pin=431175} = student;
console.log(state, city ,college, pin,rollNumber);


// 2. Array Destructuring
let array = [4, 5, 6, 77, 88, 99];
let [num1, num2, num3,num4,num5,num6, num7=0] = array;
console.log(num1, num2, num3, num4,num7);

// const str="How are  you mate";
// cap=str.toLowerCase();
// console.log(cap);
// //concate
// capa=str[0].toLowerCase()+str.substring(1)
// console.log(capa);
// let newStr=str.replace("How are  you mate","HoW ArE  YoU MatE")
// // console.log(str);
// console.log(newStr);
// function show(str){
// let words=str.split(" ");
// // var len=words,length;
// // console.log(words);
// const show=words.map(word=>{
//     return  word.charAt(0).toUpperCase() + word.slice(1);
// });
// const ab=show.join(" ");
// return ab;
// }
// show("How are  you mate")
// // console.log("How are  you mate");