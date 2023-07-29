
function marriageEligibility(gender,age){
    if (gender=="Male" && age>=21 || gender=="Female" && age>=18 ) {
        console.log(`Your gender is:${gender} and your age is ${age} so you eligible for marriage`);
    }
    else{
        console.log(`Your gender is:${gender} and your age is ${age} so you  Not eligible for marriage`);
    }

  
}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility('Female',28);
marriageEligibility("Female",16);
marriageEligibility("other",35);
marriageEligibility("other",41);