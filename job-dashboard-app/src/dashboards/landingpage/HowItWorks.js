import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const HowItWorks = () => {
  const stepsSeekers = [
    { icon: 'bi-file-earmark-text-fill', text: ['Upload', 'Resume'] },
    { icon: 'bi-bar-chart-fill', text: ['Get Score', '& Insights'] },
    { icon: 'bi-person-fill', text: ['Apply for', 'Best-Matched Jobs'] },
  ];

  const stepsRecruiters = [
    { icon: 'bi-briefcase-fill', text: ['Post Job', 'Upload Resumes'] },
    { icon: 'bi-bar-chart-fill', text: ['AI Ranks', 'Candidates'] },
    { icon: 'bi-person-check-fill', text: ['Hire the', 'Best Fit'] },
  ];

  const renderSteps = (steps) => (
    <div className="position-relative mx-auto" style={{ maxWidth: '520px' }}>
      {/* Connector line (centered through icons) */}
      <div
        className="position-absolute"
        style={{
          top: '25px', // vertically centered with icon top
          left: '5%',
          right: '5%',
          height: '3px',
          backgroundColor: 'rgb(238, 247, 255)',
          zIndex: 0,
        }}
      ></div>

      {/* Steps */}
      <div className="d-flex justify-content-between align-items-center">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="text-center position-relative bg-white px-4"
            style={{ zIndex: 1 }}
          >
            <div
              className="rounded-3 d-flex justify-content-center align-items-center mx-auto fs-3"
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#e6f0ff',
                color: '#0d6efd',
                position: 'relative',
                zIndex: 2, // icons above line
              }}
            >
              <i className={`bi ${step.icon}`}></i> {/* Corrected className syntax */}
            </div>

            {/* Step text (each part on its own line) */}
            <div className="mt-2 small fw-semibold">
              {step.text.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-5 bg-white text-center">
      <h2 className="h2 fw-bold text-dark mb-5">How It Works</h2>

      <div className="container">
        <div className="row">
          {/* For Job Seekers */}
          <div className="col-md-6 mb-5">
            <h3 className="h5 text-dark mb-4">For Job Seekers</h3>
            {renderSteps(stepsSeekers)}
          </div>

          {/* For Recruiters */}
          <div className="col-md-6 mb-5">
            <h3 className="h5 text-dark mb-4">For Recruiters</h3>
            {renderSteps(stepsRecruiters)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;