import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  variant?: 'default' | 'large' | 'compact';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, variant = 'default' }) => {
  const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;

  const bgColors = {
    civil: 'bg-blue-100',
    travel: 'bg-orange-100',
    transport: 'bg-slate-200',
    health: 'bg-red-100',
    business: 'bg-emerald-100',
    education: 'bg-purple-100'
  };

  if (variant === 'large') {
    return (
      <Link 
        to={`/category/${category.id}`} 
        className="group relative h-full min-h-[300px] bg-brand-dark rounded-3xl p-8 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500"
      >
        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-lime/20 transition-colors duration-500"></div>
        
        <div className="relative z-10">
          <div className="bg-white/10 w-fit p-3 rounded-xl backdrop-blur-md mb-6 text-white group-hover:text-brand-lime transition-colors">
            <IconComponent size={32} />
          </div>
          <h3 className="text-4xl font-display font-bold text-white mb-2 leading-tight">
            {category.name}
          </h3>
        </div>
        
        <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-6">
           <p className="text-white/60 text-sm font-mono max-w-[70%] line-clamp-2">{category.description}</p>
           <div className="bg-brand-lime text-brand-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <Icons.ArrowUpRight size={20} />
           </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/category/${category.id}`} 
      className="group bg-white rounded-3xl p-6 border border-brand-black/5 hover:border-brand-dark transition-all duration-300 flex flex-col h-full hover:-translate-y-1 shadow-sm hover:shadow-xl"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${(bgColors as any)[category.id] || 'bg-gray-100'} text-brand-dark`}>
          <IconComponent size={24} />
        </div>
        <Icons.ArrowRight size={20} className="text-brand-black/20 group-hover:text-brand-dark group-hover:translate-x-1 transition-all" />
      </div>
      
      <div className="mt-auto">
        <h3 className="text-xl font-display font-bold text-brand-dark mb-1">
          {category.name}
        </h3>
        <p className="text-brand-dark/50 text-sm leading-relaxed line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
