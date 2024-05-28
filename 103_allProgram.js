//1)swaping a number with third varible and without third varible
let a=20;
let b=13;
console.log(`Before swaping a=${a} and b=${b}`);
// var temp=a;
// a=b;
// b=temp;
// a=a+b;
// b=a-b;
// a=a-b
a=a^b;
b=a^b;
a=a^b;
console.log(`After swaping a=${a} and b=${b}`);
//2)fibbonacci series
var c=0;
var d=1;
console.log(c);
console.log(d);
for (let i = 2; i <=5; i++) {
    var temp=c+d;
    c=d;
    d=temp;
    console.log(temp);
    
}
//3)prime number
var number=0;
if (number==1) {
    console.log("not a prime number");
}else if(number<0){
    console.log("Not a prime number");
}else{
    var isprime=true;
    for (let i = 2; i <number; i++) {
        if (number%i==0) {
            isprime=false
            break;
        }
        
    }
}
if (isprime && number>1) {
    console.log("prime nummber");
}else{
    console.log("not a prime number");
}
//4)even number
var num=5;
if (num%2==0) {
    console.log("even number");
}else{
    console.log("old number");
}
//5)addtion and print hello word
console.log("Hello word");
// document.write("hello Ram");
// alert("hello radha")
//6)Armstong number
var number=153;
var temp=number;
var digitcube=number.toString().length;
console.log(digitcube);

var sum=0;
while (temp>0) {
    var lastdigit=temp%10;
    sum+=lastdigit**digitcube;
    console.log(sum);
    temp=parseInt(temp/10)
    console.log(temp);
}
if (sum===number) {
  console.log("Armstong number");  
}else{
    console.log("Not Armstong number");  
}
//7)palindrome string
var string="madam";
var len=string.length;
var msg="palindrome"
for (let i = 0; i < len/2; i++) {
    if (string[i]!=string[len-1-i]) {
        msg="Not palindrome";
    }
    
}
console.log(msg);
//2 way
var result=string.split("").reverse().join("");
if (result===string) {
    console.log("Palindrome string");
}else{
    console.log("Not a palindrome string");
}

//8)squre root of number
var number=16;
console.log(Math.sqrt(number));
//9)Area of triangle
//area=(base*height)/2
var x=11;
var y=5;
var z=10;
var s=(x+y+z)/2;
var temp=s*(s-x)*(s-y)*(s-z);
var area=Math.sqrt(temp);
console.log(area);
//10)find armstong number in interval
for (let i = 1; i <=10; i++) {
    var countdigit=i.toString().length;
    var temp=i;
    var sum=0;
    while (temp>0) {
        var digit=temp%10;
        sum+=digit**countdigit;
        temp=parseInt(temp/10);
    }
    if (sum===i) {
     console.log(i);   
    }
    
}
//11)factor of number
var number=12;
var f=""
for (let i = 0; i <=number; i++) {
    
    if (number%i==0) {
        f+=i+" ";
    }
}
console.log(f);
//12)km to miles
var km=12;
var miles=km*0.621371;
console.log(miles);
//13)celsious to fahrenheint
var cel=12;
var fahrenheint=cel*1.8+32;
console.log(fahrenheint);
//14)check number is positive negative and zero
// var value=parseInt(prompt("Enter the value"));
// if (value>0) {
//     console.log(`${value} is Positive`);
// }else if(value<0){
//     console.log(`${value} is Negative`); 
// }else if (value===0){
//     console.log(`${value} is Zero`);
// }else{
//     console.log(`${value} is Invalid`);
// }
//15)random number
var k=Math.floor(Math.random()*(10-1)+1);
console.log(k);
//16)Find the largest number
var i=92;
var j=30;
var k=55;
// var largest=Math.max(i,j,k);
// console.log(largest);
function large(p,q,r){
if (p>=q &&p>=r) {
    return p;
}else if(q>=p &&q>=r){
    return q;
}else{
    return r;
}
}
var l=large(i,j,k);
console.log(l);
//17)factorial of program
var number=6;
var fact=1;
// for (let i = 1; i <=number; i++) {
//     fact*=i;
    
// }
// console.log(fact);
//18)using recorsion
function factr(n){
if (n>number) {
    return;
}else{
    fact=fact*n;
    n++;
    factr(n)
}
}
factr(1);
console.log(fact);
//19)print the table
// var value=parseInt(prompt("Enter the number:"))
// for (let i = 1; i <=10; i++) {
//     console.log(`${value}X${i}=`,value*i);
    
// }
//20)check have a same last digit
var i=92;
var j=32;
var k=52;
var res1=i%10;
var res2=j%10;
var res3=k%10;
if (res1==res2 && res1==res3) {
    console.log("same last digit");
}else{
    console.log("Not same last digit");
}
//21)sumof natural number using recursion
function sumaa(number){
    if (number>0) {
        return number+sumaa(number-1)
    }else{
        return number;
    }

}
var res=sumaa(5);
console.log(res);


//22)sort the word
var str='kishori';
var res=str.split("").sort().join("");
console.log(res);
//23)replace character of string
var string="Mr.Red has a red car";
var regex=new RegExp('red','gi')
console.log(string.replace(regex,"kalicharana"));
//24)reversed string using for loop;
var str="radha";
var revsrt="";
for (let i = str.length-1; i>=0; i--) {
    revsrt+=str[i];
    
}
console.log(revsrt);
//25)dulicate value of array
var arr=[1,2,[2,1],4,5,4];
var arr2=arr.flat();
console.log(arr2);
for (let i = 0; i <arr2.length; i++) {
    for (let j = i+1; j < arr2.length; j++) {
        if (arr2[i]==arr2[j]) {
            console.log(arr2[j]);
        } 
    }
   
    
}
//26)other way
var newarr=arr2.filter((ele,index,array)=>{
    return array.indexOf(ele)!=index;
})
console.log(newarr);
//27)how to find min and max in a given array
var array=[4,6,7,8,9,2];
var arr=array.reduce((prev,num)=>{
    return prev>num?prev:num;
})
console.log(arr);
var arr=array.reduce((prev,num)=>{
    return prev<num?prev:num;
})
console.log(arr);
//28)how to find second larget value in array
var array=[4,6,7,9,2];
var lar=Math.max(...array);
var index=array.indexOf(lar)
console.log(index);
array.splice(index,1);
var second=Math.max(...array);
console.log(second);
//29)missing number in array
var arr=[1,2,3,10];
var max=Math.max(...arr);
var min=Math.min(...arr);
missingArray=[];
for (let i = min; i <=max; i++) {
    if (arr.indexOf(i)==-1) {
        missingArray.push(i)
    }
    
}
console.log(missingArray);
//30 compare to arrays are equl or not
var  arr1=[1,2,3,4,5];
var arr2=[5,4,3,2,1];
var samearray=arr1.length===arr2.length && arr1.every((currele)=>{
    if (arr2.indexOf(currele)>-1) {
        return (currele=[arr2.indexOf(currele)]);
    }
})
console.log(samearray);
//31 intersection of two arr
var  arr1=[1,20,3,40,50,3];
var arr2=[5,4,3,2,1,3];
var ans=arr1.filter((ele)=>{
  return  arr2.includes(ele)
})
console.log([...new Set(ans)]);
//32 union of two array
function union(arr1,arr2) {
    console.log([... new Set(arr1.concat(arr2))]);
}
union(arr1,arr2)
//33)right triagle program
for (let i = 1; i <=6; i++) {
    for (let j = 1; j <=i; j++) {
        document.write("* ")
        
    }
    document.write("<br>")
}
//34)pyramid
for (let i = 1; i <=6; i++) {
    for (let j = 1; j <=6-i; j++) {
        document.write("&nbsp;&nbsp;")
        
    }
    for (let K= 1; K <=i; K++) {
        document.write("*"+"&nbsp;&nbsp;")
    }
    document.write("<br>")
}
//35 Diamond
for (let i = 1; i <=6; i++) {
    for (let j = 1; j <=6-i; j++) {
        document.write("&nbsp;&nbsp;")
        
    }
    for (let K= 1; K <=i; K++) {
        document.write("*"+"&nbsp;&nbsp;")
    }
    document.write("<br>")
}
for (let i = 5; i >=1; i--) {
    for (let j = 1; j <=6-i; j++) {
        document.write("&nbsp;&nbsp;")
        
    }
    for (let K= 1; K <=i; K++) {
        document.write("*"+"&nbsp;&nbsp;")
    }
    document.write("<br>")
}
//36)contains a substring 
var substring="chitamany";
var string="Happpy welcom to my mind ram";
console.log(string.includes(substring));
console.log(string.indexOf(substring));
//37)stard with and end with
console.log(string.startsWith('H'));
console.log(string.endsWith('m'));
//38)count the number of vowels

var string="Happpy welcom to my mind ramaaa";
// function vowels(str){
//     var count=0;
//     for (let i = 0; i <str.length; i++) {
//     var char=str.charAt(i)  
//         // console.log(char);
//       var  vowels=['A','a','E','e','o','O','u','U','i','I']
    
//         if (vowels.includes(char)) {
//             console.log(char);
//             count++;
//         }
        
//     }
//     console.log(count);
 
  

// }
// vowels(string)
//39 using regex
var regex=/[aeiou]/gi
var char=string.match(regex)
console.log(char.join(" "));
console.log(char.length);
//40)convert the first letter of a string into uppercase
var string="happpy welcom to my mind ramaaa";
var result=string.split(" ").map((word)=>{
return word.charAt(0).toUpperCase()+word.slice(1);
})
console.log(result.join(" "));
//41)check the numbers of occurrence of a character
var string="happpy";
var letter="m";
var len=string.length;
var count=0
for (let i = 0; i <len; i++) {
    if (string[i]===letter) {
        count++
    }
    
}
console.log(count);
//42)all the occurence check
function occ(str){
var occobj={};
str.split("").forEach(ele => {
    if (occobj.hasOwnProperty(ele)) {
        occobj[ele]++;
    }else{
        occobj[ele]=1;
    }
  
});
console.warn(occobj);
}
occ(string)
//43)how to check object is is an array or not
function checkarray(ele){
return Array.isArray(ele)
}
console.log(checkarray({}));
console.log(checkarray([]));
//44)how to empty an array
var arr=[1,2,3,4,5];
//arr=[];
arr.length=0;
console.log(arr);
//45)number is integr or not
var number=2.3;
console.log(Number.isInteger(number));
if (number%1==0) {
    console.log("integr");
}else{
    console.log("not Integer");
}
//46)make the work duplicate
function duplicate(arr){
    return arr.concat(arr)

}
console.log(duplicate([1,2,3]));
//47)write reverse a number
function reversenum(num){
    return num.toString().split("").reverse().join("");

}
console.log(reversenum(21));
//48)other way reverse
function reverse(num){
    var rev=0;

    while (num>0) {
        var rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10);
        
    }
    return rev

}
console.log(reverse(1234));
//49)write a function that return a passed string with letters in aplhabetic order
function apha(str){
return str.split("").sort().join("");
}
console.log(apha("radha"));
//50)sum of array element
var arr=[1,2,3,4,5,6,7];
var result=arr.reduce((prev,num)=>{
    return prev+num;
},0)
console.log(result);
//51)array is number and sting and only number;
var arr=['ram',123,'sita',3,4,'renula'];
var sum=0;
for (const ele of arr) {
  if (typeof ele==='number') {
     sum+=ele;
  }  
}
console.log(sum);
//52)remove object which do not have gender value male
const arra=[
    {name:'jenny',gender:'female'},
    {name:'stev',gender:'male'},
    {name:'ram',gender:'male'},
    {name:'sita',gender:'female'}
]
var result=arra.filter((ele)=>{
    return ele.gender!='male'
})
 console.log(result);
//53)other way
var count=0;
arra.forEach((elem)=>{
    if (elem.gender!=='male') {
        count++;
    }
})
for (var i = 1; i <=count; i++) {
    for (var j = 0; j < arra.length; j++) {
        if (arra[j].gender!=='male') {
            arra.splice(j,1)
        }
        
    }
    
}
console.log(arra);
//54 clone the array
function clone(arr){
return [...arr]
}
var newarray=clone([1,2,3,4]);
console.log(newarray);
//55 write a function that accept the  argument and check type
function typeteller(ele){
return typeof ele;
}
console.log(typeteller([]));
console.log(typeteller(12));
console.log(typeteller(true));
//56)lenth of array without using length method
var arr=[1,2,3,4,5,6];
// console.log(arr.length);
var len=0;
while( arr[len]!=undefined) {
    len++;
}
console.log("legthis maually:",len);
//57)find even and old posion element of array
for (let i = 0; i < arr.length; i++) {
    if (i%2===0) {
        console.log(arr[i]);
    }
    
}
//58)find even element in array

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0) {
        console.log(arr[i]);
    }
    
}
//59)reversed and array
rev='';
for (let i = arr.length-1; i >=0 ; i--) {
    const element = arr[i];
     rev+=element+" ";
  
    
}
console.log(rev);
//60)list of array element

for (const ele of arr) {
    console.log(ele);
}
//61)write a function to get first element of a array passing a parameter n will return the first n element of the array
function retrive(arr,n){
    var len=arr.length
    console.log("len"+len);
    if (n<=len) {
     
        for (let i = 0; i < n; i++) {
            console.log(arr[i]);
            
        }
    }else{
        console.log("not found");
    }

}
console.log(retrive([10,20,30,40,5],4));
//61)write a function to get last element of a array passing a parameter n will return the first n element of the array
function retrives(arr,n){
    var len=arr.length
    console.log("len"+len);
    if (n<=len) {
     
        for (let i = 0; i < n; i++) {
            console.log(arr[len-1-i]);
            
        }
    }else{
        console.log("not found");
    }

}
console.log(retrives([10,20,30,40,5],4));
//62 write a javascript program to find the most frequent item of array
function freq(arr){
var frequency={};
arr.forEach((ele)=>{
if (frequency.hasOwnProperty(ele)) {
    frequency[ele]++;

}else{
    frequency[ele]=1;
}
})
var res=Object.keys(frequency).reduce((acc,number)=>{
    return frequency[acc]>frequency[number]?acc:number;
})
console.log(res);
}
freq([1,2,3,33,3,3,2,2,2,2,4,4,4])

//63)shuffle an array
function shufflekaro(arr){
totalshufflearea=arr.length;
while (totalshufflearea>0) {
    totalshufflearea--;
    var changedindex=Math.floor(Math.random()*totalshufflearea);
    var temp=arr[totalshufflearea];
    arr[totalshufflearea]=arr[changedindex];
    arr[changedindex]=temp
}
return arr;
}
console.log(shufflekaro([1,2,3,4,5,6,7]));
//64)finding average and sum of array element using js es6
var arr=[10,20,30];
var res=arr.reduce((acc,num)=>{
    return acc+num;
})
console.log(res);
var avg=res/arr.length;
console.log(avg);

//65)how can remove a specific item from an array in js
var arr=[1,2,3,4,5,6];
removeitem=5;
index=arr.indexOf(removeitem);
if (index!=-1) {
    arr.splice(index,1)
}
console.log(arr);
//66 second way
removeitem=7;
var res=arr.filter((item)=>{
    return item!=removeitem;
})
console.log(res);
//67 without using predefined
var count=0;
var search=6;
arr1=[];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]===search && count===0) {
        count++;
    }else{
        arr1.push(arr[i])
    }
    
}
console.log(arr1);
//68)multifly each element by array.length
var arr=[1,2,3,4];
var len=arr.length;
// for (const ele of arr) {
//     console.log(ele*len);
// }

var res=arr.map((ele)=>{
    return ele*arr.length;
})
console.log(res);
//69)  count each element in an array
var arr=[1,1,2,3,3,4];
count={};
for (let i = 0; i< arr.length; i++){ 
let num=arr[i];
count[num]=count[num]?count[num]+1:1;
}
console.log(count);


//70) sort an array
var arr=['ramram',123,'lallalal',3,'lslslls',4,'ssslsl'];
arr.sort((a,b)=>{
    if (typeof a=='number' && typeof b=='number') {
        return a-b;
    }else if(typeof a=='string' && typeof b=='string'){
      return  a.localeCompare(b);
    }else{
        return typeof a==='number'?-1:1;
    }
})
console.log(arr);
//71)addition wuthout using any arithmetic operator
function add(a,b){
    while(b!=0){
        let carry=a&b;
         a=a^b;
         b=carry<<1;
    }
    return a;

}
console.log(add(5,7));
//72)reversed each word without using predefined method
function reversedword(sentence){
    let words=[];
    let currentword='';
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (char!=' ') {
            currentword+=char;
        }else{
            words.push(currentword);
            currentword='';
        }
        
    }
words.push(currentword);
let reversedwords=[];
for (const word of words) {
    reversedword='';
    for (let i = word.length-1; i>=0; i--) {
        reversedword+=word[i];

        
    }
    reversedwords.push(reversedword);
}
return reversedwords.join(" ")
}
console.log(reversedword("kishor bhai kasai ho aap"));
console.log(0.1+0.2);