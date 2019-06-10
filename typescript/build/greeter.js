var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Larry", "F.", "Shumlich");
var para = document.createElement("p");
var node = document.createTextNode(greeter(user));
para.appendChild(node);
document.body.appendChild(para);
// document.body.innerHTML = greeter(user);
var s;
var n;
console.log("What Ever");
