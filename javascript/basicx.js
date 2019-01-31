
console.log("Hello World from test1.js");

var mouseOverCount = 0;

function myMouseOver() {

	mouseOverCount += 1

	var div = document.getElementById('mydiv');
	div.innerHTML += '<br>Mouse over button ...' + mouseOverCount;
}

function myClear() {
	var div = document.getElementById('mydiv');
	div.innerHTML = '';
}

function myAdd() {
	var v1 = document.getElementById('myInput1').value;
	var v2 = document.getElementById('myInput2').value;
	document.getElementById('myInput3').value = parseInt(v1) + parseInt(v2);
	// var div = document.getElementById('mydiv');
	// div.innerHTML = v1;
}

function circleOver(el) {
	console.log(el);
	console.log(el.target);
	console.log(el.target.getAttribute('cx'));
	el.target.setAttribute('cx', parseInt(el.target.getAttribute('cx')) + 5);
}
