let sum=0;
function add( ...num ){
    // console.log(`num1 ${num1},  num2 ${num2}`);
    // console.log(num);
    for (const i of num) {
        sum=sum+i
    }

   console.log(sum);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);