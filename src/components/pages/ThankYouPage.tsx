import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Mail, Star, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { PageView } from '../../types';

interface ThankYouPageProps {
  onNavigate: (page: PageView) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-12 pb-12">
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Main Success Card */}
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-center relative z-10">
          
          {/* Decorative Top Banner */}
          <div className="h-3 bg-gradient-to-r from-brand-400 via-brand-500 to-purple-500 w-full"></div>

          <div className="p-8 sm:p-10">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-50 mb-6 animate-in zoom-in duration-300 ring-8 ring-green-50/50">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
              You're in!
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Thank you for deciding to try the Wall Art Mockup Engine! We hope you like it!
            </p>

            {/* Account Info Box */}
            <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200 text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 opacity-10">
                   <Zap size={100} />
               </div>
               <div className="relative z-10">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Plan Includes</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-700 font-medium text-sm">
                        <CheckCircle size={16} className="text-brand-500 mr-2" /> 
                        Instant Access to Dashboard
                    </li>
                    <li className="flex items-center text-slate-700 font-medium text-sm">
                        <CheckCircle size={16} className="text-brand-500 mr-2" /> 
                        100 Mockup Credits Added
                    </li>
                    <li className="flex items-center text-slate-700 font-medium text-sm">
                        <CheckCircle size={16} className="text-brand-500 mr-2" /> 
                        Commercial License Active
                    </li>
                  </ul>
               </div>
            </div>

            <Button 
              size="lg" 
              className="w-full shadow-xl shadow-brand-500/20 group mb-6 py-4 text-lg"
              onClick={() => onNavigate('admin')}
            >
              Launch Wall Art Engine
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* IMPORTANT EMAIL NOTICE */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-left">
                <div className="flex items-start gap-3">
                    <div className="bg-white p-1.5 rounded-md text-blue-600 mt-0.5 flex-shrink-0 shadow-sm border border-blue-100">
                        <Mail size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-blue-900 mb-1">Check your Inbox</p>
                        <p className="text-xs text-blue-700 leading-relaxed">
                            We've sent a receipt and backup login link to your email. If you don't see it, please check your <strong>spam folder</strong>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                Need help? <a href="mailto:hello@madebyakosua.com" className="text-brand-600 font-medium hover:underline">Contact Support</a>
              </p>
            </div>
          </div>
        </div>

        {/* User Trust */}
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
             <div className="flex">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
             </div>
             <span>Trusted by 5,000+ Sellers</span>
        </div>

      </div>
    </div>
  );
};