import React from "react";

export default function Step3() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              We now can type in some code to create our exponent calculator. The
              first step is to signal to the computer that this is code for a program
              and not simply text. Copy the following lines and paste them into
              the nano text editor:
            </li>
            <pre className="codeBlock">
              <code>#include &lt;stdio.h&gt;</code>
              <br />
              <code>int main()&#123;</code>
              <br />
              <br />
              <code>&#125;</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          <img src="starternano.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
