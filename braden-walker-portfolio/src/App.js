import React, { Component } from 'react';
import bar from './resources/bar.svg';
import heart from './resources/heartTest.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="parallax">

          <div className="parallax__layer parallax__layer--base">
            <img className="heart" src={heart} />
          </div>

          <div className="parallax__layer parallax__layer--back">
            <div className="bars" style={{backgroundImage: `url(${bar})`}} />
          </div>
        
        </div>

      </div>
    );
  }
}

export default App;
