
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';

import * as authService from "../../services/authService";
import { AuthContext } from '../../contexts/AuthContext';
import './RegisterPage.css'
import Logo from '../../assets/Logo.png'

const RegisterPage = () => {
  const {userLogin} = useContext(AuthContext)
  const navigate = useNavigate();

  
  const [option, setOption] = useState('');

  function handleChange(event) {
    setOption(event.target.value)
  }

  if (option === 'Personal') {
    
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const fullName = formData.get('fullName');
    const country = formData.get('country');
    const city = formData.get('city');
    const adress = formData.get('adress');
    const phone = formData.get('phone');
    const nameOrganization = formData.get('nameOrganization');
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    console.log(fullName);

    if (password !== repeatPassword) {
      navigate('404')
  }

  authService.register(email, password)
  .then(authData => {
      userLogin(authData);
      navigate('/');
  });

  }
    return (
      
      <section id="registerPage">
      <form className="registerForm" onSubmit={onSubmit}>
      <img src={Logo} alt="Logo"/>
        <h2>Register</h2>
        <div>
      <label>
        {" "}
        Type of account:
        <select name='option' onChange={handleChange}>
          <option>NGO</option>
          <option>Personal</option>
        </select>
      </label>
    </div>
  {option === 'Personal'  ?
 
      <>
        <div className="on-dark">
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Ivan Ivanov"
            defaultValue=""
          />
        </div> 
        <div className="on-dark">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Bulgaria"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Sofia"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="adress">Adress:</label>
          <input
            id="adress"
            name="adress"
            type="text"
            placeholder="Liberation street 45"
            defaultValue=""
          />
        </div>
        
        <div className="on-dark">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="+359891234567"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="ivan@abv.bg"
            defaultValue=""
          />
        </div>
        
        <div className="on-dark">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            placeholder="********"
            defaultValue=""
          />
        </div> 
        </> :
      <>
       
        <div className="on-dark">
          <label htmlFor="nameOrganization">Name of Organization:</label>
          <input
            id="nameOrganization"
            name="nameOrganization"
            type="text"
            placeholder="Ability Foundation"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Bulgaria"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Sofia"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="adress">Adress:</label>
          <input
            id="adress"
            name="adress"
            type="text"
            placeholder="Liberation street 45"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="+359891234567"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="ability@gmail.com"
            defaultValue=""
          />
        </div>
        
        <div className="on-dark">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            defaultValue=""
          />
        </div>
        <div className="on-dark">
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            placeholder="********"
            defaultValue=""
          />
        </div>
      </>
}
        
        <button className="btn" type="submit">
          Register
        </button>
        <p className="field">
          <span>
            If you have profile click <Link to="/login">here</Link>
          </span>
        </p>
      </form>
    </section>
    

    );
};

export default RegisterPage