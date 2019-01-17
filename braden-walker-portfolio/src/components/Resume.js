import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import cyanBars from '../resources/scanimation/cyanBars.png';
import resume_scanimation from '../resources/scanimation/resume45.png';

class Resume extends Component {
    render() {
        return (
            <div id="resume-container">

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

                    <div className="about-sticker">

                        <div className="parallax-layer--front">
                            <div className="name">Resume</div>
                        </div>

                    </div>

                </div>
                
                <div className="about-content-container">

                    <div className="about-content-cutout">

                        

                    </div>

                </div>

            </div>
        );
    }
}

export default Resume;