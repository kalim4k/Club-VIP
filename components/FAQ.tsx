import React from 'react';
import { Check, X } from 'lucide-react';
import { Section } from './Section';

export const FAQ: React.FC = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
           <h3 className="text-3xl font-serif font-extrabold text-slate-900 mb-6">À qui c'est destiné ?</h3>
           <ul className="space-y-5">
             {[
               "Adultes (+18) uniquement",
               "Hommes et femmes en Afrique et Diaspora",
               "Personnes sérieuses et respectueuses",
               "Ceux qui veulent du vrai, pas du théâtre"
             ].map((item, i) => (
               <li key={i} className="flex items-start gap-4">
                 <div className="bg-green-100 p-1.5 rounded-full">
                   <Check className="w-5 h-5 text-green-600" />
                 </div>
                 <span className="text-slate-800 font-bold text-lg">{item}</span>
               </li>
             ))}
           </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
           <h3 className="text-3xl font-serif font-extrabold text-slate-900 mb-6">Ce n'est PAS pour toi si...</h3>
           <ul className="space-y-5">
             {[
               "Tu cherches du contenu gratuit",
               "Tu n'es pas respectueux(se)",
               "Tu veux perdre le temps des autres",
               "Tu es mineur(e)"
             ].map((item, i) => (
               <li key={i} className="flex items-start gap-4">
                 <div className="bg-red-100 p-1.5 rounded-full">
                   <X className="w-5 h-5 text-brand-red" />
                 </div>
                 <span className="text-slate-600 font-medium text-lg">{item}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </Section>
  );
};