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

  var sort=arrayEmployees.sort((ele1,ele2)=>{
    return ele1.emp_id>ele2.emp_id?1:-1;
  })
  console.log("------------Sort By ASC order of employee ID---------");
  for (const ele of sort) {
   console.log(`employee ID :${ele.emp_id},  employee Name :${ele.emp_name},   employee Department :${ele.emp_dept}`);
  }


  var sort=arrayEmployees.sort((ele1,ele2)=>{
    return ele1.emp_dept>ele2.emp_dept?1:-1;
  })
  console.log("------------Sort By ASC order of employee DepartMent---------");
  for (const ele of sort) {
   console.log(`employee ID :${ele.emp_id},  employee DeaprtMent :${ele.emp_dept},   employee Company :${ele.emp_company}`);
  }

  var sort=arrayEmployees.sort((ele1,ele2)=>{
    return ele1.emp_salary<ele2.emp_salary?1:-1;
  })
  console.log("------------Sort By DEC order of employee salary---------");
  for (const ele of sort) {
   console.log(`employee Name :${ele.emp_name},  employee Salary :${ele.emp_salary},   employee company:${ele.emp_company}`);
  }