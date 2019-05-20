
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
    this.ll = new ll.LinkedList();
    this.count = 0;
    this.state = {
      stateExample: "Bla Bla Bla State Display",
      valuexx: "v1.0",
    }
  }
 /********************

  Example of an arrow function. With arrow functions you do not
  need to bind the method to access "this".

*/

  onAdd = () => {
    if (document.getElementById("subject").value) {
      this.ll.add(
        document.getElementById("subject").value,
        document.getElementById("amount").value
      );
      this.show(this.ll);
      document.getElementById("subject").value = "";
      document.getElementById("amount").value = "";
    }
  }

  onFirst = () => {
    this.ll.first()
    this.show(this.ll);
  }

  onNext = () => {
    this.ll.next()
    this.show(this.ll);
  }

  onPrev = () => {
    this.ll.prev()
    this.show(this.ll);
  }

  onLast = () => {
    this.ll.last()
    this.show(this.ll);
  }

  onDelete = () => {
    this.ll.delete()
    this.show(this.ll);
  }

  show(display) {
    this.setState({
      valuexx: display.show()
    });
  }


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
        <div className="link-add">
          <button onClick={this.onFirst}>First</button>
          <button onClick={this.onNext}>Next</button>
          <button onClick={this.onDelete}>Delete</button>
          <button onClick={this.onPrev}>Prev</button>
          <button onClick={this.onLast}>Last</button>
          <br/>
          <div>{this.state.valuexx}</div>
        </div>

        <div className="link-add">
          <table className="link-table">
            <tr>
              <td>
                Subject
              </td>
              <td>
                Amount
              </td>
            </tr>
            <tr>
              <td>
                <input className="ll-input" id="subject"/>
              </td>
              <td>
                <input  className="ll-input" id="amount"/>
              </td>
            </tr>
          </table>
          <button onClick={this.onAdd}>Add</button>
        </div>

        <br/>
        <button onClick={this.onShowAll}>Show All</button>
        <button onClick={this.onShowState}>Show State</button>
        <button onClick={this.props.func}>Delegated</button>
        <div onClick={this.onClear} id="console"> Display Area </div>
        <br/>
        <div> Prop:{this.props.name}: {this.state.stateExample} </div>
        <br/>
        <input value={this.state.valuexx} onChange={this.onChange} />



      </div>
    );
  }
}

export default LinkedListComp;
