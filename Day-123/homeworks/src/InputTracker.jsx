import React, { useState, useEffect } from "react";

function InputTracker() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Input value:", text);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default InputTracker;
