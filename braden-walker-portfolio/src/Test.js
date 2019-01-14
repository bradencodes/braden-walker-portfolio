import React, { Component } from 'react';
import bar from './resources/bars45large.png';
import me from './resources/me45.png';
import about from './resources/about45.png';
import projects from './resources/projects45.png';
import articles from './resources/articles45.png';
import resume from './resources/resume45.png';
import contact from './resources/contact45.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="cutout-container">
          <img className="parallax__layer--back" src={contact} int="contact" />
        </div>


        <div className="scanimations">
          <img className="parallax__layer--back" src={about} int="about" />
          <img className="parallax__layer--back" src={projects} int="projects" />
          <img className="parallax__layer--back" src={articles} int="articles" />
          <img className="parallax__layer--back" src={resume} int="resume" />
          <img className="parallax__layer--back" src={contact} int="contact" />
        </div>

        <div className="bars-container">
          <img src={bar} alt="bars" className="foreground" />
        </div>

        <div className="scanimations">
          <img className="parallax__layer--me" src={me} int="about" />
        </div>
        
        <div className="bars-container">
          <img src={bar} alt="bars" className="foreground" />
        </div>
        
        <div className="bottomWhite"></div>

      </div>
    );
  }
}

export default App;
