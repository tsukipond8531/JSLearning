function raju(laducalling) {
    console.log(`Raju collecting Ingradians`);
    console.log(`Raju is making Dosa`);
    console.log(`Dosa is ready`);
    laducalling();
    let show=function(){
        console.log("inside show method");
    
    }
    return show
}
function ladu() {
    console.log(`ladu Said :`);
    console.log(`Thanks for calling`);
    console.log(`I am very hungry now.`);
}
raju(ladu)();