import React from 'react';
import { Upload, Video, Check, Sparkles, Download, Wand2, MousePointer2, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const HowItWorks: React.FC = () => {
  // NEW ART IMAGE: Updated to user provided URL
  const artImage = "https://i.ibb.co/Gfh1dSyh/flat-art-jpg.png";

  // Generated images: UPDATED URL
  const mockup1 = "https://i.ibb.co/hFvWfqZg/flat-art-jpg.jpg";

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-4">
            <Wand2 size={14} className="mr-2" />
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            From upload to download <br className="hidden md:block" /> in under 60 seconds.
          </h2>
          <p className="text-lg text-slate-600">
            Our engine handles the heavy lifting. You just bring the art.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          {/* STEP 1: UPLOAD */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 order-2 md:order-1">
               {/* Browser Window Mockup */}
               <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative group">
                  <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 bg-white px-3 py-1 rounded text-[10px] text-slate-400 flex-1 text-center border border-slate-100 font-mono truncate">
                        wallartengine.com/upload
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-brand-50/30">
                     <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload Your Artwork</h3>
                        <p className="text-slate-500 text-sm">Transform your art into stunning mockups</p>
                     </div>
                     
                     <div className="w-full max-w-sm border-2 border-dashed border-brand-300 bg-white rounded-xl p-8 text-center hover:border-brand-500 hover:bg-brand-50/20 transition-all cursor-pointer shadow-sm group-hover:shadow-md mb-2">
                        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                            <Upload size={32} />
                        </div>
                        <p className="text-slate-900 font-bold mb-1">Drop your artwork here</p>
                        <p className="text-slate-400 text-xs mb-4">Supports JPG, PNG (Max 50MB)</p>
                        <Button size="sm">Choose File</Button>
                     </div>
                  </div>

                  <div className="absolute bottom-10 right-10 animate-bounce delay-700 pointer-events-none drop-shadow-xl z-20">
                      <MousePointer2 className="fill-slate-900 text-slate-100 w-8 h-8" />
                  </div>
               </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
               <div className="bg-brand-100 w-12 h-12 rounded-2xl flex items-center justify-center text-brand-600 mb-6 font-bold text-xl">1</div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Upload your high-res file</h3>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Simply drag and drop your raw artwork file. Our intelligent uploader automatically creates a high-quality digital twin, ready to be placed in any room scene.
               </p>
            </div>
          </div>

          {/* STEP 2: CONFIGURE */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
               <div className="bg-purple-100 w-12 h-12 rounded-2xl flex items-center justify-center text-purple-600 mb-6 font-bold text-xl">2</div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">AI Analysis & Configuration</h3>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Our AI instantly analyzes your artwork to suggest the perfect room styles and metadata.
               </p>
            </div>

            <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 md:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                   <div className="flex flex-col gap-6">
                      <div className="flex items-start justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Analysis Complete</span>
                         </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-5/12 flex-shrink-0">
                           <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-4 border-white bg-slate-100">
                             <img src={artImage} className="w-full h-full object-cover" alt="Uploaded Art" />
                             <button className="absolute top-2 right-2 bg-white/90 hover:bg-white text-slate-500 p-1 rounded-full shadow-sm transition-colors">
                                <X size={12} />
                             </button>
                           </div>
                        </div>

                        <div className="w-full md:w-7/12 space-y-5">
                           <div>
                             <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Artwork Title *</label>
                             <div className="w-full border border-slate-300 rounded p-2.5 text-sm text-slate-800 bg-white font-medium shadow-sm truncate">
                               Sunset Impressions
                             </div>
                           </div>
                           <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 relative overflow-hidden">
                              <Sparkles className="absolute -top-4 -right-4 text-purple-200 opacity-50 w-24 h-24 rotate-12" />
                              <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3 border-b border-purple-100 pb-2">
                                   <Sparkles className="text-purple-600 fill-purple-600" size={14} />
                                   <h4 className="text-sm font-bold text-purple-900">AI Recommendations</h4>
                                </div>
                                <div className="space-y-3 text-[11px] leading-relaxed text-slate-700">
                                   <div><span className="font-bold text-purple-800">Style:</span> Impressionism, Oil</div>
                                   <div><span className="font-bold text-purple-800">Mockup:</span> Living Room</div>
                                </div>
                              </div>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>

          {/* STEP 3: CREATE */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 order-2 md:order-1">
               <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 md:p-8 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-slate-900">Generate Assets</h4>
                    <div className="flex gap-2">
                       <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Photo</span>
                       <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded">Video</span>
                    </div>
                  </div>
                  
                  <div className="aspect-[4/5] w-full bg-slate-100 rounded-lg relative overflow-hidden border border-slate-200 mb-6 shadow-md">
                     <img 
                        src={mockup1} 
                        className="w-full h-full object-cover"
                        alt="Generated Mockup"
                    />
                     <div className="absolute top-3 right-3 bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                         <Check size={16} strokeWidth={3} />
                     </div>
                  </div>

                  <Button className="w-full">
                     <Wand2 className="mr-2 h-4 w-4" /> Generate Variations
                  </Button>
               </div>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2">
               <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">3</div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Create a photo or video mockup</h3>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Choose your format. Generate high-resolution stills for your shop listings or engaging, cinematic video reveals.
               </p>
            </div>
          </div>

          {/* STEP 4: EXPORT */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
               <div className="bg-green-100 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600 mb-6 font-bold text-xl">4</div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Export and Sell</h3>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Download your assets in full 4K resolution, watermark-free. Our files are optimized for Etsy, Shopify, and social media.
               </p>
               <Button size="lg" className="w-full md:w-auto px-8" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                   Start Creating Now
               </Button>
            </div>
            
            <div className="w-full md:w-1/2">
               <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden aspect-[4/3] flex flex-col p-6">
                  <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-slate-900">Generated Assets</h3>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs px-3">
                          <Download size={14} className="mr-1" /> Download All
                      </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      <div className="group relative rounded-lg overflow-hidden aspect-square">
                          <img 
                            src={mockup1} 
                            className="w-full h-full object-cover"
                            alt="Export Asset 1"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                             <button className="bg-white p-2 rounded-full hover:scale-110 transition-transform"><Download size={16} /></button>
                          </div>
                          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">4K JPG</div>
                      </div>

                      <div className="group relative rounded-lg overflow-hidden aspect-square">
                          <img 
                            src={artImage} 
                            className="w-full h-full object-cover"
                            alt="Export Asset 2"
                          />
                          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                             <Video size={12} className="text-slate-900" />
                          </div>
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