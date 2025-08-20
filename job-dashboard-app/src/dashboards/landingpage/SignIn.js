import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Custom Icons
const GoogleIcon = () => <i className="bi bi-google"></i>;
const FacebookIcon = () => <i className="bi bi-facebook"></i>;

const SignIn = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [serverError, setServerError] = useState(''); // For popup errors
  const navigate = useNavigate();

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

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

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError('');
    if (emailError || passwordError) return;

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('usertype', result.usertype);
        navigate(result.usertype === 'job-seeker' ? '/job-seekers' : '/recruiters');
      } else {
        setServerError(result.message); // Show popup or error message
      }
    } catch (err) {
      setServerError('Server error. Please try again.');
    }
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
          <h1 className="h4 text-center mb-4">Sign in</h1>
          {serverError && <div className="alert alert-danger">{serverError}</div>} {/* Popup for errors */}
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
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
                autoComplete="current-password"
              />
              {passwordError && <div className="invalid-feedback">{passwordErrorMessage}</div>}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="rememberMe"
                value="rememberMe"
                color="primary"
              />
              <label className="form-check-label">Remember me</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={validateInputs}
            >
              Sign in
            </button>
          </form>
          <div className="text-center my-3">
            <span className="text-muted">or</span>
          </div>
          <div className="d-flex flex-column gap-2">
            <button
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => alert('Sign in with Google')}
            >
              <GoogleIcon /> Sign in with Google
            </button>
            <button
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => alert('Sign in with Facebook')}
            >
              <FacebookIcon /> Sign in with Facebook
            </button>
            <p className="text-center mt-3 mb-0">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-primary">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;