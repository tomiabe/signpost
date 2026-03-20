import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';
import { ArrowRight, Search, FileText, Hash, MapPin } from 'lucide-react';

const ArchiveHomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div className="px-6 lg:px-16 py-12 max-w-[1600px] mx-auto">
      
      {/* Hero Section: Typographic Poster */}
      <section className="mb-24 pt-10">
        <div className="border-b-4 border-brand-ink pb-8 mb-8 flex justify-between items-end">
           <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-[0.9] max-w-4xl">
             The Unofficial <br/>
             <span className="italic text-brand-indigo">Manual</span> for <br/>
             the Republic.
           </h1>
           <div className="hidden md:block text-right font-mono text-sm tracking-widest uppercase">
              <p>Vol. 3.0</p>
              <p>Lagos State Edition</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
           <div className="md:col-span-7">
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-brand-ink/80">
                 Signpost is an independent initiative cataloging the bureaucratic processes of Nigeria. 
                 We turn confusion into checklists.
              </p>
              
              <form onSubmit={handleSearch} className="mt-10 relative">
                 <input 
                   type="text" 
                   placeholder="Search for a procedure (e.g. Passport)..."
                   className="w-full bg-transparent border-b-2 border-brand-ink/20 py-4 text-3xl font-serif italic placeholder-brand-ink/30 focus:outline-none focus:border-brand-safety transition-colors"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
                 <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 bg-brand-safety text-white p-3 rounded-full hover:bg-brand-ink transition-colors">
                    <ArrowRight size={24} />
                 </button>
              </form>
           </div>
           
           <div className="md:col-span-5 bg-brand-tan p-8 rounded-sm border border-brand-ink/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Hash size={100} />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-widest mb-6 border-b border-brand-ink/10 pb-2">Quick Access</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Book Marriage Registry', link: '/guide/1' },
                   { label: 'Renew Driver\'s License', link: '/guide/3' },
                   { label: 'Yellow Fever Card', link: '/guide/2' },
                 ].map((item, idx) => (
                   <Link key={idx} to={item.link} className="flex items-center justify-between group cursor-pointer">
                      <span className="font-serif text-lg font-bold border-b border-transparent group-hover:border-brand-safety transition-all">{item.label}</span>
                      <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-safety" />
                   </Link>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Categories: The Index */}
      <section className="mb-32">
         <div className="flex items-center gap-4 mb-10">
            <div className="w-4 h-4 bg-brand-safety"></div>
            <h2 className="font-mono text-sm uppercase tracking-widest">Table of Contents</h2>
         </div>

         <div className="border-t border-brand-ink">
            {CATEGORIES.map((cat, idx) => (
               <Link 
                 key={cat.id} 
                 to={`/category/${cat.id}`}
                 className="group block border-b border-brand-ink py-12 relative hover:bg-brand-ink hover:text-white transition-colors duration-300"
               >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 px-4 md:px-0">
                     <div className="md:w-1/4">
                        <span className="font-mono text-sm md:text-base opacity-50 group-hover:text-brand-safety transition-colors">0{idx + 1} /</span>
                     </div>
                     <div className="md:w-2/4">
                        <h3 className="text-4xl md:text-6xl font-serif font-bold mb-2 group-hover:translate-x-4 transition-transform duration-300">
                           {cat.name}
                        </h3>
                     </div>
                     <div className="md:w-1/4 flex justify-end items-center">
                        <p className="hidden md:block text-sm font-sans max-w-xs opacity-0 group-hover:opacity-80 transition-opacity">
                           {cat.description}
                        </p>
                        <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-brand-safety" size={32} />
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>

      {/* Footer Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-brand-ink pt-12 pb-24">
         <div>
            <h4 className="font-serif text-2xl font-bold mb-4">The Citizen's Pledge.</h4>
            <p className="font-sans text-brand-ink/70">
               Information should be free, accessible, and easy to understand. We are not the government; we are the people.
            </p>
         </div>
         <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6">Locations Covered</h4>
            <ul className="space-y-2 font-serif text-lg">
               <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-safety" /> Lagos Island</li>
               <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-safety" /> Ikeja</li>
               <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-safety" /> Abuja (Beta)</li>
            </ul>
         </div>
         <div className="bg-brand-indigo text-brand-almond p-8 rounded-sm">
            <p className="font-mono text-xs uppercase mb-4 opacity-50">Updates</p>
            <p className="font-serif text-xl italic mb-6">
               "New passport prices officially announced by NIS effective September."
            </p>
            <button className="text-xs font-mono border-b border-brand-safety pb-1 hover:text-brand-safety transition-colors">Read Full Notice</button>
         </div>
      </section>

    </div>
  );
};

export default ArchiveHomePage;