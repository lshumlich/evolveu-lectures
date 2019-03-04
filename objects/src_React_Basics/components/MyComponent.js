
import React from 'react';
// import math from "./math";

class MyComp extends React.Component {

	onMyPushMe = () => {
		console.log("onMyPushMe");
		this.props.callBack();
	}

	render() {
			return (
				<div>
					<h1>Hello World from MyComp</h1>
					<h2>Teen: {this.props.whatToSay}</h2>
					<button onClick={this.onMyPushMe}>
						My Push Me
					</button>
				</div>
			)
		}
}

export default MyComp;
 