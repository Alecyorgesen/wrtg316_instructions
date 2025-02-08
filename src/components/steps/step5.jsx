import React from "react";

export default function Step5() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Instruct the computer to print something out for us to
              see using the command <code>printf();</code> and tell the computer to get some
              information from us, the user, using the command <code>scanf();</code>. Insert
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
            <br></br>
            <p style={{fontWeight: 'bold', fontStyle: 'italic'}}> Note: If 
            you copy/paste the above statements and see a '$' at the end of the <code>printf();</code> line, 
            don't worry. That is simply the notation nano uses to say there is more 
            in the line than visible. Don't type a '$' at the end.</p>
          </div>
        </div>
        <div className="col-2">
          <img src="printscan.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
