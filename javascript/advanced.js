/************************************************

 ES6 / ES2015

*/

let es6Module = function() {

	// Block Scoped

	let v1 = 'Value that changes';
	const c1 = 'Value that does not change'

	// Blocks that are very simple

}();

	// IIFE Immediately Invoked Function Expression
	// This is the es6 way of doing the above

{
	let v1 = 'Value1';
	const c1 = 'Constant2'

	console.log("Hello World", c1)

	// Strings

	console.log (`v1 = ${v1} and c1 = ${c1} math is ${1 + 1 + 2}`)

	console.log (`v1 startsWith with Va? ${v1.startsWith('Va')}`);
	console.log (`v1 endsWith with e1? ${v1.endsWith('e1')}`);
	console.log (`v1 includes with lu? ${v1.includes('lu')}`);

}

	// Arrow Functions
{
	const years = [1990, 1965, 1982, 1937];

	// ES5

	const ages5 = years.map(function(el) {
		return 2016 - el;
	});
	console.log(ages5);

	const ages6 = years.map( el => 2016 - el);
	console.log(ages6)

	const ages7	= years.map((el, index) => {
		const now = new Date().getFullYear();
		const age = now - el;
		return `Age element ${index + 1}: ${age}`;
	});
	console.log(ages7);
}

{
	// Destructuring

	const ar = ['Larry', 29];
	const [name, age] = ar;
	console.log(name, age);
}
{
	const obj = {"name" : "Larry", "age" : 29};
	const {name:a, age:b} = obj;
	// console.log(name, age);
	console.log(a, b);
}

{
	// Spred Operator

	const ar = ['Larry', 29];
	const ar1 = [...ar, 'Shumlich']
	console.log(`values are ${ar1}`)

}

{
	// Rest Parameters
	function stuff(var1,...vars) {
		console.log(var1);
		console.log(vars);
	}

	stuff('first thing','a','b','c',3,4);
}

{
	// default parameters

	function def(var1 = 'Val1', var2 = 'Val2') {
		console.log(var1, var2);
	}

	def();
	def('me', 'you')
}

{
	// Maps
	const numbers = new Map();
	numbers.set(1, 'one');
	numbers.set(2, 'two');
	numbers.set(3, 'three');
	numbers.set(4, 'four');

	numbers.get(2);

	numbers.delete(4);
	if(numbers.has(3)){
		console.log('we have 3');
	}

	numbers.forEach((value, key) =>
		console.log(`the key of ${key} has a value of ${value}`)
	);

	for (let [key, value] of numbers.entries()) {
		console.log(`the key of ${key} has a value of ${value}`);
	}
}

{
	// Play with Promises
	// const getStuff = new Promise

	const getIDs = id => {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				if (id < 10) {
					resolve(`Some resolved ${id} aOK`);
				} else {
					reject(`We rejected ${id} not good`)
				}
			},1500);
		});
	};

	getIDs(31)
		.then(val => {
			console.log("In the then", val);
		})
		.catch(error => {
			console.log("In the error",error);
		});

	async function getMoreStuff() {
		console.log("getMoreStuff 1",await getIDs(1));
		console.log("getMoreStuff 2",await getIDs(2));
		// console.log("getMoreStuff 3",await getIDs(33));

	}
	console.log("Before Call to getMoreStuff");
	getMoreStuff();
	console.log("after Call to getMoreStuff");
}

{
	// https://corsproxy.github.io/
	// Fetch

	function getWeather(woeid) {
		console.log('Getting Weather');
		// fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}`, {'mode': 'no-cors'})
		fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}`)
			.then (result => {
				console.log(result);
				return result.json();
			})
			.then(data => {
				const today = data.consolidated_weather[0];
				console.log(`Tempetature in ${data.title} should be between ${today.min_temp} and ${today.max_temp}`);
			})
			.catch(error => console.log('****' + error));
	}

	async function getWeatherAW(woeid) {
		try {
			console.log('Getting Weather with await');
			const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
			//                                                 https://www.metaweather.com/api/location/2487956/
			const data = await result.json();
			console.log(data)
		} catch {
			console.log('**** Could not get weather data');
		}
	}

	// getWeather(2487956);
	getWeatherAW(2487956);
}

