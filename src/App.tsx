import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SocialProof } from './components/sections/SocialProof';
import { Benefits } from './components/sections/Benefits';
import { HowItWorks } from './components/sections/HowItWorks';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { UseCases } from './components/sections/UseCases';
import { Comparison } from './components/sections/Comparison';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AboutUs } from './components/pages/AboutUs';
import { BlogPage } from './components/pages/BlogPage';
import { CareersPage } from './components/pages/CareersPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';
import { DisclaimerPage } from './components/pages/DisclaimerPage';
import { ContactPage } from './components/pages/ContactPage';
import { ThankYouPage } from './components/pages/ThankYouPage';
import { PageView } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Handle URL Navigation (Hash & Query Params)
  useEffect(() => {
    const handleNavigation = () => {
      // 1. Check Query Params (Stripe Success priority)
      // Use this URL for Stripe: https://www.wallartmockupengine.com/?payment_success=true
      const queryParams = new URLSearchParams(window.location.search);
      if (queryParams.get('payment_success') === 'true') {
        setCurrentPage('thank-you');
        return;
      }

      // 2. Check Hash (Manual Navigation: #admin, #thank-you, #blog)
      // Get hash and strip the '#' character
      let hash = window.location.hash.replace(/^#/, '');
      
      // Robust cleaning: Handle #/thank-you, #thank-you/, or #/thank-you/
      // Remove starting slash if present
      if (hash.startsWith('/')) {
        hash = hash.substring(1);
      }
      // Remove trailing slash if present
      if (hash.endsWith('/')) {
        hash = hash.substring(0, hash.length - 1);
      }

      const validPages: PageView[] = [
        'home', 'admin', 'about', 'gallery', 'blog', 'careers', 
        'privacy', 'terms', 'disclaimer', 'contact', 'thank-you'
      ];
      
      // Check if the cleaned hash matches a valid page
      if (validPages.includes(hash as PageView)) {
        setCurrentPage(hash as PageView);
      } else if (!hash) {
        // If no hash, default to home
        setCurrentPage('home');
      }
    };

    // Run on mount
    handleNavigation();

    // Listen for hash changes (back/forward button support)
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  // Update Hash when internal navigation happens
  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    if (page === 'home') {
       // Clear hash for home to keep URL clean
       window.history.pushState(null, '', ' '); 
    } else {
       // Set hash for bookmarking
       window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'admin':
        return <AdminDashboard />;
      case 'about':
        return <AboutUs />;
      case 'blog':
        return <BlogPage />;
      case 'careers':
        return <CareersPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      case 'contact':
        return <ContactPage />;
      case 'thank-you':
        return <ThankYouPage onNavigate={handleNavigate} />;
      default:
        return (
          <>
            <Hero />
            <SocialProof />
            <Benefits />
            <HowItWorks />
            <BeforeAfter />
            <UseCases />
            <Comparison />
            <Pricing />
            <FAQ />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900 flex flex-col">
      {/* Navbar is always visible for better navigation context */}
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      {/* Footer is always visible so links can be accessed on all pages */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;