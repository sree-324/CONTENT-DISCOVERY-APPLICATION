import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail } from './action';
import { setName } from './action';
import { setPass } from './action';
import axios from 'axios';
import './Login.css';
import hl from './hl.PNG'



function Login({
  email,
  pass,
  name,
  setEmail,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/auth/authenticate",
        {
        
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      window.alert("Successfully Logged In");
      navigate("/homepage ");
      setEmail('');
      setPass('');
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    
    <div className='contlg' >
    <div  className='containerlg' >
      <div className='loginlg'>
      <h1 color='violet'>Welcome to HUNTL!!</h1>
        <form onSubmit={check}>
          <h2 className='titlelg'>Login</h2>
         
          <div className='formGrouplg'>
            <label className='labellg'>Email:</label>
            <input
              className='inputlg'
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='formGrouplg'>
            <label className='labellg'>Password:</label>
            <input
              className='inputlg'
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className='buttonlg' type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/signup" className='registerLinklg'>
            Don't have an account? Register
          </Link>
        </form>
      </div>
      </div>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);