import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import CompletedPage from './pages/CompletedPage';
import ActivePage from './pages/ActivePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage todos={todos} setTodos={setTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />} />
          <Route path="/completed" element={<CompletedPage todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />} />
          <Route path="/active" element={<ActivePage todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
