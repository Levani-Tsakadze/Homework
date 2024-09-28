import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
