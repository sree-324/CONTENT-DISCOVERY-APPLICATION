import React, {useState} from 'react';
import './Registrationpage.css'
import { Link } from 'react-router-dom';
function Registrationpage() {
    return(
      <div className="form">
        <h1>REGISTRATION PAGE </h1>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname"><br></br>
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email"><br></br>
                  <label className="form__label" for="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password"><br></br>
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password"><br></br>
                  <label className="form__label" for="confirmPassword">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="button">
              <button type="submit" >Register</button>
          </div>
          {/* <Link to='/Registerationpage' ></Link> */}

      </div>      
    )       
}
export default Registrationpage;
