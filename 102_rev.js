// "use strict"
console.log("hello wold");
// var age=32;
var age;
console.log( typeof age);
console.log( typeof(age));
// //swanig
// var a=8,b=9;
// // var a=a^b;
// // var b=a^b;
// // var a=a^b;
// // console.log(a);
// // console.log(b);
// var a=a+b;
// var b=a-b;
// var a=a-b;
// console.log(a);
// console.log(b);
//string
// var str="kishor";
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str.indexOf('i'));
// console.log(str.split(""));
// var result=str.split("").reverse().join("");
// console.log(result);
// reverstring=""
// for (let i =str.length-1; i>=0; i--) {
// reverstring+=str[i]
    
// }
// console.log(reverstring);
// console.log(0/0);
// console.log("3"-true);
// console.log(4+undefined);
// console.log(true+undefined);
// var a=2;
// let b=2;
// const c=4;//not declared
// var a=3;
// let b=4;
// // c=8;
// console.log(a);
// console.log(b);
// console.log(c);
// //array
// var array=[10,20,40,50];
// array[4]=30;
// console.log(array.includes(100));
// for (let i = 0; i < array.length; i++) {
//     if (i%2==0) {
//         console.log(array[i]);   
//     }
   
    
// }
// console.log(array.push(200));
// console.log(array.pop());
// console.log(array.unshift(200));
// console.log(array.shift());
// // console.log(array[0]=200);
// // console.log(array.slice(0,1));
// console.log(array.splice(1,1,200));
// console.log(array.join(" "));
// var array1=[800,700,600,600,50]
// // console.log([...array,...array1]);
// // var set=new Set();
// // set.add(100);
// // set.add(200);
// // set.add(300);
// // console.log(set.includes(200));
// // console.log(set);
// // array1=[...new Set(array1)]
// // console.log(array1);
// var array2=[];
// for (const ele of array1) {
   
//     var available=array2.includes(ele);
//     if (!available) {
//         array2.push(ele)
//     }

// }

// console.log(array2);

// var person={
//     name:"kishor",
//     age:23,
// }
// console.log(person.age);
// console.log(person['name']);
// var education=person.education="MCA";

// person.education="BCA"
// console.log(person.education);
// var ram={};
// console.log(Object.keys(person));
// console.log(Object.values(person));
// // console.log(delete person.educationa);
// console.log("names" in person);
// class student{
//     constructor(age,name){
//     this.name=name;
//     this.age=age;  
//   }
//   play(){
//     console.log("palying");
//   }
// }
// var ram=new student(23,"ram")
// var radha=new student(23,"radha")
// var sham=new student(23,"sham")
// var array=[radha,ram,sham];
// for (const ele of array) {
//    console.log( ele.name);
//   console.log( ele.age);
//   ele.play()
// }
// function person(){
//    this. name="rahaul"
// }
// rahula=new person()
// console.log(rahula.name);
// console.log(rahula instanceof person);
//prototype
//prototyped is mechamism by which javascript object inherit feacture from one another
let user={
    getfullName:function(){
        return this.name+" "+this.lastName
    }
}
let student={
    name:"kishor",
    lastName:"ubhale",

}
let teacher={
    name:"kishori",
    lastName:"Kishor ubhale"
}
student.__proto__=user;
teacher.__proto__=user;
console.log(student.getfullName());
console.log(teacher.getfullName());
//date
// let  date=new Date();
// console.log(date.);
//cloning
let elon={
    name:'elon musk',
    age:22,
    marlk:{
        science:70,
        math:80
    }
}
// var stev=Object.assign({},elon);
// var stev=JSON.parse(JSON.stringify(elon))
// // var rani={...elon}
// stev.marlk.science=95;
// console.log(stev.marlk.science);
// console.log(elon.marlk.science);
// // var mer=Object.assign({},elon,stev)
// var mer={...elon,...stev}
// console.warn(mer);
// window.sessionStorage.setItem("roll",12);
// window.sessionStorage.setItem("name",'ubhale');
// var a=window.sessionStorage.clear();
// console.log(a);
//hoisting
// console.log(c);
// let c=10;
// var r=names();
// console.log(r);
// var names=function() {
//     console.log("work hard");
// }
//closure
let global=50
function closure(){
    let outer=20;
    var inner=function(){
        let inner=30
        console.log(inner);
        console.log(outer);
        console.log(global)
    }
    return inner;
}
// closure()();
// var can=setTimeout(() => {
//    console.log("I can do anything "); 
// },2000);
// var cann=setInterval(() => {
//     console.log("I can do anything ");  
// }, 2000);

// clearTimeout(can)
// setTimeout(() => {
//     clearInterval(cann)
// }, 10000);
//promise
//     var dell={
//         brand:"Dell",
//         harddisk:"2TB",
//         color:"black"
//     }
//     var hp={
//         brand:"hp",
//         harddisk:"2TB",
//         color:"black"
//     }
// let promise= new Promise((onsuccess,onfailure)=>{
//     if (hp===false) {
//         setTimeout(() => {
//             onsuccess(hp)
//         }, 3000);  
//     }else{
//         setTimeout(() => {
//             onfailure(dell)
//         }, 6000);   
//     }
    
// })
// async function getdata() {
//    let data= await promise
//    console.log(data);
// }
// getdata();
//json
// var hp={
//             brand:"hp",
//             harddisk:"2TB",
//             color:"black"
//         }
// let jsonstring=JSON.stringify(hp)
// console.log(jsonstring);
// var hpp=`{
//     "brand":"hp",
//     "harddisk":"2TB",
//     "color":"black"
// }`
// let simpleobj=JSON.parse(hpp);
// console.log(simpleobj);


//ES6 feactue
//1)user strict

// var mess="ram";
// console.log(mess);
//  var hp={
//             brand:"hp",
//             harddisk:"2TB",
//             color:"black"
//         }
//         console.log(hp);

//2)string template
//3)spread operator
//4)rest parameter
//5)function default parameter
function abc(x=2){
console.log(x);
}
abc(10);
//6)destructing
var hp={
                brand:"hp",
                harddisk:"2TB",
                color:"black"
            }
const{brand,harddisk,color}=hp;
console.log(brand);
//7)self invoking function
// (function(){
//     console.log("radha");
// })()
//8)function expression
//9)Anonymous function
var ram=function(){
    console.log("radha radha");
}
console.log(ram());
//10)arrow function
//11)forEach()method or forEachloop
arr=[2,30,40,50];
arr.forEach((ele,index,arr)=>{
console.log(ele,index,arr);
})
//12)map
var nums=[1,2,3,4];
var nums=nums.reduce((acc,ele)=>{
return acc*ele
},1)
console.log(nums);
var arr=[2,30,11,0,40,50];
arr.sort((a,b)=>{
    return a>b?1:-1
})
console.log(arr.reverse());
//Dom
//document object model it defines a standard for accesing documents
//in dom all the html element is object
console.log("select element using getelementbyid"); 
const ele=document.getElementById('details')
console.log(ele.innerText);

const ele1=document.getElementsByClassName('techstack')[0]
console.log(ele1.innerText);

console.log("select element using queryselector"); 
const ele2=document.querySelectorAll('.techstack')
console.log(ele2[0].innerHTML);
for (const ele3 of ele2) {
    console.log(ele3.innerHTML);
}
let fallow=document.querySelector('#fallow')
fallow.setAttribute('href','https://www.google.com/')

const createli=document.createElement('li');
const textNode=document.createTextNode("React");
createli.appendChild(textNode);
const React=document.querySelector('#techstack');
React.appendChild(createli)

const createli2=document.createElement('li');
const textnode2=document.createTextNode("ram ram ram");
createli2.appendChild(textnode2);
const rama=document.querySelector('#techstack')
rama.appendChild(createli2)


const parent=document.querySelector('#techstack');
const child=document.querySelector('#css');
// parent.removeChild(child)
child.style.color="red";

function show(){
    alert("hey you are clicked")
}
const ele4=document.getElementById('ram');
ele4.addEventListener('click',()=>{
    alert("hellow you are double click me")
})
const elebtn=document.getElementById('btn');
elebtn.addEventListener('mouseover',()=>{
btn.style.background="red"
}
)
elebtn.addEventListener('mouseout',()=>{
btn.style.background="blue"
}
)