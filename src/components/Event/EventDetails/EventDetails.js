import {useEffect, useState, useContext } from "react";
import { EventContext } from "../../../contexts/EventContext";
import {Link, useParams, useNavigate} from 'react-router-dom';
import  * as eventService from '../../../services/eventService';
import { AuthContext } from "../../../contexts/AuthContext";


import "./EventDetails.css";

const EventDetails = () => {

  const {eventId} = useParams();
  const navigate = useNavigate();

  const [currentEvent, setCurrentEvent] = useState({});
  const { eventRemove, selectEvent}= useContext(EventContext);
  const  {user} = useContext(AuthContext);

  const selectedEvent = selectEvent(eventId);
  const isOwner = selectedEvent._ownerId === user._id;
 

  useEffect(() => {
    eventService.getOne(eventId)
    .then(result => {
      setCurrentEvent(result)
    })
  },[]);

  const eventDeleteHandler = () => {
    const confirmation = window.confirm('Are you sure you want to delete this event?');

    if (confirmation) {
        eventService.remove(eventId)
            .then(() => {
              eventRemove(eventId);
                navigate('/all-events');
            })
    }
   
};
  
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
                          {
                          ! user.accessToken ? <></> : isOwner
                            ?<>
                            <Link to ={`/all-events/event/${currentEvent._id}/edit`} className="theme-btn submit-btn">
                            Edit
                          </Link>
                          <Link  to ='' onClick={eventDeleteHandler} className="theme-btn submit-btn">
                            Delete
                         </Link>
                         </>
                          :<>
                          <Link to ="/donate" className="theme-btn submit-btn">
                            Donate Now
                          </Link>
                         </>
                          }
                          
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
