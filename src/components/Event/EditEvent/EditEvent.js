import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { EventContext } from '../../../contexts/EventContext';

import * as eventService from '../../../services/eventService';
import * as postValidator from '../../../services/util/validators/postValidator';

import '../../Event/CreateEvent/CreateEvent.css'
import logo from '../../../assets/Logo.png'

const EditEvent = () => {
  const [currentEvent, setCurrentEvent] = useState({
    title: "",
    subTitle: "",
    description: "",
    eventMission: "",
    country: "",
    city: "",
    postcode: "",
    date: "",
    month: '',
    fromHour: "",
    toHour: "",
    toHour: "",
    goal: "",
    imageUrl: "",
    benefit1: "",
    benefit2: "",
    benefit3: "",
    benefit4: "",
    benefit5: "",
  });
  const { eventEdit } = useContext(EventContext);

  const { eventId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    eventService.getOne(eventId)
      .then(eventData => {
        setCurrentEvent(eventData);
      })
  }, []);

  const [error, setError] = useState({
    title: "",
    subTitle: "",
    description: "",
    eventMission: "",
    country: "",
    city: "",
    postcode: "",
    date: "",
    month: '',
    fromHour: "",
    toHour: "",
    toHour: "",
    goal: "",
    imageUrl: "",
    benefit1: "",
    benefit2: "",
    benefit3: "",
    benefit4: "",
    benefit5: "",
  });

  const changeHandler = (e) => {
    setCurrentEvent(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  };

  const validateRequest = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const country = currentEvent.country;
    let validationResult;

    switch (fieldName) {
      case 'title':
        validationResult = postValidator.validatePostTitle(fieldValue.length);
        break;
      case 'subTitle':
        validationResult = postValidator.validatePostSubTitle(fieldValue.length);
        break;
      case 'imageUrl':
        validationResult = postValidator.validateImageUrl(fieldValue);
        break;
      case 'description':
        validationResult = postValidator.validateDescription(fieldValue.length);
        break;
      case 'eventMission':
        validationResult = postValidator.validateMission(fieldValue.length);
        break;
      case 'country':
        validationResult = postValidator.validateCountry(fieldValue.length);
        break;
      case 'city':
        validationResult = postValidator.validateCity(fieldValue.length);
        break;
      case 'goal':
        validationResult = postValidator.validateFunds(fieldValue);
        break;
      case 'date':
        validationResult = postValidator.validateDate(fieldValue);
        break;
      case 'month':
        validationResult = postValidator.validateMonth(fieldValue);
        break;
      case 'postcode':
        validationResult = postValidator.validatePostcode(fieldValue, country);
        break;
      case 'fromHour':
      case 'toHour':
        validationResult = postValidator.validateHour(fieldValue);
        break;
      case 'benefit1':
      case 'benefit2':
      case 'benefit3':
      case 'benefit4':
      case 'benefit5':
        validationResult = postValidator.validateBenefit(fieldValue.length);
        break;
    }

    setError(state => ({
      ...state,
      [fieldName]: validationResult
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      title: currentEvent.title,
      subTitle: currentEvent.subTitle,
      description: currentEvent.description,
      eventMission: currentEvent.eventMission,
      country: currentEvent.country,
      city: currentEvent.city,
      postcode: currentEvent.postcode,
      date: currentEvent.date,
      month: currentEvent.month,
      fromHour: currentEvent.fromHour,
      toHour: currentEvent.toHour,
      goal: currentEvent.goal,
      imageUrl: currentEvent.imageUrl,
      benefit1: currentEvent.benefit1,
      benefit2: currentEvent.benefit2,
      benefit3: currentEvent.benefit3,
      benefit4: currentEvent.benefit4,
      benefit5: currentEvent.benefit5,
    }

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
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.title &&
              <span className="error" >{error.title}</span>}
          </div>
          <div className="subTitle">
            <label htmlFor="subTitle">Subtitle:</label>
            <input name="subTitle"
              id="subTitle"
              type="text"
              placeholder="A cause to raise funds for the poor and needy children of Ethiopia."
              defaultValue={currentEvent.subTitle}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.subTitle &&
              <span className="error" >{error.subTitle}</span>}
          </div>
          <div className="description">
            <label htmlFor="description">Event description:</label>
            <textarea
              rows="4" cols="50"
              name="description"
              id="description"
              type="text"
              placeholder="Enter text here..."
              defaultValue={currentEvent.description}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.description &&
              <span className="error" style={{ position: "absolute" }} >{error.description}</span>}
          </div>
          <div className="eventMission">
            <label htmlFor="eventMission">Event mission:</label>
            <textarea
              rows="4" cols="50"
              name="eventMission"
              id="eventMission"
              type="text"
              placeholder="Enter text here..."
              defaultValue={currentEvent.eventMission}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.eventMission &&
              <span className="error" style={{ position: "absolute" }} >{error.eventMission}</span>}
          </div>
          <div className="country">
            <label htmlFor="country">Country:</label>
            <input
              name="country"
              id="country"
              type="text"
              placeholder="Bulgaria"
              defaultValue={currentEvent.country}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.country &&
              <span className="error" >{error.country}</span>}
          </div>
          <div className="city">
            <label htmlFor="city">City:</label>
            <input
              name="city"
              id="city"
              type="text"
              placeholder="Sofia"
              defaultValue={currentEvent.city}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.city &&
              <span className="error" >{error.city}</span>}
          </div>
          <div className="postcode">
            <label htmlFor="postcode">Postcode:</label>
            <input
              name="postcode"
              id="postcode"
              type="text"
              placeholder="963"
              defaultValue={currentEvent.postcode}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.postcode &&
              <span className="error" >{error.postcode}</span>}
          </div>
          <div className="date">
            <label htmlFor="date">Date:</label>
            <input
              name="date"
              id="date"
              type="text"
              placeholder="28"
              defaultValue={currentEvent.date}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.date &&
              <span className="error" >{error.date}</span>}
          </div>
          <div className="month">
            <label htmlFor="month">Month:</label>
            <input
              name="month"
              id="month"
              type="text"
              placeholder="April"
              defaultValue={currentEvent.month}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.month &&
              <span className="error" >{error.month}</span>}
          </div>
          <div className="fromHour">
            <label htmlFor="fromHour">Start time:</label>
            <input
              name="fromHour"
              id="fromHour"
              type="text"
              placeholder="10:00 AM"
              defaultValue={currentEvent.fromHour}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.fromHour &&
              <span className="error" >{error.fromHour}</span>}
          </div>
          <div className="toHour">
            <label htmlFor="toHour">End time:</label>
            <input
              name="toHour"
              id="toHour"
              type="text"
              placeholder="13:00 PM"
              defaultValue={currentEvent.toHour}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.toHour &&
              <span className="error" >{error.toHour}</span>}
          </div>
          <div className="goal">
            <label htmlFor="goal">Goal:</label>
            <input
              name="goal"
              id="goal"
              type="text"
              placeholder="$5000"
              defaultValue={currentEvent.goal}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.goal &&
              <span className="error" >{error.goal}</span>}
          </div>
          <div className="imageUrl">
            <label htmlFor="imageUrl">Image:</label>
            <input
              name="imageUrl"
              id="imageUrl"
              type="text"
              placeholder="https://s3.us-east-2.amazonaws.com/inspire-kindness/posts/June2020/u6OzQk2udqzeCGUOWIJY.jpg"
              defaultValue={currentEvent.imageUrl}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.imageUrl &&
              <span className="error" >{error.imageUrl}</span>}
          </div>
          <label className='benefit'>PLEASE MENTION FIVE EXPECTED BENEFITS FROM IMPLEMENTING THE EVENT</label>
          <div className="benefit1">
            <label htmlFor="benefit1">First benefit:</label>
            <input
              name="benefit1"
              id="benefit1"
              type="text"
              placeholder="Improving the lives of the local population."
              defaultValue={currentEvent.benefit1}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.benefit1 &&
              <span className="error" >{error.benefit1}</span>}
          </div>
          <div className="benefit2">
            <label htmlFor="benefit2">Second benefit:</label>
            <input
              name="benefit2"
              id="benefit2"
              type="text"
              placeholder="Reducing poverty in the region"
              defaultValue={currentEvent.benefit2}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.benefit2 &&
              <span className="error" >{error.benefit2}</span>}
          </div>
          <div className="benefit3">
            <label htmlFor="benefit3">Third benefit:</label>
            <input
              name="benefit3"
              id="benefit3"
              type="text"
              placeholder="Access to a public health facility"
              defaultValue={currentEvent.benefit3}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.benefit3 &&
              <span className="error" >{error.benefit3}</span>}
          </div>
          <div className="benefit4">
            <label htmlFor="benefit4">Fourth benefit:</label>
            <input
              name="benefit4"
              id="benefit4"
              type="text"
              placeholder="Reduction of unemployment in the region."
              defaultValue={currentEvent.benefit4}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.benefit4 &&
              <span className="error" >{error.benefit4}</span>}
          </div>
          <div className="benefi5">
            <label htmlFor="benefit5">Fifth benefit:</label>
            <input
              name="benefit5"
              id="benefit5"
              type="text"
              placeholder="Creation of youth zones in the city."
              defaultValue={currentEvent.benefit5}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.benefit5 &&
              <span className="error" >{error.benefit5}</span>}
          </div>
          {currentEvent.title && currentEvent.subTitle && currentEvent.description && currentEvent.eventMission && currentEvent.goal && currentEvent.imageUrl && currentEvent.country
            && currentEvent.city && currentEvent.postcode && currentEvent.date && currentEvent.fromHour && currentEvent.toHour && currentEvent.month && currentEvent.benefit1 && currentEvent.benefit2
            && currentEvent.benefit3 && currentEvent.benefit4 && currentEvent.benefit5 && !error.title && !error.subTitle && !error.description && !error.eventMission
            && !error.goal && !error.imageUrl && !error.benefit1 && !error.benefit2 && !error.benefit3 && !error.benefit4 && !error.benefit5 && !error.country
            && !error.city && !error.postcode && !error.date && !error.fromHour && !error.toHour && !error.month
            ?
            <button className="btn" type="submit">
              Edit Event
            </button>
            :
            <button className="btn" type="submit" disabled>
              Edit Event
            </button>}
        </div>
        <img className='logo' src={logo} />
      </form>
    </section>

  );
};
export default EditEvent;