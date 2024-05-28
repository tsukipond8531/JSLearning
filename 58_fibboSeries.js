var a=0; b=1;
console.log(a);
console.log(b);
for (let i = 0; i <= 6; i++) {
    var temp=a+b;
    a=b;
    b=temp;
    console.log(temp);
    
}