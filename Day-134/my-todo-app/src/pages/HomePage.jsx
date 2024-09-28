import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} onToggleComplete={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
};

export default HomePage;
