import React from "react";

export default function Step6() {
  return (
    <>
      <div className="row">
        <h2 id="step6">CHECKPOINT #1</h2>
        <div className="col-8 checkpoint-content">
          <div className="step-container">
            <li>
              "Compile" the code, which means to tell the
              computer to prepare the new program! Press the keys in the following order in order to save all
              that we typed in nano: 
              <ol className="m-5">
                <li> Hold the 'control' key and press 'X' </li>
                <li> Let go of those keys, and press the 'Y' key </li>
                <li> Let go of 'Y' and press 'Return' to save what all the code we typed </li>
              </ol>
            </li>
          </div>
        </div>
        <div className="col-2">
          <img src="saveexit.png" alt="keyboard" />
        </div>
      </div>
    </>
  );
}
