import React from "react";

export default function Step14() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Return the calculated answer after the <code>for()</code> loop has
              concluded. This will go after the <code>&#125;</code> of the{" "}
              <code>for()</code> loop but before the last <code>&#125;</code> of
              your program. Use the <code>printf();</code> command to tell the
              computer to print our final answer variable for us to see. Place
              the following message inside the parentheses of{" "}
              <code>printf()</code>:
            </li>
            <pre className="codeBlock">
              <code>printf("The answer = %d\n", answer);</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          <img src="printanswer.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
