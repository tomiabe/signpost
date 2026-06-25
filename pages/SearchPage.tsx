import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Search, ArrowRight, Frown, BookOpen, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { guides, categories } = useData();

  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return guides.filter(guide => 
      guide.title.toLowerCase().includes(lowerQuery) || 
      guide.summary.toLowerCase().includes(lowerQuery) ||
      guide.steps.some(step => step.title.toLowerCase().includes(lowerQuery))
    );
  }, [query, guides]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 animate-fade-in">
      {/* Search Input Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">{query ? 'Search Results' : 'Directory'}</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-black/50 dark:text-white/50" />
          </div>
          <input 
            type="text" 
            placeholder="Search the entire registry..."
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-xl text-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-black/5 dark:focus:ring-white/5 focus:border-black dark:focus:border-white transition-all text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40"
            value={query}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Logic: If Searching, show results. If empty, show FULL DIRECTORY. */}
      {query ? (
         <div className="space-y-4">
            {results.length > 0 ? (
               results.map(guide => (
                  <Link key={guide.id} to={`/guide/${guide.id}`} className="block group">
                     <article className="bg-white dark:bg-black text-black dark:text-white p-6 rounded-2xl border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all hover:shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider bg-brand-green/10 px-2 py-0.5 rounded-full">
                              {categories.find(c => c.id === guide.categoryId)?.name}
                           </span>
                        </div>
                        <h2 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-brand-green transition-colors">{guide.title}</h2>
                        <p className="text-black/60 dark:text-white/60 mb-3">{guide.summary}</p>
                     </article>
                  </Link>
               ))
            ) : (
               <div className="text-center py-20">
                  <Frown className="mx-auto h-12 w-12 text-black/40 dark:text-white/40 mb-4" />
                  <h3 className="text-lg font-medium text-black dark:text-white">No matches found</h3>
                  <p className="text-black/50 dark:text-white/50 mt-1">Try a different keyword.</p>
               </div>
            )}
         </div>
      ) : (
         /* FULL DIRECTORY VIEW (When no search query) */
         <div className="space-y-12 animate-fade-in">
            {categories.map(category => {
               const categoryGuides = guides.filter(g => g.categoryId === category.id);
               if (categoryGuides.length === 0) return null;
               
               const IconComponent = (Icons as any)[category.iconName] || Icons.Box;

               return (
                  <div key={category.id}>
                     <Link to={`/category/${category.id}`} className="flex items-center gap-3 mb-6 group">
                        <div className="w-10 h-10 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                           <IconComponent size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-black dark:text-white group-hover:text-brand-green transition-colors">{category.name}</h2>
                        <ChevronRight className="text-black/50 dark:text-white/50 group-hover:text-brand-green transition-colors" size={20} />
                     </Link>
                     
                     <div className="grid grid-cols-1 gap-4">
                        {categoryGuides.map(guide => (
                           <Link key={guide.id} to={`/guide/${guide.id}`} className="flex items-center justify-between p-5 bg-white dark:bg-black text-black dark:text-white rounded-2xl border border-black/5 dark:border-white/10 hover:border-brand-green/50 dark:hover:border-brand-green/50 hover:shadow-lg transition-all group">
                              <div>
                                 <h3 className="text-lg font-semibold text-black dark:text-white mb-1 group-hover:text-brand-green transition-colors">{guide.title}</h3>
                                 <p className="text-sm text-black/50 dark:text-white/50 line-clamp-1">{guide.summary}</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/60 dark:text-white/60 group-hover:bg-brand-green group-hover:text-white transition-colors">
                                 <ArrowRight size={14} />
                              </div>
                           </Link>
                        ))}
                     </div>
                  </div>
               );
            })}
            
            <div className="p-8 bg-black/5 dark:bg-white/5 rounded-3xl text-center">
               <p className="text-black/60 dark:text-white/60 mb-2">Can't find what you're looking for?</p>
               <button className="text-black dark:text-white font-bold text-sm hover:underline">Request a Guide</button>
            </div>
         </div>
      )}
    </div>
  );
};

export default SearchPage;