// Header.js
import React, { useState } from 'react';
import './App.css';

const Header = ({ onLoginClick, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="#" className="logo">
          <img src="/img/botnoi_voice_n8n-logo.png" alt="Logo" />
        </a>
        <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="https://voice.botnoi.ai/marketplace/selectvoice" target="_blank" rel="noopener noreferrer">Voice Marketplace</a></li>
            <li><a href="https://voice.botnoi.ai/tts/api-developer-v2" target="_blank" rel="noopener noreferrer">API</a></li>
            <li><a href="https://voice.botnoi.ai/payment/quote" target="_blank" rel="noopener noreferrer">Pricing <span className="sale-badge">SALE</span></a></li>
            <li><a href="https://botnoigroup.com/th/teamprice" target="_blank" rel="noopener noreferrer">Enterprise Pricing</a></li>
            <li><a href="https://voice.botnoi.ai/" target="_blank" rel="noopener noreferrer">VOICE BOT</a></li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <div className={`lang-dropdown ${langDropdownOpen ? 'active' : ''}`}>
          <div className="selected-lang" onClick={toggleLangDropdown}>
            <img src="/img/EN.svg" alt="English Flag" />
            <span>EN</span>
            <div className="arrow-down"></div>
          </div>
          <ul className={`lang-options ${langDropdownOpen ? 'show' : ''}`}>
            <li><img src="/img/EN.svg" alt="English Flag" /> <span>EN</span></li>
          </ul>
        </div>

        {user ? (
          <div className="user-info">
            <img src={user.photoURL} alt="Profile" className="user-avatar" />
            <span>{user.displayName}</span>
            <small>{user.uid}</small>
          </div>
        ) : (
          <>
            <a href="#" className="login-btn" onClick={(e) => {
              e.preventDefault();
              onLoginClick();
            }}>Login</a>
            <a href="#" className="signup-btn" onClick={(e) => {
              e.preventDefault();
              onLoginClick();
            }}>Sign Up</a>
          </>
        )}

        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
