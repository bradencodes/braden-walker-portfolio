import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import yellowBars from '../resources/scanimation/yellowBars.png';
import articles_scanimation from '../resources/scanimation/articles45.png';
import { projectsArray } from '../resources/projectsArray.js';
import arrow from '../resources/icons/down-arrow.png';

class Articles extends Component {
    render() {
        return (
            <div className="articles-container">

                <div className="articles-banner">

                    <div className="bars-container-1">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <div className="yellow-bars-container">
                        <img className="base" src={yellowBars} alt="yellowBars" />
                    </div>

                    <div className="bars-container-2">
                        <img className="base" src={bars} alt="bars45large" />
                    </div>

                    <img className="parallax__layer--scanimation" src={articles_scanimation} alt="articles_scanimation" />

                    <div className="articles-sticker">

                        <div className="parallax-layer--front">
                            <div className="name">Articles</div>
                        </div>

                    </div>

                </div>

                <div className="projects-content-container">

                    {projectsArray.map(project => (

                        <div key={project.id} className="project-cutout">

                            <img className="project-image" src={project.image} alt={project.title} />

                            <div className="text">

                                <div>
                                    <div className="title">{project.title}</div>

                                    <div className="description">{project.description}</div>
                                </div>

                                <div className="tools">
                                    {project.tools.map((tool, index) => {
                                        if (index === 0 && project.tools.length === 1) return (<span>made with <b>{tool}</b></span>);
                                        else if (index === 0) return (<span>made with <b>{tool}, </b></span>);
                                        else if (index === project.tools.length-1) return (<span><b>{tool}</b></span>);
                                        else return (<span><b>{tool}, </b></span>)
                                    })}
                                </div>

                                
                            </div>

                            <div className="links">

                                {project.github
                                &&
                                <a className="link" href={project.github}>
                                    <div className="link-text">github</div>
                                </a>
                                }

                                {project.visit
                                &&
                                <a className="link" href={project.visit}>
                                    <div className="link-text" >visit<img src={arrow} alt={arrow}/></div>
                                </a>
                                }
                                
                            </div>

                        </div>

                    ))}

                </div>

            </div>
        );
    }
}

export default Articles;