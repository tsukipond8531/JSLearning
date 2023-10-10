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
  console.log(`-----------find employeee TCS-----------------`);
  const employeeTcs = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='TCS';
  });
   console.table(employeeTcs);
  for (const employee of employeeTcs) {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
  }

  console.log("===== Find the TCS employees and get the list of employee names only ======");
  const tcsEmployees = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='TCS';
  });
  const employeeTcsNames = tcsEmployees.map((employee)=> {
    return employee.emp_name;
  });
  console.log(employeeTcsNames);
  arrayEmployees.filter(emp=>emp.emp_company=="TCS")
  .map(emp=>emp.emp_name)
  .forEach(emp=>console.log(emp))

  // console.log(`***************************`);
  // arrayEmployees.filter(employee=> employee.emp_company==='TCS')
  // .map(employee =>  employee.emp_name)
  // .forEach(empName => console.log(empName));


  console.log(`-----------Find the average salary of employee from company wipro-------`);

  const employeeWipro = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='Wipro';
  });
  // console.log(employeeWipro);
  let sum=0;
  for (const ele of employeeWipro) {
    sum=sum+ele.emp_salary;
   
  }
  console.log(`Average salary :${sum/employeeWipro.length}`);

  console.log(`-----------Find the average salary of employee from company wipro or info-------`);
  const employeeWiproI = arrayEmployees.filter((employee)=> {
    return  employee.emp_company==='Wipro' || employee.emp_company==='Infy';
  });
  // console.log(employeeWiproI);
  var suma=0;
  for (const ele of employeeWiproI) {
    suma=suma+ele.emp_salary;
   
  }
  console.log(`Average salary wipro and Infy:${suma/employeeWiproI.length}`);