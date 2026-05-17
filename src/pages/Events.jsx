import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import YouTubeEmbed from '../components/shared/YouTubeEmbed';
import { Calendar, Clock, MapPin, Phone, Ticket } from 'lucide-react';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const HERO_IMG = '/images/gcc16.jpg';
const FEATURED_IMG = '/images/gcc11.jpg';

const featuredEvent = {
  title: 'Open Veil Conference 2025',
  date: '10 – 12 August 2025',
  time: '9am – 9pm daily',
  location: 'Wynberg Civic Centre, Cape Town, South Africa',
  contact: '+27 73 170 1167 · info@gracechapterchurch.online',
  details: 'Join thousands in worship, healing, and revival. Guest ministers and live worship bands. Entry is FREE. Come early!',
};

const upcomingEvents = [
  { title: '3rd House Church – Zim', date: '25 May 2025', time: '6 PM – 9 PM', location: 'Main Sanctuary', contact: 'hello@gracechapterchurch.online' },
  { title: 'GForce Camp 2025', date: '2 June 2025', time: '2 PM – 5 PM', location: 'Grace Park', contact: '+27 (0) 73 170 1167' },
  { title: '3rd House Church – Joburg', date: '15 June 2025', time: '10 AM – 1 PM', location: 'Town Center', contact: 'pd@gracechapterchurch.online' },
];

const pastVideos = [
  { title: 'Open Veil Conference 2024', videoId: 'QAApmJdsXcI' },
  { title: 'Open Veil Conference 2023', videoId: '03yOx9hrT9g' },
  { title: 'Open Veil Conference 2022', videoId: 'nw9bkQM3RtA' },
  { title: 'Christ Stronghold Series 2025', videoId: 'videoseries?list=PL0RbOFO_kKcVH1zrtxnbaltFfk057UiV0' },
];

function InfoRow({ Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-black/45">
      <Icon className="w-3.5 h-3.5 text-black/30 flex-shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}

export default function Events() {
  useDocumentTitle('Events');

  return (
    <div className="bg-[#f7f4ef]">
      <PageHero title="Events" subtitle="Come together in worship, fellowship, and celebration" image={HERO_IMG} />

      {/* Featured event */}
      <section className="py-24 lg:py-32 border-b border-black/8" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Featured</p>
          <h2 id="featured-heading" className="font-heading text-5xl md:text-7xl tracking-wider leading-none mb-16">
            UPCOMING<br />HIGHLIGHT
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 border border-black/8"
          >
            {/* Image side */}
            <div className="relative overflow-hidden bg-black">
              <img
                src={FEATURED_IMG}
                alt="Open Veil Conference 2025 banner"
                className="w-full h-full object-cover opacity-60 aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 w-fit mb-4">
                  <Ticket className="w-3 h-3" aria-hidden="true" /> FREE ENTRY
                </span>
                <h3 className="font-heading text-4xl md:text-5xl tracking-wider text-white leading-none">
                  {featuredEvent.title}
                </h3>
              </div>
            </div>
            {/* Info side */}
            <div className="p-10 flex flex-col justify-center bg-white">
              <div className="space-y-4 mb-8">
                <InfoRow Icon={Calendar} text={featuredEvent.date} />
                <InfoRow Icon={Clock} text={featuredEvent.time} />
                <InfoRow Icon={MapPin} text={featuredEvent.location} />
                <InfoRow Icon={Phone} text={featuredEvent.contact} />
              </div>
              <p className="text-black/45 leading-relaxed text-sm">{featuredEvent.details}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-24 border-b border-black/8" aria-labelledby="upcoming-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Calendar</p>
          <h2 id="upcoming-heading" className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-16">
            MORE UPCOMING<br />EVENTS
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/8 border border-black/8">
            {upcomingEvents.map((e, i) => (
              <motion.article
                key={e.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8"
              >
                <h3 className="font-heading text-2xl tracking-wider mb-6">{e.title}</h3>
                <div className="space-y-3">
                  <InfoRow Icon={Calendar} text={e.date} />
                  <InfoRow Icon={Clock} text={e.time} />
                  <InfoRow Icon={MapPin} text={e.location} />
                  <InfoRow Icon={Phone} text={e.contact} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Past event videos */}
      <section className="py-24" aria-labelledby="replays-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Replays</p>
          <h2 id="replays-heading" className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-16">
            PAST EVENTS<br />&amp; SERMONS
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {pastVideos.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-black/8"
              >
                <YouTubeEmbed videoId={v.videoId} title={v.title} />
                <div className="p-5 border-t border-black/8">
                  <h3 className="font-heading text-xl tracking-wider">{v.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
