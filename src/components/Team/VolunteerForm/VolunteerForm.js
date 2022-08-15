import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useVolunteerContext } from '../../../contexts/VolunteerContext';
import * as volunteerService from '../../../services/volunteerService';

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

    const changeHandler = (e) => {
        setInputs({
            ...inputs,
        [e.target.name]: e.target.value
        })
    };

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
            action="http://whizthemes.com/mail-php/raju/arden/mail.php"
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        className="btn-theme btn-gradient btn-slide no-border"
                        type="submit"
                      >
                        Submit Now
                      </button>
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