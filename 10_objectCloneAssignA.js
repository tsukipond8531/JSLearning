let personalDetails={
    fullName:"elon musk",
    city:"jalgaon",
    mob:7876544443

}
let collegeDeatils={
    CollegeName:"MJ college jalgaon",
Year:1945,
UGCGrade:"A+",
    city:"jalgaon"
}
let merge=Object.assign({},personalDetails,collegeDeatils);
console.log(`Merge the person and college details:`);
console.log(merge);
console.log(`---------------------------------------`);
const array=['Tejas','Gajanan','krishna','gopal'];
Object.freeze(array);
for (const ele of array) {
    console.log(ele);
    
}

console.log(`---------------------------------------`);
var comapany="Codemind Technology";
var a="";
for (let index = comapany.length-10; index < comapany.length; index++) {
    const element = comapany[index];
    a=element.concat(a);

    
}
console.log(a);

