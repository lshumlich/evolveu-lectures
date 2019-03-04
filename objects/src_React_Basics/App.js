import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponent from './components/MyComponent';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }

  onPushMe = () => {
    this.counter +=1;
    this.setState({
      myState: "now:" + this.counter
    });
    console.log("You pushed me", this.counter);
    console.log(this);
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>I am in control of this app and my name is Larry {this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          <MyComponent 
            whatToSay="whatever"
            callBack={this.onPushMe}
          />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
