import React from 'react';
import Greeting from './Greeting';
import JobRecommendations from './Job Recomend';
import ApplicationTracker from './Application Tracker';
import Header from './Header';

const Dashboard = () => {
  return (
    <div className="bg-dark text-light p-4 vh-100 vw-100 border border-secondary rounded">
      <Header />
      <Greeting />
      <JobRecommendations />
      <ApplicationTracker />
    </div>
  );
};

export default Dashboard;