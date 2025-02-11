import React from "react";

export default function WindowsTutorial() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <p className="m-5">
              <i>(For Windows-based computers)</i> The easiest way to set up our
              mini program, with all the necessary tools, is to use the Windows
              Subsystem for Linux (WSL). If you have not yet installed WSL,
              follow the instructions on the{" "}
              <a href="#requirements"> Requirements</a> page. Once this is
              installed, open powershell and run the following command:{" "}
              <code>wsl</code>. This will open the Linux terminal. You can now
              write and compile C++ programs on your Windows computer using WSL.
            </p>
          </div>
        </div>
        <div className="col-2">
          <img src="windowsSearchBtn.PNG" alt="Windows Search Button" />
        </div>
      </div>
    </>
  );
}
