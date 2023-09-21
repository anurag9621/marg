import React from "react";

function Question(props) {
  return (
    <>
      <div className="question-big-box">
        <div className="question-box">
          <ul>
            <li>
              <div className="hedding-box-question">
                <p>Question 1</p>
              </div>
              <div className="question-summery">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam ullam unde, dolore recusandae perferendis similique
                  dignissimos facere itaque ipsam vel placeat non dolorem
                  necessitatibus harum repudiandae animi at doloribus amet?
                </p>
              </div>
              <br />
              <div className="option-box">
                <form action="">
                  <label for="vehicle1">
                    <input type="checkbox" /> A) I have a bike
                  </label>
                  <label for="vehicle1">
                    <input type="checkbox" /> B) I have a bike
                  </label>
                  <label for="vehicle1">
                    <input type="checkbox" /> C) I have a bike
                  </label>
                  <label for="vehicle1">
                    <input type="checkbox" /> D) I have a bike
                  </label>
                </form>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Question;
