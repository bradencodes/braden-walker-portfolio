import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import cyanBars from '../resources/scanimation/cyanBars.png';
import about from '../resources/scanimation/about45.png';
import arrow from '../resources/icons/down-arrow.png';

class About extends Component {
    render() {
        return (
            <div className="about-container">

                <div className="about-banner">

                    <div className="bars-container-1">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <div className="cyan-bars-container">
                        <img className="base" src={cyanBars} alt="cyanBars" />
                    </div>

                    <div className="bars-container-2">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <img className="parallax__layer--scanimation" src={about} alt="about" />

                    <div className="about-sticker">

                        <div className="parallax-layer--front">
                            <div className="name">About</div>
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default About;