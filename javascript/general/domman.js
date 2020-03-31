
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


//
// this is just some playing around
//
// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// createDiv.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);                    // Append <button> to <body>

// var nodeVar = document.createElement("LI");           // Create a <li> node
// var textnodeVar = document.createTextNode("Water");   // Create a text node
// nodeVar.appendChild(textnodeVar);                     // Append the text to <li>
// document.getElementById("myList").appendChild(node);  // Append <li> to <ul> with id="myList"
 
// var insertedNode = parentNode.insertBefore(newNode, referenceNode);
// insertedNode The node being inserted, that is newNode
// parentNode The parent of the newly inserted node.
// newNode The node to be inserted.
// referenceNode The node before which newNode is inserted.
// If referenceNode is null, the newNode is inserted at the end of the list of child nodes.

// let insertedNode = document.body.insertBefore(newNode,3); //inserts before #3sibling
// let insertedNode = document.body.insertBefore(newNode,null); //inserts at end
// let insertedNode = 2.insertBefore(newNode,2.3);
// const targetChild = e.target;
// const targetParent = e.target.ParentNode;

// targetParent.insertBefore(newNode, targetChild);

// nextNode = targetChild.nextSibling;
// targetParent.insertBefore(newNode,nextNode);