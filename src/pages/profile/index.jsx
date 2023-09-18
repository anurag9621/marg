import React from "react";
import ProfileImage from "../../images/profile-image.png";
import Scroll from "./components/slider";
import Img1 from "../../images/img1.jpeg";
import Img2 from "../../images/img2.jpeg";
import Img3 from "../../images/img3.jpeg";
import Img4 from "../../images/img4.jpeg";
import Img6 from "../../images/img6.jpeg";
import Img7 from "../../images/img6.jpeg";
import Img8 from "../../images/img7.jpeg";
function UserInfo(props) {
  return (
    <>
      <p className="name-profile">{props.name}</p>
      <br />
      <p className="class-profile">Class {props.class}</p>
      <br />
      <p className="number-profile">+91-{props.number}</p>
    </>
  );
}
function ImageProfile(props) {
  return (
    <>
      <img src={props.userImage} alt="" />
    </>
  );
}

function Profile() {
  return (
    <>
      <div className="profile-big-box">
        <div className="profile-uppr-box">
          <div className="profile-toggle-logo-logout-box">
            <div className="toggle-and-logo-box">
              <div className="toggle-box">
                <ul>
                  <li>
                    <samp className="first-toggle"></samp>

                    <samp className="sec-toggle"></samp>

                    <samp className="first-toggle"></samp>
                  </li>
                </ul>
              </div>
              <div className="logo-box-profile">MARG</div>
            </div>

            <div className="logout-box">
              <button>Sign out</button>
            </div>
          </div>
          <div className="name-class-number-profile-photo-box">
            <div className="name-class-number-box">
              <UserInfo name="Anurag Pandey" class="1st" number="1234567890" />
            </div>
            <div className="profile-photo-box">
              <ImageProfile userImage={ProfileImage} />
            </div>
          </div>
        </div>
        <div className="profile-bottom-box">
          <div className="subject-box">
            <p>Subject</p>
            <br />
            <Scroll
              Img1={Img1}
              Img2={Img2}
              Img3={Img3}
              Img4={Img4}
              Img6={Img6}
              Img7={Img7}
              Img8={Img8}
            />
          </div>
          <div className="Future-suggestions-and-Roadmaps-box">
            <p>Future suggestions and Roadmaps</p>
            <br />
            <Scroll
              Img1={Img1}
              Img2={Img2}
              Img3={Img3}
              Img4={Img4}
              Img6={Img6}
              Img7={Img7}
              Img8={Img8}
            />
          </div>
        </div>
        <div className="bottom-right-chat-bot-box"></div>
      </div>
    </>
  );
}

export default Profile;
