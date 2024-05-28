var number=prompt("Enter the number");
var fact=1;
if(number==0){
    console.log(`the factorial ${number} is 1`);
}else if(number<0){
    console.log(`the factorial  ${number} is not posible`); 
}else{
    for (let i = 1; i <= number; i++) {
        fact=fact*i;
        
    }
    console.log(`the factorial  ${number} is ${fact}`);
}