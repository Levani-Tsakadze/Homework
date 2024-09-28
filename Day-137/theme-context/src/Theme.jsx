import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeDisplay = () => {
  const { theme } = useTheme();
  return <h1>Current theme: {theme}</h1>;
};

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
