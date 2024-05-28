//using Array Literal
const a=["Kishor","Roshni","Ram","Radha"];
for(i=0;i<a.length;i++){
    console.log(a[i]);
}
//using constuctor
const b=new Array();
b[0]=10;
b[1]=20;
b[2]=30;
b[3]=40;
b[4]=50;
for (let i = 0; i < b.length; i++) {
    console.log(`Index ${i}   at ${b[i]}`);
    
}
//using for in loop
const colors=["red","blue","green"];
for (const key in colors) {
    if (colors.hasOwnProperty.call(colors, key)) {
    
        console.log(colors[key]);
    }
}
console.log(`----------------------------------------------`);
//using foreach loop
const  c=["red","blue","green","yello","cadetblue"];
c.forEach((ele)=>{
    console.log(ele);
})
console.log(`----------------------------------------------`);
//using for of loop
const  d=["red","blue","green","yello","cadetblue","white","black"];
for (const a of d) {
    console.log(a);
    
}
