import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Sidebar from './dashboards/side/Sidebar';
import Dashboard from './dashboards/dash/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="d-flex">
      <Sidebar />
      <Dashboard />
    </div>
);
