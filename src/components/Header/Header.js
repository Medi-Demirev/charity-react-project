import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const { user } = useContext(AuthContext);
  
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
        <div className="header-style-3">
        <div className="container">
          <div className="header-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div className="logo">
                  <Link title="" to="/">
                  <img src={Logo} alt="Logo"/>
                    {" "}
                  
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 d-lg-block d-none">
                <nav>
                  <ul>
                    <li>
                      <Link className="active" title="" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link title="" to="/about">
                        About
                      </Link>
                    </li>
                    {user.accessToken
                    ? <li>
                    <Link title="" to="/catalog">
                      Causes
                    </Link>
                    <ul>
                      <li>
                        <Link title="" to="/catalog">
                          All Causes
                        </Link>
                      </li>
                      <li>
                        <Link title="" to="/create-cause">
                          Create Cause
                        </Link>
                      </li>
                    </ul>
                  </li>
                  :
                  <li>
                    <Link title="" to="/catalog">
                      Causes
                    </Link>
                    </li>}
                   {user.accessToken 
                   ? 
                   <li>
                      <Link title="" to="/event">
                        Event
                      </Link>
                      <ul>
                        <li>
                          <Link title="" to="/event">
                            All Events
                          </Link>
                        </li>
                        <li>
                          <Link title="" to="/create-event">
                            Create Event
                          </Link>
                        </li>
                      </ul>
                    </li>
                    :
                    <li>
                      <Link title="" to="/event">
                        Event
                      </Link>
                    </li>}
                   {user.accessToken 
                   ?
                   <li>
                   <Link title="" to="/all-volunteers">
                     Team
                   </Link>
                   <ul>
                     <li>
                       <Link title="" to="/all-volunteers">
                         Volunteer
                       </Link>
                     </li>
                     <li>
                       <Link title="" to="/join-team">
                         Join the team
                       </Link>
                     </li>
                   </ul>
                 </li>
                 :
                 <li>
                   <Link title="" to="/all-volunteers">
                     Team
                   </Link>
                   </li>}
                    <li>
                      <Link title="" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                <div className="contact">
                  <div className="cart-search-contact">
                    <div className="header-search-form-wrapper">
                      <button className="search-toggle-btn">
                        <i className="fi flaticon-magnifying-glass" />
                      </button>
                      <div className="header-search-form">
                        <form>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="ti-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      
    )
}

export default Header;