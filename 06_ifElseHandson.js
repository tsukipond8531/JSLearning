

function check(number){
if(number%2==0){
console.log(`${number} is even`);
}else{
    console.log(`${number} is old`);
}
}
check(45);
check(70);
check(67);
check(98);
console.log(`-----------------------------------------------------------------------------`);
function stringContain(str){
if (str.length>10) {
    console.log(`${str} contains more than 10 character`);
} else {
    console.log(`${str} not contains more than 10 character`);
    
}
}
stringContain("JavaScript-ES6");
console.log(`-----------------------------------------------------------------------------`);
function startString(str){
if(str.startsWith("Java")){
    console.log(`${str} start with java`);
}else{
    console.log(`${str} not start with java`);
}
}
startString("JavaScript Language")