import React from 'react';

function Task({ task, updateStatus, deleteTask }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select
        value={task.status}
        onChange={(e) => updateStatus(task.id, e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
