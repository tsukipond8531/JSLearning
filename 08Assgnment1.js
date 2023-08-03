
let array=[4,5,5,8,5,7,8,9,7,8,90,90];
let newarray=[];
for (const ele of array) {
    let isAvailable=newarray.includes(ele)===true;
    if (isAvailable===false){
        newarray.push(ele); 
    }
    
   }
   console.log(newarray);
   