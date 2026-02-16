import React from 'react';
import { Check, Smartphone, Star } from 'lucide-react';
import { Button } from './Button';
import { Section } from './Section';

export const Pricing: React.FC = () => {
  const handleBuy = () => {
    window.location.href = 'https://paypal-unlocked-africa.lovable.app/confirm';
  };

  return (
    <Section id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 mb-6">
          Rejoins le Club
        </h2>
        <div className="inline-block bg-brand-red text-white px-6 py-2 rounded-full animate-pulse shadow-md">
          <p className="font-extrabold text-base uppercase tracking-wide">
            ⚠️ Places très limitées
          </p>
        </div>
        <p className="text-slate-700 font-medium text-lg mt-6 max-w-xl mx-auto">
          Pour garantir la qualité des échanges et la discrétion, l'accès se fait uniquement sur abonnement.
        </p>
      </div>

      <div className="flex justify-center max-w-4xl mx-auto">
        {/* Monthly Plan - Single Option */}
        <div className="w-full max-w-md bg-white border-4 border-gold-500 rounded-2xl p-8 flex flex-col relative overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 inset-x-0 h-3 bg-gold-500"></div>
          
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-6 h-6 text-gold-500 fill-current" />
            <h3 className="text-3xl font-black text-slate-900 uppercase">Abonnement VIP</h3>
          </div>
          <p className="text-slate-600 font-bold text-sm mb-6">Accès complet immédiat, sans engagement</p>
          
          <div className="mb-6 flex flex-col">
            <span className="text-slate-400 line-through text-xl font-bold">5 000 FCFA</span>
            <div className="flex items-baseline gap-2">
               <span className="text-6xl font-black text-brand-red">2 500 FCFA</span>
               <span className="text-base text-slate-600 font-bold">/ mois</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              'Accès immédiat au groupe Telegram privé',
              'Canal de contenus exclusifs (+18)',
              'Rencontres & Discussions libres',
              'Anonymat & Discrétion totale',
              'Modération active (0 faux profils)'
            ].map((feat, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-900 text-lg font-bold">
                <div className="bg-gold-100 rounded-full p-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-gold-600" />
                </div>
                {feat}
              </li>
            ))}
          </ul>

          <Button 
            variant="primary" 
            fullWidth 
            pulse 
            className="text-xl py-4 shadow-lg"
            onClick={handleBuy}
          >
            REJOINDRE MAINTENANT
          </Button>
          <p className="text-xs text-center text-slate-500 font-bold mt-4">
            Paiement sécurisé • Accès instantané
          </p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-12 text-center">
        <p className="text-slate-600 font-bold text-sm mb-4">Moyens de paiement acceptés</p>
        <div className="flex justify-center items-center gap-8 grayscale opacity-100 transition-all">
          <div className="flex flex-col items-center">
             <Smartphone className="w-10 h-10 text-orange-500 mb-2" />
             <span className="text-xs font-bold text-slate-600">Orange</span>
          </div>
          <div className="flex flex-col items-center">
             <Smartphone className="w-10 h-10 text-yellow-400 mb-2" />
             <span className="text-xs font-bold text-slate-600">MTN</span>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">W</div>
             <span className="text-xs font-bold text-slate-600">Wave</span>
          </div>
        </div>
      </div>
    </Section>
  );
};