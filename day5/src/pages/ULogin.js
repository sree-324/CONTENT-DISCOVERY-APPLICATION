import './Frontpage.css';
import profile from "./account.PNG";
 import { Link } from 'react-router-dom';
// import email from "./../image/email.jpg";
// import pass from "./../image/pass.png";
function ULogin() {
  return (
    <div className="main">
      

     <div className="sub-main">
       <div>
       <div className='huntl'>
        <center><h2>WELCOME TO HUNTL!!</h2></center>
      </div><br></br>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>
         </div>
         <div>
          <div className='login_page'>
           <h3>Login-Page</h3><br></br>
           </div>
           
           <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="text" placeholder="user name" className="name"  />
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="user name" className="name"/>
           </div><br></br>
          <div >
          <Link to="/nav"><button className="login-button">Login</button></Link>
          </div>
           
            <p className="linker">
              {/* <a href="#">Forgot password ?</a>  */}
              <Link to="/signup">Sign Up</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default ULogin;