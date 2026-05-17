import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const GCC_LOGO = '/images/gcc_logo.png';

const socialLinks = [
  { label: 'Facebook', url: 'https://www.facebook.com/GraceChapterChurch' },
  { label: 'Instagram', url: 'https://www.instagram.com/grace_chapter_church' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@gracechapterchurch' },
  { label: 'YouTube', url: 'https://www.youtube.com/@GraceChapterChurch' },
  { label: 'Threads', url: 'https://www.threads.com/@grace_chapter_church' },
];

const transitions = [
  { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -80 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  { initial: { opacity: 0, x: -120, skewX: 10 }, animate: { opacity: 1, x: 0, skewX: 0 }, exit: { opacity: 0, x: 120, skewX: -10 }, transition: { duration: 0.6, ease: 'easeInOut' } },
  { initial: { opacity: 0, scale: 1.3, filter: 'blur(12px)' }, animate: { opacity: 1, scale: 1, filter: 'blur(0px)' }, exit: { opacity: 0, scale: 0.75, filter: 'blur(8px)' }, transition: { duration: 0.75, ease: 'easeOut' } },
  { initial: { opacity: 0, rotateX: 90 }, animate: { opacity: 1, rotateX: 0 }, exit: { opacity: 0, rotateX: -90 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
];

function AnimatedWelcome() {
  const [index, setIndex] = useState(0);
  const [transIdx, setTransIdx] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTransIdx(Math.floor(Math.random() * transitions.length));
      setIndex((i) => (i + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const t = transitions[transIdx];

  return (
    <div
      aria-hidden="true"
      className="relative mb-8 h-[14rem] md:h-[18rem] lg:h-[22rem] flex items-center justify-center"
      style={{ perspective: 800 }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={prefersReducedMotion ? false : t.initial}
          animate={t.animate}
          exit={prefersReducedMotion ? undefined : t.exit}
          transition={t.transition}
          className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-wider leading-none text-black absolute whitespace-pre-line text-center"
        >
          {'ALL ARE\nWELCOME'}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black/8">
      {/* CTA banner */}
      <div className="border-b border-black/8 py-24 px-6 text-center overflow-hidden">
        <p className="text-black/40 text-xs tracking-[0.3em] uppercase font-semibold mb-6">Join Our Family</p>
        <p className="sr-only">All Are Welcome</p>
        <AnimatedWelcome />
        <a
          href="https://wa.me/27731701167"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-black/30 text-black text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-black hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Connect With Us →
        </a>
      </div>

      {/* Footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black rounded-sm">
              <img
                src={GCC_LOGO}
                alt="Grace Chapter Church"
                className="w-14 h-14 object-contain"
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
              />
              <span className="font-heading text-xl tracking-wider leading-tight">Grace Chapter<br />Church</span>
            </Link>
            <p className="text-black/45 text-sm leading-relaxed mb-6">
              A Christ-centred family. Revealing Christ to the world.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-black/50 hover:text-black tracking-wider uppercase border border-black/12 hover:border-black/30 px-3 py-1.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-5">Explore</h2>
            <nav aria-label="Footer navigation">
              <div className="space-y-3">
                {[
                  { label: 'About Us', path: '/about' },
                  { label: 'House Churches', path: '/house-churches' },
                  { label: 'Ministries', path: '/ministries' },
                  { label: 'Events', path: '/events' },
                  { label: 'Contact', path: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-black/40 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-5">Get In Touch</h2>
            <div className="space-y-4">
              <a href="mailto:hello@gracechapterchurch.online"
                className="flex items-center gap-3 text-sm text-black/40 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                hello@gracechapterchurch.online
              </a>
              <a href="tel:+27731701167"
                className="flex items-center gap-3 text-sm text-black/40 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                +27 (0) 73 170 1167
              </a>
              <div className="flex items-start gap-3 text-sm text-black/40">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>JHB · CPT · Harare · UK · Canada · Mozambique</span>
              </div>
            </div>
          </div>

          {/* Scripture */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-5">Our Anchor</h2>
            <blockquote className="border-l border-black/15 pl-4">
              <p className="text-black/45 text-sm italic leading-relaxed">
                "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God."
              </p>
              <footer className="mt-3 text-black/30 text-xs">— Ephesians 2:8</footer>
            </blockquote>
          </div>
        </div>

        <div className="border-t border-black/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-black/40 hover:text-black border border-black/12 hover:border-black/30 px-4 py-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" /> Back to Top
          </button>
          <p className="text-xs text-black/25 tracking-wider">© {new Date().getFullYear()} Grace Chapter Church</p>
          <p className="text-xs text-black/25 tracking-wider">Revealing Christ to the World</p>
        </div>
      </div>
    </footer>
  );
}
