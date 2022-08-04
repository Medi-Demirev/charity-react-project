import React from 'react'
import {Link}  from 'react-router-dom'

import './HeaderTopbar.css'

const HeaderTopbar = () => {
    return(	
        <div className="fixed-navbar">
        <div className="middle-header">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-sm-12 col-12">
                            <div className="contact-intro">
                                <ul>
                                    <li><i className="fi flaticon-call"></i>+359 891 234 567</li>
                                    <li><i className="fi flaticon-envelope"></i> info@kindness.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-12 col-12">
                            <div className="contact-info">
                                <ul>
                                    <li><i className="fa fa-arrow-circle-down" aria-hidden="true" /><Link to="/login">Login</Link></li>
                                    <li><i className="fa fa-user" aria-hidden="true" /><Link to="/register">Register</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeaderTopbar;