// setTimeout(()=>{
//     console.log(i);
//     let i=10;
// },1000)
// let count=0;
// function printcount(){
//     if(count==0){
//         let count=3;
//         console.log("count1",count);
//     }
//     console.log("count2",count);
// }
// printcount()
// console.log(typeof typeof 1);
// const numbers=[1,2,3];
// numbers[9]=numbers;
// console.log(numbers);
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);
// let data=3+4+'5k';
// console.log(typeof data);
// var addsix=createbase(6);
// addsix(10);
// addsix(21);
// function createbase(a){
// return(b)=>{
//     return a+b;
// }
// }
// var addsix=createbase(6);
// console.log(addsix(10));
// console.log(addsix(21));
function reversenumber(num){
    return num.toString().split("").reverse().join("");

}
const a=reversenumber(123);
console.log(a);
var arr=[1,2,3,4,5];
var shufflearea=arr.length;
while(shufflearea>0){
    shufflearea--;
    var indextochanged=Math.floor(Math.random()*shufflearea);
    var temp=arr[shufflearea];
    arr[shufflearea]=arr[indextochanged];
    arr[indextochanged]=temp;
}
console.log(arr);

var array=[1,2,3,4,5,6,7,8,9];
console.log(array.length);
var len=0;
while(array[len]!==undefined){
    len++;
}
console.log(len);
function reversed(sentence){
    let words=[];
    let currentword='';
    for (let i = 0; i < sentence.length; i++) {
        let char=sentence[i];
        if (char!=' ') {
            currentword+=char;
        }else{
            words.push(currentword);
            currentword=''
        }
        
    }
    words.push(currentword);
    let revereswords=[];
    for (const wors of words) {
        reveresword='';
        for (let i = wors.length-1; i >=0; i--) {
        reveresword+=wors[i];
        }
        revereswords.push(reveresword)
    }
    return revereswords.join(" ");

  
}
var result=reversed("I am happy")
console.log(result);