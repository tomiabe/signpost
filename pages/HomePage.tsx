
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  Search, 
  ArrowRight, 
  ChevronRight, 
  Heart, 
  Plane, 
  ShieldCheck, 
  Car, 
  Briefcase, 
  Baby, 
  GraduationCap, 
  Vote,
  Users,
  Fingerprint
} from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { categories } = useData();
  const [query, setQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    "Get married in Lagos",
    "Renew Nigerian passport",
    "Apply for driver’s license",
    "Register a business",
    "Yellow fever card"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) navigate(`/search?q=${query}`);
  };

  const tasks = [
    { id: '1', title: 'Marriage Registry', color: 'bg-brand-yellow text-black', icon: Heart, scope: 'Lagos' },
    { id: '3', title: 'Passport Renewal', color: 'bg-brand-green text-white', icon: Plane, scope: 'Nigeria' },
    { id: '2', title: 'Yellow Fever Card', color: 'bg-brand-blue text-white', icon: ShieldCheck, scope: 'Lagos' },
    { id: '4', title: 'Driver’s License', color: 'bg-brand-orange text-black', icon: Car, scope: 'Lagos' },
    { id: '5', title: 'Business (CAC)', color: 'bg-brand-purple text-white', icon: Briefcase, scope: 'Nigeria' },
    { id: '6', title: 'Birth Certificate', color: 'bg-brand-pink text-white', icon: Baby, scope: 'Nigeria' },
    { id: '7', title: 'NYSC Registration', color: 'bg-brand-indigo text-white', icon: GraduationCap, scope: 'Nigeria' },
    { id: '8', title: 'Voter Transfer', color: 'bg-brand-red text-white', icon: Vote, scope: 'Nigeria' },
  ];

  const categoryIcons: Record<string, any> = {
    family: Users,
    travel: Plane,
    driving: Car,
    business: Briefcase,
    ids: Fingerprint,
    education: GraduationCap,
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="animate-slide-up flex flex-col items-center">
          
          {/* Main Heading - Wide enough for 2 lines */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-black dark:text-white leading-[1.1] mb-6 max-w-3xl lg:max-w-4xl">
            Your digital compass for public services in Lagos, Nigeria.
          </h1>
          
          {/* Subheading - Wide enough for 1 line on desktop */}
          <p className="text-xl md:text-2xl lg:text-3xl text-black/60 dark:text-white/40 font-semibold tracking-tight leading-snug mb-14 max-w-3xl md:max-w-5xl lg:max-w-6xl">
            Know where to go, what to pay, and how to get it done.
          </p>

          <div className="w-full max-w-2xl">
            <form onSubmit={handleSearch} className="flex gap-3 items-stretch">
              <div className="relative flex-grow">
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-black/50 dark:text-white/50" />
                </div>
                <input 
                  type="text" 
                  placeholder={placeholders[placeholderIndex]}
                  className="block w-full h-full pl-16 pr-6 py-6 bg-black/5 dark:bg-white/5 border-2 border-transparent rounded-3xl text-xl font-medium text-black dark:text-white shadow-inner focus:outline-none focus:bg-white dark:focus:bg-black focus:ring-0 focus:border-black dark:focus:border-white transition-all placeholder:text-black/20 dark:placeholder:text-white/10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-3xl font-semibold text-xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center shrink-0 shadow-lg"
              >
                Find Guide
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="px-6 max-w-6xl mx-auto mb-32">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/30 dark:text-white/20 mb-12 text-center">Popular Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, idx) => (
            <Link 
              key={task.id} 
              to={`/guide/${task.id}`} 
              className={`${task.color} rounded-[2.5rem] p-8 h-64 relative flex flex-col justify-between overflow-hidden group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-up`}
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{task.scope}</span>
              </div>
              
              <div className="relative z-10 flex flex-col gap-1">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight">{task.title}</h3>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity">
                  View Steps <ArrowRight size={12} />
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 group-hover:-translate-x-6 group-hover:-translate-y-6 transition-all duration-1000 transform pointer-events-none text-current">
                <task.icon size={200} strokeWidth={1.5} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Directory Section with Icons */}
      <section className="px-6 max-w-6xl mx-auto mb-32">
        <div className="flex items-center justify-between mb-12 border-b-2 border-black/5 dark:border-white/10 pb-6">
           <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white">Directory</h2>
           <Link to="/search" className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
              View All <ChevronRight size={16} />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const CategoryIcon = categoryIcons[cat.id] || Search;
            return (
              <Link 
                key={cat.id} 
                to={`/category/${cat.id}`} 
                className="p-10 bg-white dark:bg-black border border-black/5 dark:border-white/10 rounded-[2.5rem] text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group flex flex-col"
              >
                <div className="mb-8 p-4 bg-black/5 dark:bg-white/5 w-fit rounded-2xl group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-colors">
                  <CategoryIcon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-4">{cat.name}</h3>
                <p className="text-base font-medium opacity-50 mb-8 leading-relaxed">{cat.description}</p>
                <div className="mt-auto text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 flex items-center gap-2 transition-opacity">
                  Explore <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="px-6 max-w-6xl mx-auto mb-32">
        <div className="bg-black dark:bg-white rounded-[4rem] p-12 md:p-24 text-white dark:text-black relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-10 leading-tight">
              A clear path through <br className="hidden sm:block" />
              the paperwork.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
              <div className="space-y-4">
                <h4 className="font-semibold text-xl">Verified Guides</h4>
                <p className="text-sm font-medium opacity-50 leading-relaxed">Sourced from official mandates and updated by actual citizens.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-xl">Zero Jargon</h4>
                <p className="text-sm font-medium opacity-50 leading-relaxed">We translate complex bureaucracy into simple, actionable steps.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-xl">Independent</h4>
                <p className="text-sm font-medium opacity-50 leading-relaxed">Built by citizens for citizens. We aren't the government, we're the compass.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
