import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  console.log(1);
  return <Foo />;
}

function Foo(props) {
  console.log(2);
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };
  return <button onClick={handleClick}>Click Me</button>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
