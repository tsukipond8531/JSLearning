console.log("________________STEP1____________________________");
function eat() {
  console.log("Ram eat fruits");
}
eat();
function sleep() {
  console.log("Ram are Sleeping");
}
sleep();
console.log("________________STEP2____________________________");
function personalDetails(firstName, lastName, collgeName) {
  console.log("firstName:", firstName);
  console.log("lastName:", lastName);
  console.log("CollegeName", collgeName);
}
personalDetails("kishor", "Ubhale", "Shivaji university kolhapur");
console.log("________________STEP3____________________________");
function swapValues(n1, n2) {
  console.log("before swapping=>", "values:", n1, "values:", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("After swapping=>", "values:", n1, "values:", n2);
}
swapValues(1000, 2000);
var name1 = "Virat";
var name2 = "Anushka";
swapValues(name1, name2);

console.log("________________STEP4____________________________");
function addThreeValues(arg1, arg2, arg3) {
  console.log("Addition are:", arg1 + arg2 + arg3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("hello", "Good", "Morning");
console.log("________________STEP5____________________________");
function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    "BankName=>",
    bankName,
    "AccountNumber=>",
    accountNum,
    "Location=>",
    location,
    "PinCode=>",
    pinCode
  );
}
bankDetails("CITI Bank", 3456782345, "Pune", 431202);
bankDetails("Axis Bank", 7891234568, "Mumbai", 425103);
bankDetails("HDFC Bank", 2345678954, "pune", 631202, "Open");
