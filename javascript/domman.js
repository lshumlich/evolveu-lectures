
console.log("Hello World");

let counter = 0;


document.body.addEventListener("click", onButtonPushed);

function onButtonPushed(e) {
	console.log("onButtonPushed",e);
	e.target.appendChild(makeDiv("I fricking did it " + ++counter));
}

document.body.addEventListener("contextmenu", onContext);

function onContext(e) {
	e.target.style.background = "blue";
}

function makeDiv(message) {
	const div = document.createElement("div");
	div.textContent = message;
	div.className = "clPanel";
	// console.log(div);
	return div;
}

console.log("testing makediv:", makeDiv("Make me a div"));