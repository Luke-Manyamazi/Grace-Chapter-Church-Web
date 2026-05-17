import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Revealing Christ to the World', '✦',
  'All Are Welcome', '✦',
  'A Church of House Churches', '✦',
  'Grace · Faith · Community', '✦',
  'Resting in Christ', '✦',
  'Reconciling the World', '✦',
];

export default function ScrollTicker({ dark = false }) {
  const repeated = [...items, ...items];
  return (
    /* aria-hidden: purely decorative marquee, adds no information for screen readers */
    <div
      aria-hidden="true"
      className={`overflow-hidden py-3 border-y ${dark ? 'bg-black border-white/10' : 'bg-[#f7f4ef] border-black/8'}`}
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`text-[10px] font-bold tracking-[0.25em] uppercase flex-shrink-0 ${dark ? 'text-white/25' : 'text-black/30'}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
