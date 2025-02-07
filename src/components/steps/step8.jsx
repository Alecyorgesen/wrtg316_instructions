import React from "react";

export default function Step8() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            {/* Not sure if we were already going to fix this but it seems confusing to run the 
            program right before and then not say what would happen*/}
            <li>
              Now lets go back into the program and finish creating our exponent
              calculator. To do that, type the earlier prompt back into the
              Terminal, and hit 'Return':
            </li>
            <pre className="codeBlock">
              <code>nano exponentcalculator.c</code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          <img className="m-5" src="nano5.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
