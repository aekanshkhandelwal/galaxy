import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TESTIMONIALS_DATA } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-black text-luxury-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <SectionTitle
          darkBg
          subtitle="Client Stories & Reviews"
          title="Endorsed by Homeowners & Principal Architects"
          description="Hear how Galaxy Living Studio delivered exceptional comfort, timeless designs, and unmatched quality for fine residences across NCR."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-luxury-darkGray/60 border border-white/10 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-luxury-gold/50 transition-colors"
            >
              <div>
                <Quote className="w-10 h-10 text-luxury-gold/30 mb-6 group-hover:text-luxury-gold transition-colors" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                <p className="font-serif text-lg md:text-xl text-luxury-white/90 font-light leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-luxury-gold tracking-wide">
                    {t.author}
                  </h4>
                  <p className="font-sans text-xs text-luxury-gray/60 mt-0.5">
                    {t.role} • {t.location}
                  </p>
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-luxury-gold/80 px-2.5 py-1 border border-luxury-gold/20">
                  {t.projectType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
