import { useContext } from 'react';
import { CauseContext } from '../../../contexts/CauseContext';
import { Link } from "react-router-dom";

import "./CauseDetails.css";

const CauseDetails = () => {
    const {causes} = useContext(CauseContext);
    console.log(causes);

  return (
      <div className="tp-case-details-area section-padding">
      {causes.map(object=> 
      <div key={object._id} className="container">
        <div className="row">
          <div className="col col-lg-8">
            <div  className="tp-case-details-wrap">
              <div className="tp-case-details-text">
                <div id="Description">
                  <div className="tp-case-details-img">
                    <img src={object.imageUrl} alt="" />
                  </div>
                  <div className="tp-case-content">
                    <div className="tp-case-text-top">
                      <h2>{object.title}</h2>
                      <div className="progress-section">
                        <div className="process">
                          <div className="progress">
                            <div className="progress-bar">
                              <div className="progress-value">
                                <span>65.5</span>%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <span>Raised:</span> {object.rised}
                        </li>
                        <li>
                          <span>Goal:</span> {object.goal}
                        </li>
                        <li>
                          <span>Donar:</span> {object.donars}
                        </li>
                      </ul>
                      <div className="case-b-text">
                        <p>
                          {object.description}
                        </p>
                      </div>
                      <div className="case-bb-text">
                        <h3>Benefits of realizing the cause</h3>
                       
                        <ul>
                          <li>
                            The wise man therefore always holds in these
                            matters.
                          </li>
                          <li>
                            In a free hour, when our power of choice and when
                            nothing.
                          </li>
                          <li>Else he endures pains to avoid worse pains.</li>
                          <li>
                            We denounce with righteous indignation and dislike
                            men.{" "}
                          </li>
                          <li>Which is the same as saying through.</li>
                        </ul>
                      </div>
                      <div className="submit-area sub-btn">
                        <Link to="/donate" className="theme-btn submit-btn">
                          Donate Now
                        </Link>
                        <Link to="/edit" className="theme-btn submit-btn">
                          Edit
                        </Link>
                        <Link to="/edit" className="theme-btn submit-btn">
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        
        </div>
      </div>
        )}
    </div>
  );
};

export default CauseDetails;
