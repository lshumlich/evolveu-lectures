//
// Example of functions objects and prototypes
//

let proto_method = {
	email() {
		return `${this.fname}.${this.lname}@email.ca`;
	}
};

let obj = {
	fname: "Larry",
	lname: "Shumlich",
	name() {
		return `${this.fname} ${this.lname}`;
	},
	initials: function() {
		return `${this.fname.substr(0,1)}${this.lname.substr(0,1)}`
	},
	__proto__: proto_method
};


// constructor function returns a new object
function User(name) {

  // the object method is created as a nested function
  this.sayHi = function() {
    return("Hello " + name);
  };
}

export default { User, obj };