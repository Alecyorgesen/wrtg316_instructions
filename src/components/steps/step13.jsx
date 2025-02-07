import React from "react";

export default function Step13() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Finally, we will implement the actual multiplication to happen at
              each step of the "for()" loop inside the &#123; &#125; by making
              the value of your variable answer to the answer variable
              multiplied by your base variable. Multiplication is represented by
              * in programs, so we will write this as follows:
              <pre className="codeBlock">
                <code>answer = answer * base;</code>
              </pre>
              {/*Added this to make it clearer what the whole loop looked like*/}
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
          <img className="m-5" src="nano7.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
