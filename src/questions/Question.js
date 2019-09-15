import React from "react";
import Code from "./Code";

function Question({ question, showAnswer }) {
  return (
    <>
      <div>{question.question}</div>
      <div className="code">
        <Code codeString={question.code} language="js" />
      </div>
      <div>
        <ul className="choices">
          {question.choices.map(choice => (
            <li key={choice}>{choice}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Question;
