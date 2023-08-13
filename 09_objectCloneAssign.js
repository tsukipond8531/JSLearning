console.log(`--------------------step1----------------------`);
const arrayNums=[2,3,4,56,90,400,49];
 var arrayNumber=arrayNums;
 arrayNumber.push(55,66);
 console.log(`original array is: ${arrayNums}`);
 console.log(`clone array is: ${arrayNumber}`);
 console.log(`--------------------step2----------------------`);
 var arrayNumber={...arrayNums};
 arrayNums.push(10,25);
 console.log(`original array is: ${arrayNums}`);
 console.log(arrayNumber);
 console.log(`--------------------step3----------------------`);
 var arrayEven=[2,30,14,8];
 console.log(`Even array is:${arrayEven}`);
 var mergearray=[...arrayEven,...arrayNums];
 console.log(`merge arrayeven and arranums:${mergearray}`);
 console.log(`--------------------step4----------------------`);
 let employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        june_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91 9096 5678 77"]
 }
 console.log(employee_info.address.locality);
 console.log(employee_info.address.city);
 console.log(employee_info.address.state);
 console.log(employee_info.address.country);

 console.log(employee_info.mobiles);
 console.log(`--------------------step5----------------------`);
 let emp=JSON.parse(JSON.stringify(employee_info));
 emp.july_month="80,0000INR";
 employee_info.country="United Kindom"
 console.table(employee_info);
 console.log(`emp detalails:`);
 console.table(emp);



