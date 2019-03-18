
p = console.log;

p(idMoveMe);
idMoveMe.x = 100
idMoveMe.y = 100

let myInterval;

document.body.addEventListener("click", function(e) {
	if (myInterval) {
		clearInterval(myInterval);
		myInterval = null;
	} else {
		myInterval = setInterval(moveDiv, 10);		
	}
});


function moveDiv() {
	idMoveMe.x+=3;
	if (idMoveMe.x > document.body.offsetWidth) idMoveMe.x = 0;
	idMoveMe.style.left = idMoveMe.x + "px";

	idMoveMe.y+=1;
	if (idMoveMe.y > document.body.offsetHeight) idMoveMe.y = 0;
	idMoveMe.style.top = idMoveMe.y + "px";
}