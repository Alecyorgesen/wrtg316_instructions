import React from "react";

export default function Survey() {
  return (
    <div id="survey">
      <p>
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=m278xvtRqEi3eZ7lZLQEExam0VL1M2JPlCo4Nn4yoR5URFRVNVVPMTQwV1o0Sk0yTkZQWkxaMVZEWi4u">
          Click here to take the survey
        </a>
      </p>

      <p>QR code for the survey:</p>
      <img src="qrcode.png" alt="qrcode" width={400} />
    </div>
  );
}
