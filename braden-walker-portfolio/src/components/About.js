import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import cyanBars from '../resources/scanimation/cyanBars.png';
import about_scanimation from '../resources/scanimation/about45.png';
import me_square from '../resources/icons/me-square.png';

class About extends Component {
    render() {
        return (
            <div id="about-container">

                <div id="about-banner">

                    <div className="bars-container-1">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <div className="cyan-bars-container">
                        <img className="base" src={cyanBars} alt="cyanBars" />
                    </div>

                    <div className="bars-container-2">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <img className="parallax__layer--scanimation" src={about_scanimation} alt="about_scanimation" />

                    <div className="about-sticker">

                        <div className="parallax-layer--front">
                            <div className="name">About</div>
                        </div>

                    </div>

                </div>
                
                <div className="about-content-container">

                    <div className="about-content-cutout">

                        <img src={me_square} alt="braden" />

                        <div className="about-and-skills">
                            <div className="about-me">
                                Hello, I'm <b>Braden Walker</b>. I'm a <b>full-stack web developer</b> who specializes 
                                in <span>responsive design</span> and <span>single page applications</span>.

                                I like to push myself by constantly creating new projects and learning new skills!
                            </div>

                            <div className="skills-container">
                                <div className="skill">JavaScript</div>
                                <div className="skill">React</div>
                                <div className="skill">Redux</div>
                                <div className="skill">HTML5</div>
                                <div className="skill">CSS/LESS</div>
                                <div className="skill">SQL/noSQL</div>
                                <div className="skill">Python</div>
                                <div className="skill">C</div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default About;