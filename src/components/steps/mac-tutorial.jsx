import React from "react";

export default function MacTutorial() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              To begin creating our mini-program, hold the 'command key' and
              press the spacebar. This will open a search bar to find the
              application. We will be using Terminal. Once you have found it,
              double-click on it. Doing so will open the application with the
              logo circled in the image below and a small window to type into.
              This is your computer's terminal, from which you can run commands
              and start programs.
            </li>
          </div>
          <img src="macKeyboard.png" alt="keyboard" />
          <p className="m-5">The result should look like this:</p>
        </div>
        <div className="col-2">
          <img src="terminal.png" alt="terminal" />
          <img src="terminal2.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
