
import React, { useState } from "react";
import "./Homepage.css";
import post from './addon.PNG'
import notify from './notification.PNG'
import myaccount from './account.PNG'
import home from'./home.PNG'
// import { Link } from "react-router-dom";
const Nav = () => {

    return (
      <div className="navbar">
        <div className="topnav">
         
          <button className="button_home">HOME</button>
          <button className="button1" style={{float: 'right'}}>SIGNOUT</button>&nbsp;
          <button className="button2" style={{float: 'right'}}><img src={myaccount} /></button>&nbsp;
          <button className="button3" style={{float: 'right'}}><img src={notify} /></button>&nbsp;
          <button className="button4" style={{float: 'right'}} ><img src={post }/></button>
            <div className="search">
              <input type="text" name="search" placeholder="🔍Search" />
            </div> 
          
      
        </div>
      </div>
    )
};


export default Nav



