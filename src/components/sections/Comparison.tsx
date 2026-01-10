import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { Button } from '../ui/Button';

// Data for the comparison table
const comparisonData = [
  {
    feature: 'Best For',
    wame: 'Photorealistic Wall Art',
    placeit: 'General Apparel & Products',
    canva: 'Social Media & Listing Graphics',
  },
  {
    feature: 'Visual Realism',
    wame: '4K Hyper-Realistic with AI Lighting & Shadows',
    placeit: 'Good, but often looks "pasted on"',
    canva: 'Basic, flat lighting for simple mockups',
  },
  {
    feature: 'Video Mockups',
    wame: 'Cinematic Video Reveals (Pan, Zoom)',
    placeit: 'Limited to basic GIF-like animations',
    canva: 'Static images only',
  },
  {
    feature: 'Scene Library',
    wame: 'Exclusive, curated high-end interiors',
    placeit: 'Huge, but generic and overused scenes',
    canva: 'Limited library, shared across millions of users',
  },
  {
    feature: 'Customization',
    wame: 'Advanced frame options, texture mapping',
    placeit: 'Basic color changes only',
    canva: 'Limited to pre-set frame styles',
  },
  {
    feature: 'Pricing',
    wame: 'Specialized plans from $15/mo',
    placeit: 'General subscription ~$14.95/mo',
    canva: 'Requires Canva Pro ~$12.99/mo',
  }
];

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Not all mockup tools are created equal
          </h2>
          <p className="text-lg text-slate-600">
            While generic tools like Placeit and Canva are great, they aren't built to sell wall art. See why a specialized engine makes all the difference for your conversion rate.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-4 text-sm sm:text-base">
            {/* Header Row */}
            <div className="p-4 sm:p-6 font-bold text-slate-600 bg-slate-50 border-b border-r border-slate-200 hidden md:flex items-center">Feature</div>
            <div className="col-span-4 md:col-span-1 p-4 sm:p-6 font-bold text-slate-900 bg-brand-50 border-b border-brand-200 text-center flex flex-col items-center justify-center ring-2 ring-inset ring-brand-200">
                <span className="flex items-center gap-2 text-base sm:text-lg text-brand-700">
                    <Star size={16} className="fill-brand-500 text-brand-500" />
                    Wall Art Mockup Engine
                </span>
            </div>
            <div className="col-span-2 md:col-span-1 p-4 sm:p-6 font-bold text-slate-600 bg-slate-50 border-b border-slate-200 text-center flex items-center justify-center">Placeit</div>
            <div className="col-span-2 md:col-span-1 p-4 sm:p-6 font-bold text-slate-600 bg-slate-50 border-b border-l border-slate-200 text-center flex items-center justify-center">Canva Mockups</div>
          </div>

          {comparisonData.map((item, index) => (
            <div key={index} className="grid grid-cols-4 items-stretch border-b border-slate-100 last:border-b-0 text-sm">
              {/* Feature Name (Left Column) */}
              <div className="p-4 sm:p-6 font-semibold text-slate-800 bg-slate-50/50 flex items-center border-r border-slate-100">
                <span className="md:hidden font-bold block mb-2 text-xs uppercase text-slate-400">Feature</span>
                {item.feature}
              </div>

              {/* WAME Column */}
              <div className="col-span-3 md:col-span-1 p-4 sm:p-6 text-center flex flex-col items-center justify-center bg-green-50/30">
                 <span className="md:hidden font-bold block mb-2 text-xs uppercase text-brand-600">Our Engine</span>
                {item.feature !== 'Pricing' && <Check className="w-6 h-6 text-green-600 mb-2 flex-shrink-0" />}
                <p className={`text-slate-700 leading-relaxed ${item.feature === 'Pricing' ? 'font-bold text-lg' : ''}`}>{item.wame}</p>
              </div>

              {/* Placeit Column */}
              <div className="col-span-3 sm:col-auto md:col-span-1 p-4 sm:p-6 text-center flex flex-col items-center justify-center border-t md:border-t-0 border-l-0 sm:border-l md:border-l-0 border-slate-100">
                <span className="md:hidden font-bold block mb-2 text-xs uppercase text-slate-400">Placeit</span>
                {item.feature !== 'Pricing' && <X className="w-6 h-6 text-red-400 mb-2 flex-shrink-0" />}
                <p className={`text-slate-500 leading-relaxed ${item.feature === 'Pricing' ? 'font-semibold' : ''}`}>{item.placeit}</p>
              </div>

              {/* Canva Column */}
              <div className="col-span-3 sm:col-auto md:col-span-1 p-4 sm:p-6 text-center flex flex-col items-center justify-center border-t md:border-t-0 border-l-0 sm:border-l border-slate-100">
                <span className="md:hidden font-bold block mb-2 text-xs uppercase text-slate-400">Canva</span>
                {item.feature !== 'Pricing' && <X className="w-6 h-6 text-red-400 mb-2 flex-shrink-0" />}
                <p className={`text-slate-500 leading-relaxed ${item.feature === 'Pricing' ? 'font-semibold' : ''}`}>{item.canva}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Button 
                size="lg" 
                className="shadow-xl shadow-brand-500/20"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
            >
                Choose the Right Tool for Your Art
            </Button>
        </div>
      </div>
    </section>
  );
};