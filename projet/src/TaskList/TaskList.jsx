import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { removeTask } from '../tasksSlice/tasksSlice';
import '../css/TaskList.css'; 

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeTask(index));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tâches</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task}</td>
            <td>
              <button onClick={() => handleDelete(index)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
