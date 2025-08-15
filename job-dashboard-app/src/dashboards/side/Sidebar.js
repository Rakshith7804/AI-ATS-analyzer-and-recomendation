import React from 'react';

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-flex flex-column vh-100 bg-dark text-light p-3 border border-secondary rounded shadow-sm">
      <ul className="nav flex-column">
        <li className="nav-item active">
          <a href="./" className="nav-link text-info active" style={{ background: 'linear-gradient(90deg, #3b82f6, #1e40af)', color: '#ffffff' }}>
            <span role="img" aria-label="home">🏠</span> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="./resume" className="nav-link text-light" onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''}>
            <span role="img" aria-label="resume">📄</span> Build Resumes
          </a>
        </li>
        <li className="nav-item">
          <a href="./skill-gap-analysis" className="nav-link text-light" onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''}>
            <span role="img" aria-label="analysis">📊</span> Skill Gap Analysis
          </a>
        </li>
        <li className="nav-item">
          <a href="./recommended-jobs" className="nav-link text-light" onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''}>
            <span role="img" aria-label="jobs">💼</span> Recommended Jobs
          </a>
        </li>
        <li className="nav-item">
          <a href="./course-recommendations" className="nav-link text-light" onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''}>
            <span role="img" aria-label="courses">📚</span> Course Recommendations
          </a>
        </li>
        <li className="nav-item">
          <a href="./applications" className="nav-link text-light" onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''}>
            <span role="img" aria-label="applications">📩</span> Applications
          </a>
        </li>
        <li className="nav-item">
          <a href="./settings" className="nav-link text-light" onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''}>
            <span role="img" aria-label="settings">⚙️</span> Settings
          </a>
        </li>
        <li className="nav-item">
          <a href="http://localhost:3000" className="nav-link text-light" onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''}>
            <span role="img" aria-label="logout">🚪</span> Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;