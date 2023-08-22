class Employeee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employeee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employeee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employeee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employeee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employeee(77,"Monika","IT",40000,"Wipro");
const emp_vinay=new Employeee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employeee(99,"Mahesh","HR",85000,"Infy");
console.log(`--------------STEP1----------------------------`);
 const array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
 array.forEach(employee => {
    if(employee.emp_company=="TCS"){
    console.log(`Employee working with "TCS" are:  employee Name is: ${employee.emp_name} , Company Name: ${employee.emp_company}`);
    }
 });
 console.log(`--------------STEP2----------------------------`);
 array.forEach(employee => {
    if(employee.emp_dept=="Finance"){
    console.log(`Employee working with "Finance" department :  employee department is: ${employee.emp_dept} ,  employee Name: ${employee.emp_name}`);
    }
 });
 console.log(`--------------STEP3----------------------------`);
 array.forEach(employee => {
    let empName=employee.emp_name.startsWith("R");
    if(empName){
    console.log(`Employee name startWith R:  employee id: ${employee.emp_id} employee Name: ${employee.emp_name},employee salary is: ${employee.emp_salary} , company Name: ${employee.emp_company} ,employee dept : ${employee.emp_dept}   `);
    }
 });
 console.log(`--------------STEP4----------------------------`);
 array.forEach(employee => {
    if(employee.emp_salary>75000){
    console.log(`Employee salary greater than 75000:  employee Name: ${employee.emp_name},employee salary is: ${employee.emp_salary} , company Name: ${employee.emp_company} `);
    }
 });
 console.log(`--------------STEP5----------------------------`);
 array.forEach(employee => {
    if(employee.emp_salary<=50000 && employee.emp_dept=="IT"){
    console.log(`Employee salary less than or equal to 50000 and dept is "IT :  employee id: ${employee.emp_id} employee Name: ${employee.emp_name},employee salary is: ${employee.emp_salary} , company Name: ${employee.emp_company} ,employee dept : ${employee.emp_dept}   `);
    }
 });
 console.log(`--------------STEP6----------------------------`);
 array.forEach(employee => {
    if(employee.emp_company=="Infy"){
    console.log(`All employee Info: employee id: ${employee.emp_id} employee Name: ${employee.emp_name},employee salary is: ${employee.emp_salary} , company Name: ${employee.emp_company} ,employee dept : ${employee.emp_dept}  `);
    }
 });
 console.log(`--------------STEP6----------------------------`);
 let issorted=true;
 for (const ele of array) {
    if(array[ele]>array[ele+1]){
    issorted=false;
    break
 }}if(issorted){
   console.log("sorted");
}else{
    console.log(" not sorted");
}