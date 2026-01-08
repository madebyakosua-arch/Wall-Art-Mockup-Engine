import React from 'react';

export type PageView = 'home' | 'admin' | 'about' | 'blog' | 'careers' | 'privacy' | 'terms' | 'disclaimer' | 'contact';

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