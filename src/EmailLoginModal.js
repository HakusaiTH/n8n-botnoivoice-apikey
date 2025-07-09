import React, { useState } from 'react';
import './App.css';


const EmailLoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password, rememberMe });
  };

  return (
    <div className="modal" id="loginEmailModal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2 className="modal-title">Sign in</h2>

        <form className="email-login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email*</label>
          </div>
          <div className="input-group password-group">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              name="password" 
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password*</label>
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </span>
          </div>

          <div className="form-options">
            <label className="checkbox-container">Remember me
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkmark"></span>
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className={`primary-btn sign-in-submit-btn ${email && password ? 'active' : ''}`}
            disabled={!email || !password}
          >
            Sign in
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login-options">
          <button className="login-option google-option">
            <i className="fab fa-google"></i> Google
          </button>
          <button className="login-option line-option">
            <i className="fab fa-line"></i> Line
          </button>
        </div>

        <p className="signup-prompt">Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
      </div>
    </div>
  );
};

export default EmailLoginModal;