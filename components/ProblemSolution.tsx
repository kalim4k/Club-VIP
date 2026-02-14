import React from 'react';
import { XCircle, CheckCircle, Users, EyeOff, ShieldAlert } from 'lucide-react';
import { Section } from './Section';

export const ProblemSolution: React.FC = () => {
  return (
    <Section id="concept">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 mb-6">
          Pourquoi rejoindre le Club VIP ?
        </h2>
        <p className="text-xl text-slate-600 font-medium">La différence entre le chaos et l'excellence.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* The Problem */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 text-brand-red">
            <ShieldAlert className="w-8 h-8" />
            <h3 className="text-2xl font-black uppercase">Ailleurs (Gratuit)</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-lg font-medium text-slate-700">
              <XCircle className="w-6 h-6 text-brand-red mt-1 flex-shrink-0" />
              <span>Groupes remplis de faux profils et d'arnaques</span>
            </li>
            <li className="flex items-start gap-4 text-lg font-medium text-slate-700">
              <XCircle className="w-6 h-6 text-brand-red mt-1 flex-shrink-0" />
              <span>Aucune modération, spam constant</span>
            </li>
            <li className="flex items-start gap-4 text-lg font-medium text-slate-700">
              <XCircle className="w-6 h-6 text-brand-red mt-1 flex-shrink-0" />
              <span>Aucune confidentialité, tout le monde voit ton numéro</span>
            </li>
            <li className="flex items-start gap-4 text-lg font-medium text-slate-700">
              <XCircle className="w-6 h-6 text-brand-red mt-1 flex-shrink-0" />
              <span>Promesses non tenues, perte de temps</span>
            </li>
          </ul>
        </div>

        {/* The Solution */}
        <div className="bg-white border-4 border-gold-500 rounded-2xl p-6 md:p-8 shadow-2xl relative transform md:-translate-y-2">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gold-500 text-black text-sm font-black px-6 py-2 rounded-full uppercase tracking-wider shadow-md">
            Recommandé
          </div>
          <div className="flex items-center gap-3 mb-6 text-slate-900">
            <Users className="w-8 h-8 text-gold-500" />
            <h3 className="text-2xl font-black uppercase">Club Privé VIP</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-lg font-bold text-slate-800">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Filtrage strict :</strong> Réservé aux membres sérieux</span>
            </li>
            <li className="flex items-start gap-4 text-lg font-bold text-slate-800">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Vraies rencontres :</strong> Hommes & Femmes vérifiés</span>
            </li>
            <li className="flex items-start gap-4 text-lg font-bold text-slate-800">
              <EyeOff className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Discrétion totale :</strong> Personne ne voit ton nom</span>
            </li>
            <li className="flex items-start gap-4 text-lg font-bold text-slate-800">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Contenus Exclusifs :</strong> Accès au salon secret premium</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};