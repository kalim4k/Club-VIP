import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-500 to-yellow-600 text-black hover:from-gold-400 hover:to-yellow-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    secondary: "bg-white text-slate-900 hover:bg-gray-100",
    outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10"
  };

  const pulseAnimation = pulse ? "animate-pulse" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseAnimation} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};