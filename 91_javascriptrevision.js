// //first program  hello word
// console.log("hello word");
// var a;
// var b=null;
// console.log("data type of undefined "+typeof a);
// console.log("data type of null",typeof b);
// //swaping a number with 3 varible and without using third varible
// function swap(a,b){
//     console.log("before swaping "+ a+' '+ b);
//     var temp=a;
//     a=b;
//     b=temp
//     console.log("After swaping "+ a+' '+ b);
// }
// swap(10,20)
// function swap(a,b){
//     console.log("before swaping "+ a+' '+ b);
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("After swaping "+ a+' '+ b);
// }
// swap(100,200)
// //string
// var greet="Good morning";
// var greet1="   bolebaba"
// console.log(greet.length);
// console.log(greet.charAt(0));
// console.log(greet.charAt(greet.length-1));
// console.log(greet.concat(greet1));
// console.log(greet.indexOf('m'));
// var greet2="Good Evening sham dude";
// console.log(greet2.includes("shama"));
// // console.log(greet2.split(" ").length);
// var greet3="    Good Morning                          ";
// // console.log(greet3.trim());
// // console.log(greet3.trimEnd());
// // console.log(greet3.trimStart());
// var lastspace=greet3.trimEnd().length;
// // var total=greet3.trim();
// lastscpecout=greet3.length-lastspace;
// console.log("last space",lastscpecout);
// //replace
// console.log(greet3.toLowerCase());
// console.log(greet3.toUpperCase());
// const s=new String("kishor");
// console.log(typeof s);
// var s1=s.valueOf();
// console.log(typeof s1);
// var num=15;
// console.log(typeof num.toString());
// //charcodeAt
// var str="aest";
// console.log(str.charCodeAt(0));
// var str1="ram ram ram";
// console.log(str1.match('am'));
// //check even and old number
// var number=12;
// if(number%2==0){
//     console.log("Even");
// }else{
//     console.log("olds");
// }
// console.log(0/0);
// var string="hello";
// console.log(Number(string));
// //conversion
// //implict and explicit conversion
// var res='4'*'2';
// console.log(res);
// var res='12'+undefined;
// console.log(res);
// //control flow
// var cal="*";
// switch(cal){
//     case '+':
//         console.log("addion");
//         break;
//         case '-':
//             console.log("substion");
//             break;
//             default:
//                 console.log("invalid");
// }

// //var const and let 
// //var we can declare intion and update and redeclare
// //const we can only decare and intion
// //let decalre intion modify but not redeclase
// //varible scope ---determine the accesiblity of the varible
// //global,local,block
// //sum of number from 0 to 20
// //tradtional 
// var  sum=0;
// for (let i = 0; i <=20; i++) {
//     sum+=i;
    
// }
// console.log(sum);
// //print the value and count total number of sum
// // function vowel(str){
// //     count=0;
// //     for (let i = 0; i <= str.length; i++) {
        
// //         var char=str.charAt(i) ;
        
// //         if ( char=="A" || char=="E" ||char=="I" || char=="O" ||char=="U"||
// //         char=="a" || char=="e" ||char=="i" || char=="o" ||char=="u") {
// //             console.log(char);

// //             count=count+1;
// //         }
// //     }
   
// //     console.log(`count vowel`,count);
// // }

// // vowel('I am very good UI Developer')
// function vowel(str) {
//     count = 0;
//     const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

//     for (let i = 0; i < str.length; i++) {
//         var char = str.charAt(i);

//         if (vowels.includes(char)) {
//             console.log(char);
//             count = count + 1;
//         }
//     }

//     console.log(`count vowel`, count);
// }

// vowel('I am very good UI Developer');
// //array
// var array=[10,20,30,40,50,6,7,8];
// console.log(array[5]);//access
// console.log(array.length);//lenth
// console.log(array.indexOf(10));//find the index
// console.log(array.includes(10));//check available or not
// // array[0]=200;
// //array=[];
// // array.length=5
// // console.log(array);
// //traverse of array
// // for (let i = 0; i < array.length; i++) {
// //     console.log(array[i]);
    
// // }

// console.log(array.push(900));
// console.log(array.pop());
// console.log(array.unshift(900));
// console.log(array.shift(900));
// console.log(array.slice(2,6));
// var array=[10,20,30,40,50,6,7,8];
// console.log(array.splice(2,3,100));
// console.log(array.join(""));
// //spread operator
// var arr1=[1,2,3];
// var arr2=[4,5,6];
// console.log(...arr1);
// var res=[...arr1,...arr2]
// //var res=arr1.concat(arr2);
// console.log(res);
// //set 
// var set=new Set();
// set.add(100);
// set.add(200);
// set.add(200);
// set.add(300);

// console.log(set.delete(200));
// console.log(set.has(200));
// // console.log(set.clear());
// console.log(set.size);
// //remove duplicate from the aray
// var myarray=[1,2,3,4,4,5,5,6,6,6,2,2,1,3,4,8];
// //  myarray= [...new Set(myarray) ];
// //  console.log(myarray);
//  //trational way
//  var newarray=[];
//  for (let ele of myarray) {
   
//     var available=newarray.includes(ele)
//     if (available==false) {
//         newarray.push(ele);
       
//     }
    
//  }
//  console.log(newarray);
//  //map
//  var mymap=new Map();
//  mymap.set(11,11);
//  mymap.set("name","Kishor");
//  mymap.set("skill",["Angular","Javascipt","CSS"]);
//  mymap.set("skills",["Angular","Javascipt","CSS"]);
//  console.log(mymap.size);
// console.log(mymap.get('skills'));
// // console.log(mymap.delete("roll no"));
// console.log(mymap.has('name'));
// //for of
// var map=mymap.keys();
// for (const ele of map) {
//     console.log(mymap.get(ele));
// }
// var keys=mymap.get('skill');
// for (const key of keys) {
//     console.log(key);
// }
// //Object
// //using object literals
// // let person ={
// //     name:'kishor',
// //     age:24,
// // }
// // person.company="baxture";
// // person.name="sayli";
// // console.log( person.name);
// // //javascipt object also contain the function
// var person1={
//     name:"sam",
//     greet:function(){
//         console.log("hello");
//     },
//     marks:{
//         sci:50
//     }

// }
// person1.greet()

// person1.marks.sci
// console.log(person1.marks.sci);
// console.log(Object.keys(person1));
// console.info(Object.values(person1));
// //for in loop
// for (const key in person1) {
//     if (person1.hasOwnProperty.call(person1, key)) {
//         const element = person1[key];
        
//         console.log(`${key},${element}`);
//     }
// }
// console.log(
//     'names' in person1);
//     //defining object and const keyword
//     const student={
//         rollno:234,
//         state:'MH',
//         city:'pune',
//         college:'pune University',
//     }
//     let person={
//         name:'abc',
//         aadhar:'xxxxxxxx',

//     }
//     // student=person;
//     console.log(Object.freeze(student));
//     student.city="mumbai"
//     console.log(student.city);
//     //using class
//     class person2{
//         name;
//         age;
//         constructor(name,age){
//           this.name=name;
//          this.age=age;
//         }
//         play(){
//             return 'he love playing cricket'
//             // console.log("he love playing cricket");
//         }
//         eat(){
//             console.log("He like pizaa");
//         }
//     }
//     var ram=new person2("ram",24);
    
//     var komal=new person2("koaml",22);
    
//     var radha=new person2("radha",30);

//     var kishor=new person2("kishor",24);
    
//     var gopal=new person2("gopal",56);

//     var tejas=new person2("tejas",42);
//     var names=[radha,ram,kishor,komal,gopal,tejas];
//     for (let name of names) {
//         console.log(name.name,name.play());
//       name.eat();
//     }
//     //function constructor
//     function person4(){
//         this.name='john';
//         this.age='21';
//     }
//    var sayli=new person4()
   
//   person4.prototype.gender="female";
//    console.log(sayli.gender);
//    person4.gender="female"
//    console.log(sayli.gender);
//  console.log(  sayli instanceof person4);
//  //prototype
//  //Built in object in javascript
// //Date
// var date=new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getHours());
// //cloning object
// var hdfcBank={
//     bankname:'Hdfc',
//     location:'pune',
//     accountNo:111111111111,
//     IFSC:'HDFC031'
// }
// let SBIBank=hdfcBank;
// console.log(SBIBank.location);
// //deep cloning
// //1)Object.assisn{},spread operator,Json.parseand Json.stringify()
// let studentElon={
//     fullName:"Elon Musk",
//     age:22,
//     city:'pune',
//     college:'coep pune',
//     marks:{
//         phy:100,
//         math:99,
//         science:94,
//     }
// }
// //using Object.assign method
// // let studentStev=Object.assign({},studentElon);
// // console.log(studentStev.college);
// // let studentBill={...studentElon};
// // console.log(studentBill.age);

// // let ab=studentStev.marks.science="97"
// // console.log(studentElon.marks.science);
// // console.log(ab); this a problem nested object then both are fails
// let studentStev=JSON.parse(JSON.stringify(studentElon))
// let ab=studentStev.marks.science="97"
// console.log(studentElon.marks.science);
// console.log(ab);
// //Object merge
// let jenny={
//     fullName:'Jenny',
//     age:22,
// }
// let marks={
//     phy:100,
//     math:95,
// }
// // let merge=Object.assign({},jenny,marks)
// // console.log(merge);
// let merge={...jenny,...marks}
// console.log(merge);
// //web storage
// //something dtore in web browser
// //it allows to save data in the brower
// //session and local storage
// //hoisting in javascipt
// // console.log(city);
// // var city="jalgaon";
// // name2();
// // var name2=()=>{
// //     console.log("ram ram ");
// // }
// // name2();
// // var name2 = () => {
// //     console.log("ram ram ");
// // }
// //closure
// //closure is an a inner function that can access to outer fun varible 
// //3 own scope varible,outer function varible and last is global varible
// var global=300;
// function outerscope(){
//     var outervarible=200;
//     var inner=function(){
//         var innervarible=100;
//         console.log(innervarible);
//         console.log(outervarible);
//         console.log(global);

//     }
//     return inner;
// }
// outerscope()();
// //callbacks
// //passing one function as an argument to another function
// function jennya(call,steva){
// console.log("jenny start the assignment");
// console.log("jenny completed the assign");
// console.log("jenny send to the stev ");
// call()
//  steva()
// }
// function stev(){
// console.log("stev receievs the assignment");
// console.log("stev coppy the assignment");
// console.log("finaaly it is completed assignment");
// }
// function steva(){
//     console.log("stev receievs the assignment");
//     console.log("stev coppy the assignment");
//     console.log("finaaly it is completed assignment");
//     }
// jennya(stev,steva)
// //promise
// var shareNotes=false;
// const promise=new Promise((suceess,failure)=>{
//     if (shareNotes) {
//         suceess("sir share notes");
//     }else{
//         failure("sir not share notes")
//     }

// })
// promise.then((res)=>{
// console.log(res);
// }).catch(res=>{
//     console.log(res);
// }).finally(()=>{
//     console.log("I am prepared my notes");
//  })
// // //json
// // // Assuming the JSON object is stored in a variable named jsonData
// // const jsonData =`{
// //     "name": "ram",
// //     "age": "age"
// //   }`;
  
// //   // Accessing values
// //   const obj=JSON.parse(jsonData)
// //   console.log(obj.name);
// //   const nameValue = jsonData.name; // "ram"
// //   const ageValue = jsonData.age;   // "age"
  
// //   console.log("Name:", nameValue);
// //   console.log("Age:", ageValue);
  
// //ES6 feature
// "use strict"
let message="hello";
//undeclare varible ,object not allowed

console.log(delete message);

//2)String template
//3)spread operator
//4)rest parametr

function display(...args){
console.log(args);
}
display(10,10,30,50,60,80);
//5)Function default parameter
function divide(x,y=3){
console.log(x/y);
}
divide(12,4)
//6)Object destrucring
let student={
    rollNo:12,
    name:'jenny',
    colloege:"coep pune",
}
const{rollNo,name,colloege}=student;
console.log(rollNo,name,colloege);
//7)Array Desctruring
let array=[4,5,6,7];
let[n,n1,n2,n3]=array;
console.log(n);
//8)self invoking function or IIFE
(function(){
    console.log("inside the function");
})()
//9)anonysm function
//function are known as first class citizen in javascript
//3 reason
//1)a function stored as value in varible that is function expression
//2)a function pass as paramter to anotger function that callback
//3)a fuction can return another functon
function messages(){
    console.log("Good morning");
    let inner=function(){
        console.log("Inside the function");
    }
    return inner;
}
messages()()
 
//Higher order functions
function greets(call){
console.log("Good morning");
call();
var inner=function(){
    console.log("I am fine");
}
return inner;
}

function inquire(){
console.log("How are you");
}
greets(inquire)()
//10) arrow function
//it as compare to regular function is clear and shorter
//11)forEach() method
var array2=[20,30,4,5,6];
array2.forEach(function(current,index,array){
    console.log(current,index,array);
})
//map
let newmap=new Map();
newmap.set("name","kishor");
newmap.set("rollno",11);
newmap.set("city","pune");
newmap.forEach((value,key)=>{
console.log(`${value} and ${key}`);
})
//map filter and reduce
//map
const arr3=[1,2,3,4,5,7,9,30,50];
var res=arr3.map((ele)=>{
return ele*ele
})
console.log(res);
//filter
var res=arr3.filter((ele)=>{
    return ele>10
})
console.log(res);
//reduce
//reduce method id uded to reduce array in single value
const nums=[10,8,2,5];
var res=nums.reduce((acc,value)=>{
return acc*value;
})
console.log(res);
//sorting
var array4=['sunil',"ram","sham"];
array4.sort();
console.log(array4);
var arr4=[11,12,25,299,9,8];
arr4.sort((a,b)=>{
   if(a<b){
    return -1
   } else if(a>b){
    return 1;
   }else{
    return 0;
   }
});
console.log(arr4);
//Happ learning ES6 feacture is end\\\\\\\\
//logical program
//1)wrt to hello world
console.log("hello world");
// alert("hello world")
// document.write("Hello world")
//2)fibbonicci series
var a=0;
var b=1;
console.log(a);
console.log(b);
for (let i = 2; i <=7; i++) {
    var temp=a+b;
    a=b;
    b=temp;
    console.log(temp);
    
}
//3)javascript program to add two number
var a=10;
var b=20;
console.log(`${a} and ${b}=${a+b}`);
//4)find squre root of number
var number=16;
console.log(Math.sqrt(number));
//5)javascript program to find the area of a triangle
var base=2;
var height=5
var area=(base*height)/2;
console.log(area);
var a=10;
var b=5;
var c=10;
var s=(a+b+c)/2
var temp=s*(s-a)*(s-b)*(s-c)
var area=Math.sqrt(temp)
console.log(area);
//6)swaping a number
var a=200;
var b=300;
var temp=a;
a=b;
b=temp;
console.log(a);
console.log(b);
//without using third varible
var a=300;
var b=400;
var a=a+b;
var b=a-b;
var a=a-b;
console.log("a=",a);
console.log("b=",b);
//7 Armstong number
//153=1+125+27=153 armstrong number
var number=155;
var len=number.toString().length;
var temp=number;
var sum=0;
while (temp>0) {
    var digit=temp%10;
    var sum=sum+digit**len;
    var temp=parseInt(temp/10);

}
if (sum===number) {
    console.log("Armstrong number");
}else{
   console.log(" not armstrong number");
}
//8 find armstong number bet in interval
for (let i = 1; i <=20; i++) {
    var temp=i;
    var len=temp.toString().length;
    var sum=0;
    while(temp>0){
var digit=temp%10;
var sum=sum+digit**len;
temp=parseInt(temp/10);
    }
    if (sum===i) {
     console.log(i);   
    }
    
    
}
console.log("----------------");
//9factor of number
var number=12;
for (let i = 1; i <=number; i++) {
    if (number%i==0) {
        console.log(i);
        
    }
    
}

//10 convert javascipt program to kms to miles
var kms=12;
var miles=kms*0.621341;
console.log(miles);
//11)convert cel to fahreneit
var c=12;
var f=(c*1.8)+32;
console.log(f);
//12)to check if a number is positive negative or zero
// var arraya=eval("['gh','th','ben']");
// console.log(arrayav[1]);
var arr2=[10,20,30,40,50,60,60,33];
// arr2=[...new Set(arr2)]
var newarray=[];
for (const ele of arr2) {
    var available=newarray.includes(ele);
if (available===false) {
    newarray.push(ele)
}
    
}
console.log(newarray);
var arr5=[1,2,3,4,5,56];
var arrObj={};
for (let i = 0; i < arr5.length; i++) {
    var num = arr5[i];
  arrObj[num]=arrObj[num]?arrObj[num]+1:1;

    
}
console.log(arrObj);
//remove dulicate from array
var array1=[1,2,2,2,3,4,4,5,5];
// array1=[...new Set(array1)]
// console.log(array1);
var newarray=[];
for (const ele of array1) {
  
    var available=newarray.includes(ele);
    if (available===false) {
        newarray.push(ele)
        
    }
   
    
}
console.log(newarray);
var array1=[1,2,2,2,3,4,4,5,5];
 var arrayobj={};
 for (let i = 0; i < array1.length; i++) {
    var num = array1[i];
    arrayobj[num]=arrayobj[num]?arrayobj[num]+1:1;
  
 }
 console.log(arrayobj);

 function occurence(str){
    var occurence={};
    str.split("").forEach((ele)=>{
        if (occurence.hasOwnProperty(ele)) {
            return occurence[ele]++;
        }else{
            return occurence[ele]=1;
        }
    })
console.log(occurence);
 }
 occurence("apple")
var name3="kishor how are you";
var ans=name3.split(" ").map((word)=>{
   return word.split("").reverse().join("");

})
console.log(ans.join(" "));

var name4=123;
var ans=name4.toString().split("").reverse().join("");

console.log(ans);

var name1="madama";
var len=name1.length;
var msg="palindrome";
for (let i = 0; i < len/2; i++) {
    if (name1[i]!=name1[len-1-i]) {
msg="Not Palindrome"
        
    }
   
    
}
console.log(msg);
var name3="kishor how are you";
function uppercase(str){
  let anss= str.split(" ").map((word)=>{
       return word.charAt(0).toUpperCase()+ word.slice(1);
    })
console.log(anss.join(" "));
}
uppercase("kishor how are you")
var array6=[1,2,3,4,5,6,7];
var newarray=array6.reduce((acc,num)=>{
    return acc+num;
})
console.log(newarray);
function retrive1(arr,n){
    if (n<=arr.length) {
        for (let i = 0; i <n; i++) {
            console.log(arr[i]); 
            
        }
        
    }else{
        console.log("Not Available");
    }

}
retrive1([1,2,34,4],5)
















 

   

    
    

