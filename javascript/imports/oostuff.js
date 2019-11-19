
function hello() {
    console.log("Hello from oostuff.js");
}

class Person {
    constructor(name, age) {
        console.log("In Constructor")
    }
    getName() {
        return "a"
    };
}

export {hello, Person};