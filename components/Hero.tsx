import React from 'react';
import { Button } from './Button';
import { Lock, ShieldCheck, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-16 bg-slate-50">
      
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-brand-red font-extrabold text-sm uppercase tracking-wider mb-8 animate-fade-in-up">
          <Star className="w-4 h-4 fill-current" />
          <span>Club Privé VIP &bull; Réservé aux Adultes +18</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-serif font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
          Rencontres Discrètes <br />
          <span className="leading-snug inline-block mt-2">
            & <span className="highlight-red px-2">Contenus Exclusifs</span>
          </span>
        </h1>

        <p className="text-xl md:text-3xl font-medium text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
          Tu travailles dur. Tu veux te détendre sans stress ? <br/>
          Accède à un cercle <span className="font-extrabold text-black bg-yellow-100 px-1">fermé, filtré et sécurisé</span>.
        </p>

        {/* Added Image */}
        <div className="mb-10 flex justify-center">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
             <img 
               src="https://celinaroom.com/wp-content/uploads/2026/02/q97zbVFMQg7aV4HzjxSQWkDja5clG0Eb2dKtqOnT.avif" 
               alt="Ambiance Club Privé" 
               className="w-full h-auto object-cover"
             />
           </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button onClick={scrollToPricing} pulse className="shadow-xl shadow-gold-500/20 text-xl py-5 px-10">
            REJOINDRE LE GROUPE MAINTENANT
          </Button>
          <p className="text-base font-bold text-slate-600 mt-2 sm:mt-0 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            🔒 Discrétion assurée à 100%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-800 text-base font-bold">
          <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-md border border-slate-100">
            <ShieldCheck className="w-6 h-6 text-green-600" />
            <span>Profils Vérifiés</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-md border border-slate-100">
            <Lock className="w-6 h-6 text-slate-900" />
            <span>Anonymat Garanti</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-md border border-slate-100">
            <Star className="w-6 h-6 text-gold-500 fill-current" />
            <span>Contenu Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};