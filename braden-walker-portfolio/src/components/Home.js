import React, { Component } from 'react';

import Landing from "./Landing.js";
import About from "./About.js";

class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <Landing />

                <About />

                <About />
                
            </div>
        );
    }
}

export default Home;
