import React from "react";
import "./app.css";
import Introduction from "./components/introduction";
import Requirements from "./components/requirements";
import Comments from "./components/comments";
import Troubleshooting from "./components/troubleshooting";
import Hazards from "./components/hazards";
import Conclusion from "./components/conclusion";
import Survey from "./components/survey";
import Menu from "./components/menu";

export default function App() {
  return (
    <>
      <header></header>
      <main className="background-grey">
        <div className="container bg-light">
          <div className="row p-5 background-grey"></div>
          <h2 className="d-flex justify-content-center m-5">
            Create Your Own Exponent Calculator Program
          </h2>
          <Menu />
          <Introduction />
          <Requirements />

          <div id="steps">
            <h2>Tutorial</h2>
            <ol>
              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      To begin creating our mini-program, hold the 'command key'
                      and press the spacebar. This will open a search bar to
                      find the application. We will be using Terminal. Once you
                      have found it, double-click on it. Doing so will open the
                      application with the logo circled in the image below and a
                      small window to type into. This is your computer's
                      terminal, from which you can run commands and start
                      programs.
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

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <p className="m-5">
                      For Windows users, open Git Bash, the terminal that you
                      will use instead of Powershell, the default terminal for
                      Windows. If you have not installed Git Bash, please refer
                      to the links above. After it is installed you may press
                      the Windows key, or click the search bar at the bottom
                      left, and type "Git Bash". Then select the Git Bash
                      application to open the Terminal. You will use this
                      Terminal to create and edit a file, as well as run a
                      program.
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <img src="gitBash.png" alt="Git Bash" />
                  <img src="terminal3.png" alt="Git Bash Terminal" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      From this point forward, Apple-based computers and
                      Windows-based computers will function the same. Where the
                      cursor is blinking, enter the command "cd Desktop". Then,
                      type the following: nano exponentcalculator.c. Make sure
                      the name of the file ends with '.c' Once you have typed
                      that, hit the "return" button on your keyboard. This will
                      open a text editor to the new file with the name you just
                      gave it, and your terminal should look similar to the
                      images below.
                    </li>
                  </div>
                </div>
                <div className="col-2">
                  <img src="nano1.png" alt="terminal" />
                  <img src="nano2.png" alt="terminal" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      We now can type in some code to create our exponent
                      calculator. In order to signal to the computer that this
                      is code for a program and not simply text, copy the
                      following lines and paste them into the nano text editor.
                    </li>
                    <p className="background-light-grey">
                      #include &lt;stdio.h&gt;
                    </p>
                    <p className="background-light-grey">int main()&#123;</p>
                    <p className="background-light-grey"> </p>
                    <p className="background-light-grey">&#125;</p>
                  </div>
                </div>
                <div className="col-2">
                  <img src="nano3.png" alt="terminal" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      We need to create some variables that will store
                      information for our program, just as they do in math.
                      Create a variable for the base (main number), a variable
                      for the exponent, and a variable for the final answer, set
                      to equal the number 1. Each hold integers (int), so they
                      will look like this:
                    </li>
                    <p className="m-1 background-light-grey">int base;</p>
                    <p className="m-1 background-light-grey">int exponent;</p>
                    <p className="m-1 background-light-grey">int answer = 1;</p>
                  </div>
                </div>
                <div className="col-2">
                  <img src="nano4.png" alt="terminal" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      We will now instruct the computer to print something out
                      for us to see using the command printf(); and tell the
                      computer to get some information from us, the user, using
                      the command scanf();. Insert the following command into
                      the file:
                    </li>
                    <p className="background-light-grey">
                      printf("\nProvide 2 numbers separated by a space.\nThe
                      first is the base, and the second is the exponent: ");
                    </p>
                    <p className="background-light-grey">
                      scanf("%d %d", &base, &exponent);
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <img src="nano5.png" alt="terminal" />
                </div>
              </div>

              <div className="row">
                <h2 id="step6">CHECKPOINT #1</h2>
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      We will now "compile" our program, meaning that we will
                      tell the computer to prepare to run our new program! In
                      order to save all that we typed in nano, press the keys in
                      the following order: hold the "control ^" key and press
                      'X', press the 'Y' key, and then hit 'Return' to save what
                      we typed.
                    </li>
                  </div>
                </div>
                <div className="col-2">
                  <img src="keyboard1.png" alt="keyboard" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div id="step7" className="step-container">
                    <li>Run the following command to compile the program:</li>
                    <p className="background-light-grey m-3">
                      gcc exponentcalculator.c -o exponentcalculator
                    </p>
                    <p>
                      No errors should appear from the Terminal, and it may look
                      like nothing happened, but that means the program is ready
                      to run. Type the following command, and be sure to use the
                      forward slash character ('/'):
                    </p>
                    <p className="background-light-grey m-3">
                      ./exponentcalculator
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <img src="terminal5.png" alt="terminal" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      Go back into your program and finish creating our exponent
                      calculator. Type the earlier prompt back into the
                      Terminal, and hit 'Return':
                    </li>
                    <p className="background-light-grey m-3">
                      nano exponentcalculator.c
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <img className="m-5" src="nano5.png" alt="nano" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      Now that we are back into our program, we will create a
                      loop that will multiply the number we gave as the base by
                      itself the number of times we gave as the exponent. To
                      create this, beneath our printf(); and scanf(); lines, we
                      will type for()&#123;. Press 'Return' a few times after
                      typing that, and type a &#125; to match the opening &#123;
                      above.
                    </li>
                    <li>
                      To make our "for()" loop multiply the base the correct
                      number of times, create a temporary variable named
                      'counter' and start it at 0. We will type it inside the
                      parentheses of "for()&#123;" to look like "for(int counter
                      = 0; )&#123;".
                    </li>
                  </div>
                </div>
                <div className="col-2">
                  <img className="m-5" src="nano6.png" alt="nano" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      Create the condition to tell our program when to stop
                      multiplying the base by itself. That is the second part to
                      add to our "for()" loop. We want it to stop when our
                      counter equals the number we gave as an exponent, so it
                      will keep multiplying while our counter variable is less
                      than the exponent variable. To put that in code, just like
                      math, we type inside the parentheses "counter &lt;
                      exponent;", looking like:
                    </li>
                    <p className="background-light-grey m-3">
                      for(int counter = 0; counter &lt; exponent; )&#123;
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <img className="m-5" src="nano6.png" alt="nano" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      Implement the actual multiplication to happen at each step
                      of the "for()" loop inside the &#123; &#125; by making the
                      value of your variable answer to the answer variable
                      multiplied by your base variable. Multiplication is
                      represented by * in programs, so we will write this as
                      follows: "answer = answer * base;"
                    </li>
                    <li>
                      Return the calculated answer after the "for()" loop has
                      concluded. This will go after the &#125; of the "for()"
                      loop but before the last &#125; of your program. Use the
                      "printf();" command to tell the computer to print our
                      final answer variable for us to see. Place the following
                      message inside the parentheses of "printf();":
                    </li>
                    <p className="background-light-grey m-3">
                      "The answer = %d\n", answer
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <img className="m-5" src="nano7.png" alt="nano" />
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="step-container">
                    <li>
                      Compile your fully-functional exponent calculator. Repeat{" "}
                      <a href="#step6">Step #6</a> to save all the code you have
                      written and <a href="#step7">Step #7</a> to compile your
                      program and run it, providing 2 numbers separated by a
                      space. The computer will calculate and return the correct
                      answer almost instantaneously with your program. Run
                      "./exponentcalculator" as many times as desired for new
                      calculations.
                    </li>
                  </div>
                </div>
                <div className="col-2">
                  <img className="m-5" src="nano7.png" alt="nano" />
                </div>
              </div>
            </ol>
          </div>

          <Comments />
          <Troubleshooting />
          <Hazards />
          <Conclusion />
          <Survey />

          <div className="col-2"></div>
        </div>
        <div className="row p-5 background-grey"></div>
      </main>
      <footer></footer>
    </>
  );
}
