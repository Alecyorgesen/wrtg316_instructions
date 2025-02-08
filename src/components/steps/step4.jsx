import React from "react";

export default function Step4() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              We need to create some variables that will store information for
              our program, just as they do in math. Create a variable for the
              base (main number), a variable for the exponent, and a variable
              for the final answer, set to equal the number 1. Each hold
              integers (<code>int</code>), so they will look like this:
            </li>
            <pre className="codeBlock">
              <code>int base;</code> <br />
              <code>int exponent;</code> <br />
              <code>int answer = 1;</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          <img src="firstvars.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
