// LoginModal.js
import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const LoginModal = ({ isOpen, onClose, onEmailLoginClick }) => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <div className="login-option google-option">
          
          <span>Login with Google</span>
        </div>
        <p className="terms-text">By continuing, you accept our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
      </div>
    </div>
  );
};

export default LoginModal;
