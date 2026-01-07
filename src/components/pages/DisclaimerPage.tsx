import React from 'react';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Disclaimer</h1>
        <p className="text-slate-500 mb-8">Effective Date: October 24, 2025</p>
        
        <div className="prose prose-slate max-w-none text-slate-700">
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">1. General Disclaimer</h3>
            <p className="mb-4">
                The information provided by Wall Art Mockup Engine ("we," "us," or "our") on www.wallartengine.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Software & AI Disclaimer</h3>
            <p className="mb-4">
                Our Service utilizes artificial intelligence and algorithmic processing to generate mockups. While we strive for high-quality, photorealistic results, we do not guarantee that every generation will be perfect or free from artifacts. The quality of the output is highly dependent on the quality of the input images provided by you. We are not responsible for any errors or distortions in the generated images.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Professional Disclaimer</h3>
            <p className="mb-4">
                The Service does not contain legal, financial, or business advice. The use of our mockups is not a guarantee of increased sales, conversion rates, or business success. Any reliance you place on such information or tools is strictly at your own risk. You should consult with the appropriate professionals before taking any actions based upon such information.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. External Links Disclaimer</h3>
            <p className="mb-4">
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Testimonials Disclaimer</h3>
            <p className="mb-4">
                The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h3>
            <p className="mb-4">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
        </div>
      </div>
    </div>
  );
};