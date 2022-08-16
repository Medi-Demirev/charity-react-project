import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';

import * as authService from "../../services/authService";
import * as usersProfilesService from "../../services/usersProfilesService";
import { AuthContext } from '../../contexts/AuthContext';
import { UserProfileContext } from '../../contexts/UserProfileContext';
import './RegisterPage.css'
import Logo from '../../assets/Logo.png'

const RegisterPage = () => {

  const navigate = useNavigate();
  const {userLogin} = useContext(AuthContext);
  const { profileAdd} = useContext(UserProfileContext);
  const [choice, setChoice] = useState('');
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    country: "",
    name: "",
    city:"",
    adress: "",
    phone: "",
    balance:"",
    imageUrl: "",
    typeAccount: ""
  });

  const changeHandler = (e) => {
    setInputs({
        ...inputs,
    [e.target.name]: e.target.value
    })
};

  const onSubmit = (e) => {
    e.preventDefault();

const registerData ={
  email:inputs.email, 
  password:inputs.password,
  repeatPassword:inputs.repeatPassword,
  country:inputs.country,
  name:inputs.name,
  city:inputs.city, 
  adress:inputs.adress,
  phone:inputs.phone,
  imageUrl:inputs.imageUrl,
  balance:inputs.balance,
  typeAccount:choice,
}
const userProfilestData={
  name:inputs.name,
  country:inputs.country,
  city:inputs.city, 
  adress:inputs.adress,
  phone:inputs.phone,
  email:inputs.email, 
  imageUrl:inputs.imageUrl,
  balance:inputs.balance,
}

console.log(registerData);

    if (registerData.password !== registerData.repeatPassword) {
     return alert('password is mismatch')
  }

 
  authService.register(registerData)
  .then(authData => {
      userLogin(authData);
      console.log(authData);
      usersProfilesService.create(userProfilestData)
      .then(result => {
        profileAdd(result)
      });
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
        <select value={choice}
        onChange={(e) => setChoice(e.target.value)}
        required>
        <option></option>
          <option value={'NGO'} >NGO</option>
          <option value={'Personal'} >Personal</option>
        </select>
      </label>
    </div>
  
 
      
        <div className="on-dark">
          <label htmlFor="name">Full Name/ Organization Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ivan Ivanov / Ability Foundation"
            value={inputs.name}
            onChange={changeHandler}
            required
          />
        </div> 
        <div className="on-dark">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Bulgaria"
            value={inputs.country}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="on-dark">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Sofia"
            value={inputs.city}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="on-dark">
          <label htmlFor="adress">Adress:</label>
          <input
            id="adress"
            name="adress"
            type="text"
            placeholder="Liberation street 45"
            value={inputs.adress}
            onChange={changeHandler}
            required
          />
        </div>
        
        <div className="on-dark">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="+359891234567"
            value={inputs.phone}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="on-dark">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="ivan@abv.bg"
            value={inputs.email}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="on-dark">
          <label htmlFor="balance">Add funds to account:</label>
          <input
            id="balance"
            name="balance"
            type="text"
            placeholder="$100"
            value={inputs.balance}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="imageUrl">
        <label htmlFor="imageUrl">Profile image:</label>
        <input
          name="imageUrl"
          id="imageUrl"
          type="text"
          placeholder="https://s3.us-east-2.amazonaws.com/inspire-kindness/posts/June2020/u6OzQk2udqzeCGUOWIJY.jpg"
          value={inputs.imageUrl}
          onChange={changeHandler}
          required
        />
      </div>
        
        <div className="on-dark">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value={inputs.password}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="on-dark">
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            placeholder="********"
            value={inputs.repeatPassword}
            onChange={changeHandler}
            required
          />
        </div> 
                
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