p = console.log;
p('Hello World from basicdom.js');
// p('Document', document);
// p('Window', window);
// p('Logging the heading h1 by grabbing the id of idH1', idH1);
// p('btnPush', btnPush);
// console.dir(document.body);

document.body.addEventListener('click', onBodyClick);

function onBodyClick(e) {
	p("Inside bodyClick function");
//	p(e.target);
//	p(e.target.getAttribute("place"));
//	p(e.target.getAttribute("id"));
}

idBtnPush.addEventListener('click', onButtonClick);
idH1.addEventListener('click', onHeading1Click);
idH3.addEventListener('mouseover', onHeading3Over);
idH4.addEventListener('mouseleave', onHeading4Leave);
let string1 = "Hello World";
let string2 = "Hello Universe";
let string3 = "Hello Alberta";
let string4 = "Hello Saskatchewan";
let string5 = "Hello Calgary";
let string6 = "Hello Saskatoon";
let headingCounter = 0; 
// let newHeadingH1 = "The new heading is " + headingCounter;
let newHeadingH1 = "The new heading is ";

// p("newHeadingH1 = ", newHeadingH1);


// p("string1 = " + string1);

idH1.textContent = string1;
idH3.textContent = string3;
idH4.textContent = string5;

// p("idH1.textContent before clicking button = ", idH1.textContent);

function onButtonClick(e) {
	// p("You pushed the button; inside onButtonClick function");
	// p("inside onButtonClick, the value of idH1 = ", idH1.textContent);
	// p("inside onButtonClick, the value of string1 = ", string1);
	if (idH1.textContent === string1) {
		idH1.textContent = string2;
	} else {
		idH1.textContent = string1;
	}
	var elem = document.createElement('h1');
	elem.textContent = newHeadingH1 + headingCounter;
	document.body.appendChild(elem);
	
	//document.body.textContent = "\n";
	headingCounter += 1;
}

function onHeading1Click(e) {
	p("You clicked on the heading1; inside onHeading1Click function");
	if (idH1.textContent === string1) {
		idH1.textContent = string2;
	} else {
		idH1.textContent = string1;
	}
}

function onHeading3Over(e) {
	p("You moused over on the heading3; inside onHeading3Over function");
	if (idH3.textContent === string3) {
		idH3.textContent = string4;
	} else {
		idH3.textContent = string3;
	}
}

function onHeading4Leave(e) {
	p("You mouse left on the heading4; inside onHeading4Leave function");
	if (idH4.textContent === string5) {
		idH4.textContent = string6;
	} else {
		idH4.textContent = string5;
	}
}
