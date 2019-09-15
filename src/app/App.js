import React from "react";
import Header from "./Header";
import Question from "../questions/Question";

export default () => {
  const questions = [
    {
      question: "What about this code?",
      code: `const meuk = 1;
if (meuk === 3) {
  console.log("moio")
}`,
      choices: ["Bla", "Boeh", "Bliep"],
      answer: 1
    }
  ];

  return (
    <>
      <Header />
      <Question question={questions[0]} />
    </>
  );
};
