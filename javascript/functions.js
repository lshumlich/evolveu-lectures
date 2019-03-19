
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
		--- Working with Dictionaries ---
*/
const dicMsgDiv = document.getElementById("dicMsg");
let dic = {
	'ab': 'Alberta', 
	'bc': 'British Columbia', 
	'sk': 'Saskatchewan'
};
document.getElementById("dicLookup").addEventListener("click", onDicLookup);

function dicMsg(b) {
	dicMsgDiv.textContent = b;
}

function onDicLookup(e) {
	let s = document.getElementById("inDic").value;
	// console.log("In onDicLookup", e);
	let a = dic[s];
	if (a) {
		dicMsg(a);
	} else {
		dicMsg("Entry not valid");
	}
	
}

/*

	---------- Prove that inner blocks have access to outer blocks variables

*/

function myTestFunc() {
	console.log("MyTestFunc:", value1);
	console.log("MyTestFunc:", value2);
}

myTestFunc();

const p = console.log;
/*
	---------- Add numbers ----------
*/

function my_add(p1, p2, p3) {
	const v = p1 + p2 + p3;
	return v;
}

function my_add_xxx(p1, p2, p3) {
	return p1 + p2 + p3;
}

const ans12 = my_add(1,2,3);
console.log('my_add answer 1:', ans12);

console.log('my_add answer 1:',my_add(2,22,222));

/*
	---------- email address ----------
*/

function my_email(fname, lname) {
	const email = fname + '.' + lname + "@evolveu.com";
	return email;
}


const ans14 = my_email('jane','smith');
console.log('my_email answer 1:', ans14);

console.log('my_email answer 1:',my_email('bill','jones'));

/*
	---------- Array Sum ----------
	They only need to come up with one
	way here is a few.
*/

function mySum1(arr) {
	let sum = 0;
	for (i in arr) {
		sum += arr[i];
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

function look_for_stringx(sarr, look_for){
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

function look_for_string(sarr, look_for){
	let count = 0;
	for (let i = 0; i < sarr.length; i++) {
	// sarr.forEach(function (i) {
		// p('--',i);
		// p(i.search(look_for));
		if(sarr[i].search(look_for) >= 0){
			count+=1;
			// p('---', look_for, 'found');
		};
	};
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

