import { useContext, useState } from 'react';
import { EventContext } from '../../../contexts/EventContext';

import * as eventService from '../../../services/eventService';
import * as postValidator from '../../../services/util/validators/postValidator';

import '../../Event/CreateEvent/CreateEvent.css'
import logo from '../../../assets/Logo.png'

const CreateEvent = () => {
  const { eventAdd } = useContext(EventContext);
  const [inputs, setInputs] = useState({
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
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };

  const validateRequest = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const country = inputs.country;
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
      title: inputs.title,
      subTitle: inputs.subTitle,
      description: inputs.description,
      eventMission: inputs.eventMission,
      country: inputs.country,
      city: inputs.city,
      postcode: inputs.postcode,
      date: inputs.date,
      month: inputs.month,
      fromHour: inputs.fromHour,
      toHour: inputs.toHour,
      goal: inputs.goal,
      imageUrl: inputs.imageUrl,
      benefit1: inputs.benefit1,
      benefit2: inputs.benefit2,
      benefit3: inputs.benefit3,
      benefit4: inputs.benefit4,
      benefit5: inputs.benefit5,
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
              onInput={validateRequest}
              required
            />
            {error.title &&
              <span className="error" >{error.title}</span>}
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
              value={inputs.description}
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
              value={inputs.eventMission}
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
              value={inputs.country}
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
              value={inputs.city}
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
              value={inputs.postcode}
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
              value={inputs.date}
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
              value={inputs.month}
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
              value={inputs.fromHour}
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
              value={inputs.toHour}
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
              value={inputs.goal}
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
              value={inputs.imageUrl}
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
              value={inputs.benefit1}
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
              value={inputs.benefit2}
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
              value={inputs.benefit3}
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
              value={inputs.benefit4}
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
              value={inputs.benefit5}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.benefit5 &&
              <span className="error" >{error.benefit5}</span>}
          </div>
          {inputs.title && inputs.subTitle && inputs.description && inputs.eventMission && inputs.goal && inputs.imageUrl && inputs.country
            && inputs.city && inputs.postcode && inputs.date && inputs.fromHour && inputs.toHour && inputs.month && inputs.benefit1 && inputs.benefit2
            && inputs.benefit3 && inputs.benefit4 && inputs.benefit5 && !error.title && !error.subTitle && !error.description && !error.eventMission
            && !error.goal && !error.imageUrl && !error.benefit1 && !error.benefit2 && !error.benefit3 && !error.benefit4 && !error.benefit5 && !error.country
            && !error.city && !error.postcode && !error.date && !error.fromHour && !error.toHour && !error.month
            ?
            <button className="btn" type="submit">
              Create Event
            </button>
            :
            <button className="btn" type="submit" disabled>
              Create Event
            </button>}
        </div>
        <img className='logo' src={logo} />
      </form>
    </section>

  );
};
export default CreateEvent;