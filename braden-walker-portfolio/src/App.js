import React, { Component } from 'react';
import bar from './resources/bars45large.png';
// import bar from './resources/bars2-8.png';
// import bar from './resources/bar2-8.svg';
import me from './resources/me2-8.png';
import about from './resources/about2-8.png';
import projects from './resources/projects2-8.png';
import articles from './resources/articles2-8.png';
import resume from './resources/resume2-8.png';
import contact from './resources/contact45.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        <div className="cutout-container">
          <img className="parallax__layer parallax__layer--back scanimation" src={contact} int="contact" />
        </div>


        <div className="scanimations">
          {/* <img className="parallax__layer parallax__layer--back scanimation" src={about} int="about" />
          <img className="parallax__layer parallax__layer--back scanimation" src={projects} int="projects" />
          <img className="parallax__layer parallax__layer--back scanimation" src={articles} int="articles" />
          <img className="parallax__layer parallax__layer--back scanimation" src={resume} int="resume" /> */}
          <img className="parallax__layer parallax__layer--back scanimation" src={contact} int="contact" />
        </div>
        
        <div className="bars-container">
          <div className="foreground bars" style={{backgroundImage: `url(${bar})`}} />
        </div>

        <div className="bars-container">
          <img src={bar} alt="bars" className="foreground bars" />
        </div>

        <div className="scanimations">
          <img className="parallax__layer parallax__layer--me scanimation" src={me} int="about" />
        </div>
        
        <div className="bars-container">
          <img src={bar} alt="bars" className="foreground bars" />
        </div>
        
        <div className="bottomWhite"></div>

      </div>
    );
  }
}

export default App;
