import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './TaskList/TaskList';
import TaskForm from './TaskForm/TaskForm';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-header">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">Voir les tâches</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-task">Ajouter une tâche</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
