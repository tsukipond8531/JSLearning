// let rows=6;
// // let col=4;
// let result="";
// for (let i = 6; i>=1; i--) {
//     for (let j = 1; j<=i; j++) {
        
//         result=result.concat(`*`);
        
//     }
//     result=result.concat(`\n`)
//    }
// console.log(result);

// console.log(`-------------`);
// let result1="";
// for (let i =1; i<=3; i++) {
//     for (let j = 1; j<=3-i; j++) {
        
//         result1=result1.concat(` `);
        
//     }
//     for (let j = 1; j<=2*i-i; j++){
//         result1=result1.concat(`*`);
//     }
//     console.log('\n');

//     result1=result1.concat(`\n`)
//    }
// console.log(result1);



// let result = ''
// for (let i = 1; i <= 3; i++) {
//     for (let j = 3; j<=i; j--) {
//        result = result.concat(" ")
//        }
//        for (let k =1; k <=2*i-1; k=k+2) {
//         result = result.concat("*")

//        }
//        result = result.concat('\n')
        
//     }
//     console.log(result);

    let result = '';
for (let i = 1; i <= 3; i++) {
  for (let j = 3; j > i; j--) {
    result = result.concat(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    result = result.concat("*");
  }
  result = result.concat('\n');
}
console.log(result);