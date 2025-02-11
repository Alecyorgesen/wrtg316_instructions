import React from "react";

export default function Step2() {
  return (
    <>
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
              Make sure the file name ends with <code>'.c'</code>
            </li>
          </div>
        </div>
        <div className="col-2">
          <img src="firstcommand.png" alt="terminal" />
        </div>
      </div>
      <div className="subrow">
          <div className="col-8">
            <p>Once typed, press the "Return" key. A text editor
            will open for the new file, and your terminal
            should look similar to the following: </p>
          </div>
          <div className="col-2">
            <img src="blanknano.png" alt="terminal" />
          </div>
      </div>
    </>
  );
}
