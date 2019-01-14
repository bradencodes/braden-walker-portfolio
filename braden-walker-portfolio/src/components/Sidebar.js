import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">

                <div className="sidebar">
                
                    <div className="my-name">Braden Walker</div>
                
                </div>

                <div className="about">about</div>

                <div className="projects">projects</div>

                <div className="articles">articles</div>

                <div className="resume">resume</div>

                <div className="contact">contact</div>

            </div>
        );
    }
}

export default Sidebar;
