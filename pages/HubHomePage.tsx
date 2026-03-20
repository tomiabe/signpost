import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Search, ArrowRight, CornerRightDown, Sparkles, MapPin, TrendingUp, BookOpen, Clock } from 'lucide-react';
import * as Icons from 'lucide-react';

const HubHomePage: React.FC = () => {
  const navigate = useNavigate();
  const { guides, categories } = useData();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) navigate(`/search?q=${query}`);
  };

  const trendingGuides = guides.slice(0, 3);

  return (
    <div className="space-y-12">
      
      {/* Search Header Section */}
      <section className="bg-white rounded-2xl border border-brand-zinc-200 p-8 md:p-12 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-zinc-100 rounded-full translate-x-20 -translate-y-20 opacity-50 group-hover:bg-brand-lemon/20 transition-colors duration-700"></div>
        
        <div className="relative z-10 max-w-2xl">
           <h1 className="text-3xl md:text-5xl font-bold text-brand-zinc-950 tracking-tight mb-4">
             Public Services, <br/>
             <span className="text-brand-zinc-400">Decoded.</span>
           </h1>
           <p className="text-brand-zinc-500 text-lg mb-8">
             The unofficial digital registry for Nigerian civil processes. 
             Verified, clear, and designed for you.
           </p>

           <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                 <Search className="h-5 w-5 text-brand-zinc-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for passport, license, or registration..." 
                className="w-full pl-12 pr-4 py-4 bg-brand-zinc-50 border border-brand-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-zinc-950 focus:border-transparent transition-all shadow-inner text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-brand-zinc-950 text-white px-4 rounded-lg font-medium text-sm hover:bg-brand-zinc-800 transition-colors"
              >
                Search
              </button>
           </form>

           <div className="mt-4 flex items-center gap-2 text-xs text-brand-zinc-400 font-medium">
              <TrendingUp size={14} />
              <span>Trending:</span>
              <button onClick={() => navigate('/guide/1')} className="hover:text-brand-zinc-900 underline decoration-brand-lemon decoration-2 underline-offset-2">Marriage</button>
              <button onClick={() => navigate('/guide/4')} className="hover:text-brand-zinc-900 underline decoration-brand-lemon decoration-2 underline-offset-2">Passport</button>
           </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-xl font-bold text-brand-zinc-950 flex items-center gap-2">
             <div className="w-1.5 h-6 bg-brand-lemon rounded-full"></div>
             Browse by Category
           </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {categories.map(category => {
             const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;
             
             return (
               <Link 
                 key={category.id} 
                 to={`/category/${category.id}`} 
                 className="bg-white border border-brand-zinc-200 rounded-xl p-6 hover:border-brand-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
               >
                 <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-brand-zinc-50 rounded-lg text-brand-zinc-900 group-hover:bg-brand-lemon group-hover:text-brand-zinc-950 transition-colors">
                       <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <ArrowRight size={18} className="text-brand-zinc-300 group-hover:text-brand-zinc-900 transition-colors" />
                 </div>
                 
                 <div className="mt-auto">
                   <h3 className="font-bold text-lg text-brand-zinc-900 mb-1">{category.name}</h3>
                   <p className="text-sm text-brand-zinc-500 line-clamp-2 leading-relaxed">{category.description}</p>
                 </div>
               </Link>
             );
           })}
        </div>
      </section>

      {/* Recent Guides / Quick Access */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Featured List */}
         <div className="lg:col-span-2 bg-white border border-brand-zinc-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-bold text-brand-zinc-900">Essential Guides</h3>
               <Link to="/search" className="text-xs font-bold uppercase tracking-wider text-brand-zinc-400 hover:text-brand-zinc-900 transition-colors">View All</Link>
            </div>

            <div className="space-y-4">
               {trendingGuides.map((guide, idx) => (
                  <Link key={guide.id} to={`/guide/${guide.id}`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-zinc-50 transition-colors group">
                     <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-zinc-100 text-brand-zinc-500 font-mono text-xs font-bold group-hover:bg-brand-zinc-900 group-hover:text-white transition-colors">
                        0{idx + 1}
                     </span>
                     <div>
                        <h4 className="font-bold text-brand-zinc-900 group-hover:text-brand-zinc-700">{guide.title}</h4>
                        <div className="flex items-center gap-3 mt-1 text-xs text-brand-zinc-400">
                           <span className="flex items-center gap-1"><Clock size={12} /> {guide.estimatedTime}</span>
                           <span className="flex items-center gap-1"><MapPin size={12} /> {guide.locationName || 'Online'}</span>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>

         {/* Info Card */}
         <div className="lg:col-span-1 bg-brand-zinc-900 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lemon rounded-full blur-[60px] opacity-20"></div>
            
            <div>
               <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles size={20} className="text-brand-lemon" />
               </div>
               <h3 className="text-xl font-bold mb-2">Signpost Studio</h3>
               <p className="text-brand-zinc-400 text-sm leading-relaxed">
                  Contribute to the registry. Create, edit, and manage public service guides directly from the app.
               </p>
            </div>
            
            <Link to="/admin" className="block text-center mt-8 py-3 px-4 bg-brand-lemon text-brand-zinc-950 font-bold text-sm rounded-lg hover:bg-white transition-colors w-full">
               Open Studio
            </Link>
         </div>
      </section>

    </div>
  );
};

export default HubHomePage;