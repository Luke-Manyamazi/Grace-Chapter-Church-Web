import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const HERO_IMG = '/images/gcc7.jpg';
const YOUTH_IMG = '/images/gcc15.jpg';
const KIDS_IMG = '/images/gcc_kids.jpg';
const WECARE_IMG = '/images/gcc13.jpg';

const socialPlatforms = [
  { label: 'Facebook', url: 'https://www.facebook.com/GraceChapterChurch' },
  { label: 'Instagram', url: 'https://www.instagram.com/grace_chapter_church' },
  { label: 'Threads', url: 'https://www.threads.com/@grace_chapter_church' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@gracechapterchurch' },
  { label: 'YouTube', url: 'https://www.youtube.com/@GraceChapterChurch' },
];

const ministries = [
  {
    tag: 'Youth Ministry',
    title: 'GForce',
    sub: 'Raising a Generation Grounded in Grace',
    body1: 'GForce is the vibrant youth ministry of Grace Chapter Church, designed for young people aged 14 and above. A movement of bold, faith-filled teens passionate about discovering their identity in Christ.',
    body2: 'Through engaging teachings, real conversations, fun activities, and community outreach, GForce equips young people to be grounded in the Word, filled with the Spirit, and strong in character.',
    image: YOUTH_IMG,
    imageAlt: 'GForce youth ministry',
  },
  {
    tag: "Children's Ministry",
    title: 'Kids Church',
    sub: 'Building Foundations of Faith from an Early Age',
    body1: 'Grace Kids is a safe, fun, and nurturing space for children 13 and under to learn about Jesus and grow in God\'s love. Our goal is to plant seeds of faith early through creative and age-appropriate biblical teaching.',
    body2: 'With passionate teachers, interactive lessons, songs, stories, and play — we create an atmosphere where children feel loved, valued, and excited to come to church.',
    image: KIDS_IMG,
    imageAlt: "Grace Kids children's ministry",
  },
  {
    tag: 'Community Outreach',
    title: '#WECARE',
    sub: 'Serving the Vulnerable with Love',
    body1: 'GCC campuses in Cape Town, Johannesburg, and Harare have teamed up to give a hand up to disadvantaged church and community members. The purpose is to serve and provide for those in need.',
    body2: 'We collect non-perishable foodstuffs, blankets, clothes, and monetary donations — because as the Word of God instructs, we should feed the widows and the poor.',
    image: WECARE_IMG,
    imageAlt: '#WECARE community outreach',
  },
  {
    tag: 'Couples Ministry',
    title: 'Covenant',
    sub: 'Strengthening Marriages Rooted in Christ',
    body1: 'Covenant is GCC\'s couples ministry, dedicated to building Christ-centred marriages. We believe strong marriages are the foundation of strong families, churches, and communities.',
    body2: 'Through couples\' sessions, retreats, and practical tools rooted in the Word, we walk alongside husbands and wives to grow in love, unity, and purpose together.',
    image: '/images/gcc2.jpg',
    imageAlt: 'Covenant couples ministry',
  },
  {
    tag: "Men's Ministry",
    title: 'Mighty Men',
    sub: 'Raising Men of God, Purpose & Integrity',
    body1: 'Mighty Men is a brotherhood forged in faith — a space for men to grow in their identity as sons of God, husbands, fathers, and leaders in their homes and communities.',
    body2: 'Through fellowship, accountability, and the Word of Grace, we equip men to stand firm, lead with love, and reflect the character of Christ in every area of life.',
    image: '/images/gcc5.jpg',
    imageAlt: 'Mighty Men ministry',
  },
  {
    tag: "Women's Ministry",
    title: 'Grace Women',
    sub: 'Women of Strength, Faith & Dignity',
    body1: 'Grace Women is a sisterhood that celebrates the beauty, strength, and purpose God has placed in every woman. We create a safe, empowering space for women to grow spiritually, emotionally, and relationally.',
    body2: 'Through gatherings, mentorship, and teachings grounded in grace, we encourage women to walk in confidence, serve their families well, and impact the world around them.',
    image: '/images/gcc3.jpg',
    imageAlt: 'Grace Women ministry',
  },
];

export default function Ministries() {
  useDocumentTitle('Ministries');

  return (
    <div className="bg-[#f7f4ef]">
      <PageHero title="Ministries" subtitle="Serving together, growing in grace" image={HERO_IMG} />

      {/* Ministry sections */}
      {ministries.map((m, i) => (
        <section key={m.title} className={`border-t border-black/8 ${i === 0 ? 'mt-16' : ''}`} aria-labelledby={`ministry-${i}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <img
                  src={m.image}
                  alt={m.imageAlt}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col justify-center px-0 lg:px-14 py-16 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <p className="text-black/30 text-xs tracking-[0.3em] uppercase font-semibold mb-4">{m.tag}</p>
                <h2 id={`ministry-${i}`} className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-4">{m.title}</h2>
                <p className="text-black/40 text-sm mb-5 font-medium">{m.sub}</p>
                <p className="text-black/50 leading-relaxed text-sm mb-4">{m.body1}</p>
                <p className="text-black/50 leading-relaxed text-sm">{m.body2}</p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Grace Media */}
      <section className="bg-black py-24 mt-16 border-t border-black/8" aria-labelledby="media-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Grace Media</p>
            <h2 id="media-heading" className="font-heading text-5xl md:text-7xl tracking-wider text-white leading-none mb-5">
              SPREADING<br />THE MESSAGE
            </h2>
            <p className="text-white/35 text-base">
              Catch all GCC services and teachings live or on replay. We stream services regularly and rebroadcasts are available.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {socialPlatforms.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white/60 hover:text-white hover:border-white text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
