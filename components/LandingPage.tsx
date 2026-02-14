import React from 'react';
import { Hero } from './Hero';
import { ProblemSolution } from './ProblemSolution';
import { PreviewSection } from './PreviewSection';
import { Gallery } from './Gallery';
import { Pricing } from './Pricing';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { Footer } from './Footer';
import { StickyCTA } from './StickyCTA';

export const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen text-slate-900 selection:bg-gold-500 selection:text-white overflow-x-hidden">
      <Hero />
      <ProblemSolution />
      <Gallery />
      <PreviewSection />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
      <StickyCTA />
    </main>
  );
};