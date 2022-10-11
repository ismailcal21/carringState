import Header from "./components/Header";
import React, { useState } from "react";
import Input from "./components/input";

function App(props) {
  const [input, setInput] = useState("");
  return (
    <div>
      <Header input={input} />
      <Input setInput={setInput} />
    </div>
  );
}

export default App;
