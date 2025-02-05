import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //I might change this later...
import "./app.css";

export default function App() {
  // let difficult_text = "#include <stdio.h>\nint main(){\n\n\n\n\n}"
  return (
    <>
      <header></header>
      <main className="background-grey">
        <div className="container bg-light">
          <div className="row p-5 background-grey"></div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h2 className="d-flex justify-content-center m-5">
                Create Your Own Exponent Calculator Program
              </h2>
              <ol>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#requirements">Requirements</a></li>
                <li><a href="#steps">Tutorial</a></li>
                <li><a href="#comments">Comments, Notes, and Examples</a></li>
                <li><a href="#troubleshooting">Troubleshooting</a></li>
                <li><a href="#hazards"> Hazards</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
              </ol>
              <div id="introduction">
                <h2>Introduction</h2>
                <p>
                  Are you ready to create your very own computer program using c code? C is a general-purpose computer language that, despite its age, is very
                  commonly used.It allows you to make both simple and complex programs, and it can be done on any computer! These instructions will walk you through
                  how to make a very simple exponent calculator that any computer can run. These basic steps will help you get a feel for how a computer program works,
                  giving you a foundational understanding of programming logic and problem-solving, which are essential skills for working with technology. Technology
                  is a huge part of our world, and knowing just a little bit can help you a lot!
                </p>
                <p>
                  These steps are very basic, and the entire thing should take no more than 10 minutes. You should read the list of requirements before beginning, and
                  install anything that might be necessary before beginning. Do not worry, due to the simplicity of this program if you mess up then nothing bad will
                  happen to your computer. It would be very difficult to ruin anything unless you knew what you were doing!
                </p>
              </div>
              <div id="requirements">
                <h2>Requirements</h2>
                <ul>
                  <li>Computer (Instructions are built for Windows or Mac operating systems)</li>
                  <li><a href="https://www.linkedin.com/pulse/installing-gcc-compiler-windows-run-c-program-gitbash-david-michael/">gcc compiler</a></li>
                  <li><a href="https://gitforwindows.org/">Git bash </a> (Windows only)</li>
                </ul>
              </div>
              <div id="steps">
                <h2>Tutorial</h2>
                <ol>
                  <li>To begin creating our mini-program, hold the ‘command key’ and press the spacebar. This will open a search bar to find the application. We will be using Terminal. Once you have found it, double-click on it. Doing so will open the application with the logo circled in the image below and a small window to type into. This is your computer’s terminal, from which you can run commands and start programs.
                  </li>

                  <img src="macKeyboard.png" alt="keyboard" width={400} />
                  <img src="terminal.png" alt="terminal" width={400} />
                  <p className="m-5">
                    The result should look like this:
                  </p>
                  <img src="terminal2.png" alt="terminal" width={400} />
                  <p className="m-5">
                  For Windows users, open Git Bash, the terminal that you will use instead of Powershell, the default terminal for Windows. If you have not installed Git Bash, please refer to the links above. After it is installed you may press the Windows key, or click the search bar at the bottom left, and type “Git Bash”. Then select the Git Bash application to open the Terminal. You will use this Terminal to create and edit a file, as well as run a program.
                  </p>
                  <img src="gitBash.png" alt="Git Bash" width={400} />
                  <img src="terminal3.png" alt="Git Bash Terminal" width={400} />
                  <li className="m-5">
                  From this point forward, Apple-based computers and Windows-based computers will function the same. Where the cursor is blinking, enter the command “cd Desktop”. Then, type the following: nano exponentcalculator.c. Make sure the name of the file ends with ‘.c’ Once you have typed that, hit the “return” button on your keyboard. This will open a text editor to the new file with the name you just gave it, and your terminal should look similar to the images below.
                  </li>
                  <img src="nano1.png" alt="terminal" width={400} />
                  <img src="nano2.png" alt="terminal" width={400} />
                  <li>We now can type in some code to create our exponent calculator. In order to signal to the computer that this is code for a program and not simply text, copy the following lines and paste them into the nano text editor. </li>
                  <p>#include &lt;stdio.h&gt;</p>
                  <p>int main()&#123;</p>
                  <p> </p>
                  <p>&#125;</p>
                  <p>Note: In order to move up and down in your text file, you must use the arrow keys to go line by line, and in order to create new lines, you must hit ‘return’. All of the code we will type after this step will be inside the ‘&#123;‘ after main() and the ‘&#125;’ at the end of the file. Your text file should now look like this:</p>
                  <img src="nano3.png" alt="terminal" width={800} />
                  <li>
                    We need to create some variables that will store information for our program, just as they do in math. Create a variable for the base (main number), a variable for the exponent, and a variable for the final answer, set to equal the number 1. Each hold integers (int), so they will look like this:
                  </li>
                  <p className="m-1">int base;</p>
                  <p className="m-1">int exponent;</p>
                  <p className="m-1">int answer = 1;</p>
                  <p>It is important to note that each line of code ends with a semicolon (;) to help the computer know when that line of code is done. The names of these variables are after the word ‘int,’ and you may call the variables anything you would like. It is best practice to name them related to the job they will help perform and the information they store. Your file should look like this:</p>
                  <img src="nano4.png" alt="terminal" width={800} />
                  <li>We will now instruct the computer to print something out for us to see using the command printf(); and tell the computer to get some information from us, the user, using the command scanf();. Insert the following command into the file:</li>
                  <p className="background-light-grey">printf("\nProvide 2 numbers separated by a space.\nThe first is the base, and the second is the exponent: ");</p>
                  <p className="background-light-grey">scanf("%d %d", &base, &exponent);</p>
                  <p>When we run our program, we will see that statement in quotes printed out by our computer, and it will wait for us to type 2 numbers separated by a space. Your program should look like this:</p>
                  <img src="nano5.png" alt="terminal" width={800} />
                  <h2 id="step6" className="m-5">CHECKPOINT #1</h2>
                  <li>We will now “compile” our program, meaning that we will tell the computer to prepare to run our new program! In order to save all that we typed in nano, press the keys in the following order: hold the “control ^” key and press ‘X’, press the ‘Y’ key, and then hit ‘Return’ to save what we typed.</li>
                  <img className="m-5" src="keyboard1.png" alt="keyboard" width={600} />
                  <p>This will exit out of our nano text editor and take us back to the Terminal, where we will compile our program with the previously-installed gcc compiler.</p>
                  <li>Run the following command to compile the program:</li>
                  <p className="background-light-grey m-3">gcc exponentcalculator.c -o exponentcalculator</p>
                  <p>No errors should appear from the Terminal, and it may look like nothing happened, but that means the program is ready to run. Type the following command, and be sure to use the forward slash character (‘/’):</p>
                  <p className="background-light-grey m-3">./exponentcalculator</p>
                  <p>This should print out that message provided in Step #5, and wait for an input of 2 numbers separated by a space. After you have entered 2 numbers, hit ‘Return,’ which should end the program immediately after, as ending after this step is all the program told the computer to do so far.</p>
                  <img src="terminal5.png" alt="terminal" width={800} />
                  <p>If your program did not function as depicted above, see the Troubleshooting section points <a href="#trouble5">#5-7</a></p>
                  <li>Go back into your program and finish creating our exponent calculator. Type the earlier prompt back into the Terminal, and hit ‘Return’:</li>
                  <p className="background-light-grey m-3">nano exponentcalculator.c</p>
                  <li>Now that we are back into our program, we will create a loop that will multiply the number we gave as the base by itself the number of times we gave as the exponent. To create this, beneath our printf(); and scanf(); lines, we will type for()&#123;. Press ‘Return’ a few times after typing that, and type a &#125; to match the opening &#123; above.</li>
                  <img className="m-5" src="nano5.png" alt="nano" width={800} />
                  <li>To make our "for()" loop multiply the base the correct number of times, create a temporary variable named ‘counter’ and start it at 0. We will type it inside the parentheses of "for()&#123;" to look like "for(int counter = 0; )&#123;".</li>
                  <li>Create the condition to tell our program when to stop multiplying the base by itself. That is the second part to add to our "for()" loop. We want it to stop when our counter equals the number we gave as an exponent, so it will keep multiplying while our counter variable is less than the exponent variable. To put that in code, just like math, we type inside the parentheses "counter &lt; exponent;", looking like:</li>
                  <p className="background-light-grey m-3">for(int counter = 0; counter &lt; exponent; )&#123;</p>
                  <li>Create the third and final part of this "for()" loop by telling the program to add 1 to our counter variable after we have multiplied the base by itself, written in code simply as "counter++". "++" after a variable just means add 1 to it.  Our set-up "for()" loop should look like the following: </li>
                  <img className="m-5" src="nano6.png" alt="nano" width={800} />
                  <li>Implement the actual multiplication to happen at each step of the "for()" loop inside the &#123; &#125; by making the value of your variable answer to the answer variable multiplied by your base variable. Multiplication is represented by * in programs, so we will write this as follows: "answer = answer * base;"</li>
                  <li>Return the calculated answer after the "for()" loop has concluded. This will go after the &#125; of the "for()" loop but before the last &#125; of your program. Use the "printf();" command to tell the computer to print our final answer variable for us to see. Place the following message inside the parentheses of "printf();":</li>
                  <p className="background-light-grey m-3">"The answer = %d\n", answer</p>
                  <p>Your program should resemble the following:</p>
                  <img className="m-5" src="nano7.png" alt="nano" width={800} />
                  <li>Compile your fully-functional exponent calculator. Repeat <a href="#step6">Step #6</a> to save all the code you have written and Step #7 to compile your program and run it, providing 2 numbers separated by a space. The computer will calculate and return the correct answer almost instantaneously with your program. Run "./exponentcalculator" as many times as desired for new calculations.</li>
                </ol>
              </div>
              <div id="comments">
                <h2>Comments, Notes, and Examples</h2>
                <p>Fully-Functioning Exponent Calculator:</p>
                <img className="m-4" src="terminal5.png" alt="terminal" width={800} />
                <p>Completed Code Behind Fully Functioning Exponent Calculator:</p>
                <img className="m-4" src="nano7.png" alt="nano" width={800} />
              </div>
              <div id="troubleshooting">
                <h2>Troubleshooting:</h2>
                <ol>
                  <li>gcc is not working to compile my c program.</li>
                  <p>- You likely did not install gcc, or you did not put it in the path.</p>
                  <p> <a href="https://www.linkedin.com/pulse/installing-gcc-compiler-windows-run-c-program-gitbash-david-michael/"> - Windows-based Computers: Follow these instructions to fix it</a></p>
                  <p>- Apple-based Computers:</p>
                  <p>1. If you have not yet installed Homebrew, the dependency fetcher, run the following command in your terminal: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</p>
                  <p>2. With Homebrew installed, simply run the following command in your terminal: brew install gcc</p>
                  <li>None of the provided commands are working in the terminal.</li>
                  <p>- If on a Windows-based computer, ensure you are using Git Bash and not Windows' built-in PowerShell application</p>
                  <p>- If you are on an Apple-based computer, all commands are built in as recognized by the computer excluding the compile stage using gcc. Refer to the first troubleshooting error addressed in this section.</p>
                  <li>I can't find Terminal on my Mac. What should I do?</li>
                  <p>- Ensure you are pressing Command + Space to open “Spotlight Search.” See Step #1 for picture representation on this step.</p>
                  <p>- Type "Terminal" and check if it appears.</p>
                  <p>- If it is missing, check in your computer’s “Applications” folder, followed by the subfolder “Utilities.”</p>
                  <li>I typed nano exponentcalculator.c, but nothing happened.</li>
                  <p>- Make sure you typed nano followed by a space and then exponentcalculator.c.</p>
                  <p>- If an error appears, ensure nano is installed by running the command which nano in the terminal (built in for Apple-based computers)</p>
                  <li id="trouble5">When I save in nano, it doesn't return to the Terminal.</li>
                  <p>- After pressing Ctrl + X, ensure you press Y to confirm and then Return to save.</p>
                  <li>I ran gcc exponentcalculator.c -o exponentcalculator, but I see errors.</li>
                  <p>- Read the error messages carefully; they often indicate a missing semicolon or typo.</p>
                  <p>- Ensure gcc is installed by entering gcc --version into the Terminal</p>
                  <li>When I try to run ./exponentcalculator, it says "Permission Denied."</li>
                  <p>- Run the command chmod +x ./exponentcalculator in the Terminal to give yourself permission to run the program and then try again</p>
                  <li>The program runs but doesn't give me an answer.</li>
                  <p>- Double-check the logic inside the for() loop.</p>
                  <p>- Ensure answer = answer * base; is inside the for() loop curly braces.</p>
                  <li>The program outputs incorrect results.</li>
                  <p>- Check that your final printf(); format specifier is correct, meaning it should include the value %d for integers.</p>
                  <p>- Make sure multiplication happens correctly in the loop using the * character</p>
                </ol>
              </div>
              <div id="hazards">
                <h2>Hazards</h2>
                <p>- <b>Caution: </b>The terminal can be used to access all the files on your computer and run many different commands that can change, reorganize, and even delete files and folders. While these instructions provide you with no commands that affect your computer’s contents or structure, do not put in commands you find online if you do not understand what they do.</p>
              </div>
              <div id="conclusion">
                <h2>Conclusion:</h2>
                <p>Congratulations! You have now finished a fully functional C computer program. You should now be able to run the program from the terminal using ./exponentcalculator as many times as you like. Show off to all your friends and family! Feel free to make any adjustments to the file to see if you can make your program do other things. Addition and subtraction are easy goals to strive for next. This is just the beginning of what you can do with programming!</p>
              </div>
              <div id="survey">
                <p><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=m278xvtRqEi3eZ7lZLQEExam0VL1M2JPlCo4Nn4yoR5URFRVNVVPMTQwV1o0Sk0yTkZQWkxaMVZEWi4u">Click here to take the survey</a></p>
              </div>
              <p>QR code for the survey:</p>
              <img src="qrcode.png" alt="qrcode" width={400}/>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row p-5 background-grey"></div>
        </div>
      </main>
      <footer></footer>

    </>
  );
}
