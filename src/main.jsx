import 'react-app-polyfill/stable'; // Comprehensive polyfill for common browser APIs
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PersonaProvider } from './context/PersonaContext';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonaProvider>
      <App />
    </PersonaProvider>
  </React.StrictMode>
);
