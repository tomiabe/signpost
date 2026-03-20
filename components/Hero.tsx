import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CornerRightDown } from 'lucide-react';
import { CATEGORIES } from '../data';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [activeVerb, setActiveVerb] = useState('register');
  const [activeTopic, setActiveTopic] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTopic) {
        navigate(`/search?q=${encodeURIComponent(activeTopic)}`);
    } else {
        // Fallback or animation shake
    }
  };

  const commonTopics = [
    'my passport', 'a business', 'for marriage', 'my driver\'s license', 'a yellow card'
  ];

  return (
    <div className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-lime opacity-10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary opacity-5 rounded-full blur-[120px]"></div>
         <div className="absolute top-[20%] left-[20%] w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 md:mb-12 flex items-center gap-3 animate-float">
          <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-bold">Beta</span>
          <span className="text-brand-dark/50 font-mono text-sm">The digital compass for Lagosians</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-brand-dark leading-[0.9] tracking-tighter mb-12">
          Lagos, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-dark opacity-90" style={{ WebkitTextStroke: '2px #1a3c34' }}>Simplified.</span>
        </h1>

        <div className="max-w-4xl">
          <form onSubmit={handleSearch} className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-brand-black/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-4 text-2xl md:text-4xl lg:text-5xl font-display font-bold text-brand-dark leading-snug">
              <span className="text-brand-dark/40">I want to</span>
              
              <div className="relative inline-block group">
                <select 
                  className="appearance-none bg-brand-lime/20 border-b-4 border-brand-lime text-brand-dark px-4 py-1 rounded-lg focus:outline-none focus:bg-brand-lime/40 cursor-pointer transition-colors"
                  value={activeVerb}
                  onChange={(e) => setActiveVerb(e.target.value)}
                >
                  <option value="register">register</option>
                  <option value="renew">renew</option>
                  <option value="apply for">apply for</option>
                  <option value="find">find</option>
                </select>
                <CornerRightDown className="absolute -right-6 -top-6 text-brand-lime w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity rotate-12" />
              </div>

              <div className="relative inline-block flex-grow min-w-[200px]">
                <input 
                  type="text" 
                  placeholder="my passport..." 
                  className="w-full bg-transparent border-b-4 border-brand-black/10 px-2 py-1 focus:outline-none focus:border-brand-dark placeholder-brand-dark/20"
                  value={activeTopic}
                  onChange={(e) => setActiveTopic(e.target.value)}
                />
              </div>

              <span className="text-brand-dark/40">in Lagos.</span>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div className="flex flex-wrap gap-2 text-sm font-mono text-brand-dark/60">
                  <span>Try:</span>
                  {commonTopics.map((t, i) => (
                    <button 
                      key={i} 
                      type="button" 
                      onClick={() => setActiveTopic(t)}
                      className="hover:text-brand-primary underline decoration-brand-lime decoration-2 underline-offset-4"
                    >
                      {t}
                    </button>
                  ))}
               </div>
               
               <button 
                 type="submit"
                 className="bg-brand-dark text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-brand-black transition-all group"
               >
                 <span className="font-mono font-bold uppercase text-sm tracking-widest">Let's Go</span>
                 <div className="bg-brand-lime text-brand-black p-3 rounded-full group-hover:rotate-45 transition-transform">
                   <ArrowRight size={20} />
                 </div>
               </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
