import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 p-4 bg-white/95 backdrop-blur border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50 md:hidden animate-fade-in-up">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold">Accès VIP</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-red text-lg">2 500 FCFA</span>
            <span className="text-xs text-slate-400 line-through">5 000</span>
          </div>
        </div>
        <Button 
          variant="primary" 
          className="py-2 px-6 text-sm"
          onClick={() => window.location.href = 'https://paypal-unlocked-africa.lovable.app/confirm'}
        >
          Rejoindre
        </Button>
      </div>
    </div>
  );
};