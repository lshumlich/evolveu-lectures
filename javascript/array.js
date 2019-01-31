/****************************************
*
*
*/

var myModule = (function() {

	var myString = 'My Value';
	console.log("Hello World!");

	function myFunc(){
		console.log("I am in myFunc", myString);
	}

	return {
		stuff : 'Some Stuff',
		yourFunc: myFunc
	};

})();

console.log(myModule);

myModule.yourFunc();

// console.log(myModule.myString);

















var myTest = function() {

	console.log("Hello World");

	return {
		s :'My String',
		s2 : 'What Ever'
	}

}













var lfsModule = function() {

	let str, obj, highest;

	// var top2 = document.getElementById("top");
	var top = document.querySelector("#top");
	var push = document.querySelector("#push");

	top.addEventListener('dblclick', function(){
		str = this.value;
		obj = JSON.parse(str);
		highest = findHighest(obj);

		console.log(highest);
		console.log(obj);
		console.log('str:', str);
	});

	push.addEventListener('click', function(){
		console.log(highest);
	});

	function findHighest(a) {
		var h = obj[0];
		for (var i of obj) {
			if (i > h) {
				h = i;
			}
		}
		return h;
	}

}();


var ar = [1,2,3];

var Client = function(name, age) {
	this.name = name;
	this.age = age;

	this.birthday = function() {
		this.age ++;
	}

	function bir() {
		print('hello');
	}
}

text = '[1,2,3,4]';
var obj = JSON.parse(text);

larry = new Client('larry', 29);
larry.birthday();

// getStuff();

function print(s){
	console.log(s);
}

function getStuffHtml() {
	// fetch('http://example.com/movies.json')
	fetch('file://movies.json')
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(myJson) {
	    console.log(JSON.stringify(myJson));
	  });

 }

 /*******************************************

	Add div to an existing area. The blocks should
	be responsive.

 */

 var divAddBlock = function() {

 	let nodeCount = 0;

	document.querySelector("#addDiv").
			addEventListener('click', function(){
		console.log('add block');
		var node = document.createElement('div');
		var textnode = document.createTextNode("Stuff in the div " + (nodeCount++) + '.');
		node.appendChild(textnode);
		node.className = "client";

		document.querySelector("#clientDiv").
			appendChild(node);
		// console.log('Node:', node);
	});

	document.querySelector("#clientDiv").
			addEventListener('click', function(event){
		console.log('client div', event);
		node = event.target;
		// node.parentNode.parentNode
		console.log(node);
		node.remove();
	});

 }();


{
	
	
}



 /*******************************************

	Play with array and objects. Also do some json stuff

 */

 var arrayObjModule = function() {

 	let myArray = [1,2,3,7,9,11];
 	let myObject = {
 		name: "Larry",
 		age: 29,
 		skill: "Flying"
 	};

	document.querySelector("#jsonButton").
			addEventListener('click', function(){
		console.log('jsonButton');
	});

	document.querySelector("#arrayButton").
			addEventListener('click', function(){
		console.log('arrayButton');

		for(i in myArray){
			console.log("MyArray:", i, myArray[i]);
		}
	});

	document.querySelector("#objectButton").
			addEventListener('click', function(){
		console.log('objectButton');
		for(i in myObject){
			console.log("myObject:", i, myObject[i]);
		}
	});

 }();

