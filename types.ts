import React from 'react';

export type PageView = 'home' | 'admin' | 'about' | 'gallery' | 'blog' | 'careers' | 'privacy' | 'terms' | 'disclaimer' | 'contact' | 'thank-you';

export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  tagline: string;
  perUnitText?: string;
  features: string[];
  isRecommended?: boolean;
  buttonText: string;
  id: string;
  isTrial?: boolean;
  stripeLinkMonthly?: string;
  stripeLinkYearly?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
}