// var  a=prompt("Enter the first Number");
// var  b=prompt("Enter the Second Number");
// var  c=prompt("Enter the Third Number");
// var x=Math.max(a,b,c);
// console.log(`${a} ,${b},${c} largest=${x}`);
function check(p,q,r){
    p = parseFloat(p);
    q = parseFloat(q);
    r = parseFloat(r);
    
    if(p>=q && p>=r){
        return p;
    }else if(q>=p && q>=r){
        return q;
    }else{
        return r;
    }
}

var  a=prompt("Enter the first Number");
var  b=prompt("Enter the Second Number");
var  c=prompt("Enter the Third Number");
var x=check(a,b,c);
console.log(`${a} ,${b},${c} largest=${x}`);