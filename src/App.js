import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleComp from './containers/Simple';
import ScssCr from './containers/ScssCr';
import LessCr from './containers/LessCr';

class App extends Component {
    state = {
        numbers: 0
    }
  increment = ()=>{
      this.setState({
          numbers: this.state.numbers+1
      })
  }
  render() {
        const {numbers} = this.state
      console.log(numbers)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={this.increment}></button>
          <SimpleComp title={numbers}/>
          <ScssCr/>
          <LessCr/>
      </div>
    );
  }
}

export default App;
