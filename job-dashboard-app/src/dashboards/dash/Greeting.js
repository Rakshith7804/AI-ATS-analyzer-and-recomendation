import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';


const Greeting = () => {
  return (
    // Greeting and Progress
    <div className="d-flex align-items-start mb-4 gap-4">
      <div>
        <h2 className="h3">Hi, Rakshith!</h2>
        <p>Here's your career progress.</p>
      </div>

      {/* Circular Progress */}
      <div className="d-flex flex-column align-items-center justify-content-center bg-dark rounded p-3" style={{ width: '300px', height: '300px' }}>
        <Gauge
          value={55}
          startAngle={-110}
          endAngle={110}
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              transform: 'translate(0px, 0px)',
            },
          }}
          text={({ value, valueMax }) => `${value} / ${valueMax}`}
        />
      </div>

      {/* Skill Summary */}
      <div className="text-center rounded border p-2">
        <p>Skill Gap Summary</p>
        <p className="text-muted">3 skills Missing</p>
      </div>
      <div className="text-center border rounded p-2">
        <p>Recommended Jobs</p> {/* Corrected from RecommendedGlobe */}
        <a href="/frontend" className="text-info">View Courses</a>
        <button className="btn btn-primary ms-2">Improve</button> {/* Adjusted margin */}
      </div>
    </div>
  );
};

export default Greeting;