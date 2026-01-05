import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowRight, FileText } from 'lucide-react';
import * as Icons from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { categories, guides } = useData();
  
  const category = categories.find(c => c.id === id);
  const categoryGuides = guides.filter(g => g.categoryId === id);

  if (!category) {
    return <div className="p-10 text-center">Category not found</div>;
  }

  const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;

  return (
    <div className="max-w-[980px] mx-auto px-6 py-12">
       {/* Header */}
       <div className="mb-12">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center mb-6 text-black">
            <IconComponent size={32} />
          </div>
          <h1 className="text-4xl font-bold text-black tracking-tight mb-4">{category.name}</h1>
          <p className="text-xl text-gray-500 max-w-2xl">{category.description}</p>
       </div>

       {/* Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryGuides.length > 0 ? (
            categoryGuides.map(guide => (
              <Link key={guide.id} to={`/guide/${guide.id}`} className="group block">
                <article className="bg-white rounded-3xl p-8 border border-black/5 h-full hover:shadow-apple-hover transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Guide</span>
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {guide.summary}
                  </p>
                  <div className="flex items-center text-black font-semibold text-sm">
                    Read Guide <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-white rounded-3xl border border-dashed border-gray-300">
               <p className="text-gray-500 text-lg">Coming Soon</p>
               <p className="text-gray-400">We are currently writing guides for this category.</p>
            </div>
          )}
       </div>
    </div>
  );
};

export default CategoryPage;