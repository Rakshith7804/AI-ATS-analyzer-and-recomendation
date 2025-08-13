import React from 'react';

const HeroSection = () => (
    <div className='p-4'>
  <div class="bg-body-secondary text-center d-flex gap-2 border rounded shadow-lg" style={{height: '45vh'}}>
    <div className="p-5 text-start">
    <h1 className='fs-3'>Hire Smarter. Apply Faster. With AI-Powered Resume Scoring & Job Matching.</h1>
    <p className="text-muted mb-4">Our AI ranks, scores, and matches resumes in seconds—making hiring and job hunting easier than ever.</p>
    <div>
      <button className="btn btn-success align-center">Get Started</button>
    </div></div>
    <div className="p-5 ">
        <h1 className='fs-3'>image content here</h1>
    </div>
  </div>
  </div>
);

export default HeroSection;