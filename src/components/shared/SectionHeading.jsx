import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {label && (
        <p className={`text-xs font-semibold tracking-[0.3em] uppercase mb-4 ${light ? "text-white/40" : "text-black/35"}`}>
          {label}
        </p>
      )}
      <h2 className={`font-heading text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none ${light ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed ${light ? "text-white/50" : "text-black/45"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}