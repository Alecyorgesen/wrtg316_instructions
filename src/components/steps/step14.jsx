import React from "react";

export default function Step14() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Now we will need to return the calculated answer after the "for()"
              loop has concluded. This will go after the &#125; of the "for()"
              loop but before the last &#125; of your program. Use the
              "printf();" command to tell the computer to print our final answer
              variable for us to see. Place the following message inside the
              parentheses of "printf()":
            </li>
            <pre className="codeBlock">
              <code>printf("The answer = %d\n", answer);</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          <img className="m-5" src="nano7.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
