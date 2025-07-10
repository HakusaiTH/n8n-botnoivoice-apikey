// LoginModal.js
import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Loader2 } from 'lucide-react';
import { useAuth } from './useAuth'; // <- เปลี่ยน path ตามของคุณ
import { useNavigate } from 'react-router-dom'; // 👈 เพิ่ม

const LoginModal = ({ isOpen, onClose }) => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { signInWithGoogle, loading, error } = useAuth();
  const navigate = useNavigate(); // 👈 เพิ่ม

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await signInWithGoogle(navigate); // 👈 ส่ง navigate เข้าไป
      console.log('✅ Sign in success');
      onClose(); // ปิด modal หลังล็อกอินสำเร็จ
    } catch (error) {
      console.error('❌ Sign in failed:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Login</h2>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading || isSigningIn}
          className="login-option google-option"
        >
          {isSigningIn ? (
            <Loader2 className="animate-spin" style={{ width: '1.2rem', height: '1.2rem' }} />
          ) : (
            <>
              <span>Login with Google</span>
            </>
          )}
        </button>

        {error && <p className="error-text" style={{ color: 'red' }}>Login failed. Please try again.</p>}

        <p className="terms-text">
          By continuing, you accept our{' '}
          <a href="https://your-terms-url" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="https://your-privacy-url" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
