function union(arr1,arr2){
return [...new Set(arr1.concat(arr2))]
}
console.log(union([1,2,3,4,5,11,22,11,22,11,22],[6,7,8,9,1,2,3]));