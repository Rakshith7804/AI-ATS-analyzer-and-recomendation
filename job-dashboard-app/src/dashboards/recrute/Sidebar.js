import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const handleResumeClick = (e) => {
  //   e.preventDefault();
  //   navigate('/resume');
  // };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="col-md-2 d-flex flex-column vh-100 bg-dark text-light p-3 border border-secondary rounded shadow-sm" style={{ width: '250px' }}>
      <ul className="nav flex-column">
        <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <a href="/" className={`nav-link ${isActive('/') ? 'text-info active' : 'text-light'}`} style={{ background: isActive('/') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/') ? '#ffffff' : '' }}>
            <span role="img" aria-label="home">🏠</span> Dashboard
          </a>
        </li>
        {/* <li className={`nav-item ${isActive('/resume') ? 'active' : ''}`}>
          <a href="/resume" onClick={handleResumeClick} className={`nav-link ${isActive('/resume') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/resume') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/resume') ? '#ffffff' : '' }}>
            <span role="img" aria-label="resume">📄</span> Build Resumes
          </a>
        </li> */}
        <li className={`nav-item ${isActive('/post-job') ? 'active' : ''}`}>
          <a href="/post-job" className={`nav-link ${isActive('/post-job') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/post-job') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/post-job') ? '#ffffff' : '' }}>
            <span role="img" aria-label="post">📤</span> Post New Job
          </a>
        </li>
        <li className={`nav-item ${isActive('/manage-jobs') ? 'active' : ''}`}>
          <a href="/manage-jobs" className={`nav-link ${isActive('/manage-jobs') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/manage-jobs') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/manage-jobs') ? '#ffffff' : '' }}>
            <span role="img" aria-label="manage">📋</span> Manage Jobs
          </a>
        </li>
        <li className={`nav-item ${isActive('/candidate-rankings') ? 'active' : ''}`}>
          <a href="/candidate-rankings" className={`nav-link ${isActive('/candidate-rankings') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/candidate-rankings') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/candidate-rankings') ? '#ffffff' : '' }}>
            <span role="img" aria-label="rankings">🏆</span> Candidate Rankings
          </a>
        </li>
        <li className={`nav-item ${isActive('/shortlisted') ? 'active' : ''}`}>
          <a href="/shortlisted" className={`nav-link ${isActive('/shortlisted') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/shortlisted') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/shortlisted') ? '#ffffff' : '' }}>
            <span role="img" aria-label="shortlisted">⭐</span> Shortlisted Candidates
          </a>
        </li>
        <li className={`nav-item ${isActive('/messages') ? 'active' : ''}`}>
          <a href="/messages" className={`nav-link ${isActive('/messages') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/messages') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/messages') ? '#ffffff' : '' }}>
            <span role="img" aria-label="messages">💬</span> Messages
          </a>
        </li>
        <li className={`nav-item ${isActive('/analytics') ? 'active' : ''}`}>
          <a href="/analytics" className={`nav-link ${isActive('/analytics') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/analytics') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/analytics') ? '#ffffff' : '' }}>
            <span role="img" aria-label="analytics">📊</span> Analytics & Reports
          </a>
        </li>
        <li className={`nav-item ${isActive('/settings') ? 'active' : ''}`}>
          <a href="/settings" className={`nav-link ${isActive('/settings') ? 'text-info active' : 'text-light'}`} onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} onMouseLeave={e => e.target.style.backgroundColor = ''} style={{ background: isActive('/settings') ? 'linear-gradient(90deg, #3b82f6, #1e40af)' : 'none', color: isActive('/settings') ? '#ffffff' : '' }}>
            <span role="img" aria-label="settings">⚙️</span> Settings
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="/signin" 
            onClick={(e) => {
              e.preventDefault();
              // Clear authentication data
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              localStorage.removeItem('usertype');
              sessionStorage.clear();
              // Redirect to login page
              navigate('/signin', { replace: true });
            }} 
            className="nav-link text-light"
            onMouseEnter={e => e.target.style.backgroundColor = '#343a40'} 
            onMouseLeave={e => e.target.style.backgroundColor = ''}
          >
            <span role="img" aria-label="logout">🚪</span> Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;