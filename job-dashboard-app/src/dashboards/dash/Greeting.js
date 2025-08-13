import React from 'react';

const Greeting = () => {
  return (
    // {/* Greeting and Progress */}
      <div className="d-flex align-items-start mb-4">
        <div>
          <h2 className="h3">Hi, Rakshith!</h2>
          <p>Here's your career progress.</p>
        </div>
        <div className="bg-secondary p-4 rounded ms-4 d-flex align-items-center ">
          {/* Circular Progress */}
          <div className="position-relative" style={{ width: '128px', height: '128px' }}>
            <div
              className="position-absolute top-0 start-0 rounded-circle"
              style={{
                width: '128px',
                height: '128px',
                background: 'conic-gradient(#0d6efd 0% 78%, #212529 78% 100%)',
              }}>

            </div>
            <div className="position-absolute top-50 start-50 translate-middle bg-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: '96px', height: '96px' }}>
              <span className="fs-4 fw-bold">78%</span>
            </div>
            <p className="position-absolute start-50 translate-middle-x text-center text-muted" style={{ bottom: '-24px', width: '100%' }}>Score</p>
          </div>
          {/* Skill Summary */}
          <div className="ms-4 text-center">
            <p>Skill Gap Summary</p>
            <p className="text-muted">3 skills Missing</p>
          </div>
          <div className="ms-4 text-center">
            <p>RecommendedGlobe</p>
            <a href="#" className="text-info">View Courses</a>
          </div>
          <button className="btn btn-primary ms-4">Improve</button>
        </div>
      </div>

          
      );
};

export default Greeting;