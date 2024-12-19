//import React from 'react'
import './css/St.css';

/*const Setting = () => {
    const [settings, setSettings] = React.useState({
        theme: 'light',
        language: 'English'
      });

      const handleUpdateSettings = (newSettings) => {
        setSettings(newSettings);
      };
  return (
    <div>
         <div id="settings">
        <h2>Settings</h2>
        <form>
          <label>Theme:</label>
          <select value={settings.theme} onChange={(e) => handleUpdateSettings({ theme: e.target.value })}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <br />
          <label>Language:</label>
          <select value={settings.language} onChange={(e) => handleUpdateSettings({ language: e.target.value })}>
            <option value="English">English</option>
            <option value ="Spanish">Spanish</option>
          </select>
        </form>
      </div>
      
    </div>
  )
}

export default Setting*/
//import './styles.css';

import React from 'react';
import { useTheme } from './css/themeprovider'

const Setting = () => {
    const { theme, toggleTheme } = useTheme();
    const [language, setLanguage] = React.useState('English');

    // Language texts
    const texts = {
        English: {
            title: "Settings",
            themeLabel: "Theme:",
            languageLabel: "Language:",
            toggleTheme: "Toggle Theme"
        },
        Spanish: {
            title: "Configuraciones",
            themeLabel: "Tema:",
            languageLabel: "Idioma:",
            toggleTheme: "Alternar Tema"
        }
    };

    return (
        <div className={theme}>
            <div id="settings">
                <h2>{texts[language].title}</h2>
                <form>
                    <label>{texts[language].themeLabel}</label>
                    <select value={theme} onChange={toggleTheme}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    <br />
                    <label>{texts[language].languageLabel}</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                    <button type="button" onClick={toggleTheme}>
                        {texts[language].toggleTheme}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Setting;