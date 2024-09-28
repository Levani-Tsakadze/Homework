import React from 'react';
import TodoList from '../components/TodoList';

const ActivePage = ({ todos, onToggleComplete, onDelete }) => {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h1>Active Tasks</h1>
      <TodoList todos={activeTodos} onToggleComplete={onToggleComplete} onDelete={onDelete} />
    </div>
  );
};

export default ActivePage;
