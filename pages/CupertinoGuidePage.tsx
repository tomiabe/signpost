import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ChevronLeft, Calendar, Clock, MapPin, Check, ExternalLink } from 'lucide-react';

const CupertinoGuidePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getGuide, categories } = useData();
  
  const guide = id ? getGuide(id) : undefined;
  
  if (!guide) return <div className="pt-32 text-center">Guide not found</div>;

  const category = categories.find(c => c.id === guide.categoryId);

  return (
    <div className="max-w-[800px] mx-auto px-6 pb-24">
       
       {/* Breadcrumb / Back */}
       <div className="mb-8 pt-8">
          <Link to="/" className="inline-flex items-center text-brand-cup-subtext hover:text-brand-cup-text text-sm font-medium transition-colors">
             <ChevronLeft size={16} className="-ml-1" />
             Back to Registry
          </Link>
       </div>

       {/* Header */}
       <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-3 py-1 rounded-full bg-brand-cup-bg border border-brand-cup-border text-[11px] font-bold uppercase tracking-wider text-brand-cup-subtext">
                {category?.name}
             </span>
             <span className="text-[11px] font-medium text-brand-cup-subtext">Updated {guide.lastUpdated}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-cup-text tracking-tight leading-[1.1] mb-6">
             {guide.title}
          </h1>
          <p className="text-xl text-brand-cup-subtext leading-relaxed font-normal">
             {guide.summary}
          </p>
       </header>

       {/* Meta Data Cards */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-white p-4 rounded-2xl border border-brand-cup-border/50 shadow-sm">
             <div className="text-brand-cup-subtext text-xs font-semibold uppercase tracking-wide mb-1">Est. Time</div>
             <div className="text-brand-cup-text font-semibold flex items-center gap-2"><Clock size={16} className="text-brand-cup-yellow" /> {guide.estimatedTime}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-brand-cup-border/50 shadow-sm">
             <div className="text-brand-cup-subtext text-xs font-semibold uppercase tracking-wide mb-1">Est. Cost</div>
             <div className="text-brand-cup-text font-semibold">{guide.estimatedCost}</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-brand-cup-border/50 shadow-sm col-span-2 md:col-span-1">
             <div className="text-brand-cup-subtext text-xs font-semibold uppercase tracking-wide mb-1">Location</div>
             <div className="text-brand-cup-text font-semibold truncate">{guide.locationName || 'Online'}</div>
          </div>
       </div>

       {/* Content Body */}
       <div className="space-y-16">
          
          {/* Prerequisites */}
          <section>
             <h2 className="text-2xl font-bold text-brand-cup-text mb-6">Requirements</h2>
             <div className="bg-white rounded-3xl border border-brand-cup-border/50 overflow-hidden">
                {guide.requirements.map((req, idx) => (
                   <div key={idx} className="p-4 flex items-start gap-4 border-b border-brand-cup-border/50 last:border-0">
                      <div className="mt-1 w-5 h-5 rounded-full bg-brand-cup-green/10 flex items-center justify-center shrink-0">
                         <Check size={12} className="text-brand-cup-green" />
                      </div>
                      <span className="text-brand-cup-text">{req}</span>
                   </div>
                ))}
             </div>
          </section>

          {/* Steps */}
          <section>
             <h2 className="text-2xl font-bold text-brand-cup-text mb-8">The Process</h2>
             <div className="space-y-12">
                {guide.steps.map((step, idx) => (
                   <div key={idx} className="relative pl-8 md:pl-0">
                      {/* Step Number */}
                      <div className="md:absolute md:-left-16 md:top-0 w-10 h-10 bg-brand-cup-text text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-lg mb-4 md:mb-0">
                         {idx + 1}
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-cup-text mb-3">{step.title}</h3>
                      <p className="text-brand-cup-text/80 leading-relaxed text-lg mb-4">{step.description}</p>
                      
                      {step.tips && (
                         <div className="bg-brand-cup-yellow/10 p-4 rounded-2xl">
                            <ul className="list-disc list-inside text-sm text-brand-cup-text/80 space-y-1">
                               {step.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                            </ul>
                         </div>
                      )}
                   </div>
                ))}
             </div>
          </section>

          {/* Action */}
          {guide.officialLink && (
             <div className="pt-8 border-t border-brand-cup-border">
                <a 
                   href={guide.officialLink}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-2 bg-brand-cup-text text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-all"
                >
                   Visit Official Portal <ExternalLink size={16} />
                </a>
             </div>
          )}

       </div>
    </div>
  );
};

export default CupertinoGuidePage;