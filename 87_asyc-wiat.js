// let promise=new Promise((resolve,rej)=>{
//     setTimeout(()=>{
// resolve("data Received")
//     },3000)
// })

// async function getdata(){
// let response=await promise;
// console.log(response);

// }
// getdata()


// async function getdata(){
//     return "data Received";

// }
// getdata().then(data=>
//     console.log(data))

var result1=document.getElementById("result1");
var result2=document.getElementById("result2");
var result3=document.getElementById("result3");
var dell={
    brand:"Dell",
    harddisk:"2TB",
    color:"black"
}
let buylaptop=new Promise((resolve,rej)=>{
    setTimeout(()=>{
resolve(dell)
    },3000)
})
 var buylaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
                 .then((response) => response.json())
    

//Ex1: with promise
function fetch(){
// result1.innerText="fetching data....";
buylaptop.then(res=>{
    console.log(res)
    result1.innerText= JSON.stringify(res);
});
}
//Ex2: with asyc wait;
 async function fetch2(){
    result2.innerText="fetching data....";
var res=await buylaptop;
console.log(res);
result2.innerText=JSON.stringify(res);
}
//Ex3: with fetch api;
function fetch3(){
    result3.innerText="fetching data....";
    //promise
    buylaptop2.then(res=>{
        console.log(res)
        result3.innerText=JSON.stringify(res);
    })
}
// async function fetch3(){
//     result3.innerText="fetching data....";
// var res=await buylaptop;
// console.log(res);
// result.innerText=JSON.stringify(res);
// }
