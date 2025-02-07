import React from "react";

export default function Step9And10() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Now that we are back into our program, we will create a loop that
              will multiply the number we gave as the base by itself the number
              of times we gave as the exponent. To create this, beneath our
              printf(); and scanf(); lines, we will type for()&#123;. Press
              'Return' a few times after typing that, and type a &#125; to match
              the opening &#123; above.
            </li>
            <br />
            <li>
              To make our "for()" loop multiply the base the correct number of
              times, create a temporary variable named 'counter' and start it at
              0. We will type it inside the parentheses of "for()&#123;" to look
              like "for(int counter = 0; )&#123;".
            </li>
          </div>
        </div>
        <div className="col-2">
          <img className="m-5" src="nano6.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
