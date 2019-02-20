import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import cyanBars from '../resources/scanimation/cyanBars.png';
import resume_scanimation from '../resources/scanimation/resume45.png';
import arrow from '../resources/icons/down-arrow.svg';
import my_resume from '../resources/contacts/my_resume.png';
import resume_download from '../resources/contacts/Braden-Walker-Resume.pdf';

class Resume extends Component {
    render() {
        return (
            <div id="resume">

                <div id="resume-banner">

                    <div className="bars-container-1">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <div className="cyan-bars-container">
                        <img className="base" src={cyanBars} alt="cyanBars" />
                    </div>

                    <div className="bars-container-2">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <img className="parallax__layer--scanimation" src={resume_scanimation} alt="resume_scanimation" />

                    <div className="resume-sticker">

                        <div className="parallax-layer--front">
                            <div className="name">Resume</div>
                        </div>

                    </div>

                </div>
                
                <div className="resume-content-container">

                    <div className="resume-content-cutout">

                        <img className="resume" src={my_resume} alt="my_resume" />

                        <div className="links">
                                
                            <a className="link" href={resume_download} download>
                                <div className="link-text" >download<img src={arrow} alt={arrow}/></div>
                            </a>
                            
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Resume;