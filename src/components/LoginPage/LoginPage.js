
import React from 'react'
import { useContext } from 'react';

import { Link, useNavigate} from 'react-router-dom';
import * as authService from "../../services/authService";
import { AuthContext } from '../../contexts/AuthContext';

import './LoginPage.css'
import Logo from '../../assets/Logo.png'

const LoginPage = () =>{
const { userLogin } = useContext(AuthContext);
const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const {
        email,
        password,
    } = Object.fromEntries(new FormData(e.target));
          authService.login(email, password)
          .then(authData =>{
            userLogin(authData);
            navigate('/')
          })
        
        .catch(() => {
          
            navigate('/404');
        })

   
  };
  
    return (
      
      <section id="loginPage">
      <form className="loginForm" onSubmit={onSubmit}>
      <img src={Logo} alt="Logo"/>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="ivan@abv.bg"
            defaultValue=""
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            defaultValue=""
          />
        </div>
        <button className="btn" type="submit">
          Login
        </button>
        <p className="field">
          <span>
            If you don't have profile click <Link to="/register">here</Link>
          </span>
        </p>
      </form>
    </section>
   

    )
}
export default LoginPage;