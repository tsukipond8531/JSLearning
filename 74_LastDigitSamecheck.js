var a=prompt("please enter 'a' number");
var b=prompt("please enter 'b' number");
var c=prompt("please enter 'c' number");
var res1=a%10;
var res2=b%10;
var res3=c%10;
if (res1===res2 && res1===res3) {
    console.log("same digit");
}else{
    console.log("Not same digit");
}