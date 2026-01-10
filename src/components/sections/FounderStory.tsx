import React from 'react';
import { Heart } from 'lucide-react';

export const FounderStory: React.FC = () => {
  return (
    <section id="founder-story" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Story Content */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6">
              <Heart size={14} className="fill-brand-700" />
              A Note from the Founder
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              I spent more time making mockups than making art.
            </h2>
          </div>
            
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              As an artist selling on Etsy, I was caught in a frustrating cycle. Each new piece of art meant hours of tedious work: upscaling the digital file, battling with Photoshop templates, and trying to make my art look good in generic room photos. It was exhausting, and it was stealing time away from what I actually love doing—creating.
            </p>
            <p>
              I knew there had to be a better way. I imagined a tool that was smart, fast, and created visuals so realistic they'd stop customers in their tracks. So, I decided to build it.
            </p>
            <p>
              Wall Art Mockup Engine is the tool I wish I had. It’s built for artists, by an artist, with the simple goal of giving you back your time and helping you sell more art.
            </p>
          </div>

          <div className="mt-8">
              <p className="font-serif text-2xl text-slate-800">To your success,</p>
              <p className="font-bold text-3xl font-['cursive'] text-brand-600 -mt-2 transform -rotate-2">Stephanie</p>
          </div>

        </div>
      </div>
    </section>
  );
};