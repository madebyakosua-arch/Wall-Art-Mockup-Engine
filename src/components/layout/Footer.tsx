import React from 'react';
import { Layout, Heart, Shield, Star, Award } from 'lucide-react';
import { PageView } from '../../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: PageView, sectionId?: string) => {
    e.preventDefault();
    onNavigate(page);
    if (sectionId && page === 'home') {
       setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-4 cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
                <div className="bg-brand-600 text-white p-1 rounded mr-2">
                   <Layout size={20} />
                </div>
                <span className="font-bold text-slate-900">Wall Art Mockup Engine</span>
             </div>
             <p className="text-slate-500 text-sm mb-6">
                We bridge the gap between digital designs and real-world visualization.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={(e) => handleLinkClick(e, 'home', 'features')} className="hover:text-brand-600 transition-colors">Features</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'home', 'pricing')} className="hover:text-brand-600 transition-colors">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-brand-600 transition-colors">About Us</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'blog')} className="hover:text-brand-600 transition-colors">Blog</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-brand-600 transition-colors">Contact</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'admin')} className="hover:text-brand-600 transition-colors font-medium text-brand-600">Admin</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-brand-600 transition-colors">Privacy Policy</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-brand-600 transition-colors">Terms of Service</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'disclaimer')} className="hover:text-brand-600 transition-colors">Disclaimer</button></li>
                <li><a href="mailto:support@wallartengine.com" className="hover:text-brand-600 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="border-t border-slate-100 py-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center bg-slate-50/50 rounded-xl p-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 md:mb-0 md:mr-4">Our Commitment</span>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-700 font-medium">
                <span className="flex items-center gap-2" title="We act with honesty">
                    <Shield size={16} className="text-brand-500" /> Integrity
                </span>
                <span className="flex items-center gap-2" title="You are our priority">
                    <Heart size={16} className="text-red-500" /> Customer First
                </span>
                <span className="flex items-center gap-2" title="We deliver quality">
                    <Award size={16} className="text-purple-500" /> Professionalism
                </span>
                <span className="flex items-center gap-2" title="We strive for the best">
                    <Star size={16} className="text-yellow-500" /> Excellence
                </span>
                </div>
            </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
            © 2025. Wall Art Mockup Engine by Made by Akosua. All rights reserved.
        </div>
      </div>
    </footer>
  );
};