import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { PageView } from '../../types';

interface ThankYouPageProps {
  onNavigate: (page: PageView) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  
  // Optional: Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-center relative">
          
          {/* Decorative Top Banner */}
          <div className="h-2 bg-gradient-to-r from-green-400 to-brand-500 w-full"></div>

          <div className="p-8 sm:p-12">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 animate-in zoom-in duration-300">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Payment Successful!
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Welcome to the family. Your account has been upgraded and is ready to go.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-100 text-left">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Next Steps:</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-brand-600 font-bold">1.</span> Access your dashboard below.
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-600 font-bold">2.</span> Upload your first artwork.
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-brand-600 font-bold">3.</span> Download 4K mockups instantly.
                </li>
              </ul>
            </div>

            <Button 
              size="lg" 
              className="w-full shadow-lg shadow-brand-500/30 group"
              onClick={() => onNavigate('admin')}
            >
              Access Software
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="mt-4 text-xs text-slate-400">
              A receipt has been sent to your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};