
const p = console.log;

p("Hello from domclients");

const data = 
	{clients:
		[
			{name:"Jane", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},
		]
	};

data.clients.forEach(function(i){
	// p(i);
	div = createDiv(i.name, i.balance);
	document.body.appendChild(div);
});

function createDiv(name, balance) {
	const div = document.createElement("div");
	div.textContent = name + ' ' + balance;
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));
	const btn = document.createElement("button");
	btn.textContent = 'Delete';
	div.appendChild(btn);
	div.className = "clClient";
	return div;
}

document.addEventListener('click',function(e){
	// p("listener",e.target);
	if(e.target.textContent === 'Delete') {
		p('*** Delete ***');
		e.target.parentElement.parentElement.removeChild(e.target.parentElement);
	}
});
