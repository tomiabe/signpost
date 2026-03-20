import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FilePlus, Settings, LogOut, Compass } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
          isActive 
            ? 'bg-brand-zinc-900 text-white shadow-lg' 
            : 'text-brand-zinc-500 hover:bg-white hover:text-brand-zinc-900'
        }`}
      >
        <Icon size={18} />
        <span className="font-medium text-sm">{label}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-brand-zinc-100 flex font-sans text-brand-zinc-900">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-brand-zinc-50 border-r border-brand-zinc-200 flex flex-col p-6 fixed h-full z-20">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="bg-brand-lemon w-8 h-8 rounded-lg flex items-center justify-center text-brand-zinc-900">
            <Compass size={18} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg tracking-tight">Studio</span>
        </div>

        <nav className="space-y-2 flex-grow">
          <NavItem to="/admin" icon={LayoutDashboard} label="Overview" />
          <NavItem to="/admin/new" icon={FilePlus} label="New Guide" />
          <NavItem to="/admin/settings" icon={Settings} label="Settings" />
        </nav>

        <div className="mt-auto pt-6 border-t border-brand-zinc-200">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-brand-zinc-500 hover:text-brand-zinc-900 transition-colors">
            <LogOut size={18} />
            <span className="font-medium text-sm">Exit to App</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-8 lg:p-12 overflow-y-auto min-h-screen">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;