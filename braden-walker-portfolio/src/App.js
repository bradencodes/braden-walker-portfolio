import React, { Component } from 'react';
import bar from './resources/bar.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bars" style={{backgroundImage: `url(${bar})`}} />
      </div>
    );
  }
}

export default App;
