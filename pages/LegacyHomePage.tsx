import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../data';

// Internal Legacy Hero Component
const LegacyHero: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-600 blur-3xl"></div>
         <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-amber-500 blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24 md:pt-32 md:pb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Find your way through <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
            Nigeria's Public Services
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10">
          Clear, step-by-step guides for passports, licenses, registrations, and more. 
          Stop guessing, start doing.
        </p>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-5 bg-white border-2 border-slate-200 rounded-full text-lg shadow-lg placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all"
            placeholder="What do you need to do today? (e.g., Renew Passport)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-emerald-600 text-white px-6 rounded-full font-medium hover:bg-emerald-800 transition-colors flex items-center"
          >
            Search
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <span>Trending:</span>
          <button onClick={() => navigate('/guide/1')} className="bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full transition-colors">Marriage Registry</button>
          <button onClick={() => navigate('/guide/2')} className="bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full transition-colors">Yellow Fever Card</button>
        </div>
      </div>
    </div>
  );
};

const LegacyHomePage: React.FC = () => {
  return (
    <div>
      <LegacyHero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Explore by Category</h2>
            <p className="mt-2 text-slate-500">Everything organized so you don't get lost.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      <section className="bg-emerald-900 py-16 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Help us improve Signpost</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
              Have you recently visited a public office? Did the process change? 
              Share your experience to help thousands of other Nigerians.
            </p>
            <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-lg">
              Contribute an Update
            </button>
         </div>
      </section>
    </div>
  );
};

export default LegacyHomePage;
