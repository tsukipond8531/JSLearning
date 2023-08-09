

function factorial(num){
    let resukt=1;
    for (let index = 1; index <= num; index++) {
        resukt=resukt*index;
        
    }
    console.log(`Factorial of ${num}:${resukt}`);

}
factorial(5);
factorial(9);
factorial(11);
factorial(7);