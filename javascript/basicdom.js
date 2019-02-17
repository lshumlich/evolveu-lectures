p = console.log;
p('Hello World from basicdom.js');
p('Document', document);
p('Window', window);
p('h1', idH1);
// p('btnPush', btnPush);
// console.dir(document.body);

document.body.addEventListener('click', onBodyClick);

function onBodyClick(e) {
	p(e.target);
	p(e.target.getAttribute("place"));
	p(e.target.getAttribute("id"));
}
