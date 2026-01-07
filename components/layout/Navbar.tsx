import React, { useState, useEffect } from 'react';
import { Menu, X, Layout } from 'lucide-react';
import { Button } from '../ui/Button';
import { PageView } from '../../types';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for navigation to happen before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
            <div className="bg-brand-600 text-white p-1.5 rounded-lg mr-2">
              <Layout size={24} />
            </div>
            <span className="font-bold text-lg md:text-xl text-slate-900 tracking-tight">
              Wall Art Mockup Engine
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleLinkClick('how-it-works')} className="text-slate-600 hover:text-brand-600 font-medium text-sm transition-colors">How it works</button>
            <button onClick={() => handleLinkClick('features')} className="text-slate-600 hover:text-brand-600 font-medium text-sm transition-colors">Why us</button>
            <button onClick={() => handleLinkClick('pricing')} className="text-slate-600 hover:text-brand-600 font-medium text-sm transition-colors">Pricing</button>
            <button onClick={() => handleLinkClick('faq')} className="text-slate-600 hover:text-brand-600 font-medium text-sm transition-colors">FAQ</button>
            <Button onClick={() => handleLinkClick('pricing')} size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full px-4 pt-2 pb-6 shadow-xl">
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleLinkClick('how-it-works')} className="text-left text-slate-600 font-medium py-2">How it works</button>
            <button onClick={() => handleLinkClick('features')} className="text-left text-slate-600 font-medium py-2">Why us</button>
            <button onClick={() => handleLinkClick('pricing')} className="text-left text-slate-600 font-medium py-2">Pricing</button>
            <button onClick={() => handleLinkClick('faq')} className="text-left text-slate-600 font-medium py-2">FAQ</button>
            <Button onClick={() => handleLinkClick('pricing')} className="w-full justify-center">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};