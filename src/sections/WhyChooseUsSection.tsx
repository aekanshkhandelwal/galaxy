import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Home, Ruler, Wrench, UserCheck } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { COMPANY_DATA } from '@/data/company';

export const WhyChooseUsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-luxury-bronze" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-luxury-bronze" />,
    Home: <Home className="w-6 h-6 text-luxury-bronze" />,
    Ruler: <Ruler className="w-6 h-6 text-luxury-bronze" />,
    Wrench: <Wrench className="w-6 h-6 text-luxury-bronze" />,
    UserCheck: <UserCheck className="w-6 h-6 text-luxury-bronze" />,
  };

  return (
    <section className="py-24 bg-luxury-ivory/60 border-y border-luxury-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <SectionTitle
          subtitle="The Galaxy Living Advantage"
          title="Why Discerning Homeowners Choose Us"
          description="We combine India's most trusted luxury brand partnerships with custom craftsman workshop execution under one roof."
        />

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {COMPANY_DATA.whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="bg-luxury-white p-8 border border-luxury-black/5 shadow-subtle hover:border-luxury-bronze/40 transition-colors"
            >
              <div className="w-12 h-12 bg-luxury-ivory border border-luxury-bronze/20 flex items-center justify-center mb-6">
                {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-luxury-bronze" />}
              </div>
              <h3 className="font-serif text-2xl text-luxury-black mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-luxury-charcoal/80 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Stats Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-luxury-black text-luxury-white p-8 md:p-12 border border-luxury-gold/30">
          {COMPANY_DATA.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 border-r last:border-r-0 border-white/10">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-gold mb-2 font-light">
                {stat.value}
              </div>
              <div className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] text-luxury-gray/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
