import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../../contexts/EventContext';
import * as eventService from '../../../services/eventService';
import { useParams, useNavigate } from 'react-router-dom';

import '../../Event/CreateEvent/CreateEvent.css'
import logo from '../../../assets/Logo.png'

const EditEvent = () => {
    const [currentEvent, setCurrentEvent] = useState({});
    const { eventEdit } = useContext(EventContext);
    
    const {eventId} = useParams();
    const navigate = useNavigate();

  
    useEffect(() => {
        eventService.getOne(eventId)
            .then(eventData => {
                setCurrentEvent(eventData);
            })
    }, []);
  
  
    const onSubmit = (e) => {
        e.preventDefault();

        const eventData = Object.fromEntries(new FormData(e.target));
    
        eventService.edit(eventId, eventData)
            .then(result => {
                eventEdit(eventId, result)
                navigate(`/all-events/event/${eventId}`)
            });
        
    }
   
   
    return (
        <section id="createPage">
  <form onSubmit={onSubmit} className="createForms">
    <div>
      <h2>Edit Event</h2>
      <div className="title">
        <label htmlFor="title">Title:</label>
        <input
        name="title" 
        id="title" type="text"
        defaultValue={currentEvent.title}
         placeholder="Ensure Education for every poor children" 
        />
      </div>
      <div className="subTitle">
        <label htmlFor="subTitle">Subtitle:</label>
        <input name="subTitle" id="subTitle" type="text" placeholder="A cause to raise funds for the poor and needy children of Ethiopia."  defaultValue={currentEvent.subTitle}/>
      </div>
      <div className="description">
        <label htmlFor="description">Event description:</label>
        <textarea rows="4" cols="50" name="description" id="description" type="text" placeholder="Enter text here..." defaultValue={currentEvent.description} />
      </div>
      <div className="eventMission">
        <label htmlFor="eventMission">Event mission:</label>
        <textarea rows="4" cols="50" name="eventMission" id="eventMission" type="text" placeholder="Enter text here..." defaultValue={currentEvent.eventMission} />
      </div>
      <div className="country">
        <label htmlFor="country">Country:</label>
        <input name="country" id="country" type="text" placeholder="Bulgaria" defaultValue={currentEvent.country} />
      </div>
      <div className="city">
        <label htmlFor="city">City:</label>
        <input name="city" id="city" type="text" placeholder="Sofia" defaultValue={currentEvent.city} />
      </div>
      <div className="postcode">
        <label htmlFor="postcode">Postcode:</label>
        <input name="postcode" id="postcode" type="text" placeholder="963"  defaultValue={currentEvent.postcode}/>
      </div>
      <div className="date">
        <label htmlFor="date">Date:</label>
        <input name="date" id="date" type="text" placeholder="28" defaultValue={currentEvent.date} />
      </div>
      <div className="month">
        <label htmlFor="month">Month:</label>
        <input name="month" id="month" type="text" placeholder="April" defaultValue={currentEvent.month} />
      </div>
      <div className="fromHour">
        <label htmlFor="fromHour">Start time:</label>
        <input name="fromHour" id="fromHour" type="text" placeholder="10:00 AM" defaultValue={currentEvent.fromHour} />
      </div>
      <div className="toHour">
        <label htmlFor="toHour">End time:</label>
        <input name="toHour" id="toHour" type="text" placeholder="13:00 PM" defaultValue={currentEvent.toHour} />
      </div>
      <div className="imageUrl">
        <label htmlFor="imageUrl">Image:</label>
        <input
          name="imageUrl"
          id="imageUrl"
          type="text"
          placeholder="https://s3.us-east-2.amazonaws.com/inspire-kindness/posts/June2020/u6OzQk2udqzeCGUOWIJY.jpg" 
          defaultValue={currentEvent.imageUrl}
        />
      </div>
      <label className='benefit'>PLEASE MENTION FIVE EXPECTED BENEFITS FROM IMPLEMENTING THE EVENT</label>
      <div className="benefit1">
        <label htmlFor="benefit1">First benefit:</label>
        <input name="benefit1" id="benefit1" type="text" placeholder="Improving the lives of the local population."  defaultValue={currentEvent.benefit1}/>
      </div>
      <div className="benefit2">
        <label htmlFor="benefit2">Second benefit:</label>
        <input name="benefit2" id="benefit2" type="text" placeholder="Reducing poverty in the region" defaultValue={currentEvent.benefit2} />
      </div>
      <div className="benefit3">
        <label htmlFor="benefit3">Third benefit:</label>
        <input name="benefit3" id="benefit3" type="text" placeholder="Access to a public health facility" defaultValue={currentEvent.benefit3} />
      </div>
      <div className="benefit4">
        <label htmlFor="benefit4">Fourth benefit:</label>
        <input name="benefit4" id="benefit4" type="text" placeholder="Reduction of unemployment in the region." defaultValue={currentEvent.benefit4} />
      </div>
      <div className="benefi5">
        <label htmlFor="benefit5">Fifth benefit:</label>
        <input name="benefit5" id="benefit5" type="text" placeholder="Creation of youth zones in the city." defaultValue={currentEvent.benefit5} />
      </div>
      <button className="btn" type="submit">
        Edit Event
      </button>
    </div>
    <img className='logo' src={logo}/>
  </form>
</section>

    );
};
export default EditEvent;