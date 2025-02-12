import React from "react";

export default function Step11() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Create the condition to tell our program when to stop
              multiplying the base by itself. That is the second part to add to
              our <code>for()</code> loop. <br></br> <br></br>We want it to stop when our counter equals the
              number we gave as an exponent, so it will keep multiplying while
              our counter is less than the exponent. To put
              that in code, just like math, type inside the parentheses
              <br></br><code> counter &lt; exponent;</code>, looking like:
            </li>
            <pre className="codeBlock">
              <code>for(int counter = 0; counter &lt; exponent; )&#123;</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          <img src="lessthan.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
