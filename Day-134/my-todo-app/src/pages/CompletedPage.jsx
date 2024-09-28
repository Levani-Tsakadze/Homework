import React from 'react';
import TodoList from '../components/TodoList';

const CompletedPage = ({ todos, onToggleComplete, onDelete }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h1>Completed Tasks</h1>
      <TodoList todos={completedTodos} onToggleComplete={onToggleComplete} onDelete={onDelete} />
    </div>
  );
};

export default CompletedPage;
