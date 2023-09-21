import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Min from "../../images/min.png";
import Sih from "../../images/SIH.png";
import Google from "../../images/google.png";

import Call from "../../images/call.png";


function Signup() {
  
  return (
    <>
      <div className="fullscreen-fullbox">
        <div className="left-half-box">
          <div className="image-logo-gov">
            <img src={Min} alt="" />
            <img src={Sih} alt="" />
          </div>
          <div className="logo">MARG</div>
          <div className="login-with-other-auth">
            <p>Login Using...</p>

            <div className="logint-other-apps">
              <img src={Google} alt="" />

              <img src={Call} alt="" />
            </div>
          </div>
        </div>
        <div className="right-half-box">
          <div className="heading-for-registration">Registration</div>
          <br />
          <br />
          {/* Add action to the form  
          
          */}
          <form action="/signup" method="post">
            <div class="container">
              <label for="name">
                <b>Name</b>
              </label>
              <br />
              <input
                type="text"
                name="uname"
                placeholder="Anurag Pandey"
                required
              />
              <br />
              <label for="email">
                <b>Email</b>
              </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                required
              />
              <br />
              <label for="phoneNo">
                <b>Phone No.</b>
              </label>
              <br />
              <input
                type="number"
                name="uname"
                placeholder="XXXXXXXXXXXX"
                required
              />
              <br />
              <label for="uname">
                <b>D.O.B</b>
              </label>
              <br />
              <input
                type="TEXT"
                name="uname"
                placeholder="DD/MM/YYYY"
                required
              />
              <br />
              <label for="psw">
                <b>Password</b>
              </label>
              <br />
              <input
                type="password"
                name="psw"
                placeholder="************"
                required
              />
              <br />
              <label for="psw">
                <b>Conform Password</b>
              </label>
              <br />
              <input
                type="password"
                name="psw"
                placeholder="************"
                required
              />
              <br />

              <label for="psw">
                <b>Class</b>
              </label>
              <br />
              <select name="class">
                <option value="class-6th">CLASS 6</option>
                <option value="class-7th">CLASS 7</option>
                <option value="class-8th">CLASS 8</option>
                <option value="class-9th">CLASS 9</option>
                <option value="class-10th">CLASS 10</option>
                <option value="class-11th">CLASS 11</option>
                <option value="class-12th">CLASS 12</option>
              </select>
              <br />
              <button type="submit">Register</button>
              <br />
            </div>
          </form>
          <br />
          <div className="registration-page">
            <Link to="/">
              <p>Have a Accout?</p> <h4>Login</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
