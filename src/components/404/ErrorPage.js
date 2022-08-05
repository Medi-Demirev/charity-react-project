import React from 'react';
import {Link}  from 'react-router-dom'

import errorImgaage from '../../assets/2.png'
import './ErrorPage.css'

const ErrorPage = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={errorImgaage} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                <Link to="/" className="theme-btn"><i className="fa fa-angle-double-left"></i> Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;