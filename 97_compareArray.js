var arr1=[1,2,3,4,5];
var arr2=[5,4,3,2,12];
var sameArray=arr1.length==arr2.length && arr1.every((currele)=>{
    if (arr2.indexOf(currele)>-1) {
        return (currele=[arr2.indexOf(currele)])
    }
});
console.log(sameArray);