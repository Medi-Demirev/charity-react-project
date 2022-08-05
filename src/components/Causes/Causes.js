import React from 'react'
import {Link} from 'react-router-dom'
import causesimg from '../../assets/1.jpg'
import causesimg2 from '../../assets/22.jpg'
import causesimg3 from '../../assets/3.jpg'
import causesimg4 from '../../assets/4.jpg'
import causesimg5 from '../../assets/5.jpg'
import causesimg6 from '../../assets/6.jpg'
import './Causes.css'

const Causes = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="case-area section-padding">
        <div className="container">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title section-title2 text-center">
              <div className="first-header">
                <span>HELP FOR CHILDREN IN NEED</span>
              </div>
              <h2>RECENT CAUSES</h2>
              <p>
              Every heart is charitable by nature. Let's do more good deeds for needy children. 
              To be their hope for a better and happy life.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="cause-item">
                <div className="cause-top">
                  <div className="cause-img">
                  <img src={causesimg} alt=""/>
                    <div className="case-btn">
                      <a className="theme-btn" href="/donate">
                        Donate Now
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cause-text">
                  <ul>
                    <li>
                      <a href="/">GOAL: $9860</a>
                    </li>
                    <li>
                      <a href="/">RISED: $768</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/case-single">Financial Help for Poor Families</a>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="cause-item">
                <div className="cause-top">
                  <div className="cause-img">
                  <img src={causesimg2} alt=""/>
                    <div className="case-btn">
                      <a className="theme-btn" href="/donate">
                        Donate Now
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cause-text">
                  <ul>
                    <li>
                      <a href="/">GOAL: $9860</a>
                    </li>
                    <li>
                      <a href="/">RISED: $768</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/case-single">Education for Poor Children</a>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="cause-item">
                <div className="cause-top">
                  <div className="cause-img">
                  <img src={causesimg3} alt=""/>
                    <div className="case-btn">
                      <a className="theme-btn" href="/donate">
                        Donate Now
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cause-text">
                  <ul>
                    <li>
                      <a href="/">GOAL: $9860</a>
                    </li>
                    <li>
                      <a href="/">RISED: $768</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/case-single">Send Child to School for a Year</a>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="cause-item">
                <div className="cause-top">
                  <div className="cause-img">
                  <img src={causesimg4} alt=""/>
                    <div className="case-btn">
                      <a className="theme-btn" href="/donate">
                        Donate Now
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cause-text">
                  <ul>
                    <li>
                      <a href="/">GOAL: $9860</a>
                    </li>
                    <li>
                      <a href="/">RISED: $768</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/case-single">Food And Home for Children</a>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="cause-item">
                <div className="cause-top">
                  <div className="cause-img">
                  <img src={causesimg5} alt=""/>
                    <div className="case-btn">
                      <a className="theme-btn" href="/donate">
                        Donate Now
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cause-text">
                  <ul>
                    <li>
                      <a href="/">GOAL: $9860</a>
                    </li>
                    <li>
                      <a href="/">RISED: $768</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/case-single">Pure Water For The World</a>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="cause-item">
                <div className="cause-top">
                  <div className="cause-img">
                  <img src={causesimg6} alt=""/>
                    <div className="case-btn">
                      <a className="theme-btn" href="/donate">
                        Donate Now
                        <i className="fa fa-angle-double-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cause-text">
                  <ul>
                    <li>
                      <a href="/">GOAL: $9860</a>
                    </li>
                    <li>
                      <a href="/">RISED: $768</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="/case-single">Recycling For Charity</a>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Causes;