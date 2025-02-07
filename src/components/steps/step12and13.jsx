import React from "react";

export default function Step12And13() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Implement the actual multiplication to happen at each step of the
              "for()" loop inside the &#123; &#125; by making the value of your
              variable answer to the answer variable multiplied by your base
              variable. Multiplication is represented by * in programs, so we
              will write this as follows: "answer = answer * base;"
            </li>
            <br />
            <li>
              Return the calculated answer after the "for()" loop has concluded.
              This will go after the &#125; of the "for()" loop but before the
              last &#125; of your program. Use the "printf();" command to tell
              the computer to print our final answer variable for us to see.
              Place the following message inside the parentheses of "printf();":
            </li>
            <p className="background-light-grey m-3">
              "The answer = %d\n", answer
            </p>
          </div>
        </div>
        <div className="col-2">
          <img className="m-5" src="nano7.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
