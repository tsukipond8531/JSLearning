
console.log(`----------------STEP1-------------------`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element,index)=> {
    console.log(`element: ${element},index is: ${index}`);
});
console.log(`----------------STEP2-------------------`);
arrayNumbers.forEach((element=> {
    if (element>0) {
        console.log(` Positive element: ${element}`);  
    }
   
}));
console.log(`----------------STEP3-------------------`);
var newArray=[];

arrayNumbers.forEach(element => {
    if (element<0) {
        newArray.push(element)
    }
}
);
let arro=()=>{
console.log(`NewArray Negative Number`,newArray);
}
arro()
console.log(`----------------STEP4-------------------`);
arrayNumbers.forEach((element=> {
    if (element%2==0) {
        console.log(` Even Number: ${element}`);  
    }
   
}));
console.log(`----------------STEP5-------------------`);
let sum=0;
arrayNumbers.forEach(element=> {
    sum+=element;
        
    }
)
console.log(`Sum of Number: ${sum}`);
console.log(`----------------STEP6-------------------`);
arrayNumbers.forEach((element,index)=> {
    if (index%2==0) {
        console.log(` Even Index values: ${element}`);  
    }
   
});