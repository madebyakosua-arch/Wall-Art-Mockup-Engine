import React from 'react';
import { Mail, Clock, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h1>
            <p className="text-xl text-slate-600">We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Have a question about our pricing, features, or need a custom plan for your agency? Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-brand-50 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-brand-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-slate-900">Email</h3>
                            <a href="mailto:hello@madebyakosua.com" className="text-brand-600 hover:underline text-lg">
                                hello@madebyakosua.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-brand-50 p-3 rounded-lg">
                            <Clock className="w-6 h-6 text-brand-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-slate-900">Response Time</h3>
                            <p className="text-slate-600">
                                We value your time. Our team guarantees a response <span className="font-bold text-slate-900">within 24 hours</span>.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-brand-50 p-3 rounded-lg">
                            <MapPin className="w-6 h-6 text-brand-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-slate-900">Office</h3>
                            <p className="text-slate-600">
                                Remote Team<br />
                                Operating Globally
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                placeholder="Jane"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                            placeholder="jane@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white">
                            <option>General Inquiry</option>
                            <option>Support Request</option>
                            <option>Sales & Pricing</option>
                            <option>Affiliate Program</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea 
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                            placeholder="How can we help you?"
                            required
                        ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                        <Send size={18} className="mr-2" /> Send Message
                    </Button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};