import React from 'react';
import useForm from '../hooks/useForm';

const AddTodo = ({ onAdd }) => {
  const [value, handleChange, reset] = useForm('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
