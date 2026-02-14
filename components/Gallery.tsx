import React from 'react';
import { Section } from './Section';
import { Camera } from 'lucide-react';

const images = [
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-29-28-1.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-29-35-1.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-29-36-2-1.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-33-43-1.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-34-25-1.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-29-24-2.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-29-24.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-29-23-2.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-29-23.jpg",
  "https://celinaroom.com/wp-content/uploads/2026/02/photo_2026-01-30_11-32-03.jpg"
];

export const Gallery: React.FC = () => {
  return (
    <Section className="bg-slate-50">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-gold-600 font-black text-sm tracking-widest uppercase mb-3">
          <Camera className="w-5 h-5" />
          <span>Galerie Exclusif</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 mb-6">
          Plongée dans l'univers VIP
        </h2>
        <p className="text-slate-800 text-lg font-medium max-w-2xl mx-auto">
          Voici un aperçu de ce qui vous attend. Des rencontres authentiques, une ambiance unique et des moments exclusifs.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
            <img 
              src={src} 
              alt={`Aperçu VIP ${i + 1}`} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};