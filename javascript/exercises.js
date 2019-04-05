/*

	Go to the end of the file to execute functions.

*/
console.log("Hello from exercises.js");
const p = console.log;

/* * * * * * * * * * * * addNumbers
	
	Write the function that will make this code work.
*/
function addNumbers() {
	console.log("Add numbers");

	// ---- put function here ---- //
	function addNumbers(a, b) {
		return a + b;
	}


	const myAnswer1 = addNumbers(1,2);
	const MyShouldBe1 = 3;

	if (myAnswer1 != MyShouldBe1) {
		console.log("***** We have an error here *****",
			myAnswer1,
			" is not = ",
			MyShouldBe1,
			" and it should be."
		)
	}

	console.log("SB 5" ,addNumbers(2,3));

	console.log("SB 15" ,addNumbers(10,15));

	console.log("SB 500" ,addNumbers(200,300));

}

/* * * * * * * * * * * * orderArray

	--- functions and braces nightmare 

*/
function orderArray(){
	const array1 = [3,1];

	// write the function that will make this work
	function orderArray(a) {
		if (a[0] > a[1]) {
			return [a[1], a[0]];
		}
		return a;
	}

	console.log("Should Be: 1, 3:", 
		orderArray(array1));

	console.log("Should Be: 1, 5:", 
		orderArray([1, 5]));

	console.log("Should Be: 10, 20:", 
		orderArray([20, 10]));

}

/* * * * * * * * * * * * makeEmail

	--- make me an email
	Write the function that will make this code work.
*/
function makeEmail() {
	console.log("Make me an Email");

	// ---- put function here ----
	function makeEmail(fname, lname) {
		return `${fname}.${lname}@evolveu.ca`
	}


	const larryEmail = makeEmail('larry', 'shumlich');
	const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

	if (larryEmail != shouldBeLarryEmail) {
		console.log("***** We have an error here *****",
			larryEmail,
			" is not = ",
			shouldBeLarryEmail,
			" and it should be."
		)
	}

	console.log("Larry:", larryEmail);

	console.log("Jane:", makeEmail("jane", "lee"));
	console.log("Bill:", makeEmail("bill", "jones"));
	console.log("Sam:", makeEmail("sam", "smith"));

}

/* * * * * * * * * * * * makeTrain
	--- make me a train
	Write the function that will make this code work.
*/

function makeTrain() {
	console.log("Make me a Train");

	// ---- put function here ----
	function makeTrain(a, b, c) {
		return `${a}.${b}.${c}`
	}


	const myTrain = makeTrain('one', 'two', 'three');
	const shouldTrain = 'one.two.three';

	if (myTrain != shouldTrain) {
		console.log("***** We have an error here *****",
			myTrain,
			" is not = ",
			shouldTrain,
			" and it should be."
		)
	}

	console.log("SB " ,shouldTrain, myTrain);

	console.log("SB a.b.c:", makeTrain("a", "b", "c"));
}

/* * * * * * * * * * * * assertEquals
/*	
	Write the function that will create this output:

*** the two values are not the same:
	--> a
    --> b
*** the two values are not the same:
    --> 1
    --> 2
 *** the two values are not the same:
    --> 2
    --> 2
*/
function assertEquals(p1, p2) {
	if (p1 === p2) {
		console.log('ok ->', p1);
		return true;
	}
	console.log("*** the two values are not the same:");
	console.log("   p1-->", p1);
	console.log("   p2-->", p2);
	return false;
}

function assertEquals$() {

	// Write the function after this comment ---
	// and before this comment ---

	assertEquals("a","b");
	assertEquals("a","a");
	assertEquals(1,2);
	assertEquals(2,2);
	assertEquals("2",2);
	assertEquals("This value","This value");

}

/* * * * * * * * * * * * makeEmailArr
/*	
	Write the function to format an email based on an array
*/

function makeEmailArr() {

	// Write the function after this comment ---
	function makeEmailArr(arg) {
		return `${arg[0]}.${arg[1]}@evolveu.ca`;
	}
	// and before this comment ---

	const arrayLarry = ['larry', 'shumlich'];
	assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
	assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
	assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

}


/* * * * * * * * * * * * makeEmailObj
/*	
	Write the function to format an email based on an object / map
*/

function makeEmailObj() {

	// Write the function after this comment ---
	function makeEmailObj(arg) {
		return `${arg.fname}.${arg['lname']}@evolveu.ca`;
	}
	// and before this comment ---

	const objLarry = {fname:'larry', lname:'shumlich'};
	assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
	assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
	assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

}

/* * * * * * * * * * * * makeEmailArrayObjs
/*	
	Write a function to loop through the data and 
	call makeEmailObj from the last exercise.

	The function is to create an array of email addresses.
*/

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};


function makeEmailArrayObjs() {

	// Write the function after this comment ---
	function makeEmailObj(arg) {
		return `${arg.fname}.${arg['lname']}@evolveu.ca`;
	}

	function loopStaff(arg) {
		const res = [];
		for(let i = 0; i < arg.length; i++) {
			res.push(makeEmailObj(arg[i]));
		}
		return res;
	}

	function loopWithForOf(d) {
		const res = [];
		for(let v of d) {
			res.push(makeEmailObj(v));
		};
		return res;
	}

	function loopWithForIn(d) {
		const res = [];
		for(let i in d) {
			res.push(makeEmailObj(d[i]));
		}
		return res;
	}

	function loopWithEach(d) {
		const res = [];
		d.forEach((v) => {
			res.push(makeEmailObj(v));
		});
		return res;
	}

	function loopWithMap(d) {
		return d.map(makeEmailObj);

	}

	function loopFilter(balance, d) {
		const select = d.filter(emp => emp.balance >= balance);
		return select.map(makeEmailObj);

	}
	// and before this comment ---
	
	console.log('-----loopStaff')
	const staffEmail = loopStaff(data.staff);
	// console.log(staffEmail);
	assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
	assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
	assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);
	
	// Suplimintal Exercises for concept
	console.log('-----loopStaff ---Extra Practise ');
	console.log('--Company --', data.company);
	console.log('--City --', data.city);
	console.log('--Prov --', data.prov);


	console.log('-----emailForOf')
	const emailForOf = loopWithForOf(data.staff);
	// console.log(emailForOf);
	assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
	assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
	assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

	console.log('-----emailForIn')
	const emailForIn = loopWithForIn(data.staff);
	// console.log(emailForIn);
	assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
	assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
	assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);

	console.log('-----emailWithEach')
	const emailWithEach = loopWithEach(data.staff);
	// console.log(emailWithEach);
	assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
	assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
	assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

	console.log('-----emailWithMap')
	const emailWithMap = loopWithMap(data.staff);
	// console.log(emailWithMap);
	assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
	assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
	assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

	/*
		Let's write a function that will create emails for staff
		with a balance equal or over 1000.
	*/

	console.log('-----email With Filter')
	const emailFilter = loopFilter(1000,data.staff);
	// console.log(emailFilter);
	assertEquals(2, emailFilter.length);
	assertEquals('Liam.Henry@evolveu.ca', emailFilter[0]);
	assertEquals('Emma.Jones@evolveu.ca', emailFilter[1]);

}

/* * * * * * * * * * * * functionOptions
/*	
	Write a function to loop through the data and 
	call makeEmailObj from the last exercise.

	The function is to create an array of email addresses.
*/

function functionOptions() {

	console.log('-----Function Options - - -');

	function simpleFunction(p1) {
		return `   simpleFunction: ${p1}   `;
	}

	const simpleArrow = (p1) => `   simpleArrow: ${p1}   `;

	const anotherArrow = (p1) => {
		const a = 'do what ever is needed';
		const b = 'in this error function';
		return `   anotherArrow: ${p1}   `;
	}

	console.log(simpleFunction('what.'));

	console.log(simpleArrow('what!'));

	console.log(anotherArrow('what?'));

	console.log(function () {
		return 'what ever!';

	}());
}


/* * * * * * * * * * * * functionOptions
/*	
	Write a function to loop through the data and 
	call makeEmailObj from the last exercise.

	The function is to create an array of email addresses.
*/

function callBackSimpleExample() {

	console.log('-----callBackSimpleExample - - -');

	let count = 0;
	function myCounter() {
		console.log(` we are at count: ${count++}`);
	}

	console.log(`myCounter Stage1: ${myCounter}`);
	console.log(`myCounter Stage2: ${myCounter()}`);

	setInterval(myCounter, 1000);

}

function myCallBackFunction() {

	console.log('-----myCallBackFunction - - -');

	function myCallBackFunction(ar, func) {
		// console.log(` we are at myCallBackFunction ${ar} ${ar.length}`);
		func('hello');
		for (let i = 0; i < ar.length; i++) {
			// console.log(' in loop:', i, ar[i]);
			func(ar[i]);
		}
		// console.log(` after loop`);
	}

	function myWorkerFunction(p1) {
		console.log(`in my myWorkerFunction ${p1}`, p1);
	}

	myCallBackFunction(data.staff, myWorkerFunction);

}

function funkyOneLiner() {
	[1,2,3,4,5].forEach(function(a,b,c){console.log(a,b,c)})
}


function selectArray() {
	let largeBalances = data.staff.filter(item => item.balance >= 1000);
	// console.log(largeBalances);
	assertEquals(largeBalances[0].fname, "Liam");
	assertEquals(largeBalances[1].fname, "Emma");
}


function reduceArray() {
	const tot = data.staff.reduce((acum, item) => acum + item.balance, 0);
	console.log(tot);
	assertEquals(tot, 3823);
}

function testArrayFill() {
	const a = Array(9).fill(null);
	console.log(a);
}

function timeout() {
	setTimeout(function(){alert("hi")}, 1000);
}

const func = function() {
	console.log("what Ever");
}

const asdf = (a) => 'Arrow Func:' + a;

// --------------------------- T h e   E n d   F o l k s ---------------

// addNumbers();
// orderArray();
// makeEmail();
// makeTrain();
// assertEquals$();
// makeEmailArr();
// makeEmailObj();
// makeEmailArrayObjs();
// functionOptions();
// callBackSimpleExample();
// myCallBackFunction();
// funkyOneLiner();
// selectArray();
// reduceArray();
// testArrayFill();
// timeout();
func();
console.log(asdf('asdf'));