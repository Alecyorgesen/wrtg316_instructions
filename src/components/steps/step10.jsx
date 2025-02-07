import React from "react";

export default function Step10() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              To make our "for()" loop multiply the base the correct number of
              times, create a temporary variable named 'counter' and start it at
              0. We will type it inside the parentheses of "for()&#123;" to look
              like:
            </li>
            <pre className="codeBlock">
              <code>for(int counter = 0; )&#123;</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          {/*Pic has final for loop code, so maybe we should change that*/}
          <img className="m-5" src="nano6.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
