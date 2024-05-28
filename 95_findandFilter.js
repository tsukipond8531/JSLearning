var person=[
   { name:"kishor",age:24},
   {name:"ram",age:50},
   {name:"ramadas",age:60},
   {name:"kana",age:30},
   {name:"radha",age:22},
   

]
var filter=person.filter((ele)=>{
    return ele.age>30;
})
console.table(filter);
var filter=person.find((ele)=>{
    return ele.age>30;
})
console.log(filter);