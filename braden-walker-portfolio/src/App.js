import React, { Component } from 'react';
import bar from './resources/bar2-8.svg';
import heart from './resources/contact2-8.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="topWhite"></div>
        
        <img className="parallax__layer parallax__layer--back heart" src={heart} int="heart" />
        
        <div className="foreground bars" style={{backgroundImage: `url(${bar})`}} />
        
        <div className="bottomWhite"></div>

      </div>
    );
  }
}

export default App;
