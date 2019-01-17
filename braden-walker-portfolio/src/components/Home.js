import React, { Component } from 'react';

import Landing from "./Landing.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Articles from "./Articles.js";

class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <Landing />

                <About />

                <Projects />

                <Articles />
                
            </div>
        );
    }
}

export default Home;
