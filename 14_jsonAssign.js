

let employeee=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32,Laham st.",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "referred-by":"E0012"

}`;
let emp=JSON.parse(employeee);
let roles=emp.role;
for (const role of roles) {
    if(role=='Dev'){
console.log(`Role is: ${role}`);
    }
    
}

let names=emp.name;
let res="";
for (let index = names.length-5; index < names.length; index++) {
    const element = names[index];
    res=res.concat(element);
    
    
}
// let a=names.slice(6,9)
// console.log(a);
console.log(` last name is:${res}`);
let year=emp.doj;
let rese="";
for (let index = year.length-4; index < year.length; index++) {
    const element = year[index];
    rese=rese.concat(element);
    
}
console.log(` Year  is:${rese}`);

// let date=new Date(emp.doj);

// console.log(date.getFullYear());

