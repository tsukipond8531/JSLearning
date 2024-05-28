function sum(num){
if(num>0){
    return num+sum(num-1);
}else{
    return 0;
}
}
var res=sum(5);
console.log(res);