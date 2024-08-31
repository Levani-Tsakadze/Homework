import React, { useState, useEffect } from "react";

function ClickAlert() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    if (clicks === 5) {
      alert("Button clicked 5 times!");
    }
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        Click me ({clicks})
      </button>
    </div>
  );
}

export default ClickAlert;
