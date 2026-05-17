import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SplitWords({ text, className = '', delay = 0, stagger = 0.08 }) {
  const words = text.split(' ');
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 28, rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', transformOrigin: 'top' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function SplitChars({ text, className = '', delay = 0 }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  );
}

export function ClipReveal({ children, className = '', delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.div
        className={className}
        initial={{ y: '105%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function HighlightText({ children, className = '', color = 'from-purple-400 to-blue-400' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
        className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-gradient-to-r ${color} origin-left`}
      />
    </span>
  );
}

export function BlurIn({ children, className = '', delay = 0 }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, filter: 'blur(12px)', y: 10 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  );
}

/** Counts up from 0 to `to` using requestAnimationFrame with easeOutCubic */
export function CountUp({ to, duration = 2, suffix = '', className = '' }) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        const startTime = performance.now();
        const durationMs = duration * 1000;

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          // easeOutCubic for a natural deceleration
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * to));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`} aria-live="polite">
      {count}{suffix}
    </span>
  );
}
