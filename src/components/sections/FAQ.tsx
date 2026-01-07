import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../../types';

const faqs: FAQItem[] = [
    {
        question: "Can I cancel any time?",
        answer: "Absolutely. You can cancel your subscription instantly from your account dashboard. You'll keep access until the end of your billing period."
    },
    {
        question: "Do you offer refunds?",
        answer: "We do not offer refunds because once software credits are used for generation, the computing resources are consumed. However, you can cancel your subscription at any time to prevent future billing."
    },
    {
        question: "Who is Wall Art Mockup Engine for?",
        answer: "It is specifically designed for wall art sellers on Etsy, Shopify, and Amazon, as well as digital artists and print-on-demand businesses who need realistic visual assets."
    },
    {
        question: "Will it work with Etsy, Shopify and print on demand platforms?",
        answer: "Yes! Our generated images and videos are optimized for Etsy's aspect ratios and file size limits, as well as Shopify and Instagram."
    },
    {
        question: "Do I need design skills?",
        answer: "None at all. Just upload your image file, and our engine automatically handles perspective, lighting, and shadows."
    },
    {
        question: "What counts as a photo or video mockup credit?",
        answer: "One credit is used each time you click 'Generate' and download a high-resolution result. Previewing scenes does not use credits."
    }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-brand-600" />
                ) : (
                  <Plus className="h-5 w-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};