var voteEligible=function(age){
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || age>130) {
        console.log(`your age ${age} is invalid`); 
    }else{
if (age>=18) {
    console.log(`Your is ${age} so,you are eligible for vote`);
} else {
    console.log(`Your is ${age} so, you are not eligible for vote`);
}}
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);