function shufflekaro(arr){
    var totalshuffleArea=arr.length;
    while(totalshuffleArea>0){
        totalshuffleArea--;
        var indexToBechanged=Math.floor(Math.random()*totalshuffleArea);
        var temp=arr[totalshuffleArea]
        arr[totalshuffleArea]=arr[indexToBechanged]
        arr[indexToBechanged]=temp;

    }
    return arr;

}
console.log(shufflekaro([1,2,3,4,5,6,7]));