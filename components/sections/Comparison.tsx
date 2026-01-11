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

        {/* Mobile View - Card-based layout */}
        <div className="md:hidden space-y-6">
            {comparisonData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow border border-slate-200/50 p-4">
                    <h4 className="font-bold text-slate-800 mb-4 text-center border-b border-slate-100 pb-3">{item.feature}</h4>
                    <div className="space-y-4 text-sm">
                        <div className="p-3 rounded-lg bg-brand-50/50">
                            <p className="font-bold text-brand-800 flex items-center gap-2 mb-1">
                                <Star size={14} className="fill-brand-500 text-brand-500"/> Wall Art Mockup Engine
                            </p>
                            <p className="text-slate-700">{item.wame}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50">
                            <p className="font-bold text-slate-600 mb-1">Placeit</p>
                            <p className="text-slate-500">{item.placeit}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50">
                            <p className="font-bold text-slate-600 mb-1">Canva Mockups</p>
                            <p className="text-slate-500">{item.canva}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Desktop View - Table layout */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-4 text-sm">
            {/* Header Row */}
            <div className="p-6 font-bold text-slate-600 bg-slate-50/70 border-b border-slate-200 flex items-center">Feature</div>
            <div className="p-6 font-bold bg-brand-50/70 border-b border-brand-200 text-center flex items-center justify-center ring-1 ring-inset ring-brand-200">
                <span className="flex items-center gap-2 text-brand-700">
                    <Star size={16} className="fill-brand-500 text-brand-500" />
                    Wall Art Mockup Engine
                </span>
            </div>
            <div className="p-6 font-bold text-slate-600 bg-slate-50/70 border-b border-slate-200 text-center flex items-center justify-center">Placeit</div>
            <div className="p-6 font-bold text-slate-600 bg-slate-50/70 border-b border-slate-200 text-center flex items-center justify-center">Canva Mockups</div>
            
            {/* Data Rows */}
            {comparisonData.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`p-4 font-semibold text-slate-800 flex items-center border-r border-slate-100 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                  {item.feature}
                </div>
                <div className={`p-4 text-center flex flex-col items-center justify-center bg-green-50/20 ring-1 ring-inset ring-brand-200 ${index % 2 === 0 ? 'bg-white' : 'bg-green-50/20'}`}>
                  <Check className="w-5 h-5 text-green-600 mb-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item.wame}</p>
                </div>
                <div className={`p-4 text-center flex flex-col items-center justify-center border-r border-slate-100 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                  <X className="w-5 h-5 text-red-400 mb-1 flex-shrink-0" />
                  <p className="text-slate-500 leading-relaxed">{item.placeit}</p>
                </div>
                <div className={`p-4 text-center flex flex-col items-center justify-center ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                  <X className="w-5 h-5 text-red-400 mb-1 flex-shrink-0" />
                  <p className="text-slate-500 leading-relaxed">{item.canva}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
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