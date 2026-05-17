import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import YouTubeEmbed from '../components/shared/YouTubeEmbed';
import { useLatestSermons } from '@/hooks/useLatestSermons';
import useDocumentTitle from '@/hooks/useDocumentTitle';

// Shown when API key is not yet configured
const FALLBACK_SERMONS = [
  { title: 'Open Veil Conference 2024', videoId: 'QAApmJdsXcI', description: 'A powerful gathering of worship, healing, and the Word.' },
  { title: 'Open Veil Conference 2023', videoId: '03yOx9hrT9g', description: '' },
  { title: 'Open Veil Conference 2022', videoId: 'nw9bkQM3RtA', description: '' },
  { title: 'Christ Stronghold Series 2025', videoId: 'videoseries?list=PL0RbOFO_kKcVH1zrtxnbaltFfk057UiV0', description: '' },
  { title: 'Open Veil Conference 2024 — Full Playlist', videoId: 'QAApmJdsXcI', description: '' },
];

function HeroSkeleton() {
  return (
    <div className="relative min-h-screen flex flex-col justify-end bg-black overflow-hidden animate-pulse">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16 pt-32">
        <div className="h-3 w-32 bg-white/10 rounded mb-5" />
        <div className="h-16 w-2/3 bg-white/10 rounded mb-4" />
        <div className="h-4 w-1/2 bg-white/10 rounded mb-8" />
        <div className="h-12 w-36 bg-white/10 rounded" />
      </div>
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white border border-black/8 animate-pulse">
          <div className="aspect-video bg-black/10" />
          <div className="p-5 border-t border-black/8">
            <div className="h-4 w-3/4 bg-black/10 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Sermons() {
  useDocumentTitle('Sermons');

  const { data: sermons, isLoading, isError } = useLatestSermons();
  const [playing, setPlaying] = useState(false);

  const videos = (!isLoading && !isError && sermons?.length) ? sermons : FALLBACK_SERMONS;
  const featured = videos[0];
  const grid = videos.slice(1, 5);

  const heroImg = '/images/gcc7.jpg';

  return (
    <div className="bg-[#f7f4ef]">

      {/* Featured sermon — full-width cinematic hero */}
      {isLoading ? <HeroSkeleton /> : (
        <section
          className="relative min-h-screen flex flex-col justify-end bg-black overflow-hidden"
          aria-label={`Featured sermon: ${featured.title}`}
        >
          {!playing ? (
            <>
              <motion.img
                src={heroImg}
                alt="Grace Chapter Church congregation in worship"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" aria-hidden="true" />
            </>
          ) : (
            <div className="absolute inset-0">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${featured.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              />
            </div>
          )}

          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                onClick={() => setPlaying(true)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                aria-label={`Play featured sermon: ${featured.title}`}
                className="w-20 h-20 bg-white flex items-center justify-center shadow-2xl group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Play className="w-7 h-7 text-black fill-black ml-1 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </motion.button>
            </div>
          )}

          {!playing && (
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16 pt-32">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white/40 text-xs tracking-[0.3em] uppercase font-semibold mb-3"
              >
                Latest Message
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider text-white leading-none mb-4"
              >
                {featured.title}
              </motion.h1>
              {featured.description && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-white/45 text-base max-w-xl mb-8 line-clamp-2"
                >
                  {featured.description}
                </motion.p>
              )}
              <motion.button
                onClick={() => setPlaying(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 bg-white text-black text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-white/90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Play className="w-3.5 h-3.5 fill-black" aria-hidden="true" /> Watch Now
              </motion.button>
            </div>
          )}
        </section>
      )}

      {/* Pastor banner */}
      <div className="border-b border-black/8 overflow-hidden">
        <img
          src="/images/gcc8.jpg"
          alt="Pastor preaching at Grace Chapter Church"
          className="w-full max-h-[480px] object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* More sermons grid */}
      <section className="py-24 lg:py-32" aria-labelledby="more-sermons-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Grace Media</p>
              <h2 id="more-sermons-heading" className="font-heading text-5xl md:text-6xl tracking-wider leading-none">
                MORE<br />MESSAGES
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@GraceChapterChurch"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              All Videos on YouTube <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {isLoading ? <GridSkeleton /> : (
            <div className="grid sm:grid-cols-2 gap-8">
              {grid.map((v, i) => (
                <motion.div
                  key={v.videoId + i}
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
          )}

          <div className="mt-16 border-t border-black/8 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-black/40 text-base max-w-md">
              Watch all our sermons, conference recordings, and teachings on our YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@GraceChapterChurch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-black/80 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Play className="w-3.5 h-3.5 fill-white" aria-hidden="true" /> Visit Our YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
