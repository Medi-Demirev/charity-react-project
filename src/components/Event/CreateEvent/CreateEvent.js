import { useContext, useState } from 'react';
import { EventContext } from '../../../contexts/EventContext';
import * as eventService from '../../../services/eventService';

import '../../Event/CreateEvent/CreateEvent.css'
import logo from '../../../assets/Logo.png'

const CreateEvent = () => {
    const { eventAdd } = useContext(EventContext);
    const [inputs, setInputs] = useState({
            title:"",
            subTitle:"",
            description:"",
            eventMission:"",
            country:"",
            city:"",
            postcode:"",
            date:"",
            month:'',
            fromHour:"",
            toHour:"",
            toHour:"",
            goal:"",
            imageUrl: "",
            benefit1: "",
            benefit2: "",
            benefit3: "",
            benefit4: "",
            benefit5: "",
    });

    const changeHandler = (e) => {
        setInputs({
            ...inputs,
        [e.target.name]: e.target.value
        })
    };
   
    const onSubmit = (e) => {
        e.preventDefault();

        const eventData = {
            title:inputs.title,
            subTitle:inputs.subTitle,
            description:inputs.description,
            eventMission:inputs.eventMission,
            country:inputs.country,
            city:inputs.city,
            postcode:inputs.postcode,
            date:inputs.date,
            month:inputs.month,
            fromHour:inputs.fromHour,
            toHour:inputs.toHour,
            goal:inputs.goal,
            imageUrl:inputs.imageUrl,
            benefit1:inputs.benefit1,
            benefit2:inputs.benefit2,
            benefit3:inputs.benefit3,
            benefit4:inputs.benefit4,
            benefit5:inputs.benefit5,
        }

        eventService.create(eventData)
            .then(result => {
              eventAdd(result)
            });
    };

    return (
        <section id="createPage">
  <form onSubmit={onSubmit} className="createForms">
  
    <div>
      <h2>Create Event</h2>
      <div className="title">
        <label htmlFor="title">Title:</label>
        <input 
            name="title" 
            id="title" 
            type="text" 
            placeholder="Ensure Education for every poor children" 
            value={inputs.title}
            onChange={changeHandler}
            required
           
        />
      </div>
      <div className="subTitle">
        <label htmlFor="subTitle">Subtitle:</label>
        <input 
            name="subTitle" 
            id="subTitle" 
            type="text" 
            placeholder="A cause to raise funds for the poor and needy children of Ethiopia." 
            value={inputs.subTitle}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="description">
        <label htmlFor="description">Event description:</label>
        <textarea 
            rows="4" cols="50" 
            name="description" 
            id="description" 
            type="text" 
            placeholder="Enter text here..." 
            value={inputs.description}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="eventMission">
        <label htmlFor="eventMission">Event mission:</label>
        <textarea 
            rows="4" cols="50" 
            name="eventMission" 
            id="eventMission" 
            type="text" 
            placeholder="Enter text here..." 
            value={inputs.eventMission}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="country">
        <label htmlFor="country">Country:</label>
        <input 
            name="country" 
            id="country" 
            type="text" 
            placeholder="Bulgaria" 
            value={inputs.country}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="city">
        <label htmlFor="city">City:</label>
        <input 
            name="city" 
            id="city" 
            type="text" 
            placeholder="Sofia" 
            value={inputs.city}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="postcode">
        <label htmlFor="postcode">Postcode:</label>
        <input 
            name="postcode" 
            id="postcode" 
            type="text" 
            placeholder="963" 
            value={inputs.postcode}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="date">
        <label htmlFor="date">Date:</label>
        <input 
            name="date" 
            id="date" 
            type="text" 
            placeholder="28" 
            value={inputs.date}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="month">
        <label htmlFor="month">Month:</label>
        <input 
            name="month" 
            id="month" 
            type="text" 
            placeholder="April" 
            value={inputs.month}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="fromHour">
        <label htmlFor="fromHour">Start time:</label>
        <input 
            name="fromHour" 
            id="fromHour" 
            type="text" 
            placeholder="10:00 AM" 
            value={inputs.fromHour}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="toHour">
        <label htmlFor="toHour">End time:</label>
        <input 
            name="toHour" 
            id="toHour" 
            type="text" 
            placeholder="13:00 PM" 
            value={inputs.toHour}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="goal">
        <label htmlFor="goal">Goal:</label>
        <input 
            name="goal" 
            id="goal" 
            type="text" 
            placeholder="$5000" 
            value={inputs.goal}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="imageUrl">
        <label htmlFor="imageUrl">Image:</label>
        <input
          name="imageUrl"
          id="imageUrl"
          type="text"
          placeholder="https://s3.us-east-2.amazonaws.com/inspire-kindness/posts/June2020/u6OzQk2udqzeCGUOWIJY.jpg"
          value={inputs.imageUrl}
          onChange={changeHandler}
          required
        />
      </div>
      <label className='benefit'>PLEASE MENTION FIVE EXPECTED BENEFITS FROM IMPLEMENTING THE EVENT</label>

      <div className="benefit1">
        <label htmlFor="benefit1">First benefit:</label>
        <input 
            name="benefit1" 
            id="benefit1" 
            type="text" 
            placeholder="Improving the lives of the local population." 
            value={inputs.benefit1}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="benefit2">
        <label htmlFor="benefit2">Second benefit:</label>
        <input 
            name="benefit2" 
            id="benefit2" 
            type="text" 
            placeholder="Reducing poverty in the region" 
            value={inputs.benefi2}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="benefit3">
        <label htmlFor="benefit3">Third benefit:</label>
        <input 
            name="benefit3" 
            id="benefit3" 
            type="text" 
            placeholder="Access to a public health facility" 
            value={inputs.benefit3}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="benefit4">
        <label htmlFor="benefit4">Fourth benefit:</label>
        <input 
            name="benefit4" 
            id="benefit4" 
            type="text" 
            placeholder="Reduction of unemployment in the region." 
            value={inputs.benefit4}
            onChange={changeHandler}
            required
        />
      </div>
      <div className="benefi5">
        <label htmlFor="benefit5">Fifth benefit:</label>
        <input 
            name="benefit5" 
            id="benefit5" 
            type="text" 
            placeholder="Creation of youth zones in the city." 
            value={inputs.benefit5}
            onChange={changeHandler}
            required
        />
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