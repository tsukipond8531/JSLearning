let sbiBank={
    bankName:"SBI",
    location:"Jalgaon",
    accountNo:3511111368198,
    ifsc:"Sb0000N",
    interestRate:"10%",
    showDetails:function() {
        console.log(`sbi data:  ${this.bankName}, ${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
        
    }
}
sbiBank.showDetails();
let axisBank={
    bankName:"axisBank",
    location:"pune",
    accountNo:3511111366788,
    ifsc:"ax0000N",
    interestRate:"15%",
    showDetails:function() {
        console.log(`Axis bank data:  ${this.bankName}, ${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
        
    }
}
axisBank.showDetails();


let hdfcBank={
    bankName:"HDFC Bank",
    location:"Mumbai",
    accountNo:334551111368198,
    ifsc:"HDFC0000N",
    interestRate:"20%",
    showDetails:function() {
        console.log(`HDFC Bank data:  ${this.bankName}, ${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
        
    }
}
hdfcBank.showDetails();


let yesBank={
    bankName:"YES BANK",
    location:"Nagpur",
    accountNo:3511123468198,
    ifsc:"YE0000N",
    interestRate:"30%",
    showDetails:function() {
        console.log(` YES BANK data:  ${this.bankName}, ${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
        
    }
}
yesBank.showDetails();