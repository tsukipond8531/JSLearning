const array = [1, 2, 3, 5, 7, 9];
// Transform
//            [1, 4, 9, 25, 49, 81]
const arrayOfSquare = array.map((currentValue) => {
    return currentValue * currentValue;
});
console.log(arrayOfSquare);


//create array only student names

class Employee{

    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
     this.emp_id = emp_id;
     this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
          }
    
    }
    const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
    const emp_radha = new Employee(33, "Radha", "HR", 74080, "Wipro");
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
    const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
     const emp_gonika = new Employee(77, "Monika", "IT", 48080, "Wipro");
     const emp_viny = new Employee(88, "Vinayak" , "IT", 75808, "TCS");
    const emp_mahi = new Employee(99, "Mahesh", "HR", 85101, "Infy");
    const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_gonika, emp_viny, emp_mahi];
    const EmployeeName=arrayEmployees.map((emp)=>{
       return emp.emp_name;
    })
    console.log(EmployeeName);
