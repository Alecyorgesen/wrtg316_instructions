// import React from "react";

// export default function step() {
//   return (
//   <>

//   </>
//   );
// }

import React from "react";
import MacTutorial from "./steps/mac-tutorial";
import WindowsTutorial from "./steps/windows-tutorial";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import Step7 from "./steps/step7";
import Step8 from "./steps/step8";
import Step9And10 from "./steps/step9and10";
import Step11 from "./steps/step11";
import Step12And13 from "./steps/step12and13";
import Step14 from "./steps/step14";

export default function Steps() {
  return (
    <div id="steps">
      <ol>
        <h2>Tutorial</h2>
        <MacTutorial />
        <WindowsTutorial />

        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <Step7 />
        <Step8 />
        <Step9And10 />
        <Step11 />
        <Step12And13 />
        <Step14 />
      </ol>
    </div>
  );
}
