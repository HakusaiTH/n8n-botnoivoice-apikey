import React from 'react';
import './App.css';


const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/img/logo_voice.png" alt="V VOICE Logo" />
          </div>
          <div className="footer-social-icons">
            <a href="https://web.facebook.com/texttospeech.botnoi" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.tiktok.com/@botnoivoice" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
            <a href="https://page.line.me/bgp2113d" aria-label="Line" target="_blank" rel="noopener noreferrer"><i className="fab fa-line"></i></a>
            <a href="https://www.youtube.com/@BOTNOIGROUP" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
          <a href="https://www.botnoigroup.com" className="footer-link-text">www.botnoigroup.com</a>
          <a href="#" className="footer-link-text">Privacy & Policy</a>
        </div>

        <div className="footer-col">
          <h3>BOTNOI VOICE</h3>
          <ul>
            <li><a href="https://voice.botnoi.ai/marketplace/selectvoice" target="_blank" rel="noopener noreferrer">Voice Marketplace</a></li>
            <li><a href="https://voice.botnoi.ai/tts/api-developer-v2" target="_blank" rel="noopener noreferrer">API</a></li>
            <li><a href="https://voice.botnoi.ai/payment/quote" target="_blank" rel="noopener noreferrer">Pricing <span className="sale-badge">SALE</span></a></li>
            <li><a href="https://botnoigroup.com/th/teamprice" target="_blank" rel="noopener noreferrer">Enterprise Pricing</a></li>
            <li><a href="https://voice.botnoi.ai/" target="_blank" rel="noopener noreferrer">VOICE BOT</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Menu</h3>
          <ul>
            <li><a href="https://voice.botnoi.ai/payment/quote" target="_blank" rel="noopener noreferrer">Buy Package</a></li>
            <li><a href="https://voice.botnoi.ai/payment/quote" target="_blank" rel="noopener noreferrer">Buy Points</a></li>
            <li><a href="https://botnoigroup.com/th/botnoivoice/doc/create-project" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            <li><a href="https://botnoigroup.com/th/botnoivoice/help-center" target="_blank" rel="noopener noreferrer">Report Issue</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Tools</h3>
          <ul>
            <li><a href="https://voice.botnoi.ai/languages/english" target="_blank" rel="noopener noreferrer"><i className="fas fa-circle small-dot"></i> English Text to Speech</a></li>
            <li><a href="https://voice.botnoi.ai/languages/thai" target="_blank" rel="noopener noreferrer"><i className="fas fa-circle small-dot"></i> Thai Text to Speech</a></li>
            <li><a href="https://voice.botnoi.ai/languages/chinese" target="_blank" rel="noopener noreferrer"><i className="fas fa-circle small-dot"></i> Chinese Text to Speech</a></li>
            <li><a href="https://voice.botnoi.ai/languages/japanese" target="_blank" rel="noopener noreferrer"><i className="fas fa-circle small-dot"></i> Japanese Text to Speech</a></li>
            <li><a href="https://voice.botnoi.ai/languages/vietnamese" target="_blank" rel="noopener noreferrer"><i className="fas fa-circle small-dot"></i> Vietnamese Text to Speech</a></li>
            <li><a href="https://voice.botnoi.ai/languages/indonesian" target="_blank" rel="noopener noreferrer"><i className="fas fa-circle small-dot"></i> Indonesian Text to Speech</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;