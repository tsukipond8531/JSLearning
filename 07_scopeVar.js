var city; // Variable Declaration
let street;
const pin = 443211;
city = "Pune";
street = "Wakad Road";
// pin = "445578"; // Not allowed

var city; // variable re Declaration
// let street; // variable re Declaration not allowed

if(true) {
    var namePlayer = "Virat";
    let salary = 45000;
    const runs = 33000;
}
console.log(namePlayer);
//console.log(salary);
// console.log(runs);

function show(){
    var college = "COEP";
    let matches = 500;
    const won = 450; 
}
// console.log(college);
// console.log(matches);
// console.log(won);

function display(){
    console.log(`Inside function`);
    let isMarried = true;
    if (isMarried) {
        let greet =  "Good Morning";
        const PI = 3.1412;
        console.log(); 
    }
    // console.log(PI);
    // console.log(greet);
}
display();