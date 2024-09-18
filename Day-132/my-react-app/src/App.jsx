import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import { useUser } from './contexts/UserContext';
import { useLanguage } from './contexts/LanguageContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, updateUser } = useUser();
  const { language, setLanguage } = useLanguage();

  const handleNameChange = (e) => updateUser({ ...user, name: e.target.value });
  const handleEmailChange = (e) => updateUser({ ...user, email: e.target.value });
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h2>Update User Information</h2>
      <input type="text" value={user.name} onChange={handleNameChange} placeholder="Name" />
      <input type="email" value={user.email} onChange={handleEmailChange} placeholder="Email" />

      <h2>Language Settings</h2>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <p>Current Language: {language}</p>
    </div>
  );
};

export default App;
