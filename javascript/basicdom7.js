console.log("running the basicdom7 javascript file");
console.log("Logging document", document);

let myButton = document.getElementById("inputButton");
myButton.addEventListener("click", onButtonClicked);

function onButtonClicked() {
	console.log("got to button clicked");
}

//onButtonClicked();

