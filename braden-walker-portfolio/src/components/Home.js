import React, { Component } from 'react';

import Sidebar from "./Sidebar.js";
import Landing from "./Landing.js";

class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <Sidebar />
                
                <Landing />

                <div className="rightbar"></div>
                
            </div>
        );
    }
}

export default Home;
