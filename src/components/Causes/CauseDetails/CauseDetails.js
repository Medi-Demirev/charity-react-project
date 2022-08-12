import { useState,useEffect, useContext } from 'react';
import { CauseContext } from '../../../contexts/CauseContext';
import { Link, useParams, useNavigate } from "react-router-dom";
import  * as causeService from '../../../services/causeService';


import "./CauseDetails.css";

const CauseDetails = () => {
  const {causeId} = useParams();
  const navigate = useNavigate();

  const [currentCause, setCurrentCause] = useState({});
  const { causeRemove }= useContext(CauseContext);

  useEffect(() => {
    causeService.getOne(causeId)
    .then(result => {
      setCurrentCause(result)
    })
  },[]);

  const causeDeleteHandler = () => {
    const confirmation = window.confirm('Are you sure you want to delete this cause?');

    if (confirmation) {
        causeService.remove(causeId)
            .then(() => {
              causeRemove(causeId);
                navigate('/all-causes');
            })
    }
   
};

  return (
    <div className="tp-case-details-area section-padding">
    
    <div key={currentCause._id} className="container">
      <div className="row">
        <div className="col col-lg-8">
          <div  className="tp-case-details-wrap">
            <div className="tp-case-details-text">
              <div id="Description">
                <div className="tp-case-details-img">
                  <img src={currentCause.imageUrl} alt="" />
                </div>
                <div className="tp-case-content">
                  <div className="tp-case-text-top">
                    <h2>{currentCause.title}</h2>
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
                        <span>Raised:</span> {currentCause.raised}
                      </li>
                      <li>
                        <span>Goal:</span> {currentCause.goal}
                      </li>
                      <li>
                        <span>Donar:</span> {currentCause.donors}
                      </li>
                    </ul>
                    <div className="case-b-text">
                      <p>
                        {currentCause.description}
                      </p>
                    </div>
                    <div className="case-bb-text">
                    <h3>Cause Mission</h3>
                          <p>{currentCause.causeMission}</p>
                      <h3>Benefits of realizing the cause</h3>
                      <ul>
                        <li>
                        {currentCause.benefit1}
                        </li>
                        <li>
                        {currentCause.benefit2}
                        </li>
                        <li>{currentCause.benefit3}</li>
                        <li>
                        {currentCause.benefit4}
                        </li>
                        <li>{currentCause.benefit5}</li>
                      </ul>
                    </div>
                    <div className="submit-area sub-btn">
                      <Link to="/donate" className="theme-btn submit-btn">
                        Donate Now
                      </Link>
                      <Link to={`/all-causes/cause/${currentCause._id}/edit`} className="theme-btn submit-btn">
                        Edit
                      </Link>
                      <Link  to ='' onClick={causeDeleteHandler} className="theme-btn submit-btn">
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
      
  </div>
  );
};

export default CauseDetails;
