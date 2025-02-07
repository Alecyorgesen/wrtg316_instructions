import React from "react";

export default function Step7() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div id="step7" className="step-container">
            <li>Run the following command to compile the program:</li>
            <p className="background-light-grey m-3">
              gcc exponentcalculator.c -o exponentcalculator
            </p>
            <p>
              No errors should appear from the Terminal, and it may look like
              nothing happened, but that means the program is ready to run. Type
              the following command, and be sure to use the forward slash
              character ('/'):
            </p>
            <p className="background-light-grey m-3">./exponentcalculator</p>
          </div>
        </div>
        <div className="col-2">
          <img src="terminal5.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
