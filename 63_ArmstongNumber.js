var number=parseInt(prompt("Enter the Number"));
var temp=number;//153
var digitofnumber=number.toString().length;3
var sum=0;
while(temp>0){
var digit=temp%10;//153%10=3
console.log(digit);
sum=sum+digit**digitofnumber;
console.log(sum);
temp=parseInt(temp/10);
console.log(temp);
}
if (sum==number) {
    console.log("Armstrong Number");
}else{
    console.log("Not Armstrong Number");
}