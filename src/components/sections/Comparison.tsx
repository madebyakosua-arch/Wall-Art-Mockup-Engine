import React from 'react';
import { X, Check, XCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            The difference is in the details
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stop wasting time on technical tasks. Focus on creating art while we handle the presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* WITHOUT CARD */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-300"></div>
            
            <div className="flex items-start gap-3 mb-8 opacity-70">
                <XCircle className="text-slate-400 w-8 h-8 mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-2xl font-bold text-slate-500">Manual Mockup Creation</h3>
                    <p className="font-medium text-slate-400">Without Wall Art Mockup Engine</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px]"><X className="text-red-400 w-6 h-6" /></div>
                    <div>
                        <p className="font-bold text-slate-700">Hours spent in Photoshop</p>
                        <p className="text-sm text-slate-500">Manually warping smart objects, adjusting shadows, and masking frames for every single ratio.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px]"><X className="text-red-400 w-6 h-6" /></div>
                    <div>
                        <p className="font-bold text-slate-700">Expensive stock photos</p>
                        <p className="text-sm text-slate-500">Buying individual high-res room files for $15-$50 each that everyone else is also using.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px]"><X className="text-red-400 w-6 h-6" /></div>
                    <div>
                        <p className="font-bold text-slate-700">Flat, unrealistic look</p>
                        <p className="text-sm text-slate-500">Digital art looks "pasted on" without proper lighting, texture blending, or reflections.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px]"><X className="text-red-400 w-6 h-6" /></div>
                    <div>
                        <p className="font-bold text-slate-700">Low conversion rates</p>
                        <p className="text-sm text-slate-500">Customers scroll past listings that look fake or unprofessional.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 p-4 bg-slate-100 rounded-lg border border-slate-200 flex items-center gap-3">
                <AlertCircle className="text-slate-400" />
                <p className="text-sm text-slate-500 italic">"I spend more time editing mockups than actually painting..."</p>
            </div>
          </div>

          {/* WITH CARD */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-brand-100 shadow-2xl relative overflow-hidden transform md:scale-105 z-10">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 to-purple-500"></div>
            
            <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="text-brand-600 w-8 h-8" />
                <h3 className="text-2xl font-bold text-slate-900">With Wall Art Mockup Engine</h3>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px] bg-green-100 rounded-full p-1"><Check className="text-green-600 w-4 h-4" /></div>
                    <div>
                        <p className="font-bold text-slate-900">Instant Generation</p>
                        <p className="text-sm text-slate-600">Drag, drop, done. Generate 50+ variations across different room styles in under 60 seconds.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px] bg-green-100 rounded-full p-1"><Check className="text-green-600 w-4 h-4" /></div>
                    <div>
                        <p className="font-bold text-slate-900">Unlimited Studio Library</p>
                        <p className="text-sm text-slate-600">Access thousands of trending, high-end interiors without paying per photo.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px] bg-green-100 rounded-full p-1"><Check className="text-green-600 w-4 h-4" /></div>
                    <div>
                        <p className="font-bold text-slate-900">Hyper-Realistic 4K Quality</p>
                        <p className="text-sm text-slate-600">Our engine handles canvas texture, frame shadows, and lighting fall-off automatically.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="mt-1 min-w-[24px] bg-green-100 rounded-full p-1"><Check className="text-green-600 w-4 h-4" /></div>
                    <div>
                        <p className="font-bold text-slate-900">Proven Sales Boost</p>
                        <p className="text-sm text-slate-600">Sellers report a <span className="font-bold text-green-600 bg-green-50 px-1 rounded">3x increase</span> in click-through rates on Etsy and Shopify.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
                    className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2"
                >
                    Upgrade Your Shop Today
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};