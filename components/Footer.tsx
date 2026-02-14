import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 py-12 px-6 border-t border-slate-900 text-center text-sm">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">
          <span className="text-gold-500 font-bold">CLUB PRIVÉ VIP</span> &copy; {new Date().getFullYear()}
        </p>
        <p className="mb-8 max-w-lg mx-auto">
          Ce club n'est pas public. Les liens ne circulent jamais librement.
          Si tu vois cette page, c'est que tu es autorisé(e).
        </p>
        <div className="flex justify-center gap-4 text-xs">
          <a href="#" className="hover:text-white">Conditions Générales</a>
          <span>&bull;</span>
          <a href="#" className="hover:text-white">Confidentialité</a>
          <span>&bull;</span>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
};