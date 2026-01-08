import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Mail, Star } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 flex flex-col pt-12 pb-12">
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Main Success Card */}
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-center relative z-10">
          
          {/* Decorative Top Banner */}
          <div className="h-2 bg-gradient-to-r from-green-400 to-brand-500 w-full"></div>

          <div className="p-8 sm:p-10">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 animate-in zoom-in duration-300">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Payment Successful!
            </h2>
            <p className="text-lg text-slate-500 mb-8">
              Welcome to the family. Your account has been upgraded.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 text-left">
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
              className="w-full shadow-lg shadow-brand-500/30 group mb-6"
              onClick={() => onNavigate('admin')}
            >
              Access Software
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* IMPORTANT EMAIL NOTICE */}
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-left">
                <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-1.5 rounded-full text-amber-600 mt-0.5 flex-shrink-0">
                        <Mail size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-800 mb-1">Check your Inbox & Spam Folder</p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            We have sent an introductory email containing your <strong>software link</strong> and login details. If you don't see it, please check your <strong>junk/spam</strong> folder.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 mb-2">
                A receipt has been sent to your email address.
              </p>
              <p className="text-xs text-slate-500">
                Need help? Contact us at <a href="mailto:hello@madebyakosua.com" className="text-brand-600 font-medium hover:underline">hello@madebyakosua.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Lovely Testimonial */}
        <div className="max-w-md w-full mt-8 px-2">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-sm text-center">
                <div className="flex justify-center gap-1 mb-3">
                    {[1,2,3,4,5].map((star) => (
                        <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-slate-700 italic mb-4 text-sm leading-relaxed">
                    "I was skeptical at first, but this tool literally saved me 20 hours a week. My Etsy sales doubled in the first month just by updating my main photos! Best investment I've made for my shop."
                </p>
                <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Sarah J." className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                        <p className="text-xs text-slate-500">Top 1% Etsy Seller</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};