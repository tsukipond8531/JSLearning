class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_comapany){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_comapany=emp_comapany;
    }
}
const emp_Anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monali=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const array=[emp_Anil,emp_radha,emp_rishi,emp_sonali,emp_monali,emp_viny,emp_mahi];
console.log(`-----employee name-------------`);
const ram=array.map((ele)=>{
    return  ele.emp_name;
})
console.log(ram);
console.log(`-----Deapartments name-------------`);
const rama=array.map((ele)=>{
    return  ele.emp_dept;
})
console.log(rama);
console.log(`-----Employee id's-------------`);
const ramaa=array.map((ele)=>{
    return  ele.emp_id;
})
console.log(ramaa);

