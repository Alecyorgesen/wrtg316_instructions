import React from "react";

export default function Troubleshooting() {
  return (
    <div id="troubleshooting">
      <h2>Troubleshooting:</h2>
      <ol>
        <li>gcc is not working to compile my c program.</li>
        <p>
          - You likely did not install gcc, or you did not put it in the path.
        </p>
        <p>
          {" "}
          <a href="https://www.linkedin.com/pulse/installing-gcc-compiler-windows-run-c-program-gitbash-david-michael/">
            {" "}
            - Windows-based Computers: Follow these instructions to fix it
          </a>
        </p>
        <p>- Apple-based Computers:</p>
        <p className="substep">
          1. If you have not yet installed Homebrew, the dependency fetcher, run
          the following command in your terminal: /bin/bash -c "$(curl -fsSL
          https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        </p>
        <p className="substep">
          2. With Homebrew installed, simply run the following command in your
          terminal: brew install gcc
        </p>
        <li>None of the provided commands are working in the terminal.</li>
        <p>
          - If on a Windows-based computer, ensure you are using Git Bash and
          not Windows' built-in PowerShell application
        </p>
        <p>
          - If you are on an Apple-based computer, all commands are built in as
          recognized by the computer excluding the compile stage using gcc.
          Refer to the first troubleshooting error addressed in this section.
        </p>
        <li>I can't find Terminal on my Mac. What should I do?</li>
        <p>
          - Ensure you are pressing Command + Space to open “Spotlight Search.”
          See Step #1 for picture representation on this step.
        </p>
        <p>- Type "Terminal" and check if it appears.</p>
        <p>
          - If it is missing, check in your computer’s “Applications” folder,
          followed by the subfolder “Utilities.”
        </p>
        <li>I typed nano exponentcalculator.c, but nothing happened.</li>
        <p>
          - Make sure you typed nano followed by a space and then
          exponentcalculator.c.
        </p>
        <p>
          - If an error appears, ensure nano is installed by running the command
          which nano in the terminal (built in for Apple-based computers)
        </p>
        <li id="trouble5">
          When I save in nano, it doesn't return to the Terminal.
        </li>
        <p>
          - After pressing Ctrl + X, ensure you press Y to confirm and then
          Return(or Enter for windows) to save.
        </p>
        <li>
          I ran gcc exponentcalculator.c -o exponentcalculator, but I see
          errors.
        </li>
        <p>
          - Read the error messages carefully; they often indicate a missing
          semicolon or typo.
        </p>
        <p>
          - Ensure gcc is installed by entering gcc --version into the Terminal
        </p>
        <li>
          When I try to run ./exponentcalculator, it says "Permission Denied."
        </li>
        <p>
          - Run the command chmod +x ./exponentcalculator in the Terminal to
          give yourself permission to run the program and then try again
        </p>
        <li>The program runs but doesn't give me an answer.</li>
        <p>- Double-check the logic inside the for() loop.</p>
        <p>
          - Ensure answer = answer * base; is inside the for() loop curly
          braces.
        </p>
        <li>The program outputs incorrect results.</li>
        <p>
          - Check that your final printf(); format specifier is correct, meaning
          it should include the value %d for integers.
        </p>
        <p>
          - Make sure multiplication happens correctly in the loop using the *
          character
        </p>
      </ol>
    </div>
  );
}
