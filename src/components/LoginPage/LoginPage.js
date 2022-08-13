
import { useContext, useState} from 'react';

import { Link, useNavigate} from 'react-router-dom';
import * as authService from "../../services/authService";
import { AuthContext } from '../../contexts/AuthContext';

import './LoginPage.css'
import Logo from '../../assets/Logo.png'

const LoginPage = () =>{

const navigate = useNavigate();
const { userLogin } = useContext(AuthContext);
const [inputs, setInputs] = useState({

  email: '',
  password: '',
});

const changeHandler = (e) => {
        setInputs({
            ...inputs,
        [e.target.name]: e.target.value
        })
    };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
        email:inputs.email,
        password:inputs.password,
      } 
      
          authService.login(userData)
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
            value={inputs.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value={inputs.password}
            onChange={changeHandler}
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