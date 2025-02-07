import React from "react";

export default function Step12() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              After that condition, we will add the incrementation of our counter
              variable. This will be the third part of our "for()" loop. We want
              our counter variable to increase by one each time the loop runs. To
              do this, we will type "counter++" inside the parentheses of the
              "for()" loop, looking like:
              <pre className="codeBlock">
                <code>
                  for(int counter = 0; counter &lt; exponent; counter++)&#123;
                </code>
              </pre>
            </li>
          </div>
        </div>
        <div className="col-2">
          {/* Same pic as before */}
          <img className="m-5" src="nano6.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
