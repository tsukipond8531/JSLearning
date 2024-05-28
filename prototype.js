Object.prototype.appdata="this is a project"
var users={
getfullName(){
    return this.name+" "+this.LastName;
}
}
var student={
    name:"kishor",
    LastName:"ubhale"

}
var teacher={
    name:"kishori",
    LastName:"ubhale"
}
student.__proto__=users;
teacher.__proto__=users;
console.log(student.getfullName());
console.log(teacher.getfullName());


