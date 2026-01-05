import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X, Search, ArrowRight, CornerDownRight, BookOpen, Layers, Clock, Grid, Home, Info, ChevronRight, Hash, Command } from 'lucide-react';
import { CATEGORIES } from '../data';

interface LayoutProps {
  children: React.ReactNode;
  variant?: 'modern' | 'classic' | 'archive' | 'hub' | 'cupertino';
}

const Layout: React.FC<LayoutProps> = ({ children, variant = 'cupertino' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  if (variant === 'classic') return <ClassicLayout>{children}</ClassicLayout>;
  if (variant === 'modern') return <ModernLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>{children}</ModernLayout>;
  if (variant === 'archive') return <ArchiveLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>{children}</ArchiveLayout>;
  if (variant === 'hub') return <HubLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>{children}</HubLayout>;

  // DEFAULT: Cupertino Layout (V5 - Apple Style)
  return (
    <div className="min-h-screen flex flex-col bg-brand-cup-bg text-brand-cup-text font-sans selection:bg-brand-cup-yellow selection:text-black">
      
      {/* Global Apple-style Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-brand-cup-border/30 transition-all duration-300">
        <div className="max-w-[980px] mx-auto px-6 h-12 flex justify-between items-center text-xs font-medium tracking-wide">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group">
             <div className="text-brand-cup-text group-hover:text-brand-cup-green transition-colors">
                <Compass size={18} />
             </div>
             <span className="font-semibold text-[13px]">Signpost</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-brand-cup-text/80">
             <Link to="/search" className="hover:text-brand-cup-text transition-colors">Directory</Link>
             <Link to="/about" className="hover:text-brand-cup-text transition-colors">Mission</Link>
             <Link to="/hub" className="hover:text-brand-cup-text transition-colors opacity-50 hover:opacity-100">Legacy Hub</Link>
          </div>

          {/* Search Trigger */}
          <div className="flex items-center gap-4">
             <Link to="/search" className="hover:text-brand-cup-green transition-colors">
                <Search size={16} />
             </Link>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                <Menu size={18} />
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cup-bg pt-20 px-6 lg:hidden animate-fade-in">
            <nav className="flex flex-col space-y-6 text-2xl font-bold text-brand-cup-text">
               <Link to="/" className="border-b border-brand-cup-border pb-4">Start</Link>
               <Link to="/search" className="border-b border-brand-cup-border pb-4">Directory</Link>
               <Link to="/about" className="border-b border-brand-cup-border pb-4">Mission</Link>
               <Link to="/hub" className="text-sm font-normal text-brand-cup-subtext">View Previous Version</Link>
            </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-12 animate-fade-in">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-cup-bg border-t border-brand-cup-border py-12 px-6">
         <div className="max-w-[980px] mx-auto text-[11px] text-brand-cup-subtext space-y-2">
            <p>Copyright © {new Date().getFullYear()} Signpost. All rights reserved.</p>
            <div className="flex gap-4 pt-2">
               <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
               <Link to="/terms" className="hover:underline">Terms of Use</Link>
               <Link to="/admin" className="hover:underline opacity-0 hover:opacity-100 transition-opacity">Studio</Link>
            </div>
         </div>
      </footer>
    </div>
  );
};


// ----------------------------------------------------------------------
// HUB LAYOUT (V4)
// ----------------------------------------------------------------------
const HubLayout: React.FC<{children: React.ReactNode, isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void}> = ({ children, isMenuOpen, setIsMenuOpen }) => {
    return (
    <div className="min-h-screen flex bg-brand-zinc-50 text-brand-zinc-900 font-sans selection:bg-brand-lemon selection:text-brand-zinc-950">
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-brand-zinc-200 z-50 px-4 py-3 flex justify-between items-center">
         <Link to="/hub" className="flex items-center gap-2">
             <div className="w-8 h-8 bg-brand-zinc-900 text-brand-lemon flex items-center justify-center rounded-lg"><Compass size={18} strokeWidth={3} /></div>
             <span className="font-bold text-lg tracking-tight">Signpost</span>
         </Link>
         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-brand-zinc-100 rounded-md">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
         </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden">
            <nav className="space-y-4">
               <Link to="/hub" className="block py-2 text-lg font-medium border-b border-brand-zinc-100">Hub Home</Link>
               <Link to="/" className="block py-2 text-lg font-medium border-b border-brand-zinc-100">Switch to Cupertino</Link>
            </nav>
        </div>
      )}
      <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-white border-r border-brand-zinc-200 p-6 z-20">
        <Link to="/hub" className="flex items-center gap-3 mb-10 group">
          <div className="w-8 h-8 bg-brand-zinc-950 text-brand-lemon flex items-center justify-center rounded-lg shadow-sm group-hover:scale-105 transition-transform"><Compass size={20} strokeWidth={2.5} /></div>
          <div className="flex flex-col"><span className="font-bold text-lg leading-none text-brand-zinc-950">Signpost</span><span className="text-[10px] font-medium text-brand-zinc-400 uppercase tracking-wider mt-0.5">Lagos Hub</span></div>
        </Link>
        <div className="flex-grow space-y-8 overflow-y-auto pr-2 custom-scrollbar">
           <div>
              <p className="text-xs font-semibold text-brand-zinc-400 uppercase tracking-wider mb-3 pl-2">Menu</p>
              <nav className="space-y-1">
                 <Link to="/hub" className="flex items-center gap-3 px-3 py-2 rounded-md bg-brand-zinc-100 text-brand-zinc-950 font-medium"><Home size={18} /><span className="text-sm">Dashboard</span></Link>
                 <Link to="/search" className="flex items-center gap-3 px-3 py-2 rounded-md text-brand-zinc-500 hover:bg-brand-zinc-50 hover:text-brand-zinc-900"><Search size={18} /><span className="text-sm">Search</span></Link>
              </nav>
           </div>
        </div>
        <div className="pt-6 border-t border-brand-zinc-100 mt-auto">
           <Link to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-brand-zinc-50 text-xs font-medium text-brand-zinc-500 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div><span>Switch to V5 (Apple)</span>
           </Link>
        </div>
      </aside>
      <main className="flex-grow pt-16 lg:pt-0 min-h-screen bg-brand-zinc-50/50">
         <div className="max-w-6xl mx-auto p-6 lg:p-12">{children}</div>
      </main>
    </div>
    )
}

// ----------------------------------------------------------------------
// ARCHIVE LAYOUT (V3)
// ----------------------------------------------------------------------
const ArchiveLayout: React.FC<{children: React.ReactNode, isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void}> = ({ children, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="min-h-screen flex bg-brand-almond text-brand-ink font-serif selection:bg-brand-safety selection:text-white">
      <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 border-r border-brand-ink/10 p-8 justify-between">
        <div>
           <Link to="/archive" className="flex items-center gap-3 mb-12 group">
             <div className="w-10 h-10 bg-brand-indigo text-white flex items-center justify-center rounded-sm"><span className="font-serif font-black text-2xl italic">S.</span></div>
             <div className="flex flex-col"><span className="font-serif font-bold text-xl leading-none">Signpost</span><span className="font-mono text-[10px] uppercase tracking-widest text-brand-safety">Registry</span></div>
           </Link>
        </div>
      </aside>
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-brand-almond border-b border-brand-ink/10 z-50 px-4 py-3 flex justify-between items-center">
         <Link to="/archive" className="flex items-center gap-2"><div className="w-8 h-8 bg-brand-indigo text-white flex items-center justify-center rounded-sm"><span className="font-serif font-black text-lg italic">S.</span></div><span className="font-serif font-bold text-lg">Signpost</span></Link>
         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">{isMenuOpen ? <X /> : <Menu />}</button>
      </div>
      <main className="flex-grow pt-20 lg:pt-0 min-h-screen">{children}</main>
    </div>
  );
};

// ----------------------------------------------------------------------
// MODERN LAYOUT (V2)
// ----------------------------------------------------------------------
const ModernLayout: React.FC<{children: React.ReactNode, isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void}> = ({ children, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-brand-lime selection:text-brand-black relative font-sans">
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/v2" className="pointer-events-auto bg-brand-dark text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
            <Compass size={20} className="text-brand-lime" />
            <span className="font-display font-bold text-lg tracking-wide">Signpost<span className="text-brand-lime">.ng</span></span>
          </Link>
          <div className="pointer-events-auto flex items-center gap-3">
             <button onClick={() => setIsMenuOpen(true)} className="bg-brand-lime text-brand-black px-5 py-3 rounded-full font-mono font-bold uppercase text-sm tracking-wider hover:bg-brand-lime/90 transition-colors shadow-xl flex items-center gap-2">Menu <Menu size={16} /></button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className={`fixed inset-0 bg-brand-black z-[60] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
           <div className="absolute top-6 right-6 md:right-12"><button onClick={() => setIsMenuOpen(false)} className="bg-white/10 text-white p-4 rounded-full hover:bg-white/20 transition-colors"><X size={24} /></button></div>
        </div>
      )}
      <main className="flex-grow pt-24 pb-12">{children}</main>
    </div>
  )
}

// ----------------------------------------------------------------------
// CLASSIC LAYOUT (V1)
// ----------------------------------------------------------------------
const ClassicLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/classic" className="flex items-center gap-2 group"><span className="text-xl font-bold tracking-tight text-slate-900">Signpost<span className="text-emerald-600">.ng</span></span></Link>
            <nav className="hidden md:flex space-x-8"><Link to="/" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Switch to V5</Link></nav>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md">{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;