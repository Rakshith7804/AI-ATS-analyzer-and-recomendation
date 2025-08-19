import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import ResumeBuilder from './ResumeBuilder';

const Dashboard = () => {
  return (
    <div className="bg-dark text-light p-4 vh-100 vw-100 border border-secondary rounded flex-grow-1">
      <Header />
      <div className="row g-3">
        {/* Stats Section */}
        <div className="col-12">
          <div className="d-flex justify-content-between mb-4">
            <h2 className="h4">DASHBOARD</h2>
            <select className="form-select bg-dark text-light border-0" style={{ width: '100px' }}>
              <option>Ary</option>
            </select>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>12</h3>
                <p className="mb-0">Listings</p>
                <p className="mb-0 text-muted">Dutied</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>258</h3>
                <p className="mb-0">Applications</p>
                <p className="mb-0 text-muted">Received</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>27</h3>
                <p className="mb-0">Talent's</p>
                <p className="mb-0 text-muted">Softedged</p>
              </div>
            </div>
            <div className="col-3">
              <div className="bg-secondary p-3 rounded text-center">
                <h3>6</h3>
                <p className="mb-0">Hims</p>
                <p className="mb-0 text-muted">Madi:</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Job Postings */}
        <div className="col-12">
          <h3 className="h5 mb-3">Recent Job Postings</h3>
          <div className="bg-secondary p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Job</span>
              <span>Status</span>
              <span>Status</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Marketing Specialist</span>
              <span>Active</span>
              <span>Active</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Software Developer</span>
              <span>25$</span>
              <span>Active</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Sales Executive</span>
              <span>27</span>
              <span>Active</span>
            </div>
          </div>
        </div>

        {/* Top Candidates and AI Insights */}
        <div className="col-6">
          <h3 className="h5 mb-3">Top Candidates</h3>
          <div className="bg-secondary p-3 rounded">
            <div className="d-flex align-items-center mb-3">
              <img src="https://via.placeholder.com/40" alt="Rakshith R" className="rounded-circle me-2" />
              <div>
                <p className="mb-0">Rakshith R</p>
                <p className="mb-0 text-muted">@rakshith_roors</p>
              </div>
              <span className="ms-auto">27%</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src="https://via.placeholder.com/40" alt="Ananya S" className="rounded-circle me-2" />
              <div>
                <p className="mb-0">Ananya S</p>
                <p className="mb-0 text-muted">@anansis_doble</p>
              </div>
              <span className="ms-auto">85%</span>
            </div>
            <div className="d-flex align-items-center">
              <img src="https://via.placeholder.com/40" alt="Mohammed S" className="rounded-circle me-2" />
              <div>
                <p className="mb-0">Mohammed S</p>
                <p className="mb-0 text-muted">@srifembhy</p>
              </div>
              <span className="ms-auto">47%</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h3 className="h5 mb-3">AI Insights</h3>
          <div className="bg-secondary p-3 rounded">
            <p className="mb-0">???</p>
            <p className="mb-0 text-muted">60% applications for Software Developer lack skill ?</p>
            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-outline-light btn-sm me-2">View</button>
              <button className="btn btn-outline-light btn-sm">Message</button>
            </div>
          </div>
        </div>

        {/* Hiring Pipeline */}
        <div className="col-12">
          <h3 className="h5 mb-3">Hiring Pipeline</h3>
          <div className="bg-secondary p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="text-center flex-grow-1 bg-primary p-2 rounded" style={{ backgroundColor: '#3b82f6' }}>Applied</div>
              <div className="text-center flex-grow-1 bg-info p-2 rounded" style={{ backgroundColor: '#2b6cb0' }}>Interview</div>
              <div className="text-center flex-grow-1 bg-dark p-2 rounded">Hired</div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Applied</span>
              <span>150</span>
              <span>Interview</span>
              <span>45</span>
              <span>Hired</span>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Dashboard;