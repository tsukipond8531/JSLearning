var a=prompt("Enter the Number lower");
var b=prompt("Enter the number Upper");
for (let i = a; i <=b; i++) {
    var digitcount=i.toString().length;
    var temp=i;
var sum=0;
    while(temp>0){

var digit=temp%10;
sum=sum+digit**digitcount;
temp=parseInt(temp/10);

}
if (sum===i) {
    console.log(i);
    
}}