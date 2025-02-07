import React from "react";

export default function Step3() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              We now can type in some code to create our exponent calculator. In
              order to signal to the computer that this is code for a program
              and not simply text, copy the following lines and paste them into
              the nano text editor.
            </li>
            <p className="background-light-grey">#include &lt;stdio.h&gt;</p>
            <p className="background-light-grey">int main()&#123;</p>
            <p className="background-light-grey"> </p>
            <p className="background-light-grey">&#125;</p>
          </div>
        </div>
        <div className="col-2">
          <img src="nano3.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
