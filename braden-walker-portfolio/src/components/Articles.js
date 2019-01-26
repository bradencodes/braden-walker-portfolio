import React, { Component } from 'react';

import bars from '../resources/scanimation/bars45large.png';
import yellowBars from '../resources/scanimation/yellowBars.png';
import articles_scanimation from '../resources/scanimation/articles45.png';
import { articlesArray } from '../resources/resourceArrays.js';
import arrow from '../resources/icons/down-arrow.png';

class Articles extends Component {
    render() {
        return (
            <div id="articles">

                <div id="articles-banner">

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

                <div className="articles-content-container">

                    {articlesArray.map(project => (

                        <div key={project.id} className="article-sticker">

                            <div className="article-image" style={{backgroundImage: `url(${project.image})`}} />

                            <div className="text">

                                <div>
                                    <div className="title">{project.title}</div>

                                    <div className="description">{project.description}</div>
                                </div>

                                <div className="date">{project.date}</div>
                                
                            </div>

                            <div className="links">
                                
                                <a className="link" href={project.read}>
                                    <div className="link-text" >read<img src={arrow} alt={arrow}/></div>
                                </a>
                                
                            </div>

                        </div>

                    ))}

                </div>

            </div>
        );
    }
}

export default Articles;