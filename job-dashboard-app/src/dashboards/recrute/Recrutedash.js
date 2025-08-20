import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Navigate } from 'react-router-dom';
// import H
// import ResumeBuilder from './ResumeBuilder';
import StatsSection from './StatsSection';
import Jobposting from './RecentJobPostings';
import TopCandidates from './Top Candidates';
import Hiring from './Hiring Pipeline';

const Recrutedash = () => {
  return (
    <div className="bg-dark text-light p-4 vh-100 vw-100 border border-secondary rounded flex-grow-1">
      {/* <Header /> */}
      <div className="row g-3">
        <StatsSection />
        <Jobposting />
        <TopCandidates />
        <Hiring />
      </div>
      <Routes>
        {/* <Route path="/resume" element={<ResumeBuilder />} /> */}
      </Routes>
    </div>
  );
};

export default Recrutedash;