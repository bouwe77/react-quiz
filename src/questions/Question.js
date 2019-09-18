import React, { useState } from "react";
import Code from "./Code";

function Question({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <>
      <div>{question.question}</div>
      <div className="code">
        <Code codeString={question.code} language="js" />
      </div>
      <div>
        <ul className="choices">
          {question.choices.map((choice, index) => (
            <li key={choice}>
              <span
                style={{
                  backgroundColor: showAnswer && index === question.answer ? "Green" : ""
                }}
              >
                {choice}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {showAnswer ? <div>Explanation: {question.explanation}</div> : null}
      <div>
        <button onClick={toggleAnswer}>{showAnswer ? "Hide" : "Show"} Answer</button>
      </div>
    </>
  );
}

export default Question;
