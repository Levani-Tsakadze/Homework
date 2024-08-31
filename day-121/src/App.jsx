import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import CharacterLimitInput from "./CharacterLimitInput";
import ColorPicker from "./ColorPicker";
import Timer from "./Timer";
import TextExpander from "./TextExpander";

function App() {
  return (
    <div>
      <h2>Theme Switcher</h2>
      <ThemeSwitcher />
      <h2>Character Limit Input</h2>
      <CharacterLimitInput />
      <h2>Color Picker</h2>
      <ColorPicker />
      <h2>Timer</h2>
      <Timer />
      <h2>Text Expander</h2>
      <TextExpander text="Hey example hi this is example TEXT I AM GONNA ADD THIS TO MY WEBSITE COOL RIGHT?" />
    </div>
  );
}

export default App;
