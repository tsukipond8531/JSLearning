(
    function(){
        var a=b=3;
    }
)();
console.log(typeof a);
console.log(typeof b);
function foo(){
return 
{
    name:'kishor'
}
}
console.log(foo());
console.log("A"-"B"+"2");

var a=0;
function ba()
{
    a=10;
    return;
     a=function(){}
}
ba();

// function addsix(x){
//     return 6+x;
    
// }
// console.log(addsix(10));
// console.log(addsix(21));
// function createbase(a){
// return(b)=>{
//     return a+b;
// }
// }

// function createbase(a){
// return (b)=>{
//     return a+b;
// }
// }




// var addsix=createbase(6);
// console.log(addsix(22));
// console.log(addsix(10));
var array=[1,2,4,7,8,[1,4],9,2];
var array1=array.flat();
console.log(array1);
for (let i = 0; i < array1.length; i++) {
    for (let j = i+1; j < array1.length; j++) {
        
        if (array1[i]==array1[j]) {
          console.log(array1[j]);  
        }
    }
}
console.log('*******************');
var numberarray=[1,2,3,4,5,6,9,10];
var missarray=[];
var min=Math.min(...numberarray);
var max=Math.max(...numberarray);
console.log(max);
for (let i = min; i <max; i++) {
    if (numberarray.indexOf(i)<0) {
       missarray.push(i) 
    }
 // return missarray;
    
}
console.log(missarray); 
console.log('*******************');
var numarray=[1,0,2,47,8,9];
var min=Math.min(...numarray);
var max=Math.max(...numarray);
console.log(min);
console.log(max);
console.log('using ES6');
var res=numarray.reduce((prev,ele)=>{
    return prev<=ele?prev:ele
})
console.log(res);
console.log('*******************');
var num=[1,2,7,8];
var max=Math.max(...num);
var index=num.indexOf(max);
del=num.splice(3,1)
var max=Math.max(...num);
var index=num.indexOf(max);
console.log(max);
console.log('*******************');
var arr1=[2,9,6,8,4];
var arr2=[4,8,6,9,2];
var equl=arr1.length==arr2.length && arr1.every((cele)=>{
  if (arr2.indexOf(cele)>-1) {
    return (cele=[arr2.indexOf(cele)])
  }  
})
console.log(equl);
console.log('*******************');
var arr1=[2,9,6,8,4,6,8,7];
var arr2=[4,8,6,9,2,4,7,9];
var inter=arr1.filter((ele)=>{
    return arr2.includes(ele)
})
console.log([...new Set(inter)]);
console.log('*******************');

function union(arr1,arr2){
console.log([...new Set(arr1.concat(arr2))]);
}
union([1,2,3],[4,5,6,9,6])

var string="dada";
var reverse=string.split("").reverse().join("");
if (reverse===string) {
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}
console.log('*******************');
// var string=prompt("Enter a string")
// var substring ="hello";
// console.log(string.includes(substring));
// console.log(string.indexOf(substring));
console.log(string.startsWith("ram"));
console.log(string.endsWith("raja"));
console.log('*******************');
// var stringr=prompt("Enter a string");
// function vowels(str){
//     count=0;
//     for (let i = 0; i < str.length; i++) {
//         var char=str.charAt(i);
// if(char=='A'||char=='E'||char=='O'||char=='U'||char=='I'
// ||char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//     console.log(char);
//     count++;
    
// }
//     }

//     console.log(count);
// }

// console.log(vowels(stringr));
// console.log('*******************');
// var stringr=prompt("Enter a string");
// var regex=/[aeiou]/gi;
// var char=stringr.match(regex);
// console.log(char.join(","));
// console.log(char.length);
console.log('*******************');
var stringr=prompt("Enter a string");
var letter=prompt("Enter the letter/char");
var count=0;
for (let i = 0; i <stringr.length; i++) {
    if (stringr[i]===letter) {
        count++;
    }
    
}
console.log(`${stringr}=>${letter}=${count}`);


