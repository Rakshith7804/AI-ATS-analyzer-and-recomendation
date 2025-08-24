import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary border border-primary shadow-lg sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">AI Hiring Platform</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="p-2 d-flex gap-3" id="navbarNav">
        <ul className="d-flex gap-3 navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/KeyFeatures">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/HowItWorks">How It Works</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/WhyChooseUs">Why Choose Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Link to="./Signup" className="btn btn-light text-primary">
          Sign Up
        </Link>
        <Link to="/signin" className="btn btn-light text-primary">
          Login
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;