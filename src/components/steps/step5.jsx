import React from "react";

export default function Step5() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              We will now instruct the computer to print something out for us to
              see using the command printf(); and tell the computer to get some
              information from us, the user, using the command scanf();. Insert
              the following command into the file:
            </li>
            <pre className="codeBlock">
              <code>
                printf("\nProvide 2 numbers separated by a space.\nThe first is
                the base, and the second is the exponent: ");
              </code>
              <br />
              <code>scanf("%d %d", &base, &exponent);</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          <img src="nano5.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
