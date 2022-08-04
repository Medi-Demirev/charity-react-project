import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './RegisterPage.css'
import Logo from '../../assets/Logo.png'

const RegisterPage = () => {

  const [option, setOption] = useState('');

  function handleChange(event) {
    setOption(event.target.value)
  }

  if (option === 'Personal') {
    
  }
    return (
      
      <section id="registerPage">
      <form className="registerForm">
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
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Ivan"
            defaultValue=""
          />
        </div> 
        <div className="on-dark">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Ivanov"
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
          <label htmlFor="name">Name of Organization:</label>
          <input
            id="name"
            name="name"
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
        <p className="register-link">
          <span>
            If you have profile click <Link to="/login">here</Link>
          </span>
        </p>
      </form>
    </section>
    

    );
};

export default RegisterPage;