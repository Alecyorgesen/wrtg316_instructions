import React from "react";

export default function Step2() {
  return (
    <div className="row">
      <div className="col-8">
        <div className="step-container space-y-4">
          <li>
            From this point forward, Apple-based computers and Windows-based
            computers will function the same. Where the cursor is blinking,
            enter the following command:
            <pre className="codeBlock">
              <code>nano exponentcalculator.c</code>
            </pre>
            Make sure the file name ends with <code>'.c'</code>. Once typed,
            press the "return" key. This will open a text editor for the new
            file, and your terminal should look similar to the images below.
          </li>
        </div>
      </div>
      <div className="col-2">
        <img src="nano_step2.png" alt="terminal" />
        <img src="nano_step3.png" alt="terminal" />
      </div>
    </div>
  );
}
