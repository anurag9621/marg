import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Min from "../../images/min.png";
import Sih from "../../images/SIH.png";
import Google from "../../images/google.png";

import Call from "../../images/call.png";

function Login() {
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
          <form action="/action_page.php" method="post">
            <div class="container">
              <label for="uname">
                <b>Username</b>
              </label>
              <br />
              <br />
              <input type="text" name="uname" required />
              <br />
              <label for="psw">
                <b>Password</b>
              </label>
              <br />
              <br />
              <input type="password" name="psw" required />
              <br />
              <br />

              <button type="submit">Login</button>
              <br />
              <div className="forgot-password">
                <Link to="/forgot-password"> Forgot Password?</Link>
              </div>
              <br />
            </div>
          </form>
          <br />
          <div className="registration-page">
            <Link to="/Registration">
              <p>Create New Accout?</p> <h4>Registration</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
