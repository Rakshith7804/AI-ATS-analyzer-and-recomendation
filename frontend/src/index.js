import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './landingpage/Header';
import Footer from './landingpage/Footer';
import HeroSection from './landingpage/HeroSection';
import KeyFeatures from './landingpage/KeyFeatures';
import HowItWorks from './landingpage/HowItWorks';
import WhyChooseATS from './landingpage/WhyChooseATS';
import CallToAction from './landingpage/CallToAction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <HeroSection />
        <KeyFeatures />
        <HowItWorks />
        <WhyChooseATS />
        <CallToAction />
      </main>
      <Footer />
    </div>
);

