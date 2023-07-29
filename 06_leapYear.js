var leapYear=function(Year){
    var Yearv= +Year;
    if (Yearv<=0 || isNaN(Yearv)) {
        console.log(`${Year} invalid Input`);
    }else
    if (Year%100!=0 && Year%4==0 || Year%100==0 && Year%400==0) {
      console.log(`${Year} is Leap year`);  
    } else {
        console.log(`${Year} is Not Leap year`);  
    }

}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
