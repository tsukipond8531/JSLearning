// for (let i = 1; i <=6; i++){
//     for (let j = 1; j <=i; j++) {
//         //  console.log("*");
//          document.write("*")
        
//     }
//     // console.log("<br>");
//      document.write("<br>")
   
// }
function occ(str){
    var newocc={};

str.split("").forEach((ele) => {
    if (newocc.hasOwnProperty(ele)) {
        return newocc[ele]++;
    }else{
        return newocc[ele]=1;
    }
    
});
console.log(newocc);
}
occ("apple")
var number=0;
console.log(number++);
console.log(number);
console.log(++number);
console.log(number);
console.log(0.1+0.2==0.3);
var b=1;
function outer(){
    var b=2;
    function inner(){
        b++;
        var b=3;
        console.log(b);
    }
    inner();

}
outer()
let x='Hello'&&false;
console.log(x);
let y=0 &&'Yes'&&true;
console.log(y);
let z=true &&'Hello'&& 10;
console.log(z);
'use strict'
function abc(){
    x=33;
    console.log(x);
    var x;
}
abc()
