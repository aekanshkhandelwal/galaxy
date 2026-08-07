import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="border-b border-luxury-black/10 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-serif text-xl sm:text-2xl text-luxury-black group-hover:text-luxury-bronze transition-colors">
          {question}
        </span>
        <span className="p-2 text-luxury-bronze transition-transform duration-300">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 font-sans text-sm md:text-base text-luxury-charcoal/80 font-light leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
