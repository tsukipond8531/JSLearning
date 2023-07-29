
function gradeCalculation(marks){
    var marksval= +marks
    if (marks<=0 || marks>100 ||isNaN(marksval)) {
        console.log(`${marks} ,Please provide the valid marks`);
        
    } else
if(marks>=90){
    console.log(`Funtastic marks ${marks}, your grade is A+`);

}else if(marks>=75 && 90>marks){
console.log(`Excellent marks ${marks},your grade is A`);
} else if(marks>=50 && marks<75){
console.log(`Good marks ${marks},your grade is B`);
}else if(marks>=35 && marks<50){
console.log(`marks is ${marks},your grade is C , Need Improvement`);
}else
console.log(`your marks is 29 ,you are fail`);
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation('Eighty');
gradeCalculation(undefined);
gradeCalculation(null);