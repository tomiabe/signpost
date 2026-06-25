import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ChevronLeft, Check, ExternalLink, AlertCircle, HelpCircle, MapPin } from 'lucide-react';

const GuidePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getGuide, categories } = useData();
  
  const guide = id ? getGuide(id) : undefined;
  
  if (!guide) return <div className="pt-40 text-center font-semibold text-3xl">Guide not found</div>;

  const category = categories.find(c => c.id === guide.categoryId);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-40 animate-fade-in">
       
       <div className="py-12">
          <Link to="/search" className="inline-flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
             <ChevronLeft size={16} />
             Back to Directory
          </Link>
       </div>

       {/* Hero Header - Matching Home Page Typography Sizes */}
       <header className="mb-24 animate-slide-up">
          <div className="flex flex-wrap items-center gap-4 mb-8">
             <span className="px-4 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em]">
                {category?.name}
             </span>
             <span className="text-[11px] font-bold text-black/30 dark:text-white/30 uppercase tracking-widest">
               Last updated {guide.lastUpdated}
             </span>
          </div>
          
          {/* H1 size matched to Home Page: text-3xl md:text-5xl lg:text-6xl */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-black dark:text-white leading-[1.1] mb-8">
             {guide.title}
          </h1>
          
          {/* Subheading size and style matched to Home Page: text-xl md:text-2xl lg:text-3xl font-semibold */}
          <p className="text-xl md:text-2xl lg:text-3xl text-black/60 dark:text-white/40 font-semibold tracking-tight leading-snug max-w-5xl">
             {guide.summary}
          </p>
       </header>

       {/* Quick Metrics */}
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24 animate-slide-up">
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
             <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 dark:text-white/30">Official Cost</div>
             <div className="text-2xl font-semibold tracking-tight">{guide.estimatedCost}</div>
          </div>
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
             <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 dark:text-white/30">Process Time</div>
             <div className="text-2xl font-semibold tracking-tight">{guide.estimatedTime}</div>
          </div>
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
             <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 dark:text-white/30">Scope</div>
             <div className="text-2xl font-semibold tracking-tight">{guide.scope}</div>
          </div>
       </div>

       <div className="space-y-32">
          {/* Prerequisites */}
          <section className="animate-slide-up">
             <h2 className="text-3xl font-semibold tracking-tight mb-10">Prerequisites</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.requirements.map((req, idx) => (
                   <div key={idx} className="p-6 bg-white dark:bg-black border border-black/5 dark:border-white/10 rounded-2xl flex items-center gap-6 group hover:border-black/20 dark:hover:border-white/20 transition-all">
                      <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                         <Check size={14} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-lg font-medium text-black/80 dark:text-white/80">{req}</span>
                   </div>
                ))}
             </div>
          </section>

          {/* Steps */}
          <section className="animate-slide-up">
             <h2 className="text-3xl font-semibold tracking-tight mb-12">The Steps</h2>
             <div className="space-y-20">
                {guide.steps.map((step, idx) => (
                   <div key={idx} className="relative group flex flex-col md:flex-row gap-10">
                      <div className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                         {idx + 1}
                      </div>
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                        <p className="text-lg text-black/60 dark:text-white/50 leading-relaxed font-medium max-w-5xl">
                           {step.description}
                        </p>
                        {step.tips && (
                          <div className="mt-6 p-6 rounded-3xl bg-brand-yellow/10 border border-brand-yellow/20 max-w-3xl">
                              <ul className="space-y-3">
                                {step.tips.map((tip, i) => (
                                  <li key={i} className="text-sm font-bold text-black/70 dark:text-white/80 flex gap-3">
                                     <span className="text-brand-yellow font-black">!</span> {tip}
                                  </li>
                                ))}
                              </ul>
                          </div>
                        )}
                      </div>
                   </div>
                ))}
             </div>
          </section>

          {/* Insights */}
          {guide.signpostInsights && (
            <section className="bg-brand-yellow text-black rounded-[3rem] p-12 md:p-20 animate-slide-up shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <h2 className="text-3xl font-semibold tracking-tight mb-10 flex items-center gap-4 relative z-10">
                 <AlertCircle size={32} /> Signpost Insights
               </h2>
               <div className="space-y-8 relative z-10">
                  {guide.signpostInsights.map((insight, idx) => (
                    <div key={idx} className="flex gap-6">
                       <span className="text-4xl font-bold opacity-10 italic">"</span>
                       <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed tracking-tight max-w-5xl">
                          {insight}
                       </p>
                    </div>
                  ))}
               </div>
            </section>
          )}

          {/* Location / Action */}
          <section className="animate-slide-up">
             <h2 className="text-3xl font-semibold tracking-tight mb-10">Final Steps</h2>
             <div className="p-12 rounded-[3rem] bg-black dark:bg-white text-white dark:text-black flex flex-col md:flex-row items-center justify-between gap-12 border border-black/5 dark:border-white/10">
                <div className="flex items-center gap-8">
                   <div className="w-16 h-16 bg-white/10 dark:bg-black/10 rounded-3xl flex items-center justify-center">
                      <MapPin size={32} />
                   </div>
                   <div>
                      <p className="text-2xl font-semibold tracking-tight">{guide.locationName || 'Official Portal'}</p>
                      <p className="text-xs font-bold opacity-40 uppercase tracking-[0.2em] mt-1">Main Processing Point</p>
                   </div>
                </div>
                {guide.officialLink && (
                  <a 
                    href={guide.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-10 py-5 bg-brand-green text-white font-bold text-center rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    Open Portal <ExternalLink size={18} />
                  </a>
                )}
             </div>
          </section>

          {/* FAQs */}
          {guide.faqs && guide.faqs.length > 0 && (
             <section className="animate-slide-up">
                <h2 className="text-3xl font-semibold tracking-tight mb-10">FAQs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {guide.faqs.map((faq, idx) => (
                      <div key={idx} className="p-10 bg-black/5 dark:bg-white/5 rounded-[2.5rem] hover:bg-black/[0.07] dark:hover:bg-white/[0.07] transition-all border border-transparent hover:border-black/5 dark:hover:border-white/5">
                         <h4 className="text-xl font-semibold tracking-tight mb-3 flex gap-4">
                            <HelpCircle className="text-black/20 dark:text-white/20 shrink-0" size={24} />
                            {faq.question}
                         </h4>
                         <p className="text-black/50 dark:text-white/40 font-medium leading-relaxed pl-10">{faq.answer}</p>
                      </div>
                   ))}
                </div>
             </section>
          )}
       </div>

       {/* Feedback */}
       <div className="mt-40 pt-20 border-t border-black/5 dark:border-white/10 text-center animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 dark:text-white/30 mb-10">Verify this compass</p>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:scale-105 transition-all active:scale-95 shadow-xl">Process is accurate</button>
             <button className="px-10 py-5 bg-white dark:bg-black border border-black/10 dark:border-white/20 text-black dark:text-white rounded-2xl font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95">Report an error</button>
          </div>
       </div>
    </div>
  );
};

export default GuidePage;