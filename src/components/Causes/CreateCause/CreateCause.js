import { useContext, useState } from 'react';
import { CauseContext } from '../../../contexts/CauseContext';
import * as causeService from '../../../services/causeService';

import * as postValidator from '../../../services/util/validators/postValidator';
import * as notifier from '../../../services/util/notifier';
import { NOTIFICATIONS } from "../../../services/util/constants/notifications";

import '../../Causes/CreateCause/CreateCause';
import map from '../../../assets/12.png';
import logo from '../../../assets/Logo.png';

const CreateCause = () => {
  const { causeAdd } = useContext(CauseContext);
  const [inputs, setInputs] = useState({
    title: "",
    subTitle: "",
    description: "",
    causeMission: "",
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
    causeMission: "",
    goal: "",
    imageUrl: "",
    benefit1: "",
    benefit2: "",
    benefit3: "",
    benefit4: "",
    benefit5: "",
  });

  const changeHandler = (e) => {
    setInputs(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  };


  const validateRequest = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const pass = inputs.password;
    const rePass = inputs.repeatPassword;
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
      case 'causeMission':
        validationResult = postValidator.validateMission(fieldValue.length);
        break;
      case 'goal':
        validationResult = postValidator.validateFunds(fieldValue);
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
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const causeData = {
      title: inputs.title,
      subTitle: inputs.subTitle,
      description: inputs.description,
      causeMission: inputs.causeMission,
      goal: inputs.goal,
      imageUrl: inputs.imageUrl,
      benefit1: inputs.benefit1,
      benefit2: inputs.benefit2,
      benefit3: inputs.benefit3,
      benefit4: inputs.benefit4,
      benefit5: inputs.benefit5,
    };

    causeService.create(causeData)
      .then(result => {
        causeAdd(result)
      });
  }

  return (
    <section id="createPage">
      <form onSubmit={onSubmit} className="createForms">

        <div>
          <h2>Create Cause</h2>
          <div className="title">
            <label htmlFor="title">Title:</label>
            <input
              name="title"
              id="title" type="text"
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
            <label htmlFor="description">Cause description:</label>
            <textarea
              rows="4" cols="50"
              name="description"
              id="description"
              type="text"
              placeholder="Please enter your cause description here…"
              value={inputs.description}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.description &&
              <span className="error" style={{ position: "absolute" }} >{error.description}</span>}
          </div>
          <div className="causeMission">
            <label htmlFor="causeMission">Cause mission:</label>
            <textarea
              rows="4" cols="50"
              name="causeMission"
              id="causeMission"
              type="text"
              placeholder="Please describe the mission of your cause here....."
              value={inputs.causeMission}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.causeMission &&
              <span className="error" style={{ position: "absolute" }} >{error.causeMission}</span>}
          </div>
          <div className="goal">
            <label htmlFor="goal">Necessary funds:</label>
            <input
              name="goal"
              id="goal"
              type="text"
              placeholder="50000"
              value={inputs.goal}
              onChange={changeHandler}
              onInput={validateRequest}
              required
            />
            {error.goal &&
              <span className="error" >{error.goal}</span>}
          </div>

          <div className="imageUrl">
            <label htmlFor="imageUrl">Cause image:</label>
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
          <label className='benefit'>PLEASE MENTION FIVE EXPECTED BENEFITS FROM IMPLEMENTING THE CAUSE</label>
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
              id="benefit2" type="text"
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
          {inputs.title && inputs.subTitle && inputs.description && inputs.causeMission && inputs.goal && inputs.imageUrl && inputs.benefit1
            && inputs.benefit2 && inputs.benefit3 && inputs.benefit4 && inputs.benefit5 && !error.title && !error.subTitle && !error.description
            && !error.causeMission && !error.goal && !error.imageUrl && !error.benefit1 && !error.benefit2 && !error.benefit3 && !error.benefit4
            && !error.benefit5
            ?
            <button className="btn" type="submit">
              Create Cause
            </button>
            :
            <button className="btn" type="submit" disabled>
              Create Cause
            </button>}

          <div className='rr'>
            <img className='logo' src={map} />
            <img className='logo' src={logo} />
          </div>
        </div>
      </form>
    </section>

  );
};
export default CreateCause;