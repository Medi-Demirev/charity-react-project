import { useContext } from 'react';
import { EventContext } from '../../../contexts/EventContext';
import EventItem from '../EventItem/EventItem';


import event4 from '../../../images/event/1.png';
import event5 from '../../../images/event/2.png';

const EventCatalog = () => {
    const {events} = useContext(EventContext);

  
    return(
        <div className="event-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>EVENTS</span>
                            </div>
                            <h2>Our Upcoming Events</h2>
                            <p>Check out the current upcoming events. Find out where and what is going to be organized by our team and get involved if you have the opportunity.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    {events.length > 0
                     ? events.map(x => <EventItem key={x._id} event ={x}/>)
                     :<h3 className='no-events'>NO ACTIVE EVENTS YET!</h3>}
                       
                    </div>
                </div>
            </div>
            <div className="shape1"><img src={event4} alt="" /></div>
            <div className="shape2"><img src={event5} alt="" /></div>
        </div>
    );
};

export default EventCatalog;