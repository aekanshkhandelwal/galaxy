import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PRODUCT_CATEGORIES } from '@/data/products';

export const Categories: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Product Catalogue — Galaxy Living Studio | 10 Luxury Categories</title>
        <meta
          name="description"
          content="Explore Galaxy Living Studio's complete digital catalogue: Mattresses, Bedding, Designer Curtains, Blinds, Upholstery, Wallpapers, Flooring, Furniture, Customized Carpentry, and Glass Solutions."
        />
      </Helmet>

      <div className="pt-28 pb-24 bg-luxury-white">
        <Breadcrumb items={[{ label: 'Product Categories' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionTitle
            subtitle="Digital Showroom Catalogue"
            title="Explore Our 10 Luxury Product & Interior Categories"
            description="Select any category to view subcategories, material specifications, partner brands, and request custom dimensions or showroom samples."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PRODUCT_CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group bg-luxury-white border border-luxury-black/10 overflow-hidden hover:shadow-elevated transition-all flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/2 relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-luxury-ivory">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-luxury-black text-luxury-gold text-[10px] uppercase font-sans tracking-widest px-3 py-1 font-semibold">
                    {cat.subcategories.length} Types
                  </div>
                </div>

                <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-2xl text-luxury-black group-hover:text-luxury-bronze transition-colors mb-2">
                      {cat.name}
                    </h2>
                    <p className="font-sans text-xs text-luxury-charcoal/70 font-light leading-relaxed mb-4 line-clamp-3">
                      {cat.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {cat.featuredBrands.map((b, i) => (
                        <span key={i} className="text-[9px] font-sans uppercase tracking-wider bg-luxury-ivory text-luxury-bronze px-2 py-0.5 border border-luxury-bronze/20">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/categories/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-luxury-black font-semibold hover:text-luxury-bronze pt-4 border-t border-luxury-black/5"
                  >
                    View Details & Subcategories <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
