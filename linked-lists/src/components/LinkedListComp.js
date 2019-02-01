
import React from 'react';
import ll from "./LinkedList";
/********************

- there are a few ways to maintain state within a React
  app:
    - "this."
    - setState
    - Redux
  
- State must be maintained at the highest level needed to share
  between components
- Methods can be passed as parameters

*/

class LinkedListComp extends React.Component {

  constructor() {
    super();
    this.ll = null;
    this.count = 0;
    this.onNew = this.onNew.bind(this);
    this.state = {
      stateExample: "Bla Bla Bla State Display",
      valuexx: "v1.0",
    }
  }

/********************

- if functions need access to "this.", they must be bound
- all the normal JavaScript functions and methods work
- React allows you to write small components and provides some
  additional functionality like state for auto refresh

*/

  onNew() {
    this.ll = new ll.LinkedList(
      document.getElementById("subject").value,
      document.getElementById("amount").value
    );
  }

 /********************

  Example of an arrow function. With arrow functions you do not
  need to bind the method to access "this".

*/

  onAdd = () => {
    this.ll.add(
      document.getElementById("subject").value,
      document.getElementById("amount").value
    );
  }

  onShowAll = () => {
    if (this.ll) {
      document.getElementById("console").innerHTML = this.ll.show();
    }
  }

 /********************

  Notice onClear could be used by any <div> or any other DOM
  object that you needed this functionality for. 
  The target is passed in the event.

*/

  onClear = (e) => {
    e.currentTarget.innerHTML = "";
  }


 /********************




*/

  onChange = (event) => {
    this.setState({valuexx: event.target.value});
  }

  onShowState = () => {
    let s = this.state.stateExample + ' some change ' + this.count++;
    this.setState ({
      stateExample: s,
    })
    console.log("In onShowState", this.props.func);
  }

 /********************

  Notice the delegated function. When the button is pressed
  the function in "App" is actually executed.

*/

  render() {
    return ( 
      <div className="lfs-look">
        <h3>Linked List: {this.props.name} - {this.state.valuexx} </h3>
        <br/>
        <button onClick={this.onNew}>New</button>
        <button onClick={this.onAdd}>Add</button>
        <br/>
        <input id="subject"/>
        <input id="amount"/>
        <br/>
        <button onClick={this.onShowAll}>Show All</button>
        <button onClick={this.onShowState}>Show State</button>
        <button onClick={this.props.func}>Delegated</button>
        <div onClick={this.onClear} id="console"> Display Area </div>
        <br/>
        <div> Prop:{this.props.name}: {this.state.stateExample} </div>
        <br/>
        <input value={this.state.valuexx} onChange={this.onChange} />
        <div>{this.state.valuexx}</div>
      </div>
    );
  }
}

export default LinkedListComp;
