import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, CreditCard, Copy, CheckCheck, SendHorizonal } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const HERO_IMG = '/images/gcc9.jpg';

const CONTACT_EMAIL = 'hello@gracechapterchurch.online';

export default function Contact() {
  useDocumentTitle('Contact');

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    if (window.location.hash === '#giving') {
      setTimeout(() => {
        document.getElementById('giving')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const link = document.createElement('a');
    link.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    link.click();
    setSent(true);
    toast({
      title: 'Email client opened',
      description: `If it didn't open, email us at ${CONTACT_EMAIL}`,
    });
  };

  const copyAccount = () => {
    navigator.clipboard.writeText('62708829132').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="bg-[#f7f4ef]">
      <PageHero title="Contact Us" subtitle="We always love to hear from you" image={HERO_IMG} />

      {/* Contact form + info */}
      <section className="py-24 lg:py-32 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Send a Message</p>
              <h2 className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-12">GET IN<br />TOUCH</h2>

              {sent ? (
                <motion.div
                  initial={{ scale: 0.97, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="border border-black/8 p-12 text-center bg-white"
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCheck className="w-10 h-10 mx-auto mb-4 text-black/30" aria-hidden="true" />
                  <h3 className="font-heading text-3xl tracking-wider mb-2">THANK YOU</h3>
                  <p className="text-black/40 text-sm mb-4">Your email client should have opened with your message pre-filled.</p>
                  <p className="text-black/35 text-sm">
                    If it didn't open, email us directly at{' '}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-black font-semibold hover:opacity-60 transition-opacity"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-xs font-bold tracking-[0.15em] uppercase text-black/40">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Full Name"
                      required
                      className="mt-2 rounded-none border-0 border-b border-black/15 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-bold tracking-[0.15em] uppercase text-black/40">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Email address"
                      required
                      className="mt-2 rounded-none border-0 border-b border-black/15 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-xs font-bold tracking-[0.15em] uppercase text-black/40">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help or pray for you?"
                      rows={5}
                      required
                      className="mt-2 rounded-none border-0 border-b border-black/15 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-black resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 inline-flex items-center gap-2 bg-black text-white text-xs font-bold tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-black/80 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                  >
                    <span>Send Message</span>
                    <SendHorizonal className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Contact Details</p>
              <h2 className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-12">REACH OUT<br />DIRECTLY</h2>

              <div className="space-y-0">
                {[
                  { href: `mailto:${CONTACT_EMAIL}`, Icon: Mail, label: 'General Enquiries', value: CONTACT_EMAIL },
                  { href: 'mailto:pd@gracechapterchurch.online', Icon: Mail, label: 'Pastoral Desk', value: 'pd@gracechapterchurch.online' },
                  { href: 'tel:+27731701167', Icon: Phone, label: 'Phone / WhatsApp', value: '+27 (0) 73 170 1167' },
                ].map(({ href, Icon, label, value }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-5 py-5 border-b border-black/8 hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <Icon className="w-4 h-4 text-black/30 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs text-black/30 font-semibold tracking-widest uppercase mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-black">{value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-start gap-5 py-5 border-b border-black/8">
                  <MapPin className="w-4 h-4 text-black/30 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-black/30 font-semibold tracking-widest uppercase mb-0.5">Campuses</p>
                    <p className="text-sm font-medium text-black">Johannesburg · Cape Town · Harare</p>
                    <p className="text-sm font-medium text-black">UK · Canada · Mozambique</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banking / Giving */}
      <section id="giving" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-black/35 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Giving</p>
              <h2 className="font-heading text-5xl md:text-6xl tracking-wider leading-none mb-6">PARTNER<br />WITH US</h2>
              <p className="text-black/45 text-base leading-relaxed">
                Your giving towards the ministry helps us reach more people with the Gospel of Jesus Christ and His message of Grace.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-black/8 p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <CreditCard className="w-5 h-5 text-black/30" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-2xl tracking-wider">Banking Details</h3>
                  <p className="text-xs text-black/30 tracking-widest uppercase">Thanksgiving · Offering · Partnership</p>
                </div>
              </div>
              <dl className="space-y-0 divide-y divide-black/6">
                {[
                  { label: 'Account Name', value: 'Grace Chapter Church', copy: false },
                  { label: 'Bank', value: 'FNB', copy: false },
                  { label: 'Account Number', value: '62708829132', copy: true },
                  { label: 'Branch Code', value: '250655', copy: false },
                ].map(({ label, value, copy }) => (
                  <div key={label} className="flex justify-between items-center py-4">
                    <dt className="text-xs text-black/35 font-semibold tracking-widest uppercase">{label}</dt>
                    <dd className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-black">{value}</span>
                      {copy && (
                        <button
                          type="button"
                          onClick={copyAccount}
                          aria-label={copied ? 'Account number copied' : 'Copy account number'}
                          className="text-black/30 hover:text-black transition-colors p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          {copied
                            ? <CheckCheck className="w-4 h-4" aria-hidden="true" />
                            : <Copy className="w-4 h-4" aria-hidden="true" />}
                        </button>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 pt-6 border-t border-black/8 text-sm text-black/40">
                Email proof of payment to{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-black font-semibold hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
