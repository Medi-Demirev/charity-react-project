
import { Link } from "react-router-dom";

const EventsItem = ({events}) => {
  console.log(events);
    return (   
        <div className="events-item">
                <div className="events-img">
                    <img src={events.imageUrl} alt="" />
                </div>
                <div className="events-text">
                    <div className="events-left">
                        <div className="events-l-text">
                            <span>{events.month}</span>
                            <h4>{events.date}</h4>
                        </div>
                    </div>
                    <div className="events-right">
                        <ul>
                            <li><i className="ti-location-pin"></i> {events.fromHour} - {events.toHour}</li>
                            <li><i className="ti-location-pin"></i> {events.postcode}, {events.city}, {events.country}.</li>
                        </ul>
                        <h2><Link to={`all-eventss/${events._id}`}>{events.title}</Link></h2>
                        <p>{events.subTitle}</p>
                    </div>
                </div>
            </div>
    );
};
export default EventsItem;