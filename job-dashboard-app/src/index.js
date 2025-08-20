import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Landingpage from './dashboards/landingpage/Landingpage.js'; // Matches file name
import Dashboard from './dashboards/dash/Dashboard';
import JobSidebar from './dashboards/dash/side/JobSidebar';
import Recrutedash from './dashboards/recrute/Recrutedash.js';
import Sidebar from './dashboards/recrute/Sidebar.js'; // Corrected case
// Import SignUp instead of Signup to match file name
import SignUp from './dashboards/landingpage/SignUp.js';
import SignIn from './dashboards/landingpage/SignIn.js'; // Corrected case and path

// App component to handle routing and usertype check
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const usertype = localStorage.getItem('usertype'); // Check usertype from localStorage
    if (usertype === 'job-seeker') {
      navigate('/job-seekers'); // Redirect to job-seeker dashboard
    } else if (usertype === 'recruiter') {
      navigate('/recruiters'); // Redirect to recruiter dashboard
    } else if (usertype && usertype !== 'job-seeker' && usertype !== 'recruiter') {
      navigate('/signin'); // Redirect to signin for invalid usertype
    }
    // No redirect if usertype is null/undefined; stay on landing page
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} /> {/* Default landing page */}
      <Route path="/signup" element={<SignUp />} /> {/* Use SignUp component for /signup route */}
      {/* Temporarily remove /signin route until SignIn is created */}
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/job-seekers/*"
        element={
          <div className="d-flex vh-100 overflow-hidden">
            <JobSidebar />
            <Dashboard />
          </div>
        }
      />
      <Route
        path="/recruiters/*"
        element={
          <div className="d-flex vh-100 overflow-hidden">
            <Sidebar />
            <Recrutedash />
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" />} /> {/* Fallback to landing page */}
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);