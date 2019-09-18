//todo
export default [
  {
    question: "What does this render?",
    code: `function App() {
      const value = 42;
      const MyComponent = (props) => (<>{props.value}</>)
      return <MyComponent value="value" />;
     }
     `,
    choices: ["42", "It renders something else", "This is an error"],
    answer: 1,
    explanation: 'The text "value" is being rendered'
  },
  {
    question: "Miep miep zoef?",
    code: `//a code comment... :)`,
    choices: ["Yes", "No"],
    answer: 0
  }
];
