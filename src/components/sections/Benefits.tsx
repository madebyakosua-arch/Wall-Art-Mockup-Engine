import React from 'react';
import { Clock, Camera, TrendingUp, Wand2 } from 'lucide-react';
import { Benefit } from '../../types';

const benefits: Benefit[] = [
  {
    title: "Save hours of editing",
    description: "Stop struggling with Photoshop. Generate dozens of variations in seconds.",
    icon: Clock
  },
  {
    title: "Look like a pro studio",
    description: "High-resolution, photorealistic rooms that make your art look expensive.",
    icon: Camera
  },
  {
    title: "Boost listing conversions",
    description: "Better images mean more clicks and more sales on every marketplace.",
    icon: TrendingUp
  },
  {
    title: "Realistic Textures & Lighting",
    description: "Our engine intelligently wraps your artwork around textures and adjusts lighting for hyper-realism.",
    icon: Wand2
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why wall art sellers love Wall Art Mockup Engine
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg hover:bg-white transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                <benefit.icon className="text-brand-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};