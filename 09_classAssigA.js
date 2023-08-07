class Vehicle{
constructor(names,model,color,company,prize){
this.names=names;
this.model=model;
this.color=color;
this.company=company;
this.prize=prize;
}
}
let Vehicle1=new Vehicle("Van","vanQX60","red","tech Mahindra","25000rs");
let Vehicle2=new Vehicle("Hatchback","vanQX61","white","tata","50000rs");
let Vehicle3=new Vehicle("maruti zuzuki","vanQX62","blue","Jain ","20000rs");
let Vehicle4=new Vehicle("bus","vanQX67","grey","tata","250000rs");
let Vehicle5=new Vehicle("motorcyle","vanQX54","black","tech Mahindra","30000rs");

const array=[Vehicle1,Vehicle2,Vehicle3,Vehicle4,Vehicle5];
for (const Vehicle of array) {
    console.log(`Vehicle name is:${Vehicle.names}, Vehicle model is: ${Vehicle.model} , Vehicle color is: ${Vehicle.color} , vehicle company is:${Vehicle.company}, vehicle prize is:${Vehicle.prize}`);
    
}
console.log(`-----------------------------------------------------------------------------------------------------`);
class College{
    constructor(Name,year,city,founderName){
        this.Name=Name;
        this.year=year;
        this.city=city;
        this.founderName=founderName;

    }
    display(){
        console.log(`College name is : ${this.Name} ,Established year is: ${this.year}, College city is: ${this.city}, Founder of college is: ${this.founderName}`);

    }
}

const coep = new College("COEP Pune", 1970, "Pune", "Yogesh Muske");
const shivaji = new College("shivaji mumbai", 2005, "mumbai", "ram bhosle");
const Mj = new College("MJ Jalgaon", 1945, "Jalgaon", "Moonjee jetha");
const NMC= new College("NMC Erandol", 1905, "Erandol", "S.R.Patil");
const array1 = [coep,shivaji,Mj,NMC];
  for (const college of array1) {
    college.display();
  }
  console.log(`----------------------------------------------------------------------------------------------------`);
function traverseObject(collegeObject) {
for (const key in collegeObject) {
  if (collegeObject.hasOwnProperty.call(collegeObject, key)) {
    var element = collegeObject[key];
   
  }
  console.log(` ${key} :${element} `);
}
    
}

traverseObject(coep);
traverseObject(Mj);
traverseObject(NMC);
traverseObject(shivaji)