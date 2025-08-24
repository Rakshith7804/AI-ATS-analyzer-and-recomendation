import React from 'react';
import Header from '../landingpage/Header.js';
import HeroSection from '../landingpage/HeroSection.js';
import KeyFeatures from '../landingpage/KeyFeatures.js';
import HowItWorks from '../landingpage/HowItWorks.js';
import WhyChooseATS from '../landingpage/WhyChooseATS.js';
import CallToAction from '../landingpage/CallToAction.js';
import Footer from '../landingpage/Footer.js';
// import SignUp from '../landingpage/SignUp.js'; // Import SignUp component



const Landingpage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <KeyFeatures />
    <HowItWorks />
    <WhyChooseATS />
    <CallToAction />
    <Footer />
    {/* <SignUp /> */}
    </>
  );
};

export default Landingpage;