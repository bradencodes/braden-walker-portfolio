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
                
                    <a href="#landing-container" className="my-name">Braden Walker</a>

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

                <a href="#about-banner" className="about">about</a>

                <a href="#projects-banner" className="projects">projects</a>

                <a href="#articles-banner" className="articles">articles</a>

                <a href="#resume-banner" className="resume">resume</a>

                <a href="#contact-banner" className="contact">contact</a>

            </div>
        );
    }
}

export default Sidebar;
