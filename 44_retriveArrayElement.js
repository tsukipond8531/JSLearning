 function retrive(arr, n=1){
if (n<=arr.length) {
    for (let i = 0; i <n; i++) {
        console.log(arr[i]);
     }
    }else{
console.log(`${n} : Not Available`);
    }
    
}
 retrive([1,2,3,4,5],2)