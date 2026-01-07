import React from 'react';

export const BeforeAfter: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">See How It Works</h2>
           <p className="text-lg text-slate-600">Watch our 60-second walkthrough to see how fast you can create assets.</p>
        </div>

        <div className="max-w-4xl mx-auto relative rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-100 bg-slate-900">
             {/* YouTube Embed */}
             <div className="aspect-video w-full">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=0&mute=1&controls=1&showinfo=0&rel=0" 
                    title="Wall Art Mockup Engine Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full object-cover"
                ></iframe>
             </div>
        </div>
      </div>
    </section>
  )
}