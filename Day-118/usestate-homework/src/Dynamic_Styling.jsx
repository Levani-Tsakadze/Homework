import React, { useState } from 'react';

function DynamicStyling() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
        <p style={{ color: color }}>This text changes color!</p>
    </div>
  );
}

export default DynamicStyling