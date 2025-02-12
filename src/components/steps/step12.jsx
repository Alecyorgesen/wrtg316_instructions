import React from "react";

export default function Step12() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Increment the counter
              variable. This will be the third part of our <code>for()</code> loop. We want
              our counter variable to increase by one each time the loop runs.
              Type <code>counter++</code> inside the parentheses of the <code>for()</code> loop, looking like:
              <pre className="codeBlock">
                <code>
                  for(int counter = 0; counter &lt; exponent; counter++)&#123;
                </code>
              </pre>
            </li>
          </div>
        </div>
        <div className="col-2">
          <img src="increment.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
