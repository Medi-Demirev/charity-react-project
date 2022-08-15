import { useState, useEffect } from 'react';

import { useVolunteerContext } from '../../../contexts/VolunteerContext';
import  * as volunteerService from '../../../services/volunteerService';
import { useParams } from 'react-router-dom';
import logo from '../../../assets/Logo.png'
import './VolunteerProfileDetails.css';

const VolunteerProfileDetails = () => {

    const {volunteerId} = useParams()
    const {volunteers, selectVolunteer} = useVolunteerContext();
    const [currentVolunteer, setCurrentVolunteer] = useState({});

    console.log(currentVolunteer);
   

  
    const selectedVolunteer = selectVolunteer(volunteerId);
    //const isOwner = selectedCause._ownerId === user._id;
  
    useEffect(() => {
        volunteerService.getOne(volunteerId)
      .then(result => {
        setCurrentVolunteer(result)
      })
    },[]);

    return (
        <div className="container emp-profile">
 
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img
            src={currentVolunteer.imageProfile}
            alt=""/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
          <h5>{currentVolunteer.firstName} {currentVolunteer.lastName}</h5>
          <h6>Volunteer</h6>
          <p className="proile-rating">
            
          VOLUNTEERING IS A VOCATION!
          </p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <p
                className="nav-link active"
                id="home-tab"
                data-toggle="tab">
                About me
              </p>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div className="row">
      <div className="col-md-4">
      <img className='imgLogo'
            src={logo}
            alt=""/>
      </div>
      <div className="col-md-8">
        <div className="tab-content profile-tab" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab">
            <div className="row">
              <div className="col-md-6">
                <label>First Name</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.firstName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Last Name</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.lastName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Age</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.age}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Country</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.country}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>City</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.city}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Adress</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.adress}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Phone</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.phone}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
              </div>
              <div className="col-md-6">
                <p>{currentVolunteer.email}</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab">
          </div>
        </div>
      </div>
    </div>
</div>

    );
};

export default VolunteerProfileDetails;