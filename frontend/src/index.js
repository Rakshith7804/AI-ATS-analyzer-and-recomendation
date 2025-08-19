import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import React Router components
import Header from './landingpage/Header';
import Footer from './landingpage/Footer';
import HeroSection from './landingpage/HeroSection';
import KeyFeatures from './landingpage/KeyFeatures';
import HowItWorks from './landingpage/HowItWorks';
import WhyChooseATS from './landingpage/WhyChooseATS';
import CallToAction from './landingpage/CallToAction';
import SignUp from './landingpage/SignUp'; // Import SignUp component
// import SignIn from './landingpage/SignIn'; // Import SignIn component (assuming it exists)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={
          <main className="flex-grow-1">
            <HeroSection />
            <KeyFeatures />
            <HowItWorks />
            <WhyChooseATS />
            <CallToAction />
          </main>
        } />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);