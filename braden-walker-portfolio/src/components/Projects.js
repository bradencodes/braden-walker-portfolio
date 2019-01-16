import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import magentaBars from '../resources/scanimation/magentaBars.png';
import projects_scanimation from '../resources/scanimation/projects45.png';
import { projectsArray } from '../resources/projectsArray.js';

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

                <div className="projects-content-container">

                    {projectsArray.map(project => (

                        <div key={project.id} className="project-cutout">

                            <img src={project.image} alt={project.title} />

                            <div className="text">
                                <div className="title">{project.title}</div>

                                <div className="description">{project.description}</div>

                                {project.tools.map((tool, index) => {
                                    if (index === 0 && project.tools.length === 1) return (<div>made with <b>{tool}</b></div>);
                                    else if (index === 0) return (<div>made with <b>{tool}</b>, </div>);
                                    else if (index === project.tools.length-1) return (<div><b>{tool}</b></div>);
                                    else return (<div><b>{tool}</b>, </div>)
                                })}
                            </div>

                            <div className="links">
                                <a className="github" href={project.github}>github</a>
                                <a className="visit" href={project.visit}>visit</a>
                            </div>

                        </div>
                        
                    ))}

                </div>

            </div>
        );
    }
}

export default Projects;