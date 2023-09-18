import React from "react";
import Cong from "../../images/Confetti.png";

function Inputa(props) {
  return (
    <select name="class">
      <optgroup label="Academic subject">
        <option value="Google">{props.option1}</option>
        <option value="Google">{props.option1}</option>

      </optgroup>
      <optgroup label="Tech Brands">
        <option value="Google">Google</option>
        <option value="Apple">Apple</option>
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
            <br /><br />
            <button type="submit">Proceed</button>
          </form>
        </div>
        
      </div>
    </>
  );
}

export default Congartulation;
