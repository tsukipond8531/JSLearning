// var string=prompt("Enter a String");
// var len=string.length;
// var msg="It is palindrome";
// for (let i = 0; i < len/2; i++) {
//     if (string[i]!=string[len-1-i]) {
//         msg="it is not palindrome"
        
//     }
    
// }
// console.log(`${string}:${msg}`);
//2nd way
// var res=string.split("").reverse().join("");
// if (string==res) {
//     console.log(`${string} is palindrome`);
// }else{
//     console.log(`${string} is not  palindrome`);
// }
//kishor
//kisroh
var a= "kis";
var b= "roh";
var res=a.concat(b);
console.log(res);
var greet="   kishor     ";
console.log(greet.length);
var end=greet.trimEnd();
console.log(end.length);
var res=greet.length-end.length;
console.log(res);
var str="kishor";
console.log(str.slice(0,6));
var num="ram";
console.log(num.toString());
console.log(0/0);
var string="kishor";
var res=+string;
console.log(res);
console.log(typeof res);
var str ='3'+ null;
console.log(str);
var str1=4+false;
console.log(str1);
let result='4'+'2'
console.log(result);
let result1=null-undefined
console.log(result1);
//var  js
//let const ES6
// var score=76;
// score=88;
// var score=99;
// let college="COEP";
// college="shivaji"
// let college="MJ"
// const pin=123456;
// pin=2233334;
// const pin=87766
// function vowel(str){
//     let count=0;
//     for (let i = 0; i < str.length; i++) {
//         var char=str.charAt(i);
//         if (char=='k') {
//             console.log(char);
//             count++;
            
//         }
      
        
//     }
//     console.log(count);
// }
// vowel("i am kishor")
// let arrry=[10,20,30,30];
// arrry[0]=100;
// console.log(arrry.indexOf(20));

// console.log(arrry[0]);
// console.log(arrry.push(200,300));
// console.log(arrry.pop());
// console.log(arrry.unshift(400));
// console.log(arrry.shift());
// console.log(arrry.slice(0,3));
// console.log(arrry);
// for (let i = 0; i < arrry.length; i++) {
//     if (i%2==0) {
//         console.log(arrry[i]);
//     }
    
// }
// console.log(arrry);
// // console.log(arrry.splice(2));
// //  console.log(arrry.splice(0,4));
// console.log(arrry.splice(3,1,500,600));
// console.log(arrry);
// arr1=[1,2];
// arr2=[3,4];
// console.log(arr1);
// console.log(arr2);
// var res=arr1.concat(arr2);
// console.log(res);
// var name=["kishor", "Eknath","ubhale"];
// console.log(name.join(""));
// res.length=2;
// console.log(res);
// var arrry=[4,5,6,7,8,9];
// var arr1=[10,100];
// var merge=[...arr1,...arrry]
// console.log(merge);
// console.log(...arrry);
// let myset= new Set();
// myset.add(2);
// myset.add(3);
// myset.add(4);
// myset.add(5);

// console.log(myset);
// console.log(myset.size);
// console.log(myset.has(6));
// console.log(myset.delete(5));
// console.log(myset);
// for (const ele of myset) {
//     console.log(ele);
// }
//  var arrry=[4,5,6,7,8,9];
// arrry=[...new Set(arrry)]
// console.log(arrry);
//map
// var map=new Map();
// map.set("rollno",1);
// map.set("name","kishor");
// console.log(map.size);
// console.log(map.has("name"));
// console.log(map.get("name"));
// console.log(map.keys());
// console.log(map.values());
// var arrry=[4,5,5,6,7,8,8,8,8,9,9,9];
// console.log(arrry);
// var newarray=[];
// for (const ele of arrry) {
//     let elee=newarray.includes(ele);
//     if (elee==false) {
//         newarray.push(ele);
//     }
// }
// console.log(newarray);
//object literals
// let person={
//     name:'john',
//     age:20,
//     greet:function(){
//         console.log("hello kishor");
//     },
//     student:{
//         name:"john",
//     }
// }
// person.company="TCS";
// person["city"]="jalgaon";
// console.log(person.city);

// console.log(person.company);
// console.log(person["age"]);
// person.name="kishor ubhale"
// // delete person.city
// console.log(person);
// // console.log(person.greet);
// person.greet();
// console.log(person.student.name);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log("city" in person);
// let arr=[12,13,14];
// Object.freeze(arr);
// arr.push(20);
// console.log(arr);
//class
// class person1{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     play(){
//         console.log("He loving painting");
//     }
// }
// let kishor=new person1("kishor",20);
// // console.log(kishor);
// let kishori=new person1("kishori",18);
// // console.log(kishori);
// const arr=[kishor,kishori];
// for (const ele of arr) {
//     ele.play() ;
//     console.log(ele.name);
// }
// let kishor={
//     fullname:"kishor ubhale",
//     age:25,
//     city:"jalgaon"

// }
// let ram=Object.assign({},kishor);
// console.log(ram.fullname);
// let shree={...kishor};
// console.log(shree.city);
// let radha=JSON.parse(JSON.stringify(kishor));
// console.log(radha.age);
//hoisted
// console.log(city);
// const city="Kharchi";
//closure
// var globalvariable=100;
// function outer(){
// let outervarible=200;
// let innerfunction=function(){
//     ownvariable=300;
//     console.log(outervarible);
//     console.log(globalvariable);
//     console.log(ownvariable);

// }
// return innerfunction;
// }
// outer()()
//callback
// function jenny(stev,kishor){
//     console.log("hello stev");
//     stev()
//     kishor.()
// }
// function stev(){
//     console.log("hello jenny");
// }
// function kishor(){
//     console.log("hello jenny and stev");
// }

// jenny(stev,kishor)
//Es6 fecture
//1)use strict
//2)string template
//3)let ,const and class
//4)spread
//5)rest parameter
function display(...arg){
console.log(arg);
}
display(20,30)
display(" I Love", "Javascript")
//6)function default parameter
//7)Destruring
//8) self invoking function
//9)function expression
//10)anononisysm function
//11)arrow function
//12)forEach 
//13)map,filter and reduce
// const arrr=[1,2,3,4,5,6];
// let sum=0;
// let newArray=arrr.reduce((red,ele)=>{
//  return red+ele;
// })
// console.log(newArray);
// var a=0; b=1;
// console.log(a);
// console.log(b);
// for (let i = 0; i <=4;i++) {

//    var temp=a+b;
//    a=b;
//    b=temp;
//    console.log(temp); 
// };
// var a=5; b=6;
// // var temp=a;
// // a=b;
// // b=temp;
// // console.log(`${a} and ${b}`);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(`${a} and ${b}`);
// var number=151;
// var temp=number;
// var countnumber=temp.toString().length;
// sum=0;
// while(temp>0){
// var digit=temp%10;
// sum+=digit**countnumber;
// var temp=parseInt(temp/10);
// }
// if (sum==number) {
//     console.log("Armstrong");
// }else{
//     console.log("Armstrong not ");
// }

var number=2;
if(number==1){
    console.log("not a prime number");
}else if(number<1){
    console.log("not a prime number");
}else{
    let isprime=true;
    for (let i = 2; i <number; i++) {
        if(number%i===0){
            isprime=false;
        }
        
    }

if(isprime && number>1){
    console.log("prime");
}else{
    console.log("not prime");
}
}