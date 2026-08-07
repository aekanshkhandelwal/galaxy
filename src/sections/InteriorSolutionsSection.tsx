import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { INTERIOR_SERVICES } from '@/data/interiors';
import { LuxuryButton } from '@/components/ui/LuxuryButton';

interface InteriorSolutionsSectionProps {
  onOpenConsultation: () => void;
}

export const InteriorSolutionsSection: React.FC<InteriorSolutionsSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="py-24 bg-luxury-black text-luxury-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <SectionTitle
          darkBg
          subtitle="Architectural Interior Solutions"
          title="Complete Turnkey Home & Commercial Interiors"
          description="From initial 3D space planning to custom modular carpentry, Gyproc false ceilings, and acoustic glass partitions — we design living environments tailored to your lifestyle."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {INTERIOR_SERVICES.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-luxury-darkGray/60 border border-white/10 p-8 sm:p-10 flex flex-col justify-between group hover:border-luxury-gold/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-luxury-gold font-semibold">
                    {service.category} Service
                  </span>
                  <Sparkles className="w-4 h-4 text-luxury-gold/50 group-hover:text-luxury-gold transition-colors" />
                </div>

                <h3 className="font-serif text-3xl text-luxury-white mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-luxury-gold/90 font-medium tracking-wide uppercase mb-4">
                  {service.tagline}
                </p>
                <p className="font-sans text-sm text-luxury-gray/80 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-luxury-gray/90 font-sans">
                      <Check className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/interior-solutions"
                  className="text-xs font-sans tracking-widest uppercase text-luxury-gold hover:text-white flex items-center gap-2 transition-colors"
                >
                  View Solution Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-luxury-darkGray via-luxury-black to-luxury-darkGray border border-luxury-gold/30 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="font-serif text-2xl md:text-3xl text-white mb-2">
              Furnishing a New Home or Renovating Your Space?
            </h4>
            <p className="font-sans text-xs md:text-sm text-luxury-gray/80 font-light max-w-2xl">
              Meet our senior interior design consultants at our Ghaziabad experience centre. Get personalized material swatches, 3D space plans, and exact project timelines.
            </p>
          </div>
          <div className="shrink-0">
            <LuxuryButton onClick={onOpenConsultation} variant="bronze" size="lg">
              Book Interior Consultation
            </LuxuryButton>
          </div>
        </div>

      </div>
    </section>
  );
};
