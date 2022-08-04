
import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import Logo from '../../assets/Logo.png'

const LoginPage = () =>{
    return (
      
      <section id="loginPage">
      <form className="loginForm">
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
        <p className="register-link">
          <span>
            If you don't have profile click <Link to="/register">here</Link>
          </span>
        </p>
      </form>
    </section>
   

    )
}
export default LoginPage;