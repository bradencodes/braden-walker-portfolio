import React, { Component } from 'react';

import Landing from "./Landing.js";

class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <Landing />

                <div className="rightbar"></div>
                
            </div>
        );
    }
}

export default Home;
