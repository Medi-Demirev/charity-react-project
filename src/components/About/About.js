import React from 'react';

import abimg from '../../images/about/toomanykidsw.jpg';
import abimg2 from '../../images/about/1.png';
import abimg3 from '../../images/about/2.png';
import abimg4 from '../../images/shape/shape2.png';
import './About.css'

const About = (props) => {
   
    return(
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12  grid col-12">
                        <div className="about-cercle">
                            <div className="about-img">
                                <img src={abimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 grid  col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>ABOUT US</span>
                                </div>
                                <h2>Kindness is <span>Nonprofit</span> Organization <span>For Help</span> Children.</h2>
                            </div>
                            <p>We are a non-governmental organization that aims to find children who need help. There are millions of children around the world in need of funds to improve their health, living conditions or education. Our goal is to succeed in making the lives of some of them better. Get involved, be part of our mission.</p>
                            <div className="ab-icon-area">
                                <div className="about-icon-wrap">
                                    <div className="about-icon-item">
                                        <div className="ab-icon">
                                            <img draggable="false" src={abimg2} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2>Save  Children</h2>
                                        </div>
                                    </div>
                                    <div className="about-icon-item">
                                        <div className="ab-icon ab-icon2">
                                            <img draggable="false" src={abimg3} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2>Fresh And  Clean Water</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape">
                 <img src={abimg4} alt="" />
            </div>
        </div>
    )
}

export default About;