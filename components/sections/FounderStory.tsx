import React from 'react';
import { Heart } from 'lucide-react';

export const FounderStory: React.FC = () => {
  // Use the new founder photo provided by the user.
  const founderImage = "https://i.ibb.co/Q7H3PpMW/9b593e91-db89-435c-aa94-dea5fb348982.png";

  return (
    <section id="founder-story" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Founder Image */}
          <div className="md:col-span-1">
            <div className="relative mx-auto w-48 h-48 md:w-full md:h-auto md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={founderImage} 
                alt="Stephanie, Founder of Wall Art Mockup Engine"
                className="w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
               <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Stephanie</p>
                  <p className="text-xs">Founder & Creator</p>
               </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6">
              <Heart size={14} className="fill-brand-700" />
              A Note from the Founder
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              I spent more time making mockups than creating.
            </h2>
            
            <div className="prose prose-lg text-slate-600 max-w-none">
              <p>
                As a digital creator selling online, I was caught in a frustrating cycle. Each new design meant hours of tedious work: battling with Photoshop mockup templates, canva mockup templates and trying to find good stock photos, and struggling to make my work look realistic in a room. It was exhausting, and it was stealing time away from what I actually love doing—creating.
              </p>
              <p>
                I knew there had to be a better way. I imagined a tool that was smart, fast, and created realistic mockup visuals so realistic they'd stop customers in their tracks. So, I decided to build it.
              </p>
              <p>
                Wall Art Mockup Engine is the tool I wish I had. It’s built for creators, by a creator, with the simple goal of giving you back your time and helping you sell more of your work.
              </p>
            </div>

            <div className="mt-8">
                <p className="font-serif text-2xl text-slate-800">To your success,</p>
                <p className="font-bold text-3xl font-['cursive'] text-brand-600 -mt-2 transform -rotate-2">Stephanie</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};