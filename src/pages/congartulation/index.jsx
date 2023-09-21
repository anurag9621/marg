import React from "react";
import Cong from "../../images/Confetti.png";

function Inputa(props) {
  return (
    <select name="class">
      <optgroup label="Academic subject">
        <option value="Matgzzzzz">Accountancy</option>
        <option value="Google">Art & Cra</option>
        <option value="Matgzzzzz">Biology</option>

        <option value="Matgzzzzz">Business Studies</option>

        <option value="Matgzzzzz">Computer</option>
        <option value="Matgzzzzz">Chemistry</option>
        <option value="Matgzzzzz">Civics</option>
        <option value="Matgzzzzz">Drawing</option>
        <option value="Matgzzzzz">Economics</option>
        <option value="Matgzzzzz">English</option>
        <option value="Matgzzzzz">General knowledge</option>
        <option value="Matgzzzzz">Geography</option>
        <option value="Matgzzzzz">German</option>
        <option value="Matgzzzzz">Hindi</option>
        <option value="Matgzzzzz">History</option>
        <option value="Matgzzzzz">Home Science</option>
        <option value="Matgzzzzz">Korean</option>
        <option value="Matgzzzzz">Maths</option>
        <option value="Matgzzzzz">Moral Educa􏰁on</option>
        <option value="Matgzzzzz">Music</option>
        <option value="Matgzzzzz">Physical Educa􏰁on</option>
        <option value="Matgzzzzz">Physics</option>
        <option value="Matgzzzzz">Science</option>

        <option value="Matgzzzzz">Social Studies</option>
        <option value="Matgzzzzz">Sociology</option>
        <option value="Matgzzzzz">State Regional Language</option>
        <option value="Matgzzzzz">Technical Drawing</option>
        <option value="Matgzzzzz">Other</option>
      </optgroup>
      <optgroup label="ALL INTRESETS">
        <option value="Google">Cricketer</option>
        <option value="Google">Chess Player</option>
        <option value="Google">Athlete</option>
        <option value="Google">Dancer</option>
        <option value="Google">Professor </option>
        <option value="Google">Teacher</option>
        <option value="Google">Business</option>
        <option value="Google">Doctor</option>
        <option value="Google">Engineer</option>
        <option value="Google">Lawyer</option>
        <option value="Google">Civil Servant</option>
        <option value="Google">Officer</option>
    
      </optgroup>
    </select>
  );
}
function Congartulation() {
  return (
    <>
      <div className="congartulation-big-box">
        <div className="side-logo-box">MARG</div>
        <div className="congartulation-box">
          <div className="congaratulation-box-img">
            <img src={Cong} alt="" />
          </div>
          <div className="congaratulation-text">Congaratulation</div>
          <br />

          <div className="congaratulation-sub-hedding">
            You have cleared your test.
          </div>
        </div>
        <br />
        <br />
        <div className="congartulation-hobbies-box">
          <p>Select your intrests/Hobbies</p>
          <br />

          <form action="intrest" className="form-for-intest">
            <Inputa option1="aaa" />
            <br />
            <br />
            <button type="submit">Proceed</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Congartulation;
