import React from "react";

export default function Step9() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Now that we are back into our program, we will create a loop that
              will multiply the number we gave as the base by itself the number
              of times we gave as the exponent. To create this, beneath our
              printf(); and scanf(); lines, we will start the beginning of our
              for loop.
            </li>
            <pre className="codeBlock">
              <code>
                for()&#123; <br />
                <br />
                &#125;
              </code>
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
