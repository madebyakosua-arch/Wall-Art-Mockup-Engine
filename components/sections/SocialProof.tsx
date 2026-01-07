import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="flex flex-col items-center justify-center mb-8 space-y-2">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-2">
                <Sparkles size={14} className="mr-1" /> New Release 2025
             </div>
             <p className="text-slate-700 font-medium text-lg">Be the first to experience the future of art visualization</p>
        </div>

        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
          Compatible with major platforms
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 transition-all duration-500">
            
           {/* ArtSpace Logo - Generic Art Platform */}
           <div className="flex items-center gap-2 cursor-default" title="Compatible with Art Platforms">
             <div className="w-8 h-8 bg-indigo-600 rounded-tr-xl rounded-bl-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg leading-none">A</span>
             </div>
             <span className="font-bold text-xl text-slate-800 tracking-tight">ArtSpace</span>
           </div>

           {/* Printify Style Logo */}
           <div className="flex items-center gap-2 cursor-default" title="Works with Printify">
             <svg className="w-8 h-8 text-[#00bfa5]" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2L17.5 8 12 11.2 6.5 8 12 4.2zM6 9.5l5 2.8v5.5l-5-2.8V9.5zm7 8.3v-5.5l5-2.8v5.5l-5 2.8z"/>
             </svg>
             <span className="font-bold text-xl text-[#00bfa5] tracking-tight">Printify</span>
           </div>

           {/* Etsy Style Logo */}
           <div className="flex items-center cursor-default" title="Optimized for Etsy">
             <div className="bg-[#F1641E] rounded-md px-2 py-1 shadow-sm">
                <span className="text-white font-serif font-bold text-xl tracking-tighter">Etsy</span>
             </div>
             <span className="ml-2 font-serif text-xl text-[#F1641E] hidden sm:block">Seller</span>
           </div>

           {/* Shopify Style Logo */}
           <div className="flex items-center gap-2 cursor-default" title="Great for Shopify Stores">
             <svg className="w-8 h-8 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 6L16 3.5 13 5l-2-1.5L7 6 4 9l2 11h12l2-11-3-3z" />
                <path d="M9 13a3 3 0 106 0" fill="none" stroke="white" strokeWidth="2" />
             </svg>
             <span className="font-bold text-xl text-[#5e8e3e] tracking-tight">shopify</span>
           </div>
        </div>

        <div className="mt-10 flex justify-center items-center gap-3">
             <div className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center shadow-sm border border-red-100 animate-bounce">
                 <Rocket size={14} className="mr-1" />
                 Launch Pricing Ends Soon
             </div>
        </div>
      </div>
    </section>
  );
};