//Problem statement
let userdetails={
    name:"kishor ubhale",
    age:'24',
    Designation:"Angular Developer"
    
    // peintDetails:function(){
    //     console.log(this.name);
    // }
}
let printntDetails=function(state,contry){
    console.log(this.name+" "+state+" "+contry);
}
// userdetails.peintDetails();

let userdetails2={
    name:"kishori ubhale",
    age:'23',
    Designation:"Angular Developer"
    ,
    
}
// userdetails.peintDetails.call(userdetails2)
printntDetails.call(userdetails2,"Delhi","India")
printntDetails.call(userdetails,"Delhi","India")
printntDetails.apply(userdetails2,["Delhi","India"])
printntDetails.apply(userdetails,["Delhi","India"])
let newfun=printntDetails.bind(userdetails,"Delhi","India")
newfun();                                   
// console.log(newfun);