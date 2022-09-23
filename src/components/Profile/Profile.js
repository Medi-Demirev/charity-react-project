import { useContext, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import  * as usersProfilesService from '../../services/usersProfilesService';

import * as validator from '../../services/util/validators/userValidator';
import * as notifier from '../../services/util/notifier';
import { NOTIFICATIONS } from "../../services/util/constants/notifications";

import logo from "../../assets/Logo.png";
import "../Profile/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const {profiles , selectProfile, profileEdit} = useContext(UserProfileContext);
  const {profileId} = useParams();
  const selectedProfile = selectProfile(profileId);
  const { user } = useAuthContext();
  const [inputs, setInputs] = useState({
    balance: "",
  });
  const [error, setError] = useState({balance:"" });


  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const validateRequest = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    let validationResult;
    
    switch (fieldName) {
      case 'balance':
        validationResult = validator.validateBalance(fieldValue);
    }
    
    setError(state => ({
      ...state,
      [fieldName]: validationResult
    }));
    };

  const onSubmit = (e) => {
    e.preventDefault();
    
   
    const profileData = {
      balance: Number(inputs.balance) + Number(selectedProfile.balance),
      name:selectedProfile.name,
      country: selectedProfile.country,
      city:selectedProfile.city,
      adress: selectedProfile.adress,
      email:selectedProfile.email,
      phone:selectedProfile.phone,
      imageUrl:user.imageUrl
    };

    usersProfilesService.edit(profileId, (profileData ))
    .then(result => {
      notifier.notifySuccess(NOTIFICATIONS.FUNDS_ADDED);
      profileEdit(profileId, result)
        navigate(`/my-profile/${profileId}`)
    });
    inputs.balance = ''
  
};
  
  return (
    <>
    {user.typeAccount === "Personal" ?
    <div className="container emp-profile">
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img src={user.imageUrl} alt="" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
          <h5>{selectedProfile.name} </h5>
          <h6>Account type: {user.typeAccount}</h6>
          <p className="proile-balance">MY BALANACE: ${(Number(selectedProfile.balance)) }</p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <p className="nav-link active" id="home-tab" data-toggle="tab">
                My profile
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-4">
        <img className="imgLogo" src={logo} alt="" />
      </div>

      <div className="col-md-8">
        <div className="tab-content profile-tab" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <label>Full Name</label>
              </div>
              <div className="col-md-6">
                <p>{selectedProfile.name}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Country</label>
              </div>
              <div className="col-md-6">
                <p>{selectedProfile.country}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>City</label>
              </div>
              <div className="col-md-6">
                <p>{selectedProfile.city}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Adress</label>
              </div>
              <div className="col-md-6">
                <p>{selectedProfile.adress}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Phone</label>
              </div>
              <div className="col-md-6">
                <p>{selectedProfile.phone}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
              </div>
              <div className="col-md-6">
                <p>{selectedProfile.email}</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <form onSubmit={onSubmit} className=" add-funds">
        <div className="profile-funds">
          <label className="funds-label">Add funds to your balance</label>
          <input
            className="funds"
            name="balance"
            id="funds"
            type="number"
            placeholder="$50"
            value={inputs.balance}
            onChange={changeHandler}
            onInput={validateRequest}
          />
            {error.balance &&
              <span className="error" >{error.balance}</span>
          }
        </div>
        {inputs.balance && !error.balance 
         ? <button type="submit"  className="theme-btn8">
         ADD FUNDS
       </button>
        :
       <button type="submit"  className="theme-btn8" disabled>
       ADD FUNDS
     </button>}
      </form>
    </div>
  </div>
    
  :<div className="container emp-profile">
  <div className="row">
    <div className="col-md-4">
      <div className="profile-img">
        <img src={user.imageUrl} alt="" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="profile-head">
        <h5>{selectedProfile.name} </h5>
        <h6>Account type: {user.typeAccount}</h6>
        <p className="proile-balance">MY BALANACE: ${(Number(selectedProfile.balance)) }</p>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <p className="nav-link active" id="home-tab" data-toggle="tab">
              My profile
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-4">
      <img className="imgLogo" src={logo} alt="" />
    </div>

    <div className="col-md-8">
      <div className="tab-content profile-tab" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row">
            <div className="col-md-6">
              <label>Organization name</label>
            </div>
            <div className="col-md-6">
              <p>{selectedProfile.name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Country</label>
            </div>
            <div className="col-md-6">
              <p>{selectedProfile.country}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>City</label>
            </div>
            <div className="col-md-6">
              <p>{selectedProfile.city}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Adress</label>
            </div>
            <div className="col-md-6">
              <p>{selectedProfile.adress}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Phone</label>
            </div>
            <div className="col-md-6">
              <p>{selectedProfile.phone}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Email</label>
            </div>
            <div className="col-md-6">
              <p>{selectedProfile.email}</p>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        ></div>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <form onSubmit={onSubmit} className=" add-funds">
      <div className="profile-funds">
        <label className="funds-label">Add funds to your balance</label>
        <input
          className="funds"
          name="balance"
          id="funds"
          type="number"
          placeholder="$50"
          value={inputs.balance}
          onChange={changeHandler}
          onInput={validateRequest}
        />
        {error.balance &&
              <span className="error" >{error.balance}</span>
          }
      </div>
      {inputs.balance && !error.balance
         ? <button type="submit"  className="theme-btn8">
         ADD FUNDS
       </button>
        :
       <button type="submit"  className="theme-btn8" disabled>
       ADD FUNDS
     </button>}
    </form>
  </div>
</div>}
  
</>

  );
};

export default Profile;
