import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BRANDS_DATA } from '@/data/brands';

export const FeaturedBrandsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <SectionTitle
        subtitle="Authorized Brand Partners"
        title="India's Most Trusted & Premium Decor Brands"
        description="We partner directly with leading luxury manufacturers to guarantee 100% genuine products, authentic manufacturer warranties, and exclusive collections."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BRANDS_DATA.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group bg-luxury-white border border-luxury-black/10 p-8 flex flex-col justify-between hover:border-luxury-bronze transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-sans uppercase tracking-widest text-luxury-bronze font-bold bg-luxury-ivory px-2.5 py-1">
                  {brand.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-sans text-luxury-charcoal/60">
                  <Award className="w-3.5 h-3.5 text-luxury-gold" /> {brand.tag}
                </span>
              </div>

              {/* Brand Logo Text Box */}
              <div className="h-16 flex items-center mb-6">
                <span className="font-serif text-3xl md:text-4xl text-luxury-black group-hover:text-luxury-bronze transition-colors tracking-wider uppercase font-semibold">
                  {brand.name}
                </span>
              </div>

              <p className="font-sans text-xs md:text-sm text-luxury-charcoal/80 font-light leading-relaxed mb-6">
                {brand.description}
              </p>
            </div>

            <div className="pt-4 border-t border-luxury-black/5 flex items-center justify-between text-xs font-sans text-luxury-charcoal/70">
              <span className="font-medium text-luxury-black">{brand.featuredProduct}</span>
              <Link to="/brands" className="text-luxury-bronze hover:text-luxury-black font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1">
                Spotlight <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/brands"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-luxury-black font-semibold border-b border-luxury-black hover:text-luxury-bronze hover:border-luxury-bronze pb-1 transition-all"
        >
          Explore All Authorized Brands & Collections →
        </Link>
      </div>
    </section>
  );
};
