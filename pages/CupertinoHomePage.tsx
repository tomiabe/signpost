import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowRight, Search, ChevronRight, Zap, ShieldCheck, Compass } from 'lucide-react';
import * as Icons from 'lucide-react';

const CupertinoHomePage: React.FC = () => {
  const navigate = useNavigate();
  const { categories, guides } = useData();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) navigate(`/search?q=${query}`);
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-[980px] mx-auto text-center">
         <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-cup-text text-brand-cup-yellow rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
               <Compass size={40} strokeWidth={1.5} />
            </div>
         </div>
         <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-brand-cup-text mb-6">
           Signpost.
         </h1>
         <p className="text-xl md:text-2xl text-brand-cup-subtext max-w-2xl mx-auto font-normal leading-relaxed">
           Your digital compass for public services in Nigeria. 
           Know where to go, what to pay, and how to get it done.
         </p>

         {/* Search Bar - Big, Central, Apple Style */}
         <div className="mt-12 max-w-lg mx-auto relative group">
            <form onSubmit={handleSearch}>
               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-brand-cup-subtext group-focus-within:text-brand-cup-text transition-colors" />
               </div>
               <input 
                 type="text" 
                 placeholder="Find a guide (e.g. Passport, License)..." 
                 className="block w-full pl-12 pr-4 py-4 bg-white border border-brand-cup-border rounded-2xl text-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-brand-cup-text/5 focus:border-brand-cup-text transition-all placeholder:text-brand-cup-subtext/50"
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
               />
            </form>
         </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="px-6 max-w-[980px] mx-auto">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-brand-cup-text">Browse Services</h2>
            <Link to="/search" className="text-brand-cup-green text-sm font-medium hover:underline flex items-center gap-1">
               View Full Directory <ChevronRight size={14} />
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Featured Tile (Yellow) - Takes 2 cols on tablet, 1 on desktop */}
            <div className="bg-brand-cup-yellow rounded-3xl p-8 flex flex-col justify-between h-[340px] relative overflow-hidden group cursor-pointer hover:shadow-apple-hover transition-shadow duration-500" onClick={() => navigate('/guide/4')}>
                <div className="relative z-10">
                   <p className="text-xs font-bold uppercase tracking-wider text-black/60 mb-2">Essential</p>
                   <h3 className="text-3xl font-bold text-black leading-tight">Nigerian <br/>Passport</h3>
                </div>
                <div className="relative z-10">
                   <span className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium group-hover:bg-black/80 transition-colors">
                      Start Guide <ArrowRight size={14} />
                   </span>
                </div>
                {/* Abstract Decor */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            {/* Green Tile - Quick Action */}
            <div className="bg-brand-cup-green rounded-3xl p-8 flex flex-col justify-between h-[340px] relative overflow-hidden group cursor-pointer hover:shadow-apple-hover transition-shadow duration-500" onClick={() => navigate('/guide/3')}>
                <div className="relative z-10">
                   <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Trending</p>
                   <h3 className="text-3xl font-bold text-white leading-tight">Driver's <br/>License</h3>
                </div>
                <div className="absolute bottom-8 right-8 text-white opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Zap size={64} />
                </div>
            </div>

            {/* Standard White Tiles for Categories */}
            {categories.slice(0, 4).map(cat => {
               const IconComponent = (Icons as any)[cat.iconName] || Icons.Box;
               return (
                  <Link key={cat.id} to={`/category/${cat.id}`} className="bg-white rounded-3xl p-6 border border-brand-cup-border/50 flex flex-col justify-between h-[340px] hover:shadow-apple-hover transition-all duration-300 group">
                      <div>
                         <div className="w-12 h-12 bg-brand-cup-bg rounded-xl flex items-center justify-center text-brand-cup-text mb-6 group-hover:bg-brand-cup-text group-hover:text-white transition-colors duration-300">
                            <IconComponent size={24} />
                         </div>
                         <h3 className="text-xl font-semibold text-brand-cup-text mb-2">{cat.name}</h3>
                         <p className="text-brand-cup-subtext text-sm leading-relaxed">{cat.description}</p>
                      </div>
                      <div className="flex justify-end">
                         <div className="w-8 h-8 rounded-full bg-brand-cup-bg flex items-center justify-center text-brand-cup-text group-hover:bg-brand-cup-text group-hover:text-white transition-colors">
                            <ArrowRight size={14} />
                         </div>
                      </div>
                  </Link>
               );
            })}
         </div>

         {/* Full Width Footer Banner */}
         <div className="mt-5 bg-black rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
               <div className="flex items-center gap-2 text-brand-cup-green mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-sm font-bold uppercase tracking-wide">Community Verified</span>
               </div>
               <h3 className="text-3xl md:text-4xl font-semibold mb-4">Information you can trust.</h3>
               <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Signpost is a citizen-maintained registry. We are not the government. We exist to make the government work for you.
               </p>
               <Link to="/about" className="text-brand-cup-green hover:underline text-lg font-medium">Read our Manifesto</Link>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cup-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
         </div>
      </section>
    </div>
  );
};

export default CupertinoHomePage;