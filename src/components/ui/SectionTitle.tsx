import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  darkBg?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  alignment = 'center',
  darkBg = false,
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[alignment];

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-20 ${className}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-[1px] w-8 bg-luxury-bronze" />
          <span className={`text-[11px] font-sans tracking-[0.25em] uppercase font-semibold ${darkBg ? 'text-luxury-gold' : 'text-luxury-bronze'}`}>
            {subtitle}
          </span>
          {alignment === 'center' && <span className="h-[1px] w-8 bg-luxury-bronze" />}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl leading-[1.1] ${
          darkBg ? 'text-luxury-white' : 'text-luxury-black'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-sans text-sm md:text-base font-light max-w-2xl mt-6 leading-relaxed ${
            darkBg ? 'text-luxury-gray/80' : 'text-luxury-charcoal/80'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
