import React from 'react';

function Filter({ status, setStatus }) {
  return (
    <select value={status} onChange={(e) => setStatus(e.target.value)}>
      <option value="All">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
}

export default Filter;
