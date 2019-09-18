import React, { useState } from "react";
import Header from "./Header";
import Question from "../questions/Question";
import questions from "../data/questions";

export default () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function prevQuestion() {
    if (questions.length > 0 && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  return (
    <>
      <Header />
      <Question question={questions[currentQuestion]} />
      <div>
        <br />
        <button onClick={prevQuestion}>&lt;&lt; Previous question</button>
        <button onClick={nextQuestion}>Next question &gt;&gt;</button>
      </div>
    </>
  );
};
