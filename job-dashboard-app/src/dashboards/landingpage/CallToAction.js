import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="bg-light py-5 m-4 text-center">
    <h2 className="h4 text-dark mb-4">Ready to hire or get hired faster?</h2>
    <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
  </section>
);

export default CallToAction;