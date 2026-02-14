import React from 'react';
import { FileText, Eye, Lock } from 'lucide-react';
import { Section } from './Section';

export const PreviewSection: React.FC = () => {
  return (
    <Section darker>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <div className="bg-white p-1 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto border border-slate-200">
             <div className="bg-slate-50 border border-slate-200 aspect-[3/4] relative overflow-hidden flex flex-col p-6">
                <div className="absolute top-4 right-4 text-slate-300">
                   <FileText size={48} />
                </div>
                <h3 className="text-2xl font-serif text-slate-800 font-extrabold mb-4 mt-8 leading-tight">
                  Intimité, Consentement et Communication
                </h3>
                <p className="text-sm text-slate-600 font-bold uppercase tracking-widest mb-8">Guide Exclusif du Couple</p>
                
                <div className="space-y-3 mb-auto">
                   <div className="h-3 bg-slate-200 rounded w-full"></div>
                   <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                   <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-bold">
                   <span>10 Pages</span>
                   <span>305.24 KB</span>
                </div>

                {/* Blur Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent flex flex-col items-center justify-end pb-8">
                   <div className="bg-slate-900 text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-xl">
                      <Lock size={16} />
                      <span className="text-sm font-bold">Contenu Réservé aux Membres</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left">
           <div className="inline-flex items-center gap-2 text-gold-600 font-black text-sm tracking-widest uppercase mb-4">
              <Eye className="w-5 h-5" />
              <span>Aperçu du contenu</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-serif text-slate-900 font-extrabold mb-6">
             Ce n'est qu'un début...
           </h2>
           <p className="text-slate-800 text-xl md:text-2xl font-medium mb-8 leading-relaxed">
             En plus de l'accès au groupe de discussion, tu débloques immédiatement notre bibliothèque de guides et contenus exclusifs. 
           </p>
           <ul className="space-y-4 mb-8 text-left max-w-md mx-auto md:mx-0">
             <li className="flex items-center gap-4 text-slate-800 text-lg font-bold">
               <span className="w-3 h-3 rounded-full bg-gold-500"></span>
               Conseils pour adultes avertis
             </li>
             <li className="flex items-center gap-4 text-slate-800 text-lg font-bold">
               <span className="w-3 h-3 rounded-full bg-gold-500"></span>
               Guides sur la dynamique de couple
             </li>
             <li className="flex items-center gap-4 text-slate-800 text-lg font-bold">
               <span className="w-3 h-3 rounded-full bg-gold-500"></span>
               Histoires et partages d'expériences
             </li>
           </ul>
        </div>
      </div>
    </Section>
  );
};