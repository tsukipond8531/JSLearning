
let isPrime=true;
function Prime(number) {
    

if(number==1){
    console.log("1 is neither prime");
}else if(number>1){
    for (let index = 2; index < number; index++) {
        if(number%index==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number} is prime`);
    }else{
        console.log(`${number} is  not prime`);
    }
}
else{
    console.log("The number is not prime");
}

}
Prime(11);
Prime(21);