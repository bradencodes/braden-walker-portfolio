import React, { Component } from 'react';
import './styles/css/index.css';

import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";

class App extends Component {
  render() {
    return (
      <div className="app">

        <Sidebar />

        <Home />

      </div>
    );
  }
}

export default App;
