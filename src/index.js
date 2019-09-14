import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Question from "./Question";

function App() {
  return <Question />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
