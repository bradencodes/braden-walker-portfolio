import React, { Component } from 'react';

import Landing from "./Landing.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import Resume from "./Resume.js";

class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <Landing />

                <About />

                <Projects />

                <Articles />

                <Resume />
                
            </div>
        );
    }
}

export default Home;
