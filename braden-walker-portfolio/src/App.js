import React, { Component } from 'react';
import './styles/css/index.css';

import Sidebar from "./components/Sidebar.js";

class App extends Component {
  render() {
    return (
      <div className="app">

        <Sidebar />
        
      </div>
    );
  }
}

export default App;
