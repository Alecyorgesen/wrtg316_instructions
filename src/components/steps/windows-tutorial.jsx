import React from "react";
import wsl_example2 from "./wsl_example2.png";

export default function WindowsTutorial() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <p>
              <i>(For Windows-based computers)</i> The easiest way to set up our
              mini program, with all the necessary tools, is to use the Windows
              Subsystem for Linux (WSL). To start, click the search icon at the
              bottom left of your screen. This will allow you to search through
              your installed programs. Type in "Powershell" and open the
              program. If you have not yet installed WSL, please first follow
              the instructions on the <a href="#requirements"> Requirements</a>{" "}
              page. Once this is installed, run the following command:
              <code> wsl</code>. This will open the Linux terminal. You can now
              write and compile C++ programs on your Windows computer using WSL.
            </p>
            <p>
              If you are using Git Bash instead of WSL(not recommended), then
              you will also need to install GCC before beginning. This can also
              be found on the requirements page.
            </p>
          </div>
          3.
          <img src={wsl_example2} alt="WSL" />
        </div>
        <div className="col-2">
          1.
          <img src="windowsSearchBtn.PNG" alt="Windows Search Button" />
          2.
          <img src="powershell.png" alt="Powershell" />
        </div>
      </div>
    </>
  );
}
