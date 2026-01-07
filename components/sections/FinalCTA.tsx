import React from 'react';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-600/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to double your art sales?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join thousands of smart sellers using professional mockups to drive conversions. 
          <br/><span className="text-white font-bold">Lock in the 25% launch discount before it expires.</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
                variant="primary" 
                size="lg" 
                className="text-lg px-10 py-4 shadow-2xl shadow-brand-500/30 hover:scale-105 transition-transform w-full sm:w-auto"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
            >
            Get Started Now
            </Button>
        </div>
      </div>
    </section>
  );
};