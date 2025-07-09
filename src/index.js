import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- update this line
import App from './App';
// import reportWebVitals from './reportWebVitals'; // Remove if not needed
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(); // Remove or keep as needed