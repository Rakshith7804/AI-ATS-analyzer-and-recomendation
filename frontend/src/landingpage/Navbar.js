import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary border border-primary shadow-lg sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">AI Hiring Platform</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="p-2 d-flex gap-3" id="navbarNav">
        <ul className='d-flex gap-3 navbar-nav '>
          <li className="nav-item text-decoration-none">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./landingpage/KeyFeatures.js">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./landingpage/HowItWorks.js">How It Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./landingpage/WhyChooseUs.js">Why Choose Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./landingpage/Contact.js">Contact Us</a>
          </li>
        </ul>
          <button className="btn btn-light text-primary w-30" type="button">Sign In</button>
          <button className="btn btn-light text-primary w-30" type="button">Login</button>

      </div>
    </div>
  </nav>
);

export default Navbar;