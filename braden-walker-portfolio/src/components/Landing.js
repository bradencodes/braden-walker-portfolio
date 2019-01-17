import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import me from '../resources/scanimation/me45.png';
import arrow from '../resources/icons/down-arrow.png';

class Landing extends Component {
    render() {
        return (
            <div id="landing-container">

                <div className="bars-container">

                    <img className="base" src={bars} alt="bars45large" />

                </div>

                <img className="parallax__layer--me" src={me} alt="me" />

                <div className="landing-cutout">

                    <div className="parallax-layer--back">
                        <div className="name">Braden Walker</div>
                        <div className="title">Full-Stack Web Developer</div>
                    </div>

                    <div className="learn-more">
                        <a href="#about-banner" style={{backgroundImage: `url(${bars})`}} className="tab">
                            <div className="text">learn more <img src={arrow} alt='🔽' /> </div>
                        </a>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Landing;
