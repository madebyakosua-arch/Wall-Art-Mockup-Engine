import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Mail, Star, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { PageView } from '../../types';

interface ThankYouPageProps {
  onNavigate: (page: PageView) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-center relative z-10">
          
          <div className="h-3 bg-gradient-to-r from-brand-400 via-brand-500 to-purple-500 w-full"></div>

          <div className="p-8 sm:p-10">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-50 mb-6 animate-in zoom-in duration-300 ring-8 ring-green-50/50">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
              You're all set!
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Thank you for giving Wall Art Mockup Engine a go! Your account is ready.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200 text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 opacity-10">
                   <Zap size={100} />
               </div>
               <div className="relative z-10">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Advantages</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-700 font-medium text-sm">
                        <CheckCircle size={16} className="text-brand-500 mr-2" /> 
                        Save hours with instant, one-click mockups.
                    </li>
                    <li className="flex items-center text-slate-700 font-medium text-sm">
                        <CheckCircle size={16} className="text-brand-500 mr-2" /> 
                        Boost sales with professional, photorealistic visuals.
                    </li>
                    <li className="flex items-center text-slate-700 font-medium text-sm">
                        <CheckCircle size={16} className="text-brand-500 mr-2" /> 
                        Access an exclusive library of high-end room scenes.
                    </li>
                  </ul>
               </div>
            </div>

            <Button 
              size="lg" 
              className="w-full shadow-xl shadow-brand-500/20 group mb-6 py-4 text-lg"
              onClick={() => window.location.href = 'https://www.wallartmockupengine.online'}
            >
              Access Wall Art Mockup Engine Here
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-left">
                <div className="flex items-start gap-3">
                    <div className="bg-white p-1.5 rounded-md text-blue-600 mt-0.5 flex-shrink-0 shadow-sm border border-blue-100">
                        <Mail size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-blue-900 mb-1">Check your Inbox</p>
                        <p className="text-xs text-blue-700 leading-relaxed">
                            We've sent a receipt and login details to your email. If you don't see it, please check your spam folder.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500 text-center">
              <p className="mb-2">
                Need help? Contact us at <a href="mailto:hello@madebystephanie.com" className="text-brand-600 font-medium hover:underline">hello@madebystephanie.com</a>.
              </p>
              <p className="mb-2">We aim to respond within 24-48 hours.</p>
              <p>You can cancel your subscription at any time from your dashboard.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};