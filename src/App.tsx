import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SocialProof } from './components/sections/SocialProof';
import { Benefits } from './components/sections/Benefits';
import { HowItWorks } from './components/sections/HowItWorks';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { SampleGallery } from './components/sections/SampleGallery';
import { UseCases } from './components/sections/UseCases';
import { Comparison } from './components/sections/Comparison';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AboutUs } from './components/pages/AboutUs';
import { Gallery } from './components/pages/Gallery';
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

  // Handle Stripe Redirects
  useEffect(() => {
    // Check if the URL contains ?payment_success=true
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('payment_success') === 'true') {
      setCurrentPage('thank-you');
      
      // Optional: Clean the URL so if they refresh, it doesn't re-trigger unnecessarily
      // window.history.replaceState({}, document.title, "/");
    }
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'admin':
        return <AdminDashboard />;
      case 'about':
        return <AboutUs />;
      case 'gallery':
        return <Gallery />;
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
        return <ThankYouPage onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Hero />
            <SocialProof />
            <Benefits />
            <HowItWorks />
            <BeforeAfter />
            <UseCases />
            <SampleGallery />
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
      {/* Hide Navbar on Thank You page for a cleaner focus, or keep it if preferred */}
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;