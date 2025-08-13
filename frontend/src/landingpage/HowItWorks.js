import React from 'react';

const HowItWorks = () => (
  <section className="py-5 text-center">
    <h2 className="h3 text-dark mb-4">How It Works</h2>
    <div className="row g-4">
      <div className="col-md-6">
        <h3 className="h5 text-primary mb-3">For Job Seekers</h3>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="d-flex align-items-center">
            <span className="bg-light p-2 rounded-circle me-2">📄</span>
            <p>Upload Resume</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="bg-light p-2 rounded-circle me-2">📊</span>
            <p>Get Score & Insights</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="bg-light p-2 rounded-circle me-2">👤</span>
            <p>Apply for Best-Matched Jobs</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h3 className="h5 text-primary mb-3">For Recruiters</h3>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="d-flex align-items-center">
            <span className="bg-light p-2 rounded-circle me-2">📢</span>
            <p>Post Job</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="bg-light p-2 rounded-circle me-2">📤</span>
            <p>Upload Resumes</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="bg-light p-2 rounded-circle me-2">🏆</span>
            <p>AI Ranks Candidates</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="bg-light p-2 rounded-circle me-2">✅</span>
            <p>Hire the Best Fit</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;