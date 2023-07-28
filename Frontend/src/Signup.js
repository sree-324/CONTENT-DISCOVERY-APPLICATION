import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
const Signup = () => {
  
  const navigate=useNavigate('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const[isSubmit,setIsSubmit]=useState(false);
  const handleSubmit=async(event)=>{
    event.preventDefault();


    setIsSubmit(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }
    
    try{
      const response=await axios.post('http://localhost:7000/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setUsername("");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate("/");
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if(isSubmit){
    }
  };
  return ( 
    
   
    <div className='container'>
      <form  onSubmit={handleSubmit} className='form'>
        <h2  className='title'>Signup</h2>
        {error && <div className='error'>{error}</div>}
        
        <div  className='inputContainer'>
          <label  className='label'>UserName:</label>
          <input
            className='input'
            type="text"
            placeholder="Enter your user name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='inputContainer'>
          <label className='label'>Email:</label>
          <input
           className='input'
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div  className='inputContainer'>
          <label  className='label'>Password:</label>
          <input
            className='input'
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div  className='inputContainer'>
          <label  className='label'>ConfirmPassword:</label>
          <input
           className='input'
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <br></br><br></br>
      
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" className='button'>Sign Up</button>
        </div>
        <p style={{marginLeft:"50px"}}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
    
  );
};


export default Signup;