import React from "react";

export default function Step7() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div id="step7" className="step-container">
            <li>Run the following command to compile the program:</li>
            <pre className="codeBlock">
              <code>gcc exponentcalculator.c -o exponentcalculator</code>
            </pre>
            <p>
              No errors should appear from the Terminal, and it may look like
              nothing happened, but that means the program is ready to run. Type
              the following command, and be sure to use the forward slash
              character ('/'):
            </p>
            <pre className="codeBlock">
              <code>./exponentcalculator</code>
            </pre>
            <br></br>
            <p>This should print out the message from Step #5 
              and wait for an input of 2 numbers separated by a space. 
              After you have entered 2 numbers, hit ‘Return,’ which 
              should end the program immediately after, as  
              this step is all the program told the computer to do so far.</p>
          </div>
        </div>
        <div className="col-2">
          <img src="firstcompile.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
