
console.log('Hello World from intro.js');

window.onload = onWindowHasLoaded;
// idPushMe.addEventListener("click", onButtonPush);

let people;

async function onWindowHasLoaded() {
	console.log('The page has finished loading.');
	let response;
	try {
		response = await fetch('/info');
		if (response.status != 200)
			throw 'Invalid HTTP Response:' + response.status;
		// console.log('Response:', response);
		// const data = await response.text();
		// console.log('Data:', data);
		people = await response.json();
		// console.log('json:', people);
		displayPeople(people);

	} catch (error) {
		console.trace();
		console.log('*** We Have and error onWindowHasLoaded:', error);
		console.log('Response:', response);
	}
}

const displayPeople = (data) => {
	for(i in data) {
		let div = createDiv(data[i]);
		document.body.appendChild(div);
	}
}

function createDiv(person) {
	// console.log(person);
	const div = document.createElement("div");
	div.setAttribute('person', person.id);
	div.textContent = person.fname + ' ' + person.lname + ' ' + person.age;
	div.appendChild(document.createElement("br"));
	div.appendChild(document.createElement("br"));
	const btn = document.createElement("button");
	btn.textContent = 'Update';
	btn.addEventListener("click", onUpdate);
	div.appendChild(btn);
	div.className = "clPerson";
	return div;
}

const onUpdate = (event) => {
	console.log('onUpdate:', event.target.parentNode);
	personId = event.target.parentNode.getAttribute('person');

	console.log('onUpdate: id', personId);
	let person = people[personId];
	console.log('Person:', person);
	updatePerson(personId, person.age);
}

async function updatePerson(id, age) {
	console.log('about to update:', id, age);
	let response;
	try {
		response = await fetch('/update', {
			method: "post",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: id,
				age: age
			})
		});
		if (response.status != 200)
			throw 'Invalid HTTP Response:' + response.status;
		const res = await response.json();
		console.log('Response from update:', res);

	} catch (error) {
		console.trace();
		console.log('*** We Have and error updatePerson:', error);
		console.log('Response:', response);
	}
}

// console.log("hello World.");
//
// Just playing with promises and timing
//

const lfstime = async (msg, delay) => {
	return new Promise(xx => {
		console.log('Inside Promis:', msg, delay);
		setTimeout(() => {
			// msg;
			console.log('inside timeout:', msg, delay);
			xx(msg + ' whatever');
			return 1234;
		}, delay);
		console.log('inside promise but after timeout');
	});
}

const lfstime2 = async (msg, delay) => {
	return await new Promise(xx => setTimeout(msg, delay));
}

const foo = async () => {
	console.log('Hello from foo');
	console.log('--->', await lfstime('try 1', 1000));
	console.log('--->', await lfstime('try 2', 1000));
	console.log('--->', await lfstime('try 3', 1000));

	console.log('Good bye from foo');
	return 5;
}

// console.log('From foo', foo());

// console.log("Good bye crule world.");

const from = () => {xx =>
	setTimeout(() => {
		console.log('timeout in from...1');
		console.log('timeout in from...2');
		xx();
	}, 1000);

	// from();
	// return 'asdf'
}

// console.log('---from---:', from());
