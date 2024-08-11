import React, { useState } from 'react';

function ChangeBackgroundColor() {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    const newColor = color === "white" ? "lightblue" : "white";
    setColor(newColor);
  };

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default ChangeBackgroundColor
