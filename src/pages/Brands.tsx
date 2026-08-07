import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { BRANDS_DATA } from '@/data/brands';

interface BrandsProps {
  onOpenConsultation: () => void;
}

export const Brands: React.FC<BrandsProps> = ({ onOpenConsultation }) => {
  return (
    <>
      <Helmet>
        <title>Our Brands — Galaxy Living Studio | Authorized Luxury Partners</title>
        <meta
          name="description"
          content="Explore authorized brand partners at Galaxy Living Studio: Springfit, Sleepwell, Coirfit, Safari, D'Decor, Fabri Care, Harit, Fine Decor Wallpapers, MAC Blinds, Johnson Blinds, and Sonata Designer Blinds."
        />
      </Helmet>

      <div className="pt-28 pb-24 bg-luxury-white">
        <Breadcrumb items={[{ label: 'Our Brands' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionTitle
            subtitle="Authorized Brand Showcase"
            title="We Partner with India's Most Prestigious Decor Houses"
            description="Every brand displayed at our Ambedkar Road experience centre is 100% authentic, backed by official manufacturer warranties and direct showroom support."
          />

          {/* Brands Spotlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {BRANDS_DATA.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="bg-luxury-white border border-luxury-black/10 p-8 flex flex-col justify-between hover:shadow-elevated transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-luxury-bronze font-bold bg-luxury-ivory px-3 py-1">
                      {brand.category}
                    </span>
                    <span className="text-[10px] font-sans text-luxury-charcoal/60 uppercase tracking-wider">
                      {brand.origin}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-luxury-black font-semibold uppercase tracking-wider mb-4">
                    {brand.name}
                  </h2>

                  <p className="font-sans text-xs sm:text-sm text-luxury-charcoal/80 font-light leading-relaxed mb-6">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-luxury-black/5 flex flex-col gap-2">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-luxury-bronze font-semibold">
                    Signature Line
                  </span>
                  <span className="text-xs font-sans text-luxury-black font-medium">
                    {brand.featuredProduct}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className="bg-luxury-black text-luxury-white p-8 sm:p-12 border border-luxury-gold/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-luxury-gold">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-sans uppercase tracking-[0.25em] font-semibold">100% Genuine Guarantee</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Inspect Authentic Catalogues & Swatches in Person
              </h3>
              <p className="font-sans text-xs text-luxury-gray/80 font-light max-w-2xl">
                Visit our Ghaziabad experience centre to explore full display beds, drapery waterfalls, and window blind working models.
              </p>
            </div>
            <LuxuryButton onClick={onOpenConsultation} variant="bronze" size="lg" icon={<Calendar className="w-4 h-4" />}>
              Schedule Showroom Appointment
            </LuxuryButton>
          </div>

        </div>
      </div>
    </>
  );
};
