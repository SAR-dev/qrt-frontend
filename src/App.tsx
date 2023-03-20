import { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';
import { modeTypes, themeTypes } from './types/theme';

// Pages
import Signin from './pages/Signin';
import Home from './pages/Home';
import EventSection from './pages/EventSection';
import EventTicket from './pages/EventTicket';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [theme, setTheme] = useState<themeTypes>('ios');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useLayoutEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  });

  const toogleTheme = () => {
    if (theme === 'ios') {
      setTheme('material');
    } else {
      setTheme('ios');
    }
  };

  const [currentColorTheme, setCurrentColorTheme] = useState('');
  const setColorTheme = (color: string) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.forEach((c) => {
      if (c.includes('k-color')) htmlEl.classList.remove(c);
    });
    if (color) htmlEl.classList.add(color);
    setCurrentColorTheme(color);
  };

  useEffect(() => {
    (window as any).setTheme = (t: themeTypes) => setTheme(t);
    (window as any).setMode = (mode: modeTypes) => {
      if (mode === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    };
  }, []);

  const inIFrame = window.parent !== window;
  useLayoutEffect(() => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty(
          '--k-safe-area-top',
          theme === 'ios' ? '44px' : '24px'
        );
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  }, [theme]);

  return (
    <GoogleOAuthProvider clientId='412190183346-1bev16hi3n99lbr85350mkeshtj5hjrp.apps.googleusercontent.com'>
      <KonstaApp theme={theme} safeAreas={!inIFrame}>
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events/:event_id" element={<EventSection />} />
            <Route path="/events/:event_id/ticket" element={<EventTicket />} />
            <Route path="/events/:event_id/:section" element={<EventSection />} />
          </Routes>
        </Router>
      </KonstaApp>
    </GoogleOAuthProvider>
  );
}

export default App;
