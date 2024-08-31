import React, { useState } from "react";

function TextExpander({ text, previewLength = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, previewLength)}...`}
      </p>
      <button onClick={toggleExpansion}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default TextExpander;
