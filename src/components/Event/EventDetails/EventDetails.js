import { useContext } from "react";
import { EventContext } from "../../../contexts/EventContext";

import "./EventDetails.css";

const EventDetails = () => {
  const { events } = useContext(EventContext);

  return (
    <div className="wpo-event-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8">
            <div className="tp-case-details-wrap">
              {events.map((object) => (
                <div key={object._id} className="tp-case-details-text">
                  <div id="Description">
                    <div className="tp-case-details-img">
                      <img src={object.imageUrl} alt="" />
                    </div>
                    <div className="tp-case-content">
                      <div className="tp-case-text-top">
                        <h2>{object.title}</h2>
                        <div className="case-b-text">
                          <p>{object.description}</p>
                        </div>
                        <div className="case-bb-text">
                          <h3>Event Mission</h3>
                          <p>{object.eventMission}</p>
                          <ul>
                            <li> {object.benefit1} </li>
                            <li>{object.benefit2}</li>
                            <li>{object.benefit3}</li>
                            <li>{object.benefit4}</li>
                            <li>{object.benefit5}</li>
                          </ul>
                        </div>

                        <div className="submit-area sub-btn">
                          <a href="/donate" className="theme-btn submit-btn">
                            Donate Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
