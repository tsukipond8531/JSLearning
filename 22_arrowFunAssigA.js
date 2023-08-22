 console.log("_____________step1_____________________");
 let a=()=>{
console.log(`Message : ${"Good Morning,Today is Tuesday"}`);
  }
  a();
  console.log("_____________step2_____________________");
  let b=(num1,num2,num3=1)=>{
console.log(`Multiplication  ${num1} ,${num2} and ${num3} is :${num1*num2*num3}`);
  }
  b(5,5,2)
  b(10,4)
  console.log("_____________step3_____________________");
  let c=(num1,num2,num3,num4,num5)=>{
    console.log(`Addition or Cancatination of given parameter  ${num1} ,${num2} , ${num3} , ${num4} and ${num5} is :${num1+num2+num3+num4+num5}`);
   
  }
  c(100,100,200,349,756)
  c("I am","learning","ES6","features","in depth")