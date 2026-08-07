import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  overlay?: boolean;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  overlay = false,
}) => {
  return (
    <div className={`relative overflow-hidden bg-luxury-ivory ${aspectRatio} ${className} group`}>
      <motion.img
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-luxury-black/10 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
