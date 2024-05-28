var numberArray=[1,2,3,6,7,8,10];
var missingArray=[];
var missingvalue=(arr)=>{
var min=Math.min(...arr);
var max=Math.max(...arr);
for (let i = min; i <max; i++) {
    if (arr.indexOf(i)<0) {
       missingArray.push(i) 
    }
   
}
return missingArray;
}


// console.log(missingvalue(numberArray));
// var number=4;
// var fact=1;
// function factr(n){
//     if (n>number) {
//         return;
//     }
//     fact=fact*n;
//     n++;
//     factr(n)
  
// }
// factr(1);
// console.log(fact);


var number=8;
if (number==1) {
    console.log("not a prime number");
}else if(number<1){
    console.log("not a prime number");
}else{
    var prime=true;
    for (let i = 2; i < number; i++) {
    if (number%i===0) {
        prime=false;
        
        
    }
        
    }
    if (number>1 && prime) {
        console.log("prime");
        
    }else{
        console.log("Not prime");
    }
}


var number=12;
for (let i = 0; i <=number; i++) {
    if (number%i==0) {
        console.log(i);
        
    }   
    
}

