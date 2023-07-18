import React from "react";
import './Createpost.css'
import { Link } from "react-router-dom";
function Createpost() {
    return (
        <div className="post">
           
            <h1 className="posthead">CREATE YOUR OWN POST!!</h1>
            <div className="postcomment">
            <textarea name="comments" id="comments" className="comment" placeholder="Hey... say something!">
            
            </textarea>
            </div>
            <br></br>
            <div className="postbtn">
             <Link to='/nav'><button>POST</button></Link>
            </div>
        </div>
       
    );
  }
  
  export default Createpost;
  