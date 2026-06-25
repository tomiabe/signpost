import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDark, onToggleTheme }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-yellow selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-70">
            <Compass size={24} className="text-black dark:text-white" />
            <span className="font-semibold text-xl tracking-tight">Signpost</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="hidden sm:block text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <Link to="/search" className="hidden sm:block text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">Directory</Link>
            <Link to="/about" className="hidden sm:block text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">Mission</Link>
            <button 
              onClick={onToggleTheme} 
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs space-y-4">
            <div className="flex items-center gap-2">
              <Compass size={20} />
              <span className="font-semibold text-lg tracking-tight">Signpost</span>
            </div>
            <p className="text-sm text-black/50 dark:text-white/40 leading-relaxed font-medium">
              Your digital compass for public services in Lagos, Nigeria. 
              Built for people, by people.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/30">Explore</h4>
              <nav className="flex flex-col gap-2 text-sm font-medium">
                <Link to="/category/family" className="hover:opacity-60 transition-opacity">Family</Link>
                <Link to="/category/travel" className="hover:opacity-60 transition-opacity">Travel</Link>
                <Link to="/category/driving" className="hover:opacity-60 transition-opacity">Driving</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/30">Signpost</h4>
              <nav className="flex flex-col gap-2 text-sm font-medium">
                <Link to="/about" className="hover:opacity-60 transition-opacity">Mission</Link>
                <a href="mailto:hello@signpost.ng" className="hover:opacity-60 transition-opacity">Contact</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-16 mt-16 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-black/30 dark:text-white/20">
          <span>&copy; {new Date().getFullYear()} Signpost | By Tomi Abe Studio</span>
          <div className="flex gap-6">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;