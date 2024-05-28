function freq(arr){
var freq={};
arr.forEach((ele) => {
    if(freq.hasOwnProperty(ele)){
    freq[ele]++;
}else{ freq[ele]=1;
    }});
   Ans= Object.keys(freq).reduce((acc,number)=>{
        return freq[acc]>freq[number]?acc:number;
    })
    console.log(Object.keys(freq));
console.log(Ans);
}
freq([1,2,3,3,4,4])