import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Calendar, ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { PRODUCT_CATEGORIES } from '@/data/products';

interface CategoryDetailProps {
  onOpenConsultation: (categoryName?: string) => void;
}

export const CategoryDetail: React.FC<CategoryDetailProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug) || PRODUCT_CATEGORIES[0];

  const relatedCategories = PRODUCT_CATEGORIES.filter((c) => c.id !== category.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${category.name} — Galaxy Living Studio Digital Showroom`}</title>
        <meta name="description" content={category.shortDescription} />
      </Helmet>

      <div className="pt-28 pb-24 bg-luxury-white">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category.name },
          ]}
        />

        {/* Editorial Hero Header */}
        <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-luxury-bronze font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Editorial Product Showcase
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl text-luxury-black font-light leading-[1.1]">
                {category.name}
              </h1>

              <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-luxury-bronze font-medium">
                {category.tagline}
              </p>

              <p className="font-sans text-sm md:text-base text-luxury-charcoal/80 font-light leading-relaxed">
                {category.fullDescription}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <LuxuryButton
                  onClick={() => onOpenConsultation(category.name)}
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book Showroom Consultation
                </LuxuryButton>

                <a
                  href={`https://wa.me/919217516355?text=Hello%20Galaxy%20Living,%20I%20am%20interested%20in%20learning%20more%20about%20${encodeURIComponent(category.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center font-sans tracking-widest text-xs uppercase font-semibold border border-luxury-black px-7 py-3.5 hover:bg-luxury-ivory transition-colors"
                >
                  Request Swatches on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden bg-luxury-ivory border border-luxury-black/10 shadow-elevated">
                <img
                  src={category.heroImage}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Subcategories Breakdown */}
        <section className="py-20 bg-luxury-ivory/60 border-y border-luxury-black/5 my-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <SectionTitle
              subtitle="Detailed Collections & Types"
              title={`Explore Available ${category.name} Variations`}
              description="Each variant is crafted or specified to strict structural, aesthetic, and durability standards."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.subcategories.map((sub, index) => (
                <div
                  key={index}
                  className="bg-luxury-white p-8 border border-luxury-black/5 flex flex-col justify-between hover:border-luxury-bronze/50 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-luxury-bronze font-bold block mb-2">
                      Option {index + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-luxury-black mb-3">
                      {sub.name}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-luxury-charcoal/80 font-light leading-relaxed">
                      {sub.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-luxury-black/5 flex items-center justify-between">
                    <button
                      onClick={() => onOpenConsultation(`${category.name} - ${sub.name}`)}
                      className="text-[11px] font-sans tracking-widest uppercase text-luxury-bronze hover:text-luxury-black font-semibold"
                    >
                      Inquire Specs & Swatches →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Offerings if any */}
            {category.additionalOfferings && category.additionalOfferings.length > 0 && (
              <div className="mt-16 bg-luxury-white p-8 border border-luxury-black/10">
                <h4 className="font-serif text-2xl text-luxury-black mb-4">
                  Complementary Accessories & Custom Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {category.additionalOfferings.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-sans text-luxury-charcoal/80">
                      <Check className="w-4 h-4 text-luxury-bronze shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Benefits & Brand Partners */}
        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-luxury-bronze font-bold">
                Quality Assurance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-luxury-black font-light">
                Why Choose Our {category.name}?
              </h2>

              <ul className="space-y-4">
                {category.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-luxury-bronze/10 text-luxury-bronze flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-luxury-black">{b}</h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 bg-luxury-black text-luxury-white p-8 sm:p-12 border border-luxury-gold/30">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-luxury-gold font-semibold block mb-2">
                Authorized Brand Partners
              </span>
              <h3 className="font-serif text-3xl text-white mb-6">
                Featured Manufacturers
              </h3>
              <p className="font-sans text-xs text-luxury-gray/80 font-light mb-8 leading-relaxed">
                We display and supply authentic collections directly from world-class luxury brands.
              </p>

              <div className="flex flex-wrap gap-3">
                {category.featuredBrands.map((brand, i) => (
                  <span key={i} className="font-serif text-lg text-luxury-gold tracking-widest uppercase px-4 py-2 bg-white/5 border border-white/10">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Related Categories Footer */}
        <section className="py-16 bg-luxury-ivory/40 border-t border-luxury-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h3 className="font-serif text-2xl text-luxury-black mb-8 text-center">
              Explore Related Categories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCategories.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/categories/${rel.slug}`}
                  className="group bg-luxury-white p-6 border border-luxury-black/10 hover:border-luxury-bronze transition-colors flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif text-xl text-luxury-black group-hover:text-luxury-bronze transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-[10px] font-sans text-luxury-charcoal/60 uppercase tracking-wider mt-1">
                      {rel.subcategories.length} Variations
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-luxury-bronze group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
