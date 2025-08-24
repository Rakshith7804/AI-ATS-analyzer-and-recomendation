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
    <div className="bg-gray-100 text-gray-900 p-4 vh-100 vw-100 border border-gray-200 rounded flex-grow-1">
          <div className="row g-3">
            <StatsSection />
            <Jobposting />
            <TopCandidates />
            <Hiring />
          </div>
        </div>
  );
};

export default Recrutedash;