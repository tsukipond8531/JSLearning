const array=["abcdfef",123,"hjkl",4,3,1,"qwerty"];
let sum=0;
array.forEach((ele)=>{
if(typeof ele=='number'){
    sum+=ele;
}
})
console.log(sum);