import React from "react";

export default function Step13() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Finally, we will implement the actual multiplication to happen at
              each step of the <code>for()</code> loop inside the <code>&#123; &#125;</code> by making
              the value of your variable answer to the answer variable
              multiplied by your base variable. Multiplication is represented by <code>*</code> in programs, so we will write this as follows:
              <pre className="codeBlock">
                <code>answer = answer * base;</code>
              </pre>
              Putting that in our for loop will look like the following:
              <pre className="codeBlock">
                <code>
                  for(int counter = 0; counter &lt; exponent; counter++)&#123;{" "}
                  <br />
                  answer = answer * base;
                  <br />
                  &#125;
                </code>
              </pre>
            </li>
            <br />
          </div>
        </div>
        <div className="col-2">
          <img src="multiply.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
