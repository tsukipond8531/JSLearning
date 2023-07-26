
console.log(`________________Assignment1__________________________________`);
var TCS=function(gradScore,hscScore,sscScore,candidateName){
var result=(gradScore>=70 || hscScore>=80 || sscScore>=90)?`Congrates ${candidateName} you are eligible for TCS interview`:`${candidateName} Unfortunately you are not eligible for interview`;
console.log(result);

}
TCS(80,86,90,"kishor");
TCS(70,65,55,'Tejas');
TCS(60,79,88,"Gopal");
console.log(`________________Assignment2__________________________________`);
function maleMarrigeEligibility(gender,age,boyName){
var result= (age>=21)?`Hey ${boyName} you are eligible for Marriage`: `${boyName} you Not eligible for Marriage`;
console.log(result);
}
maleMarrigeEligibility('male',25,"Billgates");
maleMarrigeEligibility("male",17,"Stew jobs");
console.log(`___________________________________________________________________`);
function femaleMarrigeEligibility(gender,age,girlName){
var result= (age>=18)?`Hey ${girlName} you are eligible for Marriage`: `${girlName} you Not eligible for Marriage`;
console.log(result);
}
femaleMarrigeEligibility('female',16,"jenifer");
femaleMarrigeEligibility("female",27,"malinda Gates");
