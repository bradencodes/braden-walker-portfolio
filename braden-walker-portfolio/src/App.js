import React, { Component } from 'react';
import bar from './resources/bar.svg';
import heart from './resources/heartTest.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="parallax__layer parallax__layer--back">
          <div className="bars" style={{backgroundImage: `url(${bar})`}} />
        </div>

        <div className="foreground">
          <div className="topWhite"></div>
        </div>
          
        <img className="heart" src={heart} int="heart" />

        <div className="foreground">
          <div className="bottomWhite"></div>
        </div>

      </div>
    );
  }
}

export default App;
