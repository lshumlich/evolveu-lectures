
console.log("Hello from exercises.js");

// addNumbers();
// orderArray();
// makeEmail();
// makeTrain();
// assertEquals$();
// makeEmailArr();
// makeEmailObj();

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
	Write the function that format an email based on an array
*/

function makeEmailArr() {

	// Write the function after this comment ---
	function makeEmailArr(arg) {
		return `${arg[0]}.${arg[1]}@evolveu.ca`;
	}
	// and before this comment ---

	arrayLarry = ['larry', 'shumlich'];
	assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
	assertEquals('bill.smith@evolveu.ca', makeEmailArr(['bill','smith']));
	assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

}


/* * * * * * * * * * * * makeEmailObj
/*	
	Write the function that format an email based on an object / map
*/

function makeEmailObj() {

	// Write the function after this comment ---
	function makeEmailObj(arg) {
		return `${arg.fname}.${arg['lname']}@evolveu.ca`;
	}
	// and before this comment ---

	arrayLarry = {fname:'larry', lname:'shumlich'};
	assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(arrayLarry));
	assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
	assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

}

/* * * * * * * * * * * * makeEmailArrayObjs
/*	
	Write a function to loop through the data and call makeEmailObj
	from the last exercise.
*/

function makeEmailArrayObjs() {
	const data = 
	{clients:
		[
			{fname:"Jane", lname:"Smith", balance:10},
			{fname:"Liam", lname:"Henry", balance:1000},
			{fname:"Emma", lname:"Jones", balance:1330},
			{fname:"Olivia", lname:"Notly", balance:310},
			{fname:"Noah", lname:"Ho", balance:503},
			{fname:"William", lname:"Lee", balance:520},
			{fname:"Benjamin", lname:"Amis", balance:150},
		]
	};

	// Write the function after this comment ---
	function makeEmailObj(arg) {
		return `${arg.fname}.${arg['lname']}@evolveu.ca`;
	}
	// and before this comment ---

	arrayLarry = {fname:'larry', lname:'shumlich'};
	assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(arrayLarry));
	assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
	assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

}





// --------------------------- T h e   E n d   F o l k s ---------------

