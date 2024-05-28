// var string=prompt("Enter the string");
// var teststart=string.startsWith("w");
// var testend=string.endsWith("e");
// if (teststart==true && testend==true) {
//     console.log(`${string} start with W and Ends with e`);
    
// }else if(teststart==true && testend==false) {
//     console.log(`${string} start with w`);
// }else if(teststart==false && testend==true) {
// //     console.log(`${string} start not with w and start with e`);
// // }
// // else if(teststart==false && testend==false) {
// //     console.log(`${string} neither start  with w and start with e`);
// // }
// var array=[1,2,3,3,3,3,4,4,5,5];
// console.log(array);
// // array=[...new Set(array)]
// // console.log(array);
// newarray=[];
// for (var ele of array) {
//     var available=newarray.includes(ele);
//     if (available===false) {
//         newarray.push(ele);
        
//     }
   
// }
// console.log(newarray);
// var name;

// var sting=null;
// // var len=0;
// // while (sting[len]!=undefined) {
// //     len++
// // }
// // console.log(len);
// console.log(typeof sting);
// var a=100;
// var b=200;
//  a=a+b;//300
//  b=a-b;//300-200
//  a=a-b;//300-200
// console.log(a,b)
// var string="   kishor    ";
// var end=string.trimEnd();
// console.log(end);
// var len=string.length-end.length;
// // console.log(len);
// var a='3'-2;
// // console.log(a);
// var number=6;
// // for (let i = 0; i <= number; i++) {
    
// //     if(number%i==0){
// //         console.log(i);
// //     }}
//     var string="kishoir";
//     count=0;
//     for (let i = 0; i < string.length; i++) {
//         var char=string.charAt(i) 
//         if (char=="a" ||char=="e" ||char=="i" || char=="o" ||char=="u" ) {
//             count++;
//         }
        
//     }
//     console.log(count);
//     var array=[1,2,3,4,5,6,6,7];
//     // array[0]=100;
//     // console.log(array[0]);
//     // array.length=2;
//     array.push(700)
//     array.pop();
//     array.unshift(200)
//     array.shift();
//     console.log(array);
//     console.log(array.slice(1,4));
//     console.log(array.splice(1,2,0));
//     console.log(array);
// const person={
//     name:"ram",
//     id:1,
// }
// console.log(person.name);
// console.log(person['id']);
// class person1{
//     name="ram";
//     id=1
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//     }
// }
// var ram=new person1("ram",2)
// console.log(person1.name);
// let id
// id instanceof person
// var glo=300;
// function outer(){
//     var iutervarible=200;
//     var a=function(){
// var inner=1
// 00;
// console.log(glo);
// console.log(iutervarible);
// console.log(inner);
//     }
// return a;
// }
// outer()();
// var a=[45,66,6,7,8,3,2]
// a.sort((a,b
//     )=>{
//     return a>b?1:-1
// // })
// // console.log(a);
// // for (var i = 1; i <=5; i++) {
// //     let spaces=' '.repeat(5-i);
// //     let asterisks = '*'.repeat(2 * i - 1);
// //     console.log(spaces + asterisks);

    
// // }
// // function printPyramid(height) {
// //     for (let i = 1; i <= height; i++) {
// //       // Add spaces before the asterisks
// //       let spaces = ' '.repeat(height - i);
  
// //       // Add asterisks for the current row
// //       let asterisks = '*'.repeat(2 * i - 1);
  
// //       // Combine spaces and asterisks and print the current row
// //       console.log(spaces + asterisks);
// //     }
// //   }
  
// //   // Adjust the height as needed
// //   printPyramid(5);

// for (let i = 5; i >=1; i--) {
//     let spaces=" ".repeat(5-i);
//     let as='*'.repeat(2 * i-1)
//     console.log(spaces+as);
    
//   }
    
// for (let i = 1; i <=5 ;i++) {
//     let spaces=' '.repeat(5-i);
//     let ass='*'.repeat(2*i-1)
//     console.log(spaces+ass);
// }
// for (let i = 4; i >=1 ;i--) {
//     let spaces=' '.repeat(5-i);
//     let ass='*'.repeat(2*i-1)
//     console.log(spaces+ass);
// }
// let number=6;
// if (number==0) {
//     console.log("not a prime");
// }
// else if (number<1) {
//     console.log("not a prime");
// }else{
//     isprime=true;
//     for (var i = 2; i <number; i++) {
//         if (number%i==0) {
//             isprime=false;
//         }
//         }
// }
// if (isprime && number>1) {
//     console.log("prime");
// }else{
//     console.log("prime not");
// }
// var number=154;
// let len=number.toString().length;
// var temp=number;
// var sum=0;
// while (temp>0) {
//     var lastdigit=temp%10;
//     sum+=lastdigit**len;
//     var temp=parseInt(temp/10)
// }
// if (number==sum) {
//     console.log("Armstrong");
// }else{
//     console.log("Not Armstrong");
// }
// var a=0;var b=1;
// console.log(a);
// console.log(b);
// for (let i = 2; i <=6; i++) {
//     var temp=a+b;
//     a=b;
//     b=temp
//     console.log(temp);
// }
// var fact=1;
// var number=6
// function factr(n){
//     if (n>number) {
//         return
        
//     }
//     fact=fact*n;
//     n++;
//     factr(n)

// }
// factr(1)
// console.log(fact);
// var string="madama";
// var reverse=string.split("").reverse().join("");
// if (reverse==string) {
//     console.log("palindrome");
// }else{
//     console.log("palindrome not");
// }
// var string="dada";
// var len=string.length;
// var msg="palindrome";
// for (let i = 0; i < string.length; i++) {
//     if (string[i]!=string[len-1-i]) {
//         msg="not palindrome"
//     }
    
// }
// console.log(msg);
// var array=[1,2,3,4,4,"C"];
// var newarr={};
// for (let i = 0; i < array.length; i++) {
//     var num=array[i];
// newarr[num]=newarr[num]?newarr[num]+1:1;
    
// }
// console.log(newarr);
// var array=[1,2,3,4,4];
// var len=array.length;
// for (const ele of array) {
//     console.log(ele*len);
// }
// var result=array.map((ele)=>{
//     return ele*len;
// });
// console.log(result);
// function duplicate(arr){
// return arr.concat(arr)
// }
// console.log(duplicate([1,2,3]));
// var string="kishor you are selected senwell";
// var result=string.split(" ").map(element => {
//    return element.split("").reverse().join("");

// });
// console.log(result.join(" "));
// var number=123;
// var res=number.toString().split("").reverse().join("")
// console.log(res);
// function occ(str){
//     occurence={};
//     str.split("").forEach(element => {
        
   
//     if (occurence.hasOwnProperty(element)==false) {
//         occurence[element]=1;
//     }else{
//         occurence[element]++;
//     }
// });
// }
// occ("kishor")
// console.log(occurence);
// const arr=["hhh",123,"fff",7];
// sum=0;
// arr.forEach((ele)=>{
// if (typeof ele=='number') {
//     sum+=ele;
// }
// })
//     console.log(sum);
// function first(arr,n){
//     var len=arr.length;
//     if (n<=arr.length) {
//         for (let i = 0; i <n; i++) {
//         console.log(arr[len-i-1]);
            
//         }
//     }else{
//         console.log("Mot Available");
//     }
    

// }
// first([1,2,3,4],2)
function occ(arr){
    var freq={};
    arr.forEach(element => {
      if(freq.hasOwnProperty(element)==false){
        freq[element]=1;
      } else{
        freq[element]++;
      }
    });
    var res=Object.keys(freq).reduce((accn,number)=>{
return freq[accn]>freq[number]?accn:number;
    }
    )
    console.log(res)}


occ([1,2,3,3,3,3,4,5])