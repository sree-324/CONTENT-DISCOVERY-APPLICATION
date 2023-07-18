import React from "react";
import myaccount from './myacc.png'
import {RiAccountCircleFill} from 'react-icons/ri'
import './myaccount.css';
import {AiFillBackward} from 'react-icons/ai';
import { Link } from "react-router-dom";
function Myaccount() {
    return (
        <div>
              <div className='wnbtn'>
            <Link to="/nav">
                <AiFillBackward size={54}/>
            </Link>
          </div>
          <br></br>
                <div className="user1">
                    <img src={myaccount} /><p>Username</p>
                </div>
                <div className='wnbtn'>
      <Link to="/nav">
        <div className="aibtn">
          <AiFillBackward size={30} />
        </div>
      </Link>
    </div>
                <div className="myacc">
                  
                  <p>👤USER NAME</p><br></br>

                  <p>📧Email-id</p><br></br>
                  <p>📞Phone Number</p><br></br>
                </div>
                
        </div>
           
    );
  }
  
  export default Myaccount;
  