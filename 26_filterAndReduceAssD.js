class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  console.log(`---------------Find all the employee from 'Wipro'Company---------------`);
  let employeeWipro=arrayEmployees.filter((ele)=>{
    return ele.emp_company==='Wipro';
  })
 // console.log(employeeWipro);
for (const ele of employeeWipro) {
    console.log(ele);
}
console.log(`---------------Find all the employee from "IT" OR "HR" department---------------`);
let employeeITORHR=arrayEmployees.filter((ele)=>{
  return ele.emp_dept==='IT' || ele.emp_dept==='HR';
})
// console.log(employeeWipro);
for (const ele of employeeITORHR) {
  console.log(ele);
}
console.log(`---------------Find all the employee whose id's are greater than 50---------------`);
let employeeID=arrayEmployees.filter((ele)=>{
  return ele.emp_id>50;
})
// console.log(employeeWipro);
for (const ele of employeeID) {
  console.log(ele);
}
console.log(`---------------Find all the employee names start with "A" OR "V" OR "M"---------------`);
let employeenamestart=arrayEmployees.filter((ele)=>{
  return ele.emp_name.startsWith("A") || ele.emp_name.startsWith("V") || ele.emp_name.startsWith("M");
})
// console.log(employeeWipro);
for (const ele of employeenamestart) {
  console.log(ele);
}

console.log(`------------------Average salary of the emplyoyee for all the department------------------------`);
const employeeAll=arrayEmployees.filter((ele)=>{
    return ele.emp_salary
})
// console.log(employeeAll);
var sum=0;
for (const ele of employeeAll) {
    sum=sum+ele.emp_salary;
}
console.log(`Sum of number:${sum/arrayEmployees.length}`);
console.log(`------------------Average salary of the emplyoyee for IT  department------------------------`);
const employeeIT=arrayEmployees.filter((ele)=>{
    return ele.emp_dept==="IT";
})
// console.log(employeeIT);
var sum=0;
for (const ele of employeeIT) {
    sum=sum+ele.emp_salary;
}
console.log(`Average salary dept IT:${sum/employeeIT.length}`);
