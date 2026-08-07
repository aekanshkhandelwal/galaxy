import React from 'react';
import { motion } from 'framer-motion';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'bronze' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  icon,
  disabled = false,
}) => {
  const baseStyle = "inline-flex items-center justify-center font-sans tracking-widest text-xs uppercase font-semibold transition-all duration-500 rounded-none relative overflow-hidden group border focus:outline-none focus:ring-1 focus:ring-luxury-gold";

  const variants = {
    primary: "bg-luxury-black text-luxury-white border-luxury-black hover:bg-luxury-bronze hover:border-luxury-bronze",
    outline: "bg-transparent text-luxury-black border-luxury-black hover:bg-luxury-black hover:text-luxury-white",
    bronze: "bg-luxury-bronze text-white border-luxury-bronze hover:bg-luxury-hoverBronze hover:border-luxury-hoverBronze",
    ghost: "bg-transparent text-luxury-black border-transparent hover:text-luxury-bronze hover:border-luxury-bronze/20",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-10 py-4 text-xs tracking-[0.2em]",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};
