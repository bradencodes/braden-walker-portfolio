import React, { Component } from 'react';

import github from '../resources/contacts/github-logo.svg';
import linkedin from '../resources/contacts/linkedin-logo.svg';
import email from '../resources/contacts/email.svg';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">

                <div className="sidebar">
                
                    <div className="my-name">Braden Walker</div>

                    <div className="quick-contacts">
                        {/* <img src={github} alt="github-logo"></img> */}
                    </div>
                
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
