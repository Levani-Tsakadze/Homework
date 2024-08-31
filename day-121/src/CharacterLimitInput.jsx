import React, { useState } from "react";

function CharacterLimitInput() {
  const [text, setText] = useState("");
  const characterLimit = 100;
  const warningThreshold = 90;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={characterLimit}
        rows={4}
        cols={50}
        placeholder="Type something..."
      />
      <div>
        {text.length}/{characterLimit} characters
      </div>
      {text.length >= warningThreshold && (
        <div style={{ color: "red" }}>Warning: Approaching character limit!</div>
      )}
    </div>
  );
}

export default CharacterLimitInput;
