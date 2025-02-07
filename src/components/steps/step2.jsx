import React from "react";

export default function Step2() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              From this point forward, Apple-based computers and Windows-based
              computers will function the same. Where the cursor is blinking,
              enter the command "cd Desktop" and hit enter.[THIS IS CALEB ADDING
              THIS. MY COMPUTER WOULD NOT WORK WITH THIS, DESKTOP IS NOT ON MY
              STARTING DIRECTORY WHEN I OPEN THE COMMAND PROMPT. YOU FIRST WOULD
              NEED TO GO INTO ONEDRIVE, SO WE SHOULD PROBABLY CHANGE THIS TO
              SOMETHING THAT WOULD WORK UNIVERSALLY]. Then, type the following:
              nano exponentcalculator.c. Make sure the name of the file ends
              with '.c' Once you have typed that, hit the "return" button on
              your keyboard. This will open a text editor to the new file with
              the name you just gave it, and your terminal should look similar
              to the images below.
            </li>
          </div>
        </div>
        <div className="col-2">
          <img src="nano_step2.png" alt="terminal" />
          <img src="nano_step3.png" alt="terminal" />
        </div>
      </div>
    </>
  );
}
