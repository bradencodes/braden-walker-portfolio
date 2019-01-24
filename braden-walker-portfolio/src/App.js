import React, { Component } from 'react';
import './styles/css/index.css';

import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";

class App extends Component {

  render() {
    return (
      <div id="app">

        <Sidebar />

        <Home />

        <div className="rightbar"></div>

      </div>
    );
  }
}

export default App;
