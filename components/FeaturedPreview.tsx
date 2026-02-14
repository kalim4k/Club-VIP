import React from 'react';
import { Section } from './Section';

export const FeaturedPreview: React.FC = () => {
  return (
    <Section className="!py-8 md:!py-12">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
        {/* Image 1 */}
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
          <img
            src="https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-02-14_20-17-08.jpg"
            alt="Aperçu exclusif 1"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Image 2 */}
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 md:mt-12">
           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
          <img
            src="https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-02-14_20-24-47.jpg"
            alt="Aperçu exclusif 2"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
};