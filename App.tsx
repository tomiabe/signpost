import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
// V5 (Apple/Cupertino)
import CupertinoHomePage from './pages/CupertinoHomePage';
import CupertinoGuidePage from './pages/CupertinoGuidePage';
// V4 (Hub)
import HubHomePage from './pages/HubHomePage';
// V3 (Archive)
import ArchiveHomePage from './pages/ArchiveHomePage';
// V2 (Modern)
import ModernHomePage from './pages/ModernHomePage';
// V1 (Classic)
import LegacyHomePage from './pages/LegacyHomePage';

import GuidePage from './pages/GuidePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';

// Admin Imports
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditor from './pages/admin/AdminEditor';

// Wrapper to handle scroll restoration manually
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* ADMIN ROUTES (Hidden from public nav) */}
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/new" element={<AdminLayout><AdminEditor /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><div className="text-center py-20 text-brand-zinc-400">Settings coming soon</div></AdminLayout>} />

        {/* PUBLIC ROUTES */}
        
        {/* V5: Cupertino / Apple Style (NEW DEFAULT) */}
        <Route path="/" element={<Layout variant="cupertino"><CupertinoHomePage /></Layout>} />
        <Route path="/guide/:id" element={<Layout variant="cupertino"><CupertinoGuidePage /></Layout>} />
        
        {/* V4: The Hub (Moved to /hub) */}
        <Route path="/hub" element={<Layout variant="hub"><HubHomePage /></Layout>} />
        
        {/* V3: Archive */}
        <Route path="/archive" element={<Layout variant="archive"><ArchiveHomePage /></Layout>} />
        
        {/* V2: Modern */}
        <Route path="/v2" element={<Layout variant="modern"><ModernHomePage /></Layout>} />
        
        {/* V1: Classic */}
        <Route path="/classic" element={<Layout variant="classic"><LegacyHomePage /></Layout>} />

        {/* Shared Pages - Defaulting to Cupertino layout for these unless specific overrides needed */}
        <Route path="/category/:id" element={<Layout variant="cupertino"><CategoryPage /></Layout>} />
        <Route path="/search" element={<Layout variant="cupertino"><SearchPage /></Layout>} />
        
        <Route path="/about" element={
          <Layout variant="cupertino">
            <div className="max-w-[800px] mx-auto px-6 py-24">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cup-green mb-4 block">Our Mission</span>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-cup-text mb-8 tracking-tight">Public Information <br/> as a Public Right.</h1>
              <div className="prose prose-lg text-brand-cup-subtext leading-relaxed">
                <p>
                  Signpost is a citizen-driven initiative designed to demystify public services in Nigeria. 
                  Our mission is to provide accurate, up-to-date, and easy-to-understand guides for everyday processes.
                </p>
                <p>
                  We believe that information is a public right. By organizing the chaos of public bureaucracy, 
                  we empower millions of Nigerians to save time, avoid extortion, and get things done.
                </p>
              </div>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;