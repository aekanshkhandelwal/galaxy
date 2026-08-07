import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { COMPANY_DATA } from '@/data/company';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black text-luxury-white">
      {/* Background Image / Texture with dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury living showroom interiors"
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-luxury-black/70" />
      </div>

      {/* Decorative Gold Accent Lines */}
      <div className="absolute left-8 top-1/3 w-[1px] h-32 bg-gradient-to-b from-transparent via-luxury-gold/40 to-transparent hidden md:block" />
      <div className="absolute right-8 bottom-1/3 w-[1px] h-32 bg-gradient-to-b from-transparent via-luxury-gold/40 to-transparent hidden md:block" />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center pt-28 pb-16">
        
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-luxury-gold/30 bg-luxury-black/40 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-luxury-gold font-semibold">
            North India's Premier Luxury Destination
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] text-luxury-white mb-6"
        >
          {COMPANY_DATA.tagline}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-sm sm:text-base md:text-lg font-light text-luxury-gray/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {COMPANY_DATA.subheading}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <LuxuryButton
            onClick={onOpenConsultation}
            variant="bronze"
            size="lg"
            icon={<Calendar className="w-4 h-4" />}
          >
            Book Consultation
          </LuxuryButton>

          <LuxuryButton
            onClick={() => {
              const el = document.getElementById('experience-centre');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            size="lg"
            className="text-white border-white/30 hover:bg-white hover:text-luxury-black"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Visit Experience Centre
          </LuxuryButton>
        </motion.div>

        {/* Location badge footer inside hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-sans text-luxury-gold/80 tracking-widest uppercase"
        >
          <MapPin className="w-4 h-4 text-luxury-gold" />
          <span>340, Ambedkar Road, Opp. Maruti Nexa Showroom, Ghaziabad</span>
        </motion.div>

      </div>
    </section>
  );
};
