import React from "react";
import myaccount from './assets/myacc.png'
import {RiAccountCircleFill} from 'react-icons/ri'
import './myaccount.css';
import {AiFillBackward} from 'react-icons/ai';
import { Link } from "react-router-dom";
function Myaccount() {
    return (
        <div className="mc">
          <br></br>
                <div className="user1">
                    <img src={myaccount} />
                </div>
                <div className='wnbtn'>
      <Link to="/homepage">
        <div className="aibtn">
          <AiFillBackward size={30} style={{color:'violet'}} />
        </div>
      </Link>
    </div>
                <div className="myacc">
                  <p>👤USER NAME </p><br></br>
                  <p>📧Email-id</p><br></br>
                  <p>📞Phone Number</p><br></br>
                </div>
                
        </div>
           
    );
  }
  
  export default Myaccount;
  