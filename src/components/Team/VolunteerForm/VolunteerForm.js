import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useVolunteerContext } from '../../../contexts/VolunteerContext';
import * as volunteerService from '../../../services/volunteerService';

import * as validator from '../../../services/util/validators/userValidator';
import * as notifier from '../../../services/util/notifier';
import { NOTIFICATIONS } from "../../../services/util/constants/notifications";

import '../VolunteerForm/VoliunteerForm.css'

const VolunteerForm = () => {
    const {volunteerAdd} = useVolunteerContext();
   
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        age: "",
        country: "",
        city:"",
        adress: "",
        email:"",
        phone: "",
        message: "",
        imageProfile: ""
    });

    const [error, setError] = useState({
      firstName: "",
      lastName: "",
      age: "",
      country: "",
      city:"",
      adress: "",
      email:"",
      phone: "",
      message: "",
      imageProfile: ""
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
      let validationResult;
    
      switch (fieldName) {
          case 'firstName':
              validationResult = validator.validateFirstName(fieldValue.length);
              break;
          case 'lastName':
              validationResult = validator.validateLastName(fieldValue.length);
                break;
          case 'country':
              validationResult = validator.validateCountry(fieldValue.length);
              break;
          case 'city':
              validationResult = validator.validateCity(fieldValue.length);
              break;
          case 'adress':
              validationResult = validator.validateAdress(fieldValue);
              break;
          case 'phone':
              validationResult = validator.validatePhone(fieldValue);
              break;
          case 'age':
              validationResult = validator.validateAge(fieldValue);
              break;
          case 'imageProfile':
              validationResult = validator.validateImageUrl(fieldValue);
              break;
          case 'email':
              validationResult = validator.validateEmail(fieldValue);
              break;
          case 'message':
            validationResult = validator.validateMessage(fieldValue);
              break;
      }
    
      setError(state => ({
          ...state,
          [fieldName]: validationResult
      }));
    }
    


    const onSubmit = (e) => {
        e.preventDefault();
        const volunteerData ={
        firstName:inputs.firstName,
        lastName:inputs.lastName,
        age:inputs.age,
        country:inputs.country,
        city:inputs.city, 
        adress:inputs.adress,
        email:inputs.email, 
        phone:inputs.phone,
        message:inputs.message,
        imageProfile:inputs.imageProfile,
      };

      volunteerService.create(volunteerData)
      .then(result => {
        volunteerAdd(result)
        
      })
      .catch(err => {
        notifier.notifyError(err.message)
      });

    }
  

    return (
        <section className="volunteer-form-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="volunteer-form">
          <div className="section-title">
            <h5 className="subtitle">Join With Us</h5>
            <h2 className="title">
              If You Interest! You Can Join With Us <span>As A Volunteer.</span>
            </h2>
            <p>
            Volunteering is a vocation and everyone must discover for themselves whether they are ready to volunteer.
            Volunteering is a vocation and everyone must discover for themselves whether they are ready to volunteer.
            If you have discovered your calling, we invite you to become part of our team. 
            Be Brave turn on Be Good to help make the world a better place.
            </p>
          </div>
          <form onSubmit={onSubmit}
            className="volunteer-form-wrapper"
            id="contact-form"
            action=""
            method="post"
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="row row-gutter-20">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={inputs.firstName}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.firstName &&
                        <span className="error" >{error.firstName}</span>}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={inputs.lastName}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.lastName &&
              <span className="error" >{error.lastName}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={inputs.age}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.age &&
              <span className="error" >{error.age}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={inputs.country}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.country &&
              <span className="error" >{error.country}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="city"
                        placeholder="City"
                        value={inputs.city}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.city &&
              <span className="error" >{error.city}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="adress"
                        placeholder="Adress"
                        value={inputs.adress}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.adress &&
              <span className="error" >{error.adress}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={inputs.email}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.email &&
              <span className="error" >{error.email}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={inputs.phone}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.phone &&
              <span className="error" >{error.phone}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="imageProfile"
                        placeholder="Profile Image / htttp//......"
                        value={inputs.imageProfile}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.imageProfile &&
              <span className="error" >{error.imageProfile}</span>
          }
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <textarea
                        className="form-control textarea"
                        name="message"
                        placeholder="Message"
                        value={inputs.message}
                        onChange={changeHandler}
                        onInput={validateRequest}
                        required
                      />
                       {error.message &&
              <span className="error" >{error.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      { inputs.firstName && inputs.lastName && inputs.email && inputs.country && inputs.city && inputs.adress 
                          && inputs.age && inputs.phone && inputs.imageProfile && inputs.message && !error.firstName && !error.lastName
                            && !error.email && !error.country && !error.city && !error.adress && !error.age && !error.phone && !error.imageProfile 
                              && !error.message
                      ?
                      <button
                      className="btn-theme btn-gradient btn-slide no-border"
                      type="submit"
                    >
                      Submit Now
                    </button>
                      :
                      <button
                      className="btn-theme btn-gradient btn-slide no-border"
                      type="submit"
                      disabled
                    >
                      Submit Now
                    </button>}
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Message Notification */}
        <div className="form-message" />
      </div>
    </div>
  </div>
</section>

    );
};
export default VolunteerForm;