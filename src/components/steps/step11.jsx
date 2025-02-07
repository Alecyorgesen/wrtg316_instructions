import React from "react";

export default function Step11() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="step-container">
            <li>
              Now we will create the condition to tell our program when to stop
              multiplying the base by itself. That is the second part to add to
              our "for()" loop. We want it to stop when our counter equals the
              number we gave as an exponent, so it will keep multiplying while
              our counter variable is less than the exponent variable. To put
              that in code, just like math, we type inside the parentheses
              "counter &lt; exponent;", looking like:
            </li>
            <pre className="codeBlock">
              <code>for(int counter = 0; counter &lt; exponent; )&#123;</code>
            </pre>
            {/*I added this step as it seems we forgot to add the incrementation of the counter variable. 
            I wasn't sure if I should make it a seperate step, we can do that but then we would need to 
            edit the component names for the step numbers*/}
            After that condition, we will add the incrementation of our counter
            variable. This will be the third part of our "for()" loop. We want
            our counter variable to increase by one each time the loop runs. To
            do this, we will type "counter++" inside the parentheses of the
            "for()" loop, looking like:
            <pre className="codeBlock">
              <code>
                for(int counter = 0; counter &lt; exponent; counter++)&#123;
              </code>
            </pre>
          </div>
        </div>
        <div className="col-2">
          {/* Same pic as before */}
          <img className="m-5" src="nano6.png" alt="nano" />
        </div>
      </div>
    </>
  );
}
