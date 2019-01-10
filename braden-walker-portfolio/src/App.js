import React, { Component } from 'react';
import bar from './resources/bar.svg';
import heart from './resources/smallHeartTest.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="topWhite"></div>

        <div className="parallax__layer parallax__layer--back">
          <img className="heart" src={heart} int="heart" />
        </div>

        <div className="foreground">
          <div className="bars" style={{backgroundImage: `url(${bar})`}} />
        </div>
          
        

        <div className="foreground">
          <div className="bottomWhite"></div>
        </div>

      </div>
    );
  }
}

export default App;
