import React, { Component } from 'react';

import github from '../resources/contacts/github-logo.svg';
import linkedin from '../resources/contacts/linkedin-logo.svg';
import email from '../resources/contacts/email.svg';
import arrow from '../resources/icons/down-arrow.png';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: false,
        };
    };

    handleSidebarContainerClass = () => {
        if (this.state.isHidden) return "sidebar-container hidden";
        return "sidebar-container";
    }

    handleArrowClass = () => {
        if (this.state.isHidden) return "arrow-right";
        return "arrow-left";
    }

    toggleIsHidden = () => {
        this.setState({ isHidden: !this.state.isHidden });
    }

    render() {
        return (
            <div className={this.handleSidebarContainerClass()}>

                <div className="sidebar">
                
                    <div className="my-name">Braden Walker</div>

                    <div className="quick-contacts">
                    
                        <img src={github} alt="github"></img>

                        <img src={linkedin} alt="linkedin"></img>

                        <img src={email} alt="email"></img>

                    </div>
                
                </div>

                <div className="sidebar-extended-shadow" />

                <div className="toggle-nav" onClick={() => this.toggleIsHidden()}>
                    <img className={this.handleArrowClass()} src={arrow} alt='🔽' />
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
