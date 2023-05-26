import React, { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { addTask } from '../tasksSlice/tasksSlice';
import '../css/TaskForm.css';

function TaskForm() {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Ajout d'un état pour le message de succès
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask(e.target.value);

    if (tasks.includes(e.target.value)) {
      setError('Cette tâche existe déjà.');
      setSuccess(''); // Enlève le message de succès lorsque l'utilisateur modifie la tâche
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error) {
      dispatch(addTask(task));
      setTask('');
      setSuccess('Tâche ajoutée avec succès !'); // Affiche un message de succès lorsqu'une tâche est ajoutée
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      {}
      <div>Nombre total de tâches : {tasks.length}</div>
      <input value={task} onChange={handleChange} />
      <button type="submit">Ajouter une tâche</button>
    </form>
  );
}

export default TaskForm;