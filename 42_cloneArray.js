// function cloneArray(arr){
// // return [...arr];
// }
// newarray=cloneArray([1,2,3,4])
// console.log(newarray);
// console.log(cloneArray([1,2,3,4]));



// second way
/*function cloneArray(arr){
    var newarr=[];
    arr.forEach((ele )=> {
        newarr.push(ele)
    });
    return newarr;
    }
    var array=[1,2,3,4,5,6,7,8];
    newarray=cloneArray(array)
    console.log(newarray);
    newarray.pop()
    console.log(newarray);
    console.log(array);
    */

    // 3 rd way

    function cloneArray(arr){
        newArray=arr.map((ele)=>{
            return ele;
        })
return newArray;
    }
    array=[1,2,3,4,5];
    newArray=cloneArray(array);
    console.log(newArray);
    newArray.pop();
    console.log(newArray);
    console.log(array);