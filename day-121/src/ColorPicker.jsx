import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  return (
    <div>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <div style={{ marginTop: "10px", height: "50px", width: "50px", backgroundColor: color }}>
        Selected Color
      </div>
    </div>
  );
}

export default ColorPicker;
