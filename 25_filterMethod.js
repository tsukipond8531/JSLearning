const array = [11, 9, 30, 5, 7, 34];
const newArray = array.filter( (currentValue) =>{
    return currentValue>10;
} );
console.log(newArray);


class Student {
    constructor(fullName, rollNo, college, emailId, mobile ){
      this.fullName = fullName;
      this.rollNo = rollNo;
      this.college = college;
      this.emailId = emailId;
      this.mobile = mobile;
    }
    show(){
      console.log(`Student Details is Full Name: ${this.fullName} , Roll Number: ${this.rollNo}
      College Name: ${this.college}, Email Id: ${this.emailId}, Mobile : ${this.mobile}`);
    }
  
  }
let studentJenny = new Student("Jenny Gates", 11, "COEP Pune", "abc@gmail.com", "9096 78 6789");
  let studentStew = new Student("Stew Page", 22, "JSPM", "stew@gmail.com", "9867 8989 98");
  let studentElon = new Student("Elon Musk", 33, "Standford", "ste@gmail.com", "9867 8989 98");
  let studentSatya = new Student("Satya Nadella", 44, "ABC", "sttya@gmail.com", "9867 8989 98");
  let studentSundar = new Student("Sundar Pichai", 55, "XYZ", "sundar@gmail.com", "9867 8989 98");
  
  const arrayStudents = [studentJenny, studentStew, studentElon, studentSatya,studentSundar ];
  const newStudentList = arrayStudents.filter( (student) => {
    return student.emailId.length > 13;
  });
  console.log(newStudentList);