import React, { useState, useEffect } from "react";

function TitleUpdater() {
  const [title, setTitle] = useState("Default Title");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Title Updater</h1>
      {isVisible && (
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Type a new title"
        />
      )}
      <br />
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Input
      </button>
    </div>
  );
}

export default TitleUpdater;
