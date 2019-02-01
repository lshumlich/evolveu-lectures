import React, { Component } from 'react';
import logo from './logo.svg';
import thumbs1 from './icons/014-thumbs-up.svg';
import thumbs2 from './icons/015-target-1.svg';
import thumbs3 from './icons/016-thumb-up.svg';
import thumbs4 from './icons/019-mobile-1.png';
import thumbs5 from './icons/020-like-5.png';
import './App.css';
import LinkedListComp from "./components/LinkedListComp.js"
import StuffComp from "./components/StuffComp.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      compToShow: 'stuff',
    }
  }

  onPassedFunction = () => {
    console.log("We are in the App function");
  } 

  onIcon = (e) => {
    // console.log(e.currentTarget.name);
    this.setState({
      compToShow: e.currentTarget.name,
    })
  }

  render() {
    let toShow;
    if (this.state.compToShow === 'stuff') {
      toShow = 
        <div> 
          <StuffComp name="Top" func={this.onPassedFunction}/>
        </div>
    } else if (this.state.compToShow === 'one') {
      toShow = 
        <div> 
          <LinkedListComp name="Top" func={this.onPassedFunction}/>
        </div>
    } else if (this.state.compToShow === 'table') {
      toShow = 
        <div> 
           <table align="center">
            <tbody>
              <tr> 
                <td><LinkedListComp name="one,one"/></td>
                <td><LinkedListComp name="one,two"/></td>
              </tr>
              <tr> 
                <td><LinkedListComp name="two,one"/></td>
                <td><LinkedListComp name="two,two"/></td>
              </tr>
            </tbody>
          </table>
        </div>
    } else {
      toShow = 
        <header className="App-header">
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

    };

    return (
      <div className="App">
        <h1>Hello World</h1>
        <img src={thumbs1} className="lfs-logo" name="logo" onClick={this.onIcon} alt="logo" />
        <img src={thumbs2} className="lfs-logo" name="one" onClick={this.onIcon} alt="logo" />
        <img src={thumbs3} className="lfs-logo" name="table" onClick={this.onIcon} alt="logo" />
        <img src={thumbs4} className="lfs-logo" name="logo" onClick={this.onIcon} alt="logo" />
        <img src={thumbs5} className="lfs-logo" name="stuff" onClick={this.onIcon} alt="logo" />
        <div> {toShow} </div>
      </div>
    );
  }
}

export default App;

/***

places to hide code for the class

asdf safd sadf sdaf sdaf

--- Table template

          <table align="center">
            <tbody>
              <tr> 
                <td>one,one</td>
                <td>one,two</td>
              </tr>
              <tr> 
                <td>two,one</td>
                <td>two,two</td>
              </tr>
            </tbody>
          </table>

--- With the components

          <table align="center">
            <tbody>
              <tr> 
                <td><LinkedListComp name="one,one"/></td>
                <td><LinkedListComp name="one,two"/></td>
              </tr>
              <tr> 
                <td><LinkedListComp name="two,one"/></td>
                <td><LinkedListComp name="two,two"/></td>
              </tr>
            </tbody>
          </table>

--------------------------------

        <LinkedListComp name="Top" func={this.onPassedFunction}/>
           <table align="center">
            <tbody>
              <tr> 
                <td><LinkedListComp name="one,one"/></td>
                <td><LinkedListComp name="one,two"/></td>
              </tr>
              <tr> 
                <td><LinkedListComp name="two,one"/></td>
                <td><LinkedListComp name="two,two"/></td>
              </tr>
            </tbody>
          </table>

        <header className="App-header">
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


*/
