import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../data';
import { ArrowRight, User, Briefcase, Plane, GraduationCap } from 'lucide-react';

const HomePage: React.FC = () => {
  // Split categories for bento layout
  const featuredCategory = CATEGORIES[1]; // Travel
  const secondaryCategories = CATEGORIES.filter(c => c.id !== 'travel').slice(0, 4);

  return (
    <div className="bg-brand-cream">
      <Hero />
      
      {/* Introduction / Manifesto */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-brand-dark/10 pt-10">
          <div className="md:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange">The Mission</span>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-4xl font-display font-medium leading-tight text-brand-dark">
              We are building the operating system for Nigerian citizenship. <br/>
              <span className="text-brand-dark/40">No more touts. No more confusion. Just clear, verified steps to get things done.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex justify-between items-end mb-10">
           <h2 className="text-5xl font-display font-bold text-brand-dark">Directory</h2>
           <Link to="/search" className="hidden md:flex items-center gap-2 font-mono text-sm uppercase font-bold hover:text-brand-primary transition-colors">
             View Index <ArrowRight size={16} />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Large Featured Card */}
          <div className="md:col-span-2 md:row-span-2">
             <CategoryCard category={featuredCategory} variant="large" />
          </div>
          
          {/* Other Cards */}
          {secondaryCategories.map((cat) => (
             <div key={cat.id} className="md:col-span-1 md:row-span-1">
                <CategoryCard category={cat} />
             </div>
          ))}

          {/* Call to Action Block */}
          <div className="md:col-span-1 md:row-span-1 bg-brand-lime rounded-3xl p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:shadow-xl transition-shadow">
             <div className="bg-brand-dark text-brand-lime p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
               <ArrowRight size={24} />
             </div>
             <span className="font-display font-bold text-brand-dark">See All Categories</span>
          </div>
        </div>
      </section>

      {/* Personas / Life Stages */}
      <section className="bg-brand-dark text-brand-cream py-24 px-6 rounded-t-[3rem] mt-10">
         <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="font-mono text-brand-lime text-xs font-bold uppercase tracking-widest mb-2 block">Who are you?</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Curated paths for <br/> every journey.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'The Founder', icon: Briefcase, desc: 'Registering businesses, paying tax, and permits.', color: 'bg-purple-500' },
                { title: 'The Expat', icon: Plane, desc: 'Visas, residence permits, and settling in Lagos.', color: 'bg-brand-orange' },
                { title: 'The Student', icon: GraduationCap, desc: 'JAMB, WAEC, NYSC, and scholarships.', color: 'bg-blue-500' },
                { title: 'The Citizen', icon: User, desc: 'Voting, healthcare, marriage, and daily life.', color: 'bg-brand-lime text-brand-dark' },
              ].map((persona, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                   <div className={`w-12 h-12 ${persona.color} rounded-full flex items-center justify-center mb-6 text-white ${persona.title === 'The Citizen' ? 'text-brand-dark' : ''}`}>
                      <persona.icon size={24} />
                   </div>
                   <h3 className="text-2xl font-display font-bold mb-2">{persona.title}</h3>
                   <p className="text-white/50 text-sm leading-relaxed">{persona.desc}</p>
                   <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Start Path</span> <ArrowRight size={14} />
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
