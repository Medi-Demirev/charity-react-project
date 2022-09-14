
import { useContext, useState, useEffect} from 'react';

import { Link, useNavigate} from 'react-router-dom';
import * as authService from "../../services/authService";
import { AuthContext } from '../../contexts/AuthContext';

import * as validator from '../../services/util/validators/userValidator';
import * as notifier from '../../services/util/notifier';


import './LoginPage.css'
import Logo from '../../assets/Logo.png'

const LoginPage = () =>{

const navigate = useNavigate();
const { userLogin } = useContext(AuthContext);
const [inputs, setInputs] = useState({email: '', password: ''});
const [error, setError] = useState({email: "", password: ""});


const changeHandler = (e) => {
        setInputs({
            ...inputs,
        [e.target.name]: e.target.value
        })
    };

    const validateRequest = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;;
      let validationResult;
     
      switch (fieldName) {
        case 'email':
          validationResult = validator.validateLogin(fieldValue);
          break;
      ;
      
      }
  
      setError(state => ({
        ...state,
        [fieldName]: validationResult
      }));
    }

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
        
          .catch(err => {
            if (err) {
            alert('Wrong email or password!');
            navigate("/login")
           inputs.email = '';
           inputs.password = '';

          }
            notifier.notifyError(err.message)
          });
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
            onInput={validateRequest}
            required
          />
           {error.email &&
            <span className="error" >{error.email}</span>
          }
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
            onInput={validateRequest}
            required
          />
           {error.password &&
            <span className="error" >{error.password}</span>
          }
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