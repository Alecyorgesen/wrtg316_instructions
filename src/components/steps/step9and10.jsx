import React from "react";

export default function Step9And10() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            {/*I changed this to just make the foor loop straight away, seemed simplier. 
            We can change it back though if you'd prefer*/}
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
