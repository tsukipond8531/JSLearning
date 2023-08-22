// // let rows=6;
// // // let col=4;
// // let result="";
// // for (let i = 6; i>=1; i--) {
// //     for (let j = 1; j<=i; j++) {
        
// //         result=result.concat(`*`);
        
// //     }
// //     result=result.concat(`\n`)
// //    }
// // console.log(result);

// // console.log(`-------------`);
// // let result1="";
// // for (let i =1; i<=3; i++) {
// //     for (let j = 1; j<=3-i; j++) {
        
// //         result1=result1.concat(` `);
        
// //     }
// //     for (let j = 1; j<=2*i-i; j++){
// //         result1=result1.concat(`*`);
// //     }
// //     console.log('\n');

// //     result1=result1.concat(`\n`)
// //    }
// // console.log(result1);



// // let result = ''
// // for (let i = 1; i <= 3; i++) {
// //     for (let j = 3; j<=i; j--) {
// //        result = result.concat(" ")
// //        }
// //        for (let k =1; k <=2*i-1; k=k+2) {
// //         result = result.concat("*")

// //        }
// //        result = result.concat('\n')
        
// //     }
// //     console.log(result);

// //     let result = '';
// // for (let i = 1; i <= 3; i++) {
// //   for (let j = 3; j > i; j--) {
// //     result = result.concat(" ");
// //   }
// //   for (let k = 1; k <= 2 * i - 1; k++) {
// //     result = result.concat("*");
// //   }
// //   result = result.concat('\n');
// // }
// // console.log(result);
// //vowels
// function vowel(str) {
  
//   let count=0;
//   for (let index = 0; index < str.length; index++) {
//     const element = str.charAt(index);
//   if(element=="a"||element=="e"|| element=="i"|| element=="o"|| element=="u"|| element=="A"|| element=="E"||element=="O"|| element=="I"||element=="U") {
//     console.log(element);
//     count++;
//   }
// }
// console.log(`sum of vowels:${count}`);
  
// }
// vowel("i am boy aaaaaaaaaa");

// //array
//  var array=[10,20,30,50,10,80,20];
// console.log(array);
// console.log(typeof array);
// console.log(array[5]);
// array[1]=100;
// console.log(array);
// console.log(array.includes(10));
// console.log(array.indexOf(80));
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
  
// }
// console.log(`-------------------------------`);
// for (let index = array.length-1; index>=0; index--) {
//   const element = array[index];
//   console.log(element);
  
// }
// console.log(`-------------------------------`);
// for (let index = 0; index < array.length; index++) {
//   // const element = array[index];
//   if(index%2!=0){
//     const element = array[index];
//   console.log(element);
//   }
// }
// console.log(`-------------------------------`);
// for (let index = 0; index < array.length; index++) {
//   // const element = array[index];
//   if(index%2==0){
//     const element = array[index];
//   console.log(element);
//   }
// }

// var array=[10,20,30,50,10,80,20];
// array.push(70);
// array.unshift(60)
// console.log(array);
// var array=[10,20,30,50,10,80,20];
// array.pop();
// array.shift();
// console.log(array);

// var array=[10,20,30,50,10,80,20];
// console.log(array);
// console.log(array.slice(3));
// console.log(array.slice(1,4));
// var array=[10,20,30,50,10,80,20];
//  console.log(array);
// // console.log(array.splice(3));
// // console.log(array);
// // console.log(array.splice(3,2));
// // console.log(array);
// console.log(array.splice(3,0,60));
// console.log(array);
// console.log(array.splice(3,3,70));
// console.log(array);
// for (const ele of array) {
//   console.log(ele);
  
// }
// ///remove duplicate using for loop
// // var array9=[4,5,4,5,8,5,7,8,9,7,8];

// // for (let index = 0; index < array9.length; index++) {
// //   var element = array9[index];
// //   let isAvailable=array9.includes(element);
// // for (let i = 0; i < isAvailable; i++) {
// //   var element1 = array9[i];
// // array9.push(element1)
  
// // }
// // console.log(array9);
// // }

//object

// const emp={};
// emp.name="Kishor";
// emp.age=23;
// console.log(emp);
class ram{
    constructor(sita){
        
        this.sita=sita;
    }
}
let siya= new ram("sitaram");
let sham;
console.log(siya);
console.log(siya instanceof Object);
 
