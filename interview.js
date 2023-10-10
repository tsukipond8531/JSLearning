let arrayOfFriends=["kishor","jayant","uday","niketan"];
var count=0;
for (const element of arrayOfFriends) {
    for (const el of element) {
        let char = el.charAt(el);
        if(char=='a' || char=='e' ||char=='o' ||char=='u' ||char=='i' 
        ||char=='A' ||char=='E' ||char=='I' ||char=='U' || char =='O'){
        count=count+1;  
    }
       
       
        }
     } 

console.log(`Total number of vowels is: ${count}`);
// let arrayOfFriends=["kishor","jayant","uday","niketan"];
// var count=0;
// for (const element of arrayOfFriends) {
//     for (const el of element) {
//         let char = el.charAt(el);
//         if(char=='a'){
//         count=count+1;  
//     } }
//      } 

// console.log(`Total number of a is: ${count}`);


console.log(`-----------------------Step 1---------------------------`);
const arrayNums=[20,3,4,56,90,400,49];
console.log(`arrayNums:${arrayNums}`);
const cloneArrayNums=arrayNums;
console.log(`Performed Shallow clone on arrayNums : ${cloneArrayNums}`);
cloneArrayNums.push(55);
cloneArrayNums.push(66);
console.log(`arrayNums:${arrayNums}`);
console.log(`Updated the shallow cloned arrayNums : ${cloneArrayNums} `);
console.log(`-----------------------Step 2---------------------------`);
let deepclone=[...arrayNums];
console.log(`Performed Deep clone on arrayNums : ${deepclone}`);
deepclone.push(10);
deepclone.push(25);
console.log(`Updated the deep cloned arrayNums : ${deepclone}`);
console.log(`-----------------------Step 3---------------------------`);
let arrayEven=[2,30,14,8];
let mergeArray=arrayEven.concat(arrayNums);
let array3=[...arrayNums,...arrayEven,...mergeArray]
console.log(`After merging two arrays : ${[...mergeArray]}`);

console.log(`-----------------------Step 4---------------------------`);

const employee_info={
    emp_id:2,
    emp_name:"John Doe",
    salary :{
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR",
    },
    address: {
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles :["+91 8600 3456 88","1800 4567 32","+91 9896 5678 77"],
}

console.log(`-----------------------Step 5---------------------------`);

console.log(`Address ${employee_info.locality} ,City-${employee_info.address.city},State-${employee_info.address.state}, Country-${employee_info.address.country}`);
console.log(`Mobile Numbers: ${employee_info.mobiles}`);
console.log( employee_info.address.locality);
console.log(typeof employee_info.address.locality.street);
