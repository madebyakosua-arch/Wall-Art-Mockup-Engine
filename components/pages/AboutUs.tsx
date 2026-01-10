import React from 'react';
import { Heart, Globe, Zap } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Helping creators sell more art</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                We bridge the gap between digital designs and real-world visualization.
            </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-slate-600">
                <p className="mb-6">
                    Wall Art Mockup Engine was founded by Stephanie in 2024. As a digital artist herself, Stephanie struggled to find high-quality, realistic mockups that didn't require hours of Photoshop work. The existing tools were clunky, expensive, or produced low-resolution images that didn't do justice to the artwork.
                </p>
                <p className="mb-6">
                    Determined to solve this problem for the creative community, she gathered a small team of engineers and 3D artists to build a platform that automates the mockup process without sacrificing quality.
                </p>
                <p>
                    Today, we serve thousands of Etsy sellers, print-on-demand businesses, and interior designers, helping them turn simple image files into stunning marketing assets in seconds.
                </p>
            </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">What drives us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Artist First</h3>
                    <p className="text-slate-600">We build features that actually help you sell, not just shiny tech demos.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Global Impact</h3>
                    <p className="text-slate-600">Empowering creators from over 50 countries to build sustainable businesses.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Speed & Quality</h3>
                    <p className="text-slate-600">We refuse to compromise. Fast generation times with photorealistic 4K output.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};