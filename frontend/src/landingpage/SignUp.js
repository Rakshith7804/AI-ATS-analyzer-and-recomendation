import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { useNavigate } from 'react-router-dom';
 // Import useNavigate // For custom icons (if needed)
 // Initialize useNavigate
// Custom Icons (replace with Bootstrap Icons or your own)
const GoogleIcon = () => <i className="bi bi-google"></i>;
const FacebookIcon = () => <i className="bi bi-facebook"></i>;
// const SitemarkIcon = () => <i className="bi bi-asterisk"></i>; // Placeholder, replace with your logo

const SignUp = (props) => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  // const navigate = useNavigate();

  const   validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    if (nameError || emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="d-flex vh-100 overflow-hidden bg-light" style={{ 
      backgroundImage: 'radial-gradient(ellipse at 50% 50%, #95acffff, #a9caff7f)',
      position: 'relative',
      zIndex: 0,
    }}>
      <div className="d-flex justify-content-center align-items-center w-100 p-2" style={{ minHeight: '100%' }}>
        <div className="card shadow-lg" style={{ 
          maxWidth: '500px', 
          width: '100%', 
          padding: '2rem',  
          border: 'none', 
          boxShadow: '0 5px 15px rgba(116, 137, 247, 0.6), 0 15px 35px -5px rgba(0, 0, 0, 0.05)',
        }}>
          {/* <SitemarkIcon style={{ fontSize: '2rem', color: '#0d6efd' }} /> */}
          <h1 className="h4 text-center mb-4">Sign up</h1>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full name</label>
              <input
                type="text"
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                placeholder="Jon Snow"
                required
                autoComplete="name"
              />
              {nameError && <div className="invalid-feedback">{nameErrorMessage}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
              {emailError && <div className="invalid-feedback">{emailErrorMessage}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                id="password"
                name="password"
                placeholder="••••••"
                required
                autoComplete="new-password"
              />
              {passwordError && <div className="invalid-feedback">{passwordErrorMessage}</div>}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="allowExtraEmails"
                value="allowExtraEmails"
                color="primary"
              />
              <label className="form-check-label">I want to receive updates via email.</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={validateInputs}
            >
              Sign up
            </button>
          </form>
          <div className="text-center my-3">
            <span className="text-muted">or</span>
          </div>
          <div className="d-flex flex-column gap-2">
            <button
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => alert('Sign up with Google')}
            >
              <GoogleIcon /> Sign up with Google
            </button>
            <button
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => alert('Sign up with Facebook')}
            >
              <FacebookIcon /> Sign up with Facebook
            </button>
            <p className="text-center mt-3 mb-0">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;