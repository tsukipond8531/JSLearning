var arr=[1,2,47,8,[1,4],9,2,9];
var arr1=arr.flat();
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = i+1; j < arr1.length; j++) {
//         if (arr1[i]===arr1[j]) {
//           console.log(arr1[j]);  
//         }
        
//     }
    
// }
var newarray=arr1.filter((ele,index,array)=>{
    return array.indexOf(ele)!=index;
})
console.log(newarray);