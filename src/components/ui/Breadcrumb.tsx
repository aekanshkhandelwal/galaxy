import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-[11px] font-sans tracking-widest uppercase text-luxury-charcoal/60">
        <li>
          <Link to="/" className="flex items-center hover:text-luxury-bronze transition-colors">
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-luxury-bronze/40" />
            {item.href ? (
              <Link to={item.href} className="hover:text-luxury-bronze transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-luxury-black font-semibold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
