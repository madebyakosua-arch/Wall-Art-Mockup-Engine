import React, { useState } from 'react';
import { Check, X, Zap, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { PricingPlan } from '../../types';

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 15,
    currency: "$",
    tagline: "For hobbyists and personal projects",
    features: [
      "30 photo mockups per month",
      "2 video mockups per month",
      "Unlimited cloud storage",
      "Favorite & organize mockups",
      "Standard quality downloads",
      "Access to all mockup styles",
      "Community support"
    ],
    buttonText: "Start Basic Plan"
  },
  {
    id: "starter",
    name: "Starter",
    price: 29,
    currency: "$",
    tagline: "For new sellers who want clean mockups",
    features: [
      "50 photo mockups per month",
      "4 video mockups per month",
      "Unlimited cloud storage",
      "Favorite & organize mockups",
      "Standard quality downloads",
      "Access to all mockup styles",
      "Basic customer support"
    ],
    buttonText: "Start Starter Plan"
  },
  {
    id: "creator",
    name: "Creator",
    price: 47,
    currency: "$",
    tagline: "For creators who post new art every week",
    isRecommended: true,
    features: [
      "100 photo mockups per month",
      "10 video mockups per month",
      "Unlimited cloud storage",
      "Favorite & organize mockups",
      "High quality downloads",
      "Access to all mockup styles",
      "Save custom presets",
      "Priority customer support",
      "Early access to new features"
    ],
    buttonText: "Start Creator Plan"
  },
  {
    id: "agency",
    name: "Agency",
    price: 199,
    currency: "$",
    tagline: "For agencies and brands that need premium video mockups at scale",
    features: [
      "300 photo mockups per month",
      "20 video mockups per month",
      "Unlimited cloud storage",
      "Favorite & organize mockups",
      "Maximum quality downloads",
      "Access to all mockup styles",
      "Unlimited custom presets",
      "Advanced team collaboration",
      "Batch processing (unlimited)",
      "API access for automation",
      "White-label options",
      "Dedicated account manager",
      "24/7 VIP support"
    ],
    buttonText: "Start Agency Plan"
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true); // Default to yearly for conversion
  const [showCheckout, setShowCheckout] = useState<string | null>(null);

  const handlePlanClick = (planName: string) => {
    setShowCheckout(planName);
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Early Adopter Banner */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-lg p-4 mb-12 flex flex-col sm:flex-row items-center justify-center text-center gap-2 shadow-sm animate-pulse-slow">
            <div className="bg-orange-500 text-white p-1 rounded-full">
                <Clock size={16} />
            </div>
            <p className="text-orange-900 font-medium">
                <span className="font-bold">Early Adopter Pricing:</span> Prices will increase soon. Lock in these low rates forever by subscribing today.
            </p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-4">
             <Zap size={14} className="mr-1 fill-brand-700" /> Limited Time Launch Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Pricing that pays for itself</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Unlock commercial rights and sell more art. Choose the plan that fits your growth.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors duration-200"
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ${isYearly ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-slate-500'} flex items-center`}>
                Yearly 
                <span className="ml-2 bg-red-100 text-red-600 text-xs font-extrabold px-2 py-1 rounded-full uppercase">
                    Save 25%
                </span>
            </span>
          </div>
        </div>

        {/* Cards Grid - Adjusted for 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mx-auto">
          {plans.map((plan) => {
             // Calculate display price
             const monthlyPrice = plan.price;
             const yearlyPrice = Math.floor(plan.price * 0.75); // 25% off
             const displayPrice = plan.price === 0 ? 0 : (isYearly ? yearlyPrice : monthlyPrice);

             return (
            <div 
              key={plan.id}
              className={`relative flex flex-col p-6 bg-white rounded-2xl border ${
                plan.isRecommended 
                  ? 'border-brand-500 ring-4 ring-brand-500/10 shadow-2xl scale-105 z-10' 
                  : 'border-slate-100 shadow-lg hover:border-brand-300'
              } transition-all duration-300`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 inset-x-0 -mt-4 flex justify-center">
                    <div className="bg-gradient-to-r from-brand-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                    Most Popular
                    </div>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-1 min-h-[40px]">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">
                        {plan.price === 0 ? 'Free' : `${plan.currency}${displayPrice}`}
                    </span>
                    {plan.price > 0 && <span className="text-slate-500 font-medium ml-1">/mo</span>}
                </div>
                {plan.price > 0 && isYearly && (
                    <div className="text-sm text-slate-400 mt-1 line-through">
                        was {plan.currency}{monthlyPrice}/mo
                    </div>
                )}
                
                {/* Per Unit Text Display */}
                {plan.perUnitText && !isYearly && (
                    <div className="mt-2 inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                        {plan.perUnitText}
                    </div>
                )}
                 {/* Estimated Yearly Per Unit Text */}
                 {plan.perUnitText && isYearly && (
                    <div className="mt-2 inline-block bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded">
                        Even less per photo with yearly!
                    </div>
                )}
              </div>

              <Button 
                variant={plan.isRecommended ? 'primary' : 'outline'} 
                className={`w-full mb-8 ${plan.isRecommended ? 'shadow-brand-500/25 shadow-xl' : ''}`}
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.buttonText}
              </Button>

              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">What you get</p>
                  {plan.features.map((feat, i) => {
                    const isNegative = (feat.toLowerCase().includes('no ') || feat.toLowerCase().includes('watermark')) && !feat.toLowerCase().includes('no watermarks');
                    
                    return (
                    <div key={i} className="flex items-start">
                       {isNegative ? (
                           <div className="bg-orange-100 rounded-full p-0.5 mr-2 mt-0.5">
                               <div className="w-4 h-4 text-orange-600 flex items-center justify-center text-[10px] font-bold">!</div>
                           </div>
                       ) : (
                           <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                       )}
                      <span className={`text-sm ${isNegative ? 'text-slate-500 italic' : 'text-slate-700'}`}>{feat}</span>
                    </div>
                  )})}
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>

      {/* Checkout Modal Simulation */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="text-lg font-bold text-slate-900">
                        {`Checkout - ${showCheckout} Plan`}
                    </h3>
                    <button onClick={() => setShowCheckout(null)} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
                </div>
                <div className="p-6 space-y-4">
                    <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm mb-4">
                        This is a simulation. No payment will be processed.
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Card Information</label>
                        <div className="border border-slate-300 rounded-lg p-3 flex items-center bg-white">
                            <div className="w-8 h-5 bg-slate-200 rounded mr-3"></div>
                            <input type="text" placeholder="1234 4242 4242 4242" className="flex-1 outline-none text-sm" disabled />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Expiry</label>
                            <input type="text" placeholder="MM / YY" className="w-full border border-slate-300 rounded-lg p-3 text-sm" disabled />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">CVC</label>
                            <input type="text" placeholder="123" className="w-full border border-slate-300 rounded-lg p-3 text-sm" disabled />
                        </div>
                    </div>
                    <Button className="w-full mt-4" onClick={() => {
                        alert(`Welcome to the ${showCheckout} plan!`);
                        setShowCheckout(null);
                    }}>
                        Pay Securely
                    </Button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};