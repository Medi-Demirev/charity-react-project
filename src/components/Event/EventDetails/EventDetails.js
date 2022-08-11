import {useEffect, useState } from "react";

import {Link, useParams} from 'react-router-dom';
import  * as eventService from '../../../services/eventService';

import "./EventDetails.css";

const EventDetails = () => {

  const {eventId} = useParams();
  const [currentEvent, setCurrentEvent] = useState({});

  useEffect(() => {
    eventService.getOne(eventId)
    .then(result => {
      setCurrentEvent(result)
    })
  },[])
  
  return (
    <div className="wpo-event-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8">
            <div className="tp-case-details-wrap">
              
                <div key={currentEvent._id} className="tp-case-details-text">
                  <div id="Description">
                    <div className="tp-case-details-img">
                      <img src={currentEvent.imageUrl} alt="" />
                    </div>
                    <div className="tp-case-content">
                      <div className="tp-case-text-top">
                        <h2>{currentEvent.title}</h2>
                        <div className="case-b-text">
                          <p>{currentEvent.description}</p>
                        </div>
                        <div className="case-bb-text">
                          <h3>Event Mission</h3>
                          <p>{currentEvent.eventMission}</p>
                          <h3>Benefits of realizing the event</h3>
                          <ul>
                            <li> {currentEvent.benefit1} </li>
                            <li>{currentEvent.benefit2}</li>
                            <li>{currentEvent.benefit3}</li>
                            <li>{currentEvent.benefit4}</li>
                            <li>{currentEvent.benefit5}</li>
                          </ul>
                        </div>

                        <div className="submit-area sub-btn">
                          <Link to ="/donate" className="theme-btn submit-btn">
                            Donat Now
                          </Link>
                          <Link to ={`/all-events/${currentEvent._id}/edit`} className="theme-btn submit-btn">
                            Edit
                          </Link>
                          <Link to ="/donate" className="theme-btn submit-btn">
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

export default EventDetails;
