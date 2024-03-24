import React from "react";
import "./getstarted.css";
import { BrowserRouter, Link } from "react-router-dom";
import { faCheck } from "react-icons/fa";

function Getstarted() {
  return (
    <div className="new-page">
      
      <BrowserRouter>
      <div className="left-content">
        <h2>Join Your City</h2>
        <h4>Are a local join the local city in Your Community</h4>
        <Link to={'/logintourist'}>Join As a Local</Link>
        <h2>Are You a Business</h2>
        <h4>Add your Business to your Local resort city</h4>
        <Link to={'/logintourist'}>Join as a Business</Link>

        <p>Already one of us?   Good to see back <br/>  Login in below  </p>
           <button>Log In</button>
     </div>
     
    
     </BrowserRouter>
    </div>
  );
}

export default Getstarted;
