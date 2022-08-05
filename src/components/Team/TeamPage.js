import React from 'react';
import {Link} from 'react-router-dom';

import './TeamPage.css';

import tm1 from '../../assets/11.jpg';
import tm2 from '../../assets/221.jpg';
import tm3 from '../../assets/33.jpg';
import tm4 from '../../assets/44.jpg';

const TeamPage = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div  className={`volunteer-area section-padding ${props.addclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>Volunteer</span>
                            </div>
                            <h2>Our Great Volunteer</h2>
                            <p>Become part of our volunteer team. Get involved and actively participate in the entire process of organizing and implementing our projects. Be brave, Be part of Us.</p>
                        </div>
                    </div>
                </div>
                <div className="volunteer-wrap">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm1} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Adriane Newby</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm2} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Allene Castaneda</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm3} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Malinda Willoughby</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm4} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Wilburn Hatfield</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage;