import React from "react";
import { connect } from "react-redux";
import myaccount from "./assets/myacc.png";
import { AiFillBackward } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./myaccount.css";

function Myaccount({ userName, email, phoneNumber }) {
  return (
    <div className="mc">
      <br></br>
      <div className="user1">
        <img src={myaccount} alt="User" />
      </div>
      <div className="wnbtn">
        <Link to="/homepage">
          <div className="aibtn">
            <AiFillBackward size={30} style={{ color: "violet" }} />
          </div>
        </Link>
      </div>
      <div className="myacc">
        <p>👤nisha</p>
        <br></br>
        <p>📧nisha@gmail.com</p>
        <br></br>
        
        <br></br>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userName: state.userName,
  email: state.email,
  phoneNumber: state.phoneNumber,
});

export default connect(mapStateToProps)(Myaccount);
