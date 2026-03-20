import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import { DataProvider } from './context/DataContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const hour = new Date().getHours();
      // Auto dark mode: 7pm (19) to 7am (7)
      const shouldBeDark = hour >= 19 || hour < 7;
      
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setIsDark(storedTheme === 'dark');
      } else {
        setIsDark(shouldBeDark);
      }
    };

    checkTheme();
    // Check every minute in case time passes threshold while user is on site
    const interval = setInterval(checkTheme, 60000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <Layout isDark={isDark} onToggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guide/:id" element={<GuidePage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about" element={
              <div className="max-w-2xl mx-auto px-6 py-24 animate-fade-in">
                <h1 className="text-6xl font-black tracking-tighter mb-12">The Mission</h1>
                <div className="space-y-8 text-xl md:text-2xl text-black/60 dark:text-white/50 leading-relaxed font-medium">
                  <p>
                    Most government sites explain the system. 
                    <span className="text-black dark:text-white"> We explain the path.</span>
                  </p>
                  <p>
                    Signpost is a citizen-driven digital compass designed to demystify 
                    the bureaucratic landscape of Nigeria, starting with Lagos.
                  </p>
                  <p>
                    We believe that transparency reduces friction, eliminates extortion, 
                    and empowers citizens to participate fully in civil life.
                  </p>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </DataProvider>
  );
};

export default App;