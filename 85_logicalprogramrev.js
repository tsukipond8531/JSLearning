//1)fibonaccie series
// a=0;
// b=1;
// console.log(a);
// console.log(b);
// for (let i = 2; i < 6; i++) {
//     var temp=a+b;//1,2
//     a=b;//1,1
//     b=temp;//1,2,
//     console.log(temp);
    
// }
//2)swap to numbers
// var a=8; var b=10;
// console.log(`Before  swap ${a} and ${b}`);
// var temp=a;
// a=b;
// b=temp;
// console.log(`After  swap ${a} and ${b}`);
// var a=18; var b=10;
// console.log(`Before  swap ${a} and ${b}`);
// a=a+b;//18
// b=a-b;//8
// a=a-b;//10
// console.log(`After  swap ${a} and ${b}`);
//3)Armstrong Number
// var number=153;
// var numberlegth=number.toString().length;
// var temp=number;
// sum=0;
// while(temp>0){
//     var digit=temp%10;
//     sum+=digit**numberlegth;
//     temp=parseInt(temp/10);

// }
// if (sum==number) {
//     console.log("Armstrong number");
    
// }else{
//     console.log(" Not Armstrong number");
// }
var arr=[1,2,3,4,5,5,6,6,7];
// arr=[...new Set(arr)]
// console.log(arr);
var newarr=[];
for (const ele of arr) {
    var avl=newarr.includes(ele) 
    if (avl==false) {
        newarr.push(ele);
    }
}
// console.log(newarr);
// var string="madam";
// var len=string.length;
//    msg="Palindrome";
// for (let i = 0; i < len/2; i++) {
//     if(string[i]!=string[len-1-i]){
//         msg=" not Palindrome";
//     }
    
// }
// console.log(msg);
// var string="madamaa";
// var res=string.split("").reverse().join("");
// if(res===string){
//     console.log("palindrome");
// }
// var number=151;
// var numberlegth=number.toString().length;
// var temp=number;
// let sum=0;
// while (temp>0) {
//     var digit=temp%10;
//     console.log(digit);
//     sum=sum+digit**numberlegth;
//     console.log(sum);
//     temp=parseInt(temp/10);
//     console.log(temp);  
// }
// if (number==sum) {
//     console.log("Armstrong number");
// }else{
//     console.log(" NOT Armstrong number"); 
// }
// var string="madam";
// // var result=string.split("").reverse().join("")
// // console.log(result);
// var msg="String is palindrome";

// var len=string.length;
// for (let i = 0; i <len/2; i++) {
// if (string[i]!=string[len-1-i]) {
//     msg="String is  Not palindrome";
// }
    
// }
// console.log(msg);
// remove duplicate 
var arr=[12,13,14,15,11,11,11,15,12,25];
console.log(arr);
// arr=[...new Set(arr)];
// console.log(arr);
// var newArr=[];
// for (let i = 0; i < arr.length; i++) {
// var available=newArr.includes(i);
// if
    
}



