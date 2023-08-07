function College(name, year, city, founderName ){
    this.name = name;
    this.year = year;
    this.city = city;
    this.founderName = founderName;
}

 const coep = new College("COEP Pune", 1970, "Pune", "Yogesh Muske");
 console.log(coep);

 let mit = new College("MIT", 1990, "Mumbai", "Sitaji Narayan");
 console.log(mit);

 let shivaji = new College("Shivali College", 2001, "Karad", " Sunil Kadam");
 console.log(shivaji);

 College.prototype.country = "Bharath";

 console.log(`MIT Country : ${mit.country}`);
 console.log(`COEP Country : ${coep.country}`);
 console.log(`Shivaji Country : ${shivaji.country}`);