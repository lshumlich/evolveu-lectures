import React from 'react';

function Stuff() {
	const a = '123';
	function getSomeValue() {
		return 'This is some really important value.';
	}
	return (
		<div>
			<h1>Hello from Stuff function</h1>
			<h3>React Version {React.version}</h3>
			{a} 
			{getSomeValue()}
		</div>
)}

export default Stuff;
