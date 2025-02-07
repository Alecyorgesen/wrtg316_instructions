import React from "react";

export default function Step11() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Create the condition to tell our program when to stop multiplying
              the base by itself. That is the second part to add to our "for()"
              loop. We want it to stop when our counter equals the number we
              gave as an exponent, so it will keep multiplying while our counter
              variable is less than the exponent variable. To put that in code,
              just like math, we type inside the parentheses "counter &lt;
              exponent;", looking like:
            </li>
            <p className="background-light-grey m-3">
              for(int counter = 0; counter &lt; exponent; )&#123;
            </p>
          </div>
        </div>
        <div className="col-2">
          <img className="m-5" src="nano6.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
