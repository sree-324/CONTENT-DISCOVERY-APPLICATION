import React from "react";
import './Createpost.css'
function Createpost() {
    return (
        <div className="post">
           
            <h1 className="posthead">CREATE YOUR OWN POST!!</h1>
            <div className="postcomment">
            <textarea name="comments" id="comments" className="comment">
            Hey... say something!
            </textarea>
            </div>
            <br></br>
            <div className="postbtn">
            {/* <input type="submit" value="Post"></input>
             */}
             <button>POST</button>
            </div>
        </div>
       
    );
  }
  
  export default Createpost;
  