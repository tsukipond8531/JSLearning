var number=prompt("Enter the number");
var fact=1;
function factr(n){
    if(n>number){
        return;
    }
    fact=fact*n;
    n++;
    factr(n)
}
factr(1);
    console.log(`factorial of ${number} is ${fact}`);

