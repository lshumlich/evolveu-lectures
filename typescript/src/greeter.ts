
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Larry", "F.", "Shumlich");

var para = document.createElement("p");
var node = document.createTextNode(greeter(user));
para.appendChild(node);

document.body.appendChild(para)
// document.body.innerHTML = greeter(user);


let s: string;
let n: number;

console.log("What Ever");

