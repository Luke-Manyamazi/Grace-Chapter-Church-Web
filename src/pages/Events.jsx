import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import YouTubeEmbed from '../components/shared/YouTubeEmbed';
import { Calendar, Clock, MapPin, Phone, Ticket, CalendarX } from 'lucide-react';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import allEvents from '../data/events.json';

const HERO_IMG = '/images/gcc16.jpg';
const FEATURED_IMG = '/images/gcc11.jpg';

const pastVideos = [
  { title: 'Christ Stronghold Series 2025', videoId: 'videoseries?list=PL0RbOFO_kKcVH1zrtxnbaltFfk057UiV0' },
  { title: 'Open Veil Conference 2024', videoId: 'QAApmJdsXcI' },
  { title: 'Open Veil Conference 2023', videoId: '03yOx9hrT9g' },
  { title: 'Open Veil Conference 2022', videoId: 'nw9bkQM3RtA' },
];

function formatDateRange(startDate, endDate) {
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');
  const opts = { day: 'numeric', month: 'long', year: 'numeric' };
  if (startDate === endDate) return start.toLocaleDateString('en-GB', opts);
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()} – ${end.toLocaleDateString('en-GB', opts)}`;
  }
  return `${start.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} – ${end.toLocaleDateString('en-GB', opts)}`;
}

function InfoRow({ Icon, text }) {
  if (!text) return null;
  return (
    <div className="flex items-center gap-3 text-sm text-black/45">
      <Icon className="w-3.5 h-3.5 text-black/30 flex-shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}

export default function Events() {
  useDocumentTitle('Events');

  const { featuredEvent, upcomingEvents } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // An event is active if its end date hasn't passed yet
    const active = allEvents.filter(e => new Date(e.endDate + 'T00:00:00') >= today);

    // Featured: always OVC while it hasn't ended, then fall back to next event
    const ovc = active.find(e => e.id === 'ovc-2026');
    const featured = ovc ?? active[0] ?? null;

    // Grid: next 3 upcoming events that aren't the featured one, sorted by start date
    const grid = active
      .filter(e => e.id !== featured?.id)
      .sort((a, b) => a.startDate.localeCompare(b.startDate))
      .slice(0, 3);

    return { featuredEvent: featured, upcomingEvents: grid };
  }, []);

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

          {featuredEvent ? (
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
                  alt={`${featuredEvent.title} banner`}
                  className="w-full h-full object-cover opacity-60 aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 w-fit mb-4">
                    <Ticket className="w-3 h-3" aria-hidden="true" /> {featuredEvent.tag}
                  </span>
                  <h3 className="font-heading text-4xl md:text-5xl tracking-wider text-white leading-none">
                    {featuredEvent.title}
                  </h3>
                </div>
              </div>
              {/* Info side */}
              <div className="p-10 flex flex-col justify-center bg-white">
                <div className="space-y-4 mb-8">
                  <InfoRow Icon={Calendar} text={formatDateRange(featuredEvent.startDate, featuredEvent.endDate)} />
                  <InfoRow Icon={Clock} text={featuredEvent.time} />
                  <InfoRow Icon={MapPin} text={featuredEvent.location} />
                  <InfoRow Icon={Phone} text={featuredEvent.contact} />
                </div>
                <p className="text-black/45 leading-relaxed text-sm">{featuredEvent.details}</p>
              </div>
            </motion.div>
          ) : (
            <div className="border border-black/8 p-16 text-center bg-white">
              <CalendarX className="w-10 h-10 mx-auto mb-4 text-black/20" aria-hidden="true" />
              <h3 className="font-heading text-3xl tracking-wider mb-3">STAY TUNED</h3>
              <p className="text-black/40 text-sm max-w-sm mx-auto">
                No featured event at the moment. Follow us on social media for upcoming announcements.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming events grid */}
      <section className="py-24 border-b border-black/8" aria-labelledby="upcoming-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Calendar</p>
          <h2 id="upcoming-heading" className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-16">
            MORE UPCOMING<br />EVENTS
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/8 border border-black/8">
              {upcomingEvents.map((e, i) => (
                <motion.article
                  key={e.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8"
                >
                  <p className="text-black/30 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{e.tag}</p>
                  <h3 className="font-heading text-2xl tracking-wider mb-6">{e.title}</h3>
                  <div className="space-y-3">
                    <InfoRow Icon={Calendar} text={formatDateRange(e.startDate, e.endDate)} />
                    <InfoRow Icon={Clock} text={e.time} />
                    <InfoRow Icon={MapPin} text={e.location} />
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="border border-black/8 p-16 text-center bg-white">
              <CalendarX className="w-10 h-10 mx-auto mb-4 text-black/20" aria-hidden="true" />
              <h3 className="font-heading text-3xl tracking-wider mb-3">NO MORE EVENTS</h3>
              <p className="text-black/40 text-sm max-w-sm mx-auto">
                No more upcoming events this season. Follow us on social media to be the first to hear about new events.
              </p>
            </div>
          )}
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
