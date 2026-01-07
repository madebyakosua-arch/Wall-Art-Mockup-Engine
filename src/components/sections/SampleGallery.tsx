import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

export const SampleGallery: React.FC = () => {
    // UPDATED: Replaced images with user provided URLs
    const images = [
        "https://i.ibb.co/TBQ1YHw3/3d63e6fd4-generated-image-1.png",
        "https://i.ibb.co/V6cLmt6/mockup-1.png",
        "https://i.ibb.co/fYd0BNT5/a-bright-bold-green-ghana-kente-fabric-pattern-bac-RJ5-Io24t-Qgy5-Gmjtjbs-a-Q-QW-Ih-KOBTFGWAKg-LXz-Jf.png",
        "https://i.ibb.co/p61KhtBZ/Screenshot-2026-01-07-141053.jpg"
    ];
    
    const [selected, setSelected] = useState<string|null>(null);

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <div className="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            Actual Results
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Unedited output from our engine</h2>
                        <p className="text-slate-500 mt-2">No Photoshop. No post-processing. Straight from the generator.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div key={i} 
                             className="group relative aspect-square rounded-xl overflow-hidden cursor-zoom-in bg-white shadow-sm border border-slate-200"
                             onClick={() => setSelected(img)}>
                            <img src={img} alt={`Sample ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <div className="bg-white/90 text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all shadow-lg">
                                    <ZoomIn size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Simple Modal */}
            {selected && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelected(null)}>
                    <button className="absolute top-4 right-4 text-white hover:text-brand-400 transition-colors">
                        <X size={32} />
                    </button>
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex justify-center">
                        <img src={selected} className="max-w-full max-h-[85vh] rounded-lg shadow-2xl" alt="Full view" />
                        <div className="absolute -bottom-10 bg-white/10 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md border border-white/20">
                            Raw Output • 4K Resolution
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}