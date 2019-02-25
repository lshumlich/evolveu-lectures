
console.log("Hello from functions.js v2");

function myFunction(xx, yy) {
	console.log("Hello from myFunction v2", xx, yy);
	const value_to_return = xx + "-" + yy;
	return value_to_return;
}

const value1 = myFunction("Rocks","Rings");
const value2 = myFunction("Coding","Fun");

console.log("v1:", value1);
console.log("v2:", value2);

const func = myFunction;

console.log(func("Hello","World"));

/*

	---------- Prove that inner blocks have access to outer blocks variables

*/

function myTestFunc() {
	console.log("MyTestFunc:", value1);
	console.log("MyTestFunc:", value2);
}

myTestFunc();

p = console.log;

/*
	---------- Array Sum ----------
	They only need to come up with one
	way here is a few.
*/

function mySum1(arr) {
	let sum = 0;
	for (v in arr) {
		sum += arr[v];
	}
	return sum;
}

function mySum2(v) {
	// p('mySum2',v);
	sum2 +=v;
}

function mySum3(arr) {
	let sum = 0;
	for(i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

const numbers = [5,10,15,20];

p("mySum1 answer:", mySum1(numbers));

let sum2 = 0;

numbers.forEach(mySum2);
p('mySum2:', sum2);

p("mySum3 answer:", mySum3(numbers));

/*
	---------- String Search Function ----------
*/

function look_for_string(sarr, look_for){
	let count = 0;
	sarr.forEach(function (i) {
		// p('--',i);
		// p(i.search(look_for));
		if(i.search(look_for) >= 0){
			count+=1;
			// p('---', look_for, 'found');
		};
	});
	return count;
}

/*
	---------- String Search ----------
*/

const string_array = [
	'this is a string',
	'that is also a string',
	'what about this',
	'what about that',
];

const search1 = "this";
const search2 = "is";

const ans1 = look_for_string(string_array, search1);
const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");

