// App.js
import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SocialIcons from './SocialIcons';
import LoginModal from './LoginModal';
import EmailLoginModal from './EmailLoginModal';
import Footer from './Footer';
import './App.css';

// index
function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [emailLoginModalOpen, setEmailLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openEmailLoginModal = () => {
    setLoginModalOpen(false);
    setEmailLoginModalOpen(true);
  };

  const closeEmailLoginModal = () => {
    setEmailLoginModalOpen(false);
  };

  return (
    <div className="App">
      <Header onLoginClick={openLoginModal} />
      <HeroSection />
      <SocialIcons />
      <Footer />
      
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={closeLoginModal} 
        onEmailLoginClick={openEmailLoginModal}
      />
      
      <EmailLoginModal 
        isOpen={emailLoginModalOpen} 
        onClose={closeEmailLoginModal}
      />
    </div>
  );
}

export default App;


// apikey section
/*
import ApiKeySection from './ApiKeySection';

function App() {
  return (
    <div className="App">
      <Header />
      <ApiKeySection />
      <SocialIcons />
      <Footer />
    </div>
  );
}

export default App;

*/