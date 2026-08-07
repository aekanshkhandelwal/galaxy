import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PRODUCT_CATEGORIES } from '@/data/products';

export const FeaturedCategoriesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <SectionTitle
        subtitle="Digital Showroom Catalogue"
        title="Explore Our Curated Product Range"
        description="From orthopedic sleep systems and couture window drapery to SPC flooring and glass solutions, browse North India's finest interior collections."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCT_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="group relative flex flex-col bg-luxury-white border border-luxury-black/10 overflow-hidden hover:shadow-elevated transition-all duration-500"
          >
            {/* Image Container with hover zoom */}
            <div className="relative aspect-[4/3] overflow-hidden bg-luxury-ivory">
              <img
                src={category.heroImage}
                alt={category.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-sans tracking-widest uppercase bg-luxury-black text-luxury-gold px-3 py-1 font-semibold border border-luxury-gold/30">
                  {category.subcategories.length} Collections
                </span>
              </div>
            </div>

            {/* Content Card Body */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-luxury-black group-hover:text-luxury-bronze transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="font-sans text-xs md:text-sm text-luxury-charcoal/70 font-light leading-relaxed mb-6">
                  {category.shortDescription}
                </p>

                {/* Subcategory Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {category.subcategories.slice(0, 3).map((sub, i) => (
                    <span key={i} className="text-[10px] font-sans tracking-wider uppercase bg-luxury-ivory text-luxury-charcoal px-2.5 py-1">
                      {sub.name}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="text-[10px] font-sans tracking-wider uppercase text-luxury-bronze py-1 px-1">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Link Footer */}
              <div className="pt-4 border-t border-luxury-black/5 flex items-center justify-between">
                <span className="text-[11px] font-sans tracking-widest uppercase text-luxury-charcoal/50 group-hover:text-luxury-black transition-colors font-medium">
                  Explore Catalogue
                </span>
                <div className="w-8 h-8 rounded-full border border-luxury-black/20 flex items-center justify-center text-luxury-black group-hover:bg-luxury-bronze group-hover:border-luxury-bronze group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Click overlay */}
            <Link to={`/categories/${category.slug}`} className="absolute inset-0 z-10">
              <span className="sr-only">View {category.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
