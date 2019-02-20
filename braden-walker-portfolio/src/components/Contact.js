import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import magentaBars from '../resources/scanimation/magentaBars.png';
import contact_scanimation from '../resources/scanimation/contact45.png';
import { contactsArray } from '../resources/resourceArrays.js';
import arrow from '../resources/icons/down-arrow.svg';

class Contact extends Component {
    render() {
        return (
            <div id="contact">

                <div id="contact-banner">

                    <div className="bars-container-1">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <div className="magenta-bars-container">
                        <img className="base" src={magentaBars} alt="magentaBars" />
                    </div>

                    <div className="bars-container-2">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <img className="parallax__layer--scanimation" src={contact_scanimation} alt="contact_scanimation" />

                    <div className="contact-sticker">

                        <div className="parallax-layer--front">
                            <div className="name">Contact</div>
                        </div>

                    </div>

                </div>

                <div className="contacts-content-container">

                    {contactsArray.map(contact => (

                        <a href={contact.title==="Email" ? `mailto:${contact.link}` : contact.link} 
                        key={contact.id} className="contact-sticker">

                            <img className="contact-image" src={contact.image} alt={contact.title} />

                            <div className="text">

                                <div className="title">{contact.title}</div>

                                <div className="description">{contact.description}</div>
                                
                            </div>

                            <div className="links">
                                
                                <div className="link">
                                    <div className="link-text" >{contact.linkText}<img src={arrow} alt={arrow}/></div>
                                </div>
                                
                            </div>

                        </a>

                    ))}

                </div>

            </div>
        );
    }
}

export default Contact;