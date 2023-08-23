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

let isNotesPrepared=true;
let promise=new Promise(function(resolvess,failures){
    if(isNotesPrepared){
        resolvess("I will shared notes")
    }else{
        failures("I will not shared noted")
    }
});
promise.then(function(happy){
    console.log("on sucess");
    console.log(happy);
}).catch(function(failure){
    console.log("----on failures");
    console.log(failure);
}).finally(function(){
    console.log(`i will prepared noted`);
});
