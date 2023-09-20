import React from 'react'
import Profilea from "../../../../images/profile-image.png";
import Min from "../../../../images/min.png";
import { Link } from 'react-router-dom';
function togglesidebar() {
  document.getElementById("nev-bar").classList.toggle("active");
}
function Nev() {
  return (
    <>
      <li id="nev-bar">
        <div className="nev-big-box">
          <div className="nev-uppr-box">
            <div className="cut-button">
              <li onClick={togglesidebar}>
                <span className="aaa"></span>
                <span className="bbb"></span>
              </li>
            </div>
            <div className="profile-photo">
              <img src={Profilea} alt="" />
            </div>
          </div>
          <div className="nev-middle-box">
            <ul>
              <li>
                <Link to="/profile">General</Link>
              </li>
              <br />
              <li>
                <Link to="/profile">Edit Account Details</Link>
              </li>
              <br />

              <li>
                <Link to="/profile">About</Link>
              </li>
              <br />
              <li>
                <Link to="/profile">Block</Link>
              </li>
              <br />
              <li>
                <Link to="/profile">App Language</Link>
              </li>
              <br />
              <li>
                <Link to="/profile">Appearance</Link>
              </li>
              <br />
              <li>
                <Link to="/profile">Data and Storage</Link>
              </li>
              <br />
              <li>
                <Link to="/profile">App Language</Link>
              </li>
              <br />
            </ul>
          </div>
          <div className="nev-bottom-box">
            <img src={Min} alt="" />
          </div>
        </div>
      </li>
    </>
  );
}

export default Nev