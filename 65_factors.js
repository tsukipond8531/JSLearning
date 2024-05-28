var number=prompt("Please Enter the number");
console.log(`Factor of  ${number} are: `);
for (var i = 0; i <=number; i++) {
    if (number%i==0) {
        console.log(` ${i}`);
    }


}