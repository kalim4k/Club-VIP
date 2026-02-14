import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Groupe sérieux, bonne ambiance. J'ai enfin trouvé des gens qui me comprennent.",
    author: "Marc D.",
    role: "Membre depuis 3 mois"
  },
  {
    text: "Rien à voir avec les groupes gratuits. Ici, c'est filtré et respectueux.",
    author: "Sarah L.",
    role: "Membre VIP"
  },
  {
    text: "Discret et sécurisé. C'est exactement ce que je cherchais après le boulot.",
    author: "Jean-Paul K.",
    role: "Membre depuis 6 mois"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section darker className="border-t border-slate-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900">Ils ont déjà rejoint...</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-gold-400 transition-colors shadow-sm">
            <Quote className="w-8 h-8 text-gold-500 mb-4" />
            <p className="text-slate-800 text-lg font-bold italic mb-6">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-black text-xl border border-slate-300">
                {t.author.charAt(0)}
              </div>
              <div>
                <p className="text-slate-900 font-black text-base">{t.author}</p>
                <p className="text-slate-500 font-medium text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};