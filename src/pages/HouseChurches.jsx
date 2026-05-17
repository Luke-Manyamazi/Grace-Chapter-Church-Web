import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const HERO_IMG = '/images/gcc21.jpg';

const hcs = [
  {
    num: '01',
    title: 'First House Church',
    sub: 'The Family Unit',
    body: 'Our focus is to strengthen the first house church — the father, mother and members of their household. The initial attack in the garden was aimed to destabilize the family unit. We are called to correct that error and rebuild the foundations of the family again.',
    image: '/images/gcc6.jpg',
    imageAlt: 'Couple studying the Bible together',
  },
  {
    num: '02',
    title: 'Second House Church',
    sub: 'Small Group Gatherings',
    body: 'The gathering of several families fulfilling the word that exhorts us not to neglect meeting with other saints. Smaller groups help every believer grow by exercising their gifts — promoting true fellowship as we help each other in spirit, soul and body.',
    image: '/images/gcc18.jpg',
    imageAlt: 'Grace Chapter Church fellowship gathering',
  },
  {
    num: '03',
    title: 'Third House Church',
    sub: 'Campus Celebration',
    body: 'The meeting of all believers at a campus level as one big family — designed for fellowship, reflection and celebrating the victories of the first and second house churches. Strong marriages birth strong families which result in strong communities.',
    image: '/images/gcc19.jpg',
    imageAlt: 'Grace Chapter Church campus celebration',
  },
];

export default function HouseChurches() {
  useDocumentTitle('House Churches');

  return (
    <div className="bg-[#f7f4ef]">
      <PageHero title="House Churches" subtitle="Building strong family institutions — one home at a time." image={HERO_IMG} objectPosition="center 30%" overlay="bg-black/45" />

      {/* Intro */}
      <section className="py-24 lg:py-32 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-5">Family-Centred</p>
            <h2 className="font-heading text-5xl md:text-7xl tracking-wider leading-none mb-8">
              FAMILY IS<br />OUR MINISTRY
            </h2>
            <p className="text-black/50 text-base leading-relaxed">
              The body of Christ has many ministries and ministers who all serve in different ways. Just as our physical body parts differ yet come together to form a functional whole, so are the different ministries in the body of Christ — with a focus on families.
            </p>
          </div>
        </div>
      </section>

      {/* Three House Churches */}
      <section aria-label="The three house churches">
        {hcs.map((hc, i) => (
          <motion.article
            key={hc.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="border-t border-black/8"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={hc.image}
                    alt={hc.imageAlt}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Text */}
                <div className={`flex flex-col justify-center px-0 lg:px-14 py-16 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="font-heading text-8xl text-black/6 block mb-2" aria-hidden="true">{hc.num}</span>
                  <p className="text-black/30 text-xs tracking-[0.25em] uppercase font-semibold mb-3">{hc.sub}</p>
                  <h3 className="font-heading text-4xl md:text-5xl tracking-wider leading-none mb-6">{hc.title}</h3>
                  <p className="text-black/50 leading-relaxed text-base">{hc.body}</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Discipleship */}
      <section className="py-24 lg:py-32 border-t border-black/8 bg-black" aria-labelledby="discipleship-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-semibold mb-5">Our Calling</p>
            <h2 id="discipleship-heading" className="font-heading text-5xl md:text-7xl tracking-wider leading-none text-white mb-6">
              DISCIPLESHIP<br /><span className="text-white/30">#JustOne</span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-5">
              One person, one family, one community and one nation at a time.
            </p>
            <p className="text-white/35 text-base leading-relaxed mb-4">
              True discipleship is not merely about teaching — it is about thoroughly equipping every believer to become a discipler themselves. We don't just produce followers; we raise up those who multiply.
            </p>
            <p className="text-white/35 text-base leading-relaxed">
              Through intentional relationships, grounding in the Word of Grace, and practical life-on-life mentorship, we walk with each person until they are fully equipped to go and do the same — pouring into others what was poured into them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: '01', label: 'One Person' },
              { num: '02', label: 'One Family' },
              { num: '03', label: 'One Community' },
              { num: '04', label: 'One Nation' },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-t border-white/10 pt-8 pb-8 pr-8"
              >
                <span className="font-heading text-6xl text-white/6 block mb-3" aria-hidden="true">{item.num}</span>
                <h3 className="font-heading text-3xl tracking-wider text-white">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 text-center mt-16">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-semibold mb-6">Get Connected</p>
        <h2 className="font-heading text-5xl md:text-7xl tracking-wider text-white leading-none mb-8">
          JOIN A HOUSE<br />CHURCH NEAR YOU
        </h2>
        <p className="text-white/35 mb-10 text-base max-w-md mx-auto px-6">
          Reach out to connect with a local House Church in your area.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-white hover:text-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Connect With Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
