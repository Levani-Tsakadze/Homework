import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList
