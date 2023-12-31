import React from "react";
import { useState } from "react";
function InputArea(props) {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          setInputText("");
          return props.addit(inputText);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
