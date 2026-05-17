import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, image, objectPosition = 'center', overlay = 'bg-black/22' }) {
  return (
    <section
      aria-label={`${title} page hero`}
      className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition }}
          /* LCP image — load eagerly and at high priority */
          loading="eager"
          decoding="async"
          fetchPriority="high"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/50 text-xs tracking-[0.3em] uppercase font-semibold mb-3"
        >
          Grace Chapter Church
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-wider text-white leading-none"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/55 text-base mt-4 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
