
let banksbi={
    bankName:"SBI",
    location:"Jalgaon",
    accountNo:3511111368198,
    ifsc:"Sb0000N",
}
let bankLocation={
    street:"Ganpati Road",
    city:"Jalgaon",
    pinCode:425103
}
console.log("____________Cloning step 1 and step 2__________________");
let step1=Object.assign({},banksbi);
step1.bankName="hdfcBank";
console.log(step1.bankName);
console.log(banksbi.bankName);

let step2=Object.assign({},bankLocation);
step2.city="pune";
console.log(step2.city);
console.log(bankLocation.city);

console.log(`using spread operator`);
let axis={...banksbi};
let location={...bankLocation};
axis.bankName="Axis"
console.log(axis.bankName);
console.log(banksbi.bankName);
location.street="Mahadev road";
console.log(location.street);
console.log(bankLocation.street);
console.log(`----------------------------------`);
let rateOfInterest={
    homeLoanIntestest:10,
    personalLoanIntestest:15,
    dueInterest:2
}
console.log(`merging step1 2 and 4`);
let sbiDetails=Object.assign({},banksbi,bankLocation,rateOfInterest);
console.log(`Merge the three object are:`);
console.table(sbiDetails);
console.log(`Traverse the merge object`);
for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}:${element}`);
    }
}