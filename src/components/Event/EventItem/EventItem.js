import { Link } from "react-router-dom";

const EventItem = ({event}) => {

    return (
        <div className="event-item">
                <div className="event-img">
                    <img src={event.imageUrl} alt="" />
                </div>
                <div className="event-text">
                    <div className="event-left">
                        <div className="event-l-text">
                            <span>{event.month}</span>
                            <h4>{event.date}</h4>
                        </div>
                    </div>
                    <div className="event-right">
                        <ul>
                            <li><i className="ti-location-pin"></i> {event.fromHour} - {event.toHour}</li>
                            <li><i className="ti-location-pin"></i> {event.postcode}, {event.city}, {event.country}.</li>
                        </ul>
                        <h2><Link to={`event/${event._id}`}>{event.title}</Link></h2>
                        <p>{event.subTitle}</p>
                    </div>
                </div>
            </div>
    );
};
export default EventItem;