import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import magentaBars from '../resources/scanimation/magentaBars.png';
import projects_scanimation from '../resources/scanimation/projects45.png';

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">

                <div className="projects-banner">

                    <div className="bars-container-1">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <div className="magenta-bars-container">
                        <img className="base" src={magentaBars} alt="magentaBars" />
                    </div>

                    <div className="bars-container-2">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <img className="parallax__layer--scanimation" src={projects_scanimation} alt="projects_scanimation" />

                    <div className="projects-sticker">

                        <div className="parallax-layer--front">
                            <div className="name">Projects</div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Projects;