import React, { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleParagraph}>
        {isVisible ? 'Hide Paragraph' : 'Show Paragraph'}
      </button>
      {isVisible && <p>This is the paragraph that can be shown or hidden.</p>}
    </div>
  );
}

export default App;
