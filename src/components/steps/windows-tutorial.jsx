import React from "react";

export default function WindowsTutorial() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <p className="m-5">
              (For Windows-based computers) Open Git Bash, the terminal that you will use
              instead of Powershell, the default terminal for Windows. If you
              have not installed Git Bash, please refer to the links above.
              After it is installed you may press the Windows key, or click the
              search bar at the bottom left, and type "Git Bash". Then select
              the Git Bash application to open the Terminal. You will use this
              Terminal to create and edit a file, as well as run a program.
            </p>
          </div>
        </div>
        <div className="col-2">
          <img src="gitBash.png" alt="Git Bash" />
          <img src="terminal3.png" alt="Git Bash Terminal" />
        </div>
      </div>
    </>
  );
}
