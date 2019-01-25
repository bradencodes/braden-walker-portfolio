import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import { contactsArray } from '../resources/resourceArrays.js';
import arrow from '../resources/icons/down-arrow.png';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: true,
        };
    };

    toggleIsHidden = () => {
        this.setState({ isHidden: !this.state.isHidden });
    }

    handleSidebarContainerClass = () => {
        if (this.state.isHidden) return "sidebar-container hidden";
        return "sidebar-container";
    }

    handleArrowClass = () => {
        if (this.state.isHidden) return "arrow-right";
        return "arrow-left";
    }

    handleFocusClass = () => {
        if (this.state.isHidden) return "in-focus";
        return "out-of-focus";
    }

    render() {
        return (
            <div className={this.handleSidebarContainerClass()}>

                <div className="sidebar">
                
                    <a href="#landing-container" className="my-name">Braden Walker</a>

                    <div className="quick-contacts">

                        {contactsArray.map(contact => (

                            <a key={contact.id} href={contact.title==="Email" ? `mailto:${contact.link}` : contact.link}>
                                <img src={contact.image} alt={contact.title} />
                            </a>

                        ))}

                    </div>
                
                </div>

                <div className="sidebar-extended-shadow" />

                <div className="toggle-nav" onClick={() => this.toggleIsHidden()}>
                    <img className={this.handleArrowClass()} src={arrow} alt='🔽' />
                </div>

                <Scrollspy items={ ['about-container', 'projects-container', 
                'articles-container', 'resume-container', 'contact-container'] }
                currentClassName="active" componentTag="div" rootEl='#app'>

                    <a href="#about-container" className="about">about</a>

                    <a href="#projects-container" className="projects">projects</a>

                    <a href="#articles-container" className="articles">articles</a>

                    <a href="#resume-container" className="resume">resume</a>

                    <a href="#contact-container" className="contact">contact</a>
                            
                </Scrollspy>

                <div className={this.handleFocusClass()} onClick={() => this.toggleIsHidden()}/>

            </div>
        );
    }
}

export default Sidebar;
