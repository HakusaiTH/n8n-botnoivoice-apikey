import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import SocialIcons from './SocialIcons';
import LoginModal from './LoginModal';
import EmailLoginModal from './EmailLoginModal';
import Footer from './Footer';
import ApiKeySection from './ApiKeySection';
import { useAuth } from './useAuth';
import './App.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialIcons />
      <Footer />
    </>
  );
}

function AppRoutes() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [emailLoginModalOpen, setEmailLoginModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // ถ้า login แล้ว ให้พาไปหน้า /apikey อัตโนมัติ
      navigate('/apikey');
    }
  }, [user, navigate]);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);
  const openEmailLoginModal = () => {
    setLoginModalOpen(false);
    setEmailLoginModalOpen(true);
  };
  const closeEmailLoginModal = () => setEmailLoginModalOpen(false);

  return (
    <>
      <Header onLoginClick={openLoginModal} user={user} />

      <Routes>
        {/* ถ้า user ยังไม่ login ให้ไปหน้า Home */}
        <Route
          path="/"
          element={!user ? <HomePage /> : <Navigate to="/apikey" replace />}
        />

        {/* หน้า apikey ต้อง login แล้วเท่านั้น */}
        <Route
          path="/apikey"
          element={user ? <ApiKeySection /> : <Navigate to="/" replace />}
        />
      </Routes>

      <LoginModal
        isOpen={loginModalOpen}
        onClose={closeLoginModal}
        onEmailLoginClick={openEmailLoginModal}
      />
      <EmailLoginModal
        isOpen={emailLoginModalOpen}
        onClose={closeEmailLoginModal}
      />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
