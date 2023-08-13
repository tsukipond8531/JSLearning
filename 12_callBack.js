function jennyHomework(callback,callbackk){
    console.log(`Jenny started assignment`);
    console.log(`Jenny took some time`);
    console.log(`Jenny Completed All her home work`);
    console.log(`Jenny calling back to stew`);
    callback();
    callbackk();
}

let stewCopyHomework = function(){//also write here function
    console.log(`===========stew===================`);
    console.log(`Thank you Jenny for giving me everything ready`);
    console.log(`Stew started copying`);
    console.log(`Stew copied all homework`);
}
function elonCopyHomework(){
    console.log(`===========Elon===================`);
    console.log(`Elon coping Homework`);
    console.log(`Elon copy all Homework...`);
}
jennyHomework(stewCopyHomework,elonCopyHomework);