import React from 'react';

const Greeting = () => {
  return (
    // {/* Greeting and Progress */}
      <div className="d-flex align-items-start mb-4 gap-4">
        <div>
          <h2 className="h3">Hi, Rakshith!</h2>
          <p>Here's your career progress.</p>
        </div>
          {/* Circular Progress */}
          <div className='bg-dark border m-4 p-2 rounded bg-regular align-items-center justify-content-center' style={{ width: '150px', height: '170px' }}>
          <div className="position-relative" style={{ width: '128px', height: '128px' }}>
            <div
              className="position-absolute top-0 start-0 rounded-circle"
              style={{
                width: '128px',
                height: '128px',
                background: 'conic-gradient(#0d6efd 0% 78%, #cbcfd2ff 78% 100%)',
              }}>

            </div>
            <div className="position-absolute top-50 start-50 translate-middle bg-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: '96px', height: '96px' }}>
              <span className="fs-4 fw-bold">78%</span>
            </div>
            <p className="position-absolute start-50 translate-middle-x text-center" style={{ bottom: '-44px', width: '100%' }}>Score</p>
          </div></div>
          {/* Skill Summary */}
          <div className="text-center rounded border ">
            <p>Skill Gap Summary</p>
            <p className="">3 skills Missing</p>
          </div>
          <div className="text-center border rounded">
            <p>RecommendedGlobe</p>
            <a href="#" className="text-info">View Courses</a>
          
          <button className="btn btn-primary ms-4">Improve</button>
        </div>
      </div>

          
      );
};

export default Greeting;