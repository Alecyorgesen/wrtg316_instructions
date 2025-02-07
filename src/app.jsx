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
import Steps from "./components/steps";

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
          <Steps />
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
