import { useState,useEffect, useContext, useCallback } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

import { CauseContext } from '../../../contexts/CauseContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { UserProfileContext } from '../../../contexts/UserProfileContext';

import  * as causeService from '../../../services/causeService';
import  * as donationService from '../../../services/donationService';
import  * as usersProfilesService from '../../../services/usersProfilesService';
import { TextError } from '../../../services/util/TextError';

import * as validator from '../../../services/util/validators/userValidator';
import * as notifier from '../../../services/util/notifier';
import { NOTIFICATIONS } from "../../../services/util/constants/notifications";

import "./CauseDetails.css";


const CauseDetails = () => {

  let sumRaised = 0;
  let countOfDonations = 0;
  let countOfPercents = 0;

  const {causeId} = useParams();
  const navigate = useNavigate();

  const { causeRemove, selectCause, donationAdd, fetchCauseDetails}= useContext(CauseContext);
  const {selected, profileEdit} = useContext(UserProfileContext);
  const {user} = useContext(AuthContext);

  const [count, setCount] = useState(0);
  const [raised, setRaised] = useState(0);
  let [percents, setPercents] = useState(0);
  const [numDonations, setNumDonations] = useState(0);
  let [isLoading, setIsLoading] = useState(false);

  const [currentCause, setCurrentCause] = useState({});
  const [inputs, setInputs] = useState({ donation: "", donors:"", percentCompleted:1});

  const selectedCause = selectCause(causeId);
  const isOwner = selectedCause._ownerId === user._id;

  const profileId = selected._id;
 
  const [error, setError] = useState({donation:"",  balance:"" });

  const changeHandler = (e) => {

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
	causeService.getOne(causeId)
		.then(causeData => {
			setCurrentCause(causeData);
		})
}, []);
  const validateRequest = (e) => {
	
	
	const fieldName = e.target.name;
	const fieldValue = e.target.value;
	const donation = inputs.donation;
	const balance = selected.balance
	console.log(balance);
	let validationResult;
	
	switch (fieldName) {
		case 'donation':
			validationResult =  (validator.validateDonaion(fieldValue) ||validator.validateNegativeBalance(donation, balance))		
	}

  
	setError(state => ({
		...state,
		[fieldName]: validationResult
	}));
	
  };

  useEffect(() => {
    (async () => {
        const causeDetails = await causeService.getOne(causeId);
        setCurrentCause(causeDetails);
        const causeDonations = await donationService.getByCauseId(causeId);
        fetchCauseDetails(causeId, { ...causeDetails, donations: causeDonations.map(x=> Number( x.donation.donation) )});
        causeDonations.map(x=>sumRaised+= Number( x.donation.donation) );
        causeDonations.map(x=>countOfDonations += Number( x.donation.donors) );
		    causeDonations.map(x =>countOfPercents = x.donation.percentCompleted).slice(-1).pop()
		
        setRaised(sumRaised);
        setNumDonations(countOfDonations);
		    setPercents(countOfPercents);
    })();
}, []);


const handleIncrementNumDonations = () => {
	setCount(countOfDonations + 1);
};

const handleIncrementRaised = () => {

	
  setRaised(raised + Number(inputs.donation));
  selected.balance = (selected.balance - Number(inputs.donation).toFixed(2));

  if (selected.balance < 0) {
    selected.balance = 0
    alert('Please add funds to your balance')
    navigate(`/my-profile/${profileId}`)
    }
    

};


  const causeDeleteHandler = () => {
    const confirmation = window.confirm('Are you sure you want to delete this cause?');

    if (confirmation) {
        causeService.remove(causeId)
            .then(() => {
              causeRemove(causeId);
                navigate('/all-causes');
            })
    } 
};

const handleIncrementPercent = () => {

	const percentResult = percentage(Number(inputs.donation), Number(currentCause.goal));
	setPercents(prevCount => (prevCount + Number(percentResult)));
	
  };


const onSubmit = (e) => {

  e.preventDefault();
	  
  const donationData ={
    donation:inputs.donation,
    donors:1,
	  percentCompleted:percents
  }

  donationService.create(causeId, donationData)
      .then(result => {
        donationAdd(causeId, donationData);     
        
        usersProfilesService.edit(profileId, (selected ))
        .then(result => {
          profileEdit(profileId, selected)
    });
    });
    inputs.donation = "";

 }
      

function percentage(percent, total) {
    return ((percent / total) * 100).toFixed(2);
};

if (percents > 100) {
		percents = 100;
} else if (percents < 0) {
	percents = 0;
}

const spanStyle = {
	root :{
		width: `${percents}%`
		
	  },
 };

  return (
    <div className="tp-case-details-area section-padding">
      <div key={currentCause._id} className="container">
        <div className="row">
          <div className="col col-lg-8">
            <div className="tp-case-details-wrap">
              <div className="tp-case-details-text">
                <div id="Description">
                  <div className="tp-case-details-img">
                    <img src={currentCause.imageUrl} alt="" />
                  </div>
                  <div className="tp-case-content">
                    <div className="tp-case-text-top">
                      <h2>{currentCause.title}</h2>
                      <div className="progres-section">
                        <div className="proces">
                          <div className="progres">
                            <div className="progres-bar" style={spanStyle.root}>
                              <div className="progres-value" >
                                <span>{percents.toFixed(2)}</span>%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <span >Raised:</span> ${raised.toFixed(2)} 
                        </li>
                        <li>
                          <span>Goal:</span> ${currentCause.goal}
                        </li>
                      </ul>
                      <div className="case-b-text">
                        <p>{currentCause.description}</p>
                      </div>
                      <div className="case-bb-text">
                        <h3>Cause Mission</h3>
                        <p>{currentCause.causeMission}</p>
                        <h3>Benefits of realizing the cause</h3>
                        <ul>
                          <li>{currentCause.benefit1}</li>
                          <li>{currentCause.benefit2}</li>
                          <li>{currentCause.benefit3}</li>
                          <li>{currentCause.benefit4}</li>
                          <li>{currentCause.benefit5}</li>
                        </ul>
                      </div>
                      <div className="submit-area sub-btn">
                        {!user.accessToken ? (
                          <> </>
                        ) : isOwner ? (
                          <>
                            <Link
                              to={`/all-causes/cause/${currentCause._id}/edit`}
                              className="theme-btn submit-btn"
                            >
                              {" "}
                              Edit
                            </Link>
                            <Link
                              to=""
                              onClick={causeDeleteHandler}
                              className="theme-btn submit-btn"
                            >
                              {" "}
                              Delete
                            </Link>
                          </>
                        ) : (
                          <>
                            <form
                              onSubmit={onSubmit}
                              className="donation-funds"
                            >
                              <div className="donation-funds">
                                <label className="donation-label">
                                  Donate funds to this cause
                                </label>
                                <input
                                  className="donations"
                                  name="donation"
                                  id="donation"
                                  type="number"
                                  placeholder="$50"
                                  value={inputs.donation}
                                  onChange={changeHandler}
								  onInput={validateRequest}
                                />

                              </div>
							  {error.donation &&
              					<span className="error" >{error.donation}</span>
          					  }
							  {inputs.donation && !error.donation ?
							    <button
                                onClick={() => {
                                  handleIncrementNumDonations();
                                  handleIncrementRaised();
                                  handleIncrementPercent();
                                }}
                                className="theme-btn8"
								defaultValue= "submit"
                              >
                                Donate now
                              </button> 
							  :   <button
							  onClick={() => {
								handleIncrementNumDonations();
								handleIncrementRaised();
								handleIncrementPercent();
							  }}
							  className="theme-btn8"
							  defaultValue= "submit" disabled
							>
							  Donate now
							</button>}
                            
                            </form>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetails;
