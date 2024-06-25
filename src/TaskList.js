import React from 'react';
import Task from './Task';

function TaskList({ tasks, updateStatus, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateStatus={updateStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
