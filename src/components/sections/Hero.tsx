import React from 'react';
import { PlayCircle, Upload, Image as ImageIcon, Zap, Star, ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 1. UPDATED ART IMAGE (User Provided Previously)
  const artImage = "https://i.ibb.co/Gfh1dSyh/flat-art-jpg.png";
  
  // 2. ROOM MOCKUP - UPDATED URL
  const mockupImage = "https://i.ibb.co/hFvWfqZg/flat-art-jpg.jpg";

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-bold mb-6 animate-pulse">
              <Zap size={14} className="mr-2 fill-orange-500 text-orange-500" />
              Launch Special: 25% OFF Annual Plans
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Stop losing sales. <br/>
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">bestselling mockups</span> in seconds.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Don't let bad photos kill your conversion rate. Generate 4K, photorealistic room scenes for your art instantly—no photoshoot required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <Button onClick={scrollToPricing} size="lg" className="w-full sm:w-auto shadow-xl shadow-brand-500/20 text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                <PlayCircle className="mr-2 h-5 w-5 text-brand-600 group-hover:scale-110 transition-transform" />
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <span className="flex items-center">
                 <Star size={14} className="text-slate-400 mr-1" /> Cancel anytime
              </span>
            </div>
          </div>

          {/* Product Visual - The 3-Step Flow */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200">
                
                {/* Heading & Subheading above the photos */}
                <div className="mb-6 border-b border-slate-100 pb-4 text-center">
                  <h3 className="text-xl font-bold text-slate-900">Wall Art Mockup Engine</h3>
                  <p className="text-sm text-slate-500 mt-1 max-w-xs mx-auto">Turn your art into stunning room photos and videos in seconds.</p>
                </div>

                <div className="flex items-center justify-between gap-2 sm:gap-4">
                    
                    {/* 1. Upload Art (Painting) */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="bg-slate-100 rounded-lg p-1.5 w-full aspect-[3/4] relative overflow-hidden border border-slate-200 shadow-inner">
                            <img 
                                src={artImage} 
                                alt="Original Painting" 
                                className="w-full h-full object-cover rounded border border-slate-200/50"
                            />
                        </div>
                        <div className="mt-4 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">
                            1. Upload Art
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-slate-300 shrink-0">
                        <ArrowRight size={20} />
                    </div>

                    {/* 2. Generated (Room Mockup) */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="bg-white rounded-lg w-full aspect-[3/4] relative overflow-hidden border border-green-100 shadow-sm flex items-center justify-center group">
                            <img 
                                src={mockupImage} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                alt="Generated Mockup"
                            />
                             {/* Overlay tag */}
                            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[9px] font-bold text-slate-800 shadow-sm border border-slate-200">
                                mockup_01.jpg
                            </div>
                        </div>
                        <div className="mt-4 px-3 py-1.5 bg-green-50 border border-green-100 rounded-full shadow-sm text-xs sm:text-sm font-bold text-green-700 flex items-center gap-1 whitespace-nowrap">
                            <ImageIcon size={12} className="hidden sm:block" /> 2. Generated
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-slate-300 shrink-0">
                        <ArrowRight size={20} />
                    </div>

                    {/* 3. Video (Painting) */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="bg-white rounded-lg w-full aspect-[3/4] relative overflow-hidden border border-purple-100 shadow-sm group cursor-pointer flex items-center justify-center">
                            {/* Frame on White Background */}
                            <div className="w-[75%] aspect-[3/4] shadow-2xl relative">
                                <div className="bg-white p-[4px] w-full h-full border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                                  <img 
                                      src={artImage} 
                                      className="w-full h-full object-cover" 
                                      alt="Video Mockup"
                                  />
                                </div>
                            </div>
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/5 transition-colors rounded">
                                <div className="bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center">
                                    <Play className="text-red-600 fill-red-600 ml-1 w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full shadow-sm text-xs sm:text-sm font-bold text-purple-700 flex items-center gap-1 whitespace-nowrap">
                            <PlayCircle size={12} className="hidden sm:block" /> 3. Video
                        </div>
                    </div>

                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};