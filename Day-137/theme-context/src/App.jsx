import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeDisplay from "./Theme";
import ThemeToggle from "./Theme";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeDisplay />
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default App;
