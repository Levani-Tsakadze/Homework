import React, { useState } from 'react';

function ToggleText() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText(text === "Hello" ? "Goodbye" : "Hello")}>
        Toggle Text
      </button>
    </div>
  );
}

export default ToggleText;
