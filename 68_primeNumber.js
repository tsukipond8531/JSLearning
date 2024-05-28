 var number=prompt("Please Enter the Number");
 if(number==1){
    console.log(`${number} is neither prime nor composite number`);
 }else if(number<1){
    console.log(`${number} is not prime`);
 }
 else {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && number > 1) {
        console.log(`${number} is prime`);
    } else {
        console.log(`${number} is not prime`);
    }
}
// }else{
//     for (var i = 1; i <Math.sqrt(number); i++) {
//     is
// if (number%i==0) {
//     var res=`${number} is not prime`;
//     break;
// }else{
//     var res=`${number} is  prime`;
// }
        
//     }
//     console.log(res);
//  }
 