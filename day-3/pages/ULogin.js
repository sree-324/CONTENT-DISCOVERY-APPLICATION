import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Frontpage.css";

function ULogin() {
 
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
   
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    
    const userData = database.find((user) => user.username === uname.value);

    
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  const renderForm = (
    <div className="overall">
    <div className="form">
      <h1 className="login">LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <div className="fp1">
          <label>👤Username </label>
          <input type="text" name="uname" required placeholder="username"/>
          {renderErrorMessage("uname")}
        </div>
        <div className="fp1">
          <label>🔒Password </label>
          <input type="password" name="pass" required placeholder="password"/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        
        </div>
      </form>
    </div>
    </div>
  );
  
  return (
    <div className="app">
      <div className="login-form">
      
        <div className="title"></div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <div className="signup">
        <Link to='/Registrationpage' >SIGN UP</Link>
        </div>
      </div>
    </div>
  );
}

export default ULogin;