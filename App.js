import React, { useState } from 'react';
import './App.css'; // Optional CSS for styling

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Function to handle adding a task
  const addTask = () => {
    if (input.trim() !== '') {
      const newTask = { text: input, completed: false, id: Date.now() };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  // Function to toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;