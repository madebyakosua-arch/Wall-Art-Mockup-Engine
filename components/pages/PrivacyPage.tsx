import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Effective Date: January 7, 2026</p>
        
        <div className="prose prose-slate max-w-none text-slate-700">
            <p className="mb-6">
                Wall Art Mockup Engine ("we," "us," or "our") operates the website located at www.wallartengine.com (the "Service"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information Collection and Use</h3>
            <p className="mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h4 className="font-bold mb-2">Types of Data Collected</h4>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Cookies and Usage Data.</li>
                <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use of Data</h3>
            <p className="mb-4">Wall Art Mockup Engine uses the collected data for various purposes:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Transfer of Data</h3>
            <p className="mb-4">
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
            </p>
            <p className="mb-4">
                If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Security of Data</h3>
            <p className="mb-4">
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Service Providers</h3>
            <p className="mb-4">
                We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Changes to This Privacy Policy</h3>
            <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h3>
            <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us by email: legal@wallartengine.com
            </p>
        </div>
      </div>
    </div>
  );
};