import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { LanguageProvider } from './contexts/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
