import React from 'react';

import './ContactPage.css'

const ContactPage = () => {

    return(
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s3 section-title-s5">
                            <h2>Our Contacts</h2>
                        </div>
                        <div className="contact-details">
                            <p>
                                If you wish to contact us, you can do so at the following email and phone number or visit our office at the indicated address. </p>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Our Location</h5>
                                    <p>Bulgaria Blvd., 1463 Ndk, Sofia</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <h5>Phone</h5>
                                    <p>+359 891 234 567</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Email</h5>
                                    <p>info@kindness.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46912.49199303239!2d23.322971227859355!3d42.70306966695462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa850fb6af8ebb%3A0x87a301b7860955b9!2z0J3QsNGG0LjQvtC90LDQu9C10L0g0LTQstC-0YDQtdGGINC90LAg0LrRg9C70YLRg9GA0LDRgtCwICjQndCU0Jop!5e0!3m2!1sbg!2sbg!4v1659356835727!5m2!1sbg!2sbg"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default ContactPage;