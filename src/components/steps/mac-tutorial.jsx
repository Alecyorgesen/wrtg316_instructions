import React from "react";

export default function MacTutorial() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              (For Apple-based computers) Hold the 'command key' and
              press the spacebar to begin creating our mini-program. This will open a search bar to find the
              application. We will be using Terminal. Once you have found it,
              double-click on it. Doing so will open the application with the
              logo circled in the image below and a small window to type into.
              This is your computer's terminal, from which you can run commands
              and start programs.
            </li>
            <br></br>
          </div>
          <img src="applefindterminal.png" alt="keyboard" />
        </div>
        <div className="col-2">
          <img src="terminalsearch.png" alt="terminal" />
        </div>
      </div>
      <div className="subrow">
        <div className="col-8">
          <p className="m-5">The result should look like this:</p>
        </div>
        <div className="col-2">
          <img src="blankterminal.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
