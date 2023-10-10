// function raju(laducalling) {
//     console.log(`Raju collecting Ingradians`);
//     console.log(`Raju is making Dosa`);
//     console.log(`Dosa is ready`);
//     laducalling();
//     let show=function(){
//         console.log("inside show method");
    
//     }
//     return show
// }
// function ladu() {
//     console.log(`ladu Said :`);
//     console.log(`Thanks for calling`);
//     console.log(`I am very hungry now.`);
// }
// raju(ladu)();

// let isNotesPrepared=true;
// let promise=new Promise(function(resolvess,failures){
//     if(isNotesPrepared){
//         resolvess("I will shared notes")
//     }else{
//         failures("I will not shared noted")
//     }
// });
// promise.then(function(happy){
//     console.log("on sucess");
//     console.log(happy);
// }).catch(function(failure){
//     console.log("----on failures");
//     console.log(failure);
// }).finally(function(){
//     console.log(`i will prepared noted`);
// });
// let isNotesPrepared=false;
// const promise=new Promise((resolve,rejected)=>{
//     if(isNotesPrepared){
//         resolve(`sir...share notes and recording`);
//     }else{
//         rejected(`sir... will not share notes and recording`);
//     }
// });
// promise.then(onsucess=>console.log(onsucess))
//     .catch(rejection=>console.log(rejection))
//     .finally(()=>console.log(`finally..some how you will have session Notes`));
//count given string specific charachert
str="hellow world";
var count="";
for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (element=="l") {
        count=count+element;
    }
   
}
console.log(count.length);
