import React, { useState } from 'react';
import './App.css';

const ApiKeySection = () => {
  const [apiKey, setApiKey] = useState("YjRMbFFrY0d1QlBaWGBlTbmhOVX94aWhlVXN4MjU2NA==");
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
      .then(() => {
        setShowCopyMessage(true);
        setTimeout(() => setShowCopyMessage(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = apiKey;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setShowCopyMessage(true);
          setTimeout(() => setShowCopyMessage(false), 2000);
        } catch (err) {
          console.error('Fallback copy failed: ', err);
        }
        document.body.removeChild(textArea);
      });
  };

  const refreshApiKey = () => {
    // In a real app, this would call your backend to generate a new key
    const newKey = "sk_" + Math.random().toString(36).substring(2, 32) + Math.random().toString(36).substring(2, 10);
    setApiKey(newKey);
    alert('New API Key generated! (In a real app, this would update securely from your server.)');
  };

  return (
    <main className="api-key-container">
      <div className="api-key-card">
        <h2>Your API Keys</h2>
        <p>You can use the API Keys to generate voices as needed at <a href="#" className="api-docs-link">API Documentation</a></p>
        <div className="api-key-box">
          <input 
            type="text" 
            id="apiKeyInput" 
            value={apiKey} 
            readOnly
          />
          <button 
            className="icon-button" 
            id="refreshApiKeyBtn" 
            aria-label="Refresh API Key"
            onClick={refreshApiKey}
          >
            <i className="fas fa-sync-alt"></i>
          </button>
          <button 
            className="icon-button" 
            id="copyApiKeyBtn" 
            aria-label="Copy API Key"
            onClick={copyApiKey}
          >
            <i className="fas fa-copy"></i>
          </button>
        </div>
        <span className={`copy-message ${showCopyMessage ? 'show' : ''}`} id="copyMessage">
          Copied!
        </span>
      </div>
    </main>
  );
};

export default ApiKeySection;