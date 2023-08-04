
let professor={
    name:"Ram",
    degree:"PHD",
    mobileNo:7875532758,
    aadhar:"XXXXXXXXX6888",
    address:"At Post Vadgaon",
    city:"pune",
    degrees:{
        engineering:"CSE",
        PHD:"ADV Computing",
        HSC:"science",
        ssc:"other",
        getdegree:function(){
         console.log(` Teacher degrees: ${this.engineering}, ${this.PHD},${this.HSC},${this.ssc}`); 
        }
    },
    certificates:["Hacker Rank Participation","Certificate in IFE cource","Certificate in adv Programmming"],
    
}
professor.degrees.getdegree();
professor.totalExperience="14 years";
professor.city="Mumbai";
professor.certificates.push("Oracle Certified");
console.log(professor.certificates.pop());
console.log(professor);