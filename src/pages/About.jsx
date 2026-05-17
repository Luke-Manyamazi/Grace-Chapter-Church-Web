import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import ScrollTicker from '../components/shared/ScrollTicker';
import { CheckCircle2 } from 'lucide-react';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const HERO_IMG = '/images/gcc17.jpg';
const PASTORS_IMG = '/images/pd1.jpg';

const beliefs = [
  'The Bible is inspired and empowered by God, infallible and our authority.',
  'One eternal God exists as three persons: the Father, Son, and Holy Spirit.',
  'Jesus Christ is the Son of God — born of a virgin, sinless, crucified, risen, and seated at the Father\'s right hand.',
  'Salvation requires repentance and faith in Christ\'s finished work by confessing Him as Lord.',
  'Water baptism in the name of the Father, Son, and Holy Spirit as a symbol of faith.',
  'The indwelling and baptism of the Holy Spirit with the evidence of speaking in tongues.',
  'Divine healing — restoration of health through faith in God\'s Word.',
  'By the stripes of Jesus we were healed.',
  'God desires us to prosper so that we may be a blessing to others.',
  'The imminent return of Jesus Christ.',
  'All born-again believers are commissioned to share the Good News to the whole world.',
];

export default function About() {
  useDocumentTitle('About Us');

  return (
    <div className="bg-[#f7f4ef]">
      <PageHero title="About Us" subtitle="Our mandate is to reveal Christ to the world." image={HERO_IMG} objectPosition="center 70%" overlay="bg-black/45" />

      {/* Vision · Mission · Result */}
      <section className="py-24 lg:py-32 border-b border-black/8" aria-labelledby="purpose-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Our Purpose</p>
          <h2 id="purpose-heading" className="font-heading text-5xl md:text-7xl tracking-wider leading-none mb-16">
            VISION, MISSION<br />&amp; RESULT
          </h2>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/8">
            {[
              { num: '01', title: 'Our Vision', body: 'We Serve.' },
              { num: '02', title: 'Our Mission', body: 'Our mandate is to reveal Christ to the world. We serve God by serving people through equipping and empowering them by the Message of Grace.' },
              { num: '03', title: 'Our Result', body: 'Resting in Christ, revealing Christ, and reconciling the world back to Christ.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="px-8 py-10 first:pl-0 last:pr-0"
              >
                <span className="font-heading text-6xl text-black/6 block mb-4" aria-hidden="true">{item.num}</span>
                <h3 className="font-heading text-3xl tracking-wider mb-4">{item.title}</h3>
                <p className="text-black/45 leading-relaxed text-sm">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollTicker />

      {/* Statement of Faith */}
      <section className="py-24 lg:py-32 border-b border-black/8" aria-labelledby="faith-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">What We Believe</p>
          <h2 id="faith-heading" className="font-heading text-5xl md:text-7xl tracking-wider leading-none mb-16">
            STATEMENT<br />OF FAITH
          </h2>
          <ol className="grid sm:grid-cols-2 gap-0 list-none">
            {beliefs.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="flex gap-4 items-start border-t border-black/8 py-5 pr-8"
              >
                <span className="text-black/20 font-heading text-lg mt-0.5 flex-shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-black/55 text-sm leading-relaxed">{b}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Senior Pastors */}
      <section className="py-24 lg:py-32" aria-labelledby="pastors-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <img
                src={PASTORS_IMG}
                alt="Senior Pastors Dan and Ria Zimuwandeyi"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-5">Senior Pastors</p>
              <h2 id="pastors-heading" className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-8">
                DAN &amp; RIA<br />ZIMUWANDEYI
              </h2>
              <p className="text-black/50 leading-relaxed mb-5 text-base">
                Pastors Dan and Ria Zimuwandeyi lead Grace Chapter Church with a passion to see Christ formed in people and families restored by the Word of Grace.
              </p>
              <p className="text-black/50 leading-relaxed text-base">
                Their leadership is marked by humility, vision, and a desire to see every believer grow in faith and purpose — supported by an incredible team of Campus Pastors across all locations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
