import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Calendar, Clock, Banknote, CheckCircle, MapPin, ExternalLink, AlertTriangle, ArrowLeft } from 'lucide-react';

const GuidePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getGuide, categories } = useData();
  
  const guide = id ? getGuide(id) : undefined;
  
  if (!guide) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Guide not found</h2>
        <Link to="/" className="text-brand-green mt-4 inline-block hover:underline">Return Home</Link>
      </div>
    );
  }

  const category = categories.find(c => c.id === guide.categoryId);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-brand-green">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${category?.id}`} className="hover:text-brand-green">{category?.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium truncate">{guide.title}</span>
      </nav>

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 md:p-10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <img src="https://picsum.photos/200/200?grayscale" alt="Texture" className="w-64 h-64 object-cover rounded-full mix-blend-overlay" />
           </div>
           
           <div className="relative z-10">
             <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-brand-green text-white`}>
                  {category?.name}
                </span>
                {guide.verified && (
                  <span className="flex items-center gap-1 text-xs font-semibold bg-blue-600 px-2 py-1 rounded-full">
                    <CheckCircle size={12} /> Verified
                  </span>
                )}
             </div>
             
             <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
               {guide.title}
             </h1>
             <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
               {guide.summary}
             </p>
             
             <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300 border-t border-slate-700 pt-6">
                <div className="flex items-center gap-2">
                   <Calendar size={16} className="text-brand-accent" />
                   <span>Updated: {guide.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Banknote size={16} className="text-brand-accent" />
                   <span>Cost: {guide.estimatedCost}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Clock size={16} className="text-brand-accent" />
                   <span>Time: {guide.estimatedTime}</span>
                </div>
             </div>
           </div>
        </div>

        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Requirements Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <div className="w-2 h-8 bg-brand-accent rounded-full"></div>
                Requirements
              </h2>
              <ul className="bg-slate-50 border border-slate-100 rounded-xl p-6 space-y-3">
                {guide.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-brand-green shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Steps Section */}
            <section>
               <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-brand-green rounded-full"></div>
                Step-by-Step Process
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-slate-200">
                {guide.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    <div className="absolute left-0 top-0 bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white">
                      {idx + 1}
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-brand-green/30 transition-colors shadow-sm">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-3">{step.description}</p>
                      {step.tips && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-md mt-4">
                          <p className="text-sm text-amber-900 font-medium mb-1 flex items-center gap-2">
                            <AlertTriangle size={14} /> Tip:
                          </p>
                          <ul className="list-disc list-inside text-sm text-amber-800 space-y-1">
                            {step.tips.map((tip, tIdx) => <li key={tIdx}>{tip}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Location Card */}
            {guide.locationName && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Where to Go</h3>
                <div className="bg-slate-100 h-32 rounded-lg mb-3 flex items-center justify-center text-slate-400">
                  {/* Placeholder for Map */}
                  <span className="text-xs">Map Placeholder</span>
                </div>
                <div className="flex items-start gap-3">
                   <MapPin className="text-brand-green shrink-0 mt-1" size={18} />
                   <p className="text-slate-700 font-medium">{guide.locationName}</p>
                </div>
              </div>
            )}

            {/* Official Link */}
            {guide.officialLink && (
              <a 
                href={guide.officialLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Visit Official Portal <ExternalLink size={16} />
              </a>
            )}

            {/* Disclaimer */}
            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 leading-relaxed">
              <strong>Disclaimer:</strong> This guide is for informational purposes only. Signpost.ng is not affiliated with the government. Prices and processes are subject to change. Always verify with official sources.
            </div>

            {/* Share / Feedback */}
            <div className="border-t border-slate-200 pt-6">
               <p className="text-sm font-medium text-slate-900 mb-2">Was this guide helpful?</p>
               <div className="flex gap-2">
                 <button className="flex-1 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 hover:border-brand-green hover:text-brand-green transition-colors text-sm font-medium">Yes</button>
                 <button className="flex-1 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors text-sm font-medium">No</button>
               </div>
               <button className="w-full mt-3 text-brand-green text-sm hover:underline">Suggest an edit</button>
            </div>

          </div>

        </div>
      </article>
    </div>
  );
};

export default GuidePage;