import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTiktok, faLine, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://web.facebook.com/texttospeech.botnoi" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.tiktok.com/@botnoivoice" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="https://page.line.me/bgp2113d" aria-label="Line" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLine} />
      </a>
      <a href="https://www.youtube.com/@BOTNOIGROUP" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
};

export default SocialIcons;
