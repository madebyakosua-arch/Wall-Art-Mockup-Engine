import React from 'react';
import { Button } from '../ui/Button';
import { DollarSign } from 'lucide-react';

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Join the Team</h1>
            <p className="text-xl text-slate-600">
                We're a remote-first team building the standard for e-commerce visualization.
            </p>
        </div>

        <div className="space-y-6">
            {/* Affiliate / Sales Rep - Highlighted */}
            <div className="border border-brand-200 bg-brand-50/30 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center hover:border-brand-300 transition-colors shadow-sm">
                <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-900">Affiliate Sales Representative</h3>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full flex items-center">
                            <DollarSign size={12} className="mr-1" /> High Commission
                        </span>
                    </div>
                    <p className="text-slate-600">Remote • 20% Commission Rate</p>
                    <p className="text-sm text-slate-500 mt-1">Earn 20% recurring revenue on every customer you refer.</p>
                </div>
                <Button variant="primary">Join Program</Button>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center hover:border-brand-300 transition-colors">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-slate-900">Senior 3D Artist</h3>
                    <p className="text-slate-600">Remote (Worldwide) • Full-time</p>
                </div>
                <Button variant="outline">Apply Now</Button>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center hover:border-brand-300 transition-colors">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-slate-900">Frontend Engineer (React)</h3>
                    <p className="text-slate-600">Remote (Americas/Europe) • Full-time</p>
                </div>
                <Button variant="outline">Apply Now</Button>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center hover:border-brand-300 transition-colors">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-slate-900">Growth Marketing Manager</h3>
                    <p className="text-slate-600">Remote (US Only) • Full-time</p>
                </div>
                <Button variant="outline">Apply Now</Button>
            </div>
        </div>
      </div>
    </div>
  );
};