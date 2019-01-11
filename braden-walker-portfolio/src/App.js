import React, { Component } from 'react';
import bar from './resources/bar2-8.svg';
import about from './resources/about2-8.png';
import projects from './resources/projects2-8.png';
import articles from './resources/articles2-8.png';
import resume from './resources/resume2-8.png';
import contact from './resources/contact2-8.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="topWhite"></div>
        
        <div className="scanimations">
          <img className="parallax__layer parallax__layer--back scanimation" src={about} int="about" />
          <img className="parallax__layer parallax__layer--back scanimation" src={projects} int="projects" />
          <img className="parallax__layer parallax__layer--back scanimation" src={articles} int="articles" />
          <img className="parallax__layer parallax__layer--back scanimation" src={resume} int="resume" />
          <img className="parallax__layer parallax__layer--back scanimation" src={contact} int="contact" />
        </div>
        
        <div className="foreground bars" style={{backgroundImage: `url(${bar})`}} />
        
        <div className="bottomWhite"></div>

      </div>
    );
  }
}

export default App;
