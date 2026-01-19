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
                As a digital creator who shares and offers my artwork online, I found myself stuck in a frustrating loop. Every new piece of artwork led to hours of tedious work: wrestling with Photoshop mockup templates, trying different Canva mockups, hunting for the right stock photos, and still struggling to make my art look like it truly belonged in a real room. It was draining, and it pulled me away from what I enjoy most: creating.
              </p>
              <p>
                I knew there had to be a better way. I pictured a tool that was smart, fast, and able to generate realistic mockups that feel natural, polished, and true to life. So I built it.
              </p>
              <p>
                Wall Art Mockup Engine is the tool I wanted all along. Made for creators, by a creator, its goal is simple: give you your time back and help you present your artwork in a way that looks professional and encourages more people to buy.
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