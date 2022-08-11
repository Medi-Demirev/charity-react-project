import { useContext } from 'react';
import { EventContext } from '../../../contexts/EventContext';
import * as eventService from '../../../services/eventService';

import '../../Event/CreateEvent/CreateEvent.css'
import logo from '../../../assets/Logo.png'

const CreateEvent = () => {
    const { eventAdd } = useContext(EventContext);
   
    const onSubmit = (e) => {
        e.preventDefault();

        const eventData = Object.fromEntries(new FormData(e.target));
        

        eventService.create(eventData)
            .then(result => {
              eventAdd(result)
            });
    }

    return (
        <section id="createPage">
  <form onSubmit={onSubmit} className="createForms">
  
    <div>
      <h2>Create Event</h2>
      <div className="title">
        <label htmlFor="title">Title:</label>
        <input name="title" id="title" type="text" placeholder="Ensure Education for every poor children" />
      </div>
      <div className="subTitle">
        <label htmlFor="subTitle">Subtitle:</label>
        <input name="subTitle" id="subTitle" type="text" placeholder="A cause to raise funds for the poor and needy children of Ethiopia." />
      </div>
      <div className="description">
        <label htmlFor="description">Event description:</label>
        <textarea rows="4" cols="50" name="description" id="description" type="text" placeholder="Enter text here..." />
      </div>
      <div className="eventMission">
        <label htmlFor="eventMission">Event mission:</label>
        <textarea rows="4" cols="50" name="eventMission" id="eventMission" type="text" placeholder="Enter text here..." />
      </div>
      <div className="country">
        <label htmlFor="country">Country:</label>
        <input name="country" id="country" type="text" placeholder="Bulgaria" />
      </div>
      <div className="city">
        <label htmlFor="city">City:</label>
        <input name="city" id="city" type="text" placeholder="Sofia" />
      </div>
      <div className="postcode">
        <label htmlFor="postcode">Postcode:</label>
        <input name="postcode" id="postcode" type="text" placeholder="963" />
      </div>
      <div className="date">
        <label htmlFor="date">Date:</label>
        <input name="date" id="date" type="text" placeholder="28" />
      </div>
      <div className="month">
        <label htmlFor="month">Month:</label>
        <input name="month" id="month" type="text" placeholder="April" />
      </div>
      <div className="fromHour">
        <label htmlFor="fromHour">Start time:</label>
        <input name="fromHour" id="fromHour" type="text" placeholder="10:00 AM" />
      </div>
      <div className="toHour">
        <label htmlFor="toHour">End time:</label>
        <input name="toHour" id="toHour" type="text" placeholder="13:00 PM" />
      </div>
      <div className="imageUrl">
        <label htmlFor="imageUrl">Image:</label>
        <input
          name="imageUrl"
          id="imageUrl"
          type="text"
          placeholder="https://s3.us-east-2.amazonaws.com/inspire-kindness/posts/June2020/u6OzQk2udqzeCGUOWIJY.jpg"
        />
      </div>
      <label className='benefit'>PLEASE MENTION FIVE EXPECTED BENEFITS FROM IMPLEMENTING THE EVENT</label>
      <div className="benefit1">
        <label htmlFor="benefit1">First benefit:</label>
        <input name="benefit1" id="benefit1" type="text" placeholder="Improving the lives of the local population." />
      </div>
      <div className="benefit2">
        <label htmlFor="benefit2">Second benefit:</label>
        <input name="benefit2" id="benefit2" type="text" placeholder="Reducing poverty in the region" />
      </div>
      <div className="benefit3">
        <label htmlFor="benefit3">Third benefit:</label>
        <input name="benefit3" id="benefit3" type="text" placeholder="Access to a public health facility" />
      </div>
      <div className="benefit4">
        <label htmlFor="benefit4">Fourth benefit:</label>
        <input name="benefit4" id="benefit4" type="text" placeholder="Reduction of unemployment in the region." />
      </div>
      <div className="benefi5">
        <label htmlFor="benefit5">Fifth benefit:</label>
        <input name="benefit5" id="benefit5" type="text" placeholder="Creation of youth zones in the city." />
      </div>
      <button className="btn" type="submit">
        Create Event
      </button>
    </div>
    <img className='logo' src={logo}/>
  </form>
</section>

    );
};
export default CreateEvent;