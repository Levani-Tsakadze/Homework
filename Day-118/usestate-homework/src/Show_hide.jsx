import React, { useState } from 'react';

function ShowHide() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Text
      </button>
      {visible && <p>This is a paragraph of text.</p>}
    </div>
  );
}

export default ShowHide;
