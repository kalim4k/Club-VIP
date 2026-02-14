import React from 'react';

export interface PricingOption {
  id: string;
  title: string;
  price: string;
  period?: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}