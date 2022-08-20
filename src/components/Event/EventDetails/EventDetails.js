import {useEffect, useState, useContext } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';

import  * as eventService from '../../../services/eventService';
import  * as eventDonationsService from '../../../services/eventDonationsService';
import  * as usersProfilesService from '../../../services/usersProfilesService';

import { EventContext } from "../../../contexts/EventContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { UserProfileContext } from "../../../contexts/UserProfileContext";


import "./EventDetails.css";

const EventDetails = () => {

  let sumRaised = 0;
  let countOfDonations = 0;
  let countOfPercents = 0;

  const { eventRemove, selectEvent, donationAdd, fetchEventDetails} = useContext(EventContext);
  const {selected, profileEdit} = useContext(UserProfileContext);
  const {user} = useContext(AuthContext);

  const {eventId} = useParams();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [raised, setRaised] = useState(0);
  let [percents, setPercents] = useState(0);
  const [numDonations, setNumDonations] = useState(0);

  const [currentEvent, setCurrentEvent] = useState({});
  const [inputs, setInputs] = useState({ donation: "", donors:"", percentCompleted:1});

  const selectedEvent = selectEvent(eventId);
  const isOwner = selectedEvent._ownerId === user._id;
  const profileId = selected._id;

  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    (async () => {
        const eventDetails = await eventService.getOne(eventId);
        setCurrentEvent(eventDetails);
        const eventDonations = await eventDonationsService.getByEventId(eventId);
        fetchEventDetails(eventId, { ...eventDetails, eventDonations: eventDonations.map(x=> Number( x.donation.donation) )});
        eventDonations.map(x=>sumRaised+= Number( x.donation.donation) );
        eventDonations.map(x=>countOfDonations += Number( x.donation.donors) );
		    eventDonations.map(x =>countOfPercents = x.donation.percentCompleted).slice(-1).pop()
		
        setRaised(sumRaised);
        setNumDonations(countOfDonations);
		    setPercents(countOfPercents);
    })();
}, []);

const handleIncrementNumDonations = () => {
	setCount(countOfDonations + 1);
};

const handleIncrementRaised = () => {
  setRaised(raised + Number(inputs.donation));
  selected.balance = (selected.balance - Number(inputs.donation).toFixed(2));

  usersProfilesService.edit(profileId, (selected ))
  .then(result => {
    profileEdit(profileId, selected)
  });
};

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
  
const handleIncrementPercent = () => {

	const percentResult = percentage(Number(inputs.donation), Number(currentEvent.goal));
	setPercents(percents+ Number(percentResult));

  };

const onSubmit = (e) => {
  e.preventDefault();

  const donationData ={
    donation:inputs.donation,
    donors:1,
	  percentCompleted:percents
  }

  eventDonationsService.create(eventId, donationData)
      .then(result => {
        donationAdd(eventId, donationData);
        window.location.reload();
      });

      inputs.donation = "";
};


function percentage(percent, total) {
    return ((percent / total) * 100).toFixed(2);
};

if (percents > 100) {
  percents = 100;
};

const spanStyle1 = {
	root :{
		width: `${percents}%`
		
	  },
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
                          <div className="progres-section">
                      <div className="proces">
                        <div className="progres">
                          <div className="progres-bar" style={spanStyle1.root}>
                            <div className="progres-value">
                              <span >{percents.toFixed(2)}</span>%
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul>
                      <li>
                        <span>Raised:</span> ${raised.toFixed(2)} 
                      </li>
                      <li>
                        <span>Goal:</span> ${currentEvent.goal}
                      </li>
                      <li>
                        <span>Count of donations:</span> {numDonations}
                      </li>
                    </ul>
                    </div>
                        </div>
                        <div className="case-bb-text">
                          <h3>Event Mission</h3>
                          <p>{currentEvent.eventMission}</p>
                          <h3>Benefits of realizing the event</h3>
                          <ul>
                            <li>{currentEvent.benefit1} </li>
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
                          <form
                              onSubmit={onSubmit}
                              className="donation-funds"
                            >
                              <div className="profile-funds">
                                <label className="donation-label">
                                  Donate funds to this event
                                </label>
                                <input
                                  className="donations"
                                  name="donation"
                                  id="donation"
                                  type="text"
                                  placeholder="$50"
                                  value={inputs.donation}
                                  onChange={changeHandler}
                                />
                              </div>

                              <button
                                onClick={() => {
                                  handleIncrementNumDonations();
                                  handleIncrementRaised();
                                  handleIncrementPercent();
                                }}
                                className="theme-btn8"
                              >
                                Donate now
                              </button>
                            </form>
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
