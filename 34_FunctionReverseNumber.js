// function reverse(num){
// return Number(num.toString().split("").reverse().join(""));
// }
// const a=reverse(123)
// console.log(a);
// Second way
function reversekaro(num){
   var  rev=0;
    while(num>0){
        var rem=num%10;
       rev=rev*10+rem;
        num=Math.floor(num/10) 
    }
    return rev;
}
console.log(reversekaro(12347));
