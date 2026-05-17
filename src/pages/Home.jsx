import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import ScrollTicker from '../components/shared/ScrollTicker';
import { CountUp } from '../components/shared/TextEffects';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const HERO_IMG = '/images/hero-home.jpg';
const WELCOME_IMG = '/images/welcome.jpg';
const HOUSE_IMG = '/images/house-churches.jpg';

const campuses = [
  { city: 'Johannesburg', contact: 'Rugare', phone: '+27 76 117 9485', flag: '🇿🇦' },
  { city: 'Cape Town', contact: 'Regis', phone: '+27 73 655 0804', flag: '🇿🇦' },
  { city: 'Harare', contact: 'David', phone: '+263 77 734 3169', flag: '🇿🇼' },
  { city: 'United Kingdom', contact: 'GCC UK', phone: '+27 73 170 1167', flag: '🇬🇧' },
  { city: 'Canada', contact: 'GCC Canada', phone: '+27 73 170 1167', flag: '🇨🇦' },
  { city: 'Mozambique', contact: 'GCC Mozambique', phone: '+27 73 170 1167', flag: '🇲🇿' },
];

export default function Home() {
  useDocumentTitle(null); // Home uses the base title

  return (
    <div className="bg-[#f7f4ef] overflow-x-hidden">

      {/* Hero */}
      <section
        className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden"
        aria-label="Welcome to Grace Chapter Church"
      >
        <div className="absolute inset-0">
          <motion.img
            src={HERO_IMG}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/45 text-xs tracking-[0.35em] uppercase font-semibold mb-4"
          >
            Grace Chapter Church
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(4rem,12vw,11rem)] tracking-wider text-white leading-none mb-8"
          >
            REVEALING<br />
            <span className="text-white/50">CHRIST</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white text-black text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-white/90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Discover More
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-white/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10" aria-hidden="true">
          <div className="w-px h-12 bg-white/20" />
          <span className="text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>Connect</span>
          <div className="w-px h-12 bg-white/20" />
        </div>
      </section>

      <ScrollTicker />

      {/* Stats */}
      <section className="border-b border-black/8" aria-label="Church statistics">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 divide-x divide-black/8">
            {[
              { val: 6, suffix: '+', label: 'Global Campuses' },
              { val: 15, suffix: '+', label: 'Years of Grace' },
              { val: 3, suffix: '', label: 'Generations Reached' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="py-12 px-8 text-center"
              >
                <div className="font-heading text-5xl md:text-6xl tracking-wider text-black">
                  <CountUp to={s.val} suffix={s.suffix} duration={1.8} />
                </div>
                <p className="text-black/35 text-xs tracking-widest uppercase mt-2 font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <img
                src={WELCOME_IMG}
                alt="GCC family gathering"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-5 -right-5 bg-black text-white px-6 py-4">
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/50 mb-1">Our Mandate</p>
                <p className="font-heading text-xl tracking-wider">Revealing Christ</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-5">Who We Are</p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none mb-8">
                WELCOME TO<br />GRACE CHAPTER
              </h2>
              <p className="text-black/50 leading-relaxed mb-5 text-base">
                At Grace Chapter Church, we believe in the Word of God and everything it declares about us. Our faith is in Jesus Christ, the Son of the one and only living God. Our mandate is to reveal Christ to the world.
              </p>
              <p className="text-black/50 leading-relaxed mb-10 text-base">
                We serve God by serving people in our communities through equipping and empowering them by the Message of Grace.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                Read Our Story <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 border-t border-black/8" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 id="pillars-heading" className="sr-only">Our Three Pillars</h2>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/8">
            {[
              { num: '01', label: 'Rest in Christ', desc: 'Finding identity and rest in who Christ is in us' },
              { num: '02', label: 'Reveal Christ', desc: 'Living and demonstrating the reality of Jesus' },
              { num: '03', label: 'Reconcile the World', desc: 'Bringing all people back to relationship with God' },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="px-8 py-12"
              >
                <span className="font-heading text-7xl text-black/6 block mb-2" aria-hidden="true">{p.num}</span>
                <h3 className="font-heading text-3xl tracking-wider text-black mb-3">{p.label}</h3>
                <p className="text-black/40 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House Churches */}
      <section className="py-24 lg:py-32 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-5">Our Model</p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none mb-8">
                A CHURCH OF<br />HOUSE CHURCHES
              </h2>
              <p className="text-black/50 leading-relaxed mb-5 text-base">
                As we serve the world, our thrust is to build strong family institutions — strong marriages, godly children, and households.
              </p>
              <p className="text-black/50 leading-relaxed mb-10 text-base">
                Just as our physical body parts differ yet come together to form a functional whole, so are the different ministries in the body of Christ.
              </p>
              <Link
                to="/house-churches"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                Discover House Churches <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <img
                src={HOUSE_IMG}
                alt="House church gathering"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="py-24 border-t border-black/8" aria-labelledby="campuses-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Global Family</p>
          <h2 id="campuses-heading" className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-16">
            OUR CAMPUSES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {campuses.map((c, i) => (
              <motion.div
                key={c.city}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border-t border-black/8 py-6 pr-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl" aria-hidden="true">{c.flag}</span>
                  <h3 className="font-heading text-2xl tracking-wider">{c.city}</h3>
                </div>
                <p className="text-black/35 text-xs tracking-wider uppercase mb-1">{c.contact}</p>
                <a
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  className="text-sm text-black/50 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {c.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollTicker dark />

      {/* YouTube CTA */}
      <section className="bg-black py-24 text-center">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-semibold mb-6">Grace Media</p>
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider text-white leading-none mb-8">
          WATCH ONLINE
        </h2>
        <p className="text-white/35 text-base mb-10 max-w-md mx-auto px-6">
          Join us live or catch up on our latest teachings, conferences and praise.
        </p>
        <a
          href="https://www.youtube.com/@GraceChapterChurch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-white hover:text-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" /> Watch on YouTube
        </a>
      </section>
    </div>
  );
}
