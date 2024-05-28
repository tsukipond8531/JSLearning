// //kishor how are you
// var string="kishor how are you";
// var res=string.split(" ").map((word)=>
// word.split("").reverse().join("")
// )
// console.log(res.join(" "));
// //kishor
// var string="kishor";
// var res=string.split("").reverse().join("");
// console.log(res);
// //check object is arrray
// function check(ele){
//     return Array.isArray(ele)

// }
// console.log(check({}));
// //how to empty array
// var arr=[1,2,3,4,56];
// arr.length=0;
// console.log(arr);
// //number check integer
// var number=12
// if (number%1==0) {
//     console.log("Integer");
// }else{
//     console.log("not Integer");
// }
// //([1,2,3]) make duplicate
// function duplicate(ele){
// console.log(ele.concat(ele)); 
// }
// duplicate([1,2,3]);
// //reverse the number
// function reverse(num){
//     return num.toString().split("").reverse().join("");

// }
// const a=reverse(123)
// console.log(a);
// //2nd way;
// function reverse1(num){
//     var revers=0;
//     while (num>0) {
//        var  rem=num%10;
//         revers=revers*10+rem;
//         num=Math.floor(num/10)
//     }
// return revers;
// }
// console.log(reverse1(54321));
//palindrome string
// function pali(str){
//     rev=str.split("").reverse().join("");
//     if(rev===str){
//         console.log("palindrome");
//     }else{
//         console.log(" not palindrome");
//     }

// }
// console.log(pali("dad"));
//2nd way
// var string="madam";
// var len=string.length;
// var msg="palindrome";
// for (let i = 0; i < len/2; i++) {
//     if (string[i]!==string[len-1-i]) {
//         msg="Not palindrome";
//     }
    
// }
// console.log(msg);
// //alphabetic order
// function alpha(str){
//     return str.split("").sort().join("");

// }
// console.log(alpha("harsh"));
//each word is uppercase
// function upper(str){
// var res=str.split(" ").map((word)=>{
//    return word.charAt(0).toUpperCase()+word.slice(1);
// })
// // console.log(res.join(" "));
// }
// console.log(upper("i am kishor ubhale"));
// //number of occerence

// var string="kishorrrkrkr";
// var letter="r";
// cout=0;
// for (let i = 0; i < string.length; i++) {
//     var char=string.charAt(i);
//     if (char==letter) {
//         cout++;
//     }
    
// }
// // console.log(cout);
// function  occ(str) {
//     var occurence={};
//     str.split("").forEach((element) => {
//       if(occurence.hasOwnProperty(element)===false){
// return occurence[element]=1;
//       }else{
//         return occurence[element]++; 
//       }  
//     });
//    console.log(occurence); 
// }
// occ("appleeee")
// var arr=["A","A","A","b","A","b","A","A"];
// counts={};
// for (let i = 0; i < arr.length; i++) {
//     let num=arr[i];
//    counts[num]= counts[num]?counts[num]+1:1;
    
// }
// console.log(counts);

// var arr=["kishor","Jayant","niketan","uday"];
// count=0;
// arr.forEach((world)=>{
//     chars=world.split("")
//     console.log(chars);
//     chars.forEach((char)=>{
//    if(char=="a" || char=="e" ||char=="i"||char=="o"||char=="u"){
//     // console.log(char);
// count++;

//     }
// })
//  })

// // console.log(count);
// // var arr = ["kishor", "Jayant", "niketan", "uday"];
// // count = 0;

// // arr.forEach((word) => {
// //     chars = word.split(""); // Split the word into an array of characters
// //     chars.forEach((char) => {
// //         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
// //             count++;
// //         }
// //     });
// // });

// console.log(count);
// var array=[1,2,3,4];
// var res=array.map((ele)=>{
//    return ele*array.length;
// })
// console.log(res);
// var len=array.length;
// for (const ele of array) {
//     console.log(ele*len);
// }
//average and sum es6 
// var arr=[20,30,40,70,80,90,200];
// var ans=arr.reduce((acc,num)=>{
//     return acc=acc+num;
// })
// console.log(`sum is ${ans}`);
// console.log(`${ans/arr.length}`);
// var b=arr.indexOf(30);
// if(b>-1){
//     arr.splice(b,1)
// }
// console.log(arr);
// console.log(arr.reverse());
// for (let i = arr.length-1; i >= 0; i--) {
    
//     console.log(arr[i]);
// }
// var arr=["jhhff",123,"kfjf",3,4,"abc"];
// var sum=0;
// arr.forEach((ele)=>{
//     if (typeof ele =='number') {
//         sum=sum+ele
//     }
// })
// console.log(sum);
// var arr=[{name:"jenny",gender:"female"},
// {name:"stev",gender:"male"}];
// // console.log(arr);
// var res=arr.filter((ele)=>{
//   return  ele.gender=='male';
// })
// console.table(res);
// count=0;
// arr.forEach((ele)=>{
// if (ele.gender!=="male") {
//     count++;
// }
// })
// for (let i = 1; i <= count; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j].gender!=="male") {
//             arr.splice(j,1)
//         }
        
//     }
    
// }
// console.table(arr);





// var count=0;
// arr.forEach((ele)=>{
//    if( ele.gender!='male'){
//     count++;
//    }
// })
// for (let i = 1; i <= count; i++) {
//     for (let j=0; i < arr.length; j++) {
//         if (arr[j].gender!=="male") {
//             arr.splice(j,1);
//         }
        
//     }
    
// }
// console.table(arr);
// //clone the array
// function clonearray(arr){
// return [...arr]
// }
// let clone=clonearray([1,2,3,4])
// console.log(clone);
//quick rec
// var arr=["a","b","c","a"];
// var counts={};
// for (let i = 0; i < arr.length; i++) {
//     var num=arr[i];
//     counts[num]=counts[num]?counts[num]+1:1;
    
// }
// console.log(counts);
// //first n element of array
// function retrive(arr,n){
//     if (n<=arr.length) {
//         for (let i = 0; i < n; i++) {
//             console.log(arr.length-i);
            
//         }
//     }else{
//         console.log(`${n} not available`);
//     }
// }
// retrive([1,2,3,4,5,6],3)
//most fereuent item in arraaay
// function freq(arr){
//     freq={};
//     arr.forEach((ele)=>{
//         if (freq.hasOwnProperty(ele)) {
//             freq[ele]++;
//         }else{
//             freq[ele]=1;
//         }
//     })
//     console.log(freq);
//     var ans=Object.keys(freq).reduce((acc,num)=>{
//         return freq[acc]>freq[num]?acc:num;
//     })
//     console.log(ans);

// }
// freq([1,2,3,3,4,4,5])
// var arr=[1,2,3,4,5,6];
// console.log(arr.length);
// console.log(arr[7]);
// var len=0;
// while (arr[len]!=undefined) {
//     len++;
// }
// console.log(len);
// function uni(arr1,arr2){
// return [...new Set(arr1.concat(arr2))]
// }
// console.log(uni([1,2,3,4],[2,3,4,5,6,6,6]));
// //shuffle array
// function shufflekaro(arr){
//     totatshuffle=arr.length;
//     while (totatshuffle>0) {
//         totatshuffle--;
//         var indexshufflechanged=Math.floor(Math.random()*totatshuffle);
//         var temp=arr[totatshuffle];
//         arr[totatshuffle]=arr[indexshufflechanged];
//         arr[indexshufflechanged]=temp;
//     }
// return arr;
// }
// console.log(shufflekaro([1,2,3,4,5,6,7]));
// //length
// var arr=[1,2,3,4,5];
// var len=0;
// while(arr[len]!=undefined){
//     len++;
// }
// console.log(len);
