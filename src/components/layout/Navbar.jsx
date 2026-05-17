import React, { useState, useEffect, useRef, useId } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const GCC_LOGO = '/images/gcc_logo.png';

const homeDropdown = [
  { label: 'About Us', path: '/about' },
  { label: 'House Churches', path: '/house-churches' },
];

const flatLinks = [
  { label: 'Ministries', path: '/ministries' },
  { label: 'Sermons', path: '/sermons' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

const homeGroup = ['/', '/about', '/house-churches'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuId = useId();
  const dropdownRef = useRef(null);

  // rAF-throttled passive scroll listener
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu and scroll to top on route change (skip if navigating to a hash anchor)
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDropdownOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const isLight = !scrolled;
  const homeActive = homeGroup.includes(location.pathname);

  const linkBase = (active) =>
    `text-xs font-semibold tracking-[0.15em] uppercase transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
      isLight ? 'focus-visible:outline-white' : 'focus-visible:outline-black'
    } ${
      active
        ? isLight ? 'text-white' : 'text-black'
        : isLight ? 'text-white/60 hover:text-white' : 'text-black/40 hover:text-black'
    }`;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f7f4ef]/95 backdrop-blur-md border-b border-black/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm ${isLight ? 'focus-visible:outline-white' : 'focus-visible:outline-black'}`}
          >
            <img
              src={GCC_LOGO}
              alt="Grace Chapter Church — Home"
              className="w-10 h-10 object-contain"
              width="40"
              height="40"
              decoding="async"
            />
            <span className={`text-xs font-semibold tracking-[0.15em] uppercase whitespace-nowrap hidden sm:block transition-colors ${isLight ? 'text-white' : 'text-black'}`}>
              Grace Chapter Church
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Home + dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1 ${linkBase(homeActive)}`}
              >
                Home
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-[#f7f4ef] border border-black/8 shadow-lg py-1"
                    role="menu"
                    aria-label="Home sub-navigation"
                  >
                    <Link
                      to="/"
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      aria-current={location.pathname === '/' ? 'page' : undefined}
                      className="block px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-black/40 hover:text-black hover:bg-black/4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black"
                    >
                      Home
                    </Link>
                    {homeDropdown.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                        aria-current={location.pathname === link.path ? 'page' : undefined}
                        className={`block px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black ${
                          location.pathname === link.path
                            ? 'text-black'
                            : 'text-black/40 hover:text-black hover:bg-black/4'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Flat links */}
            {flatLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={linkBase(location.pathname === link.path)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Give CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact#giving"
              className={`text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                isLight
                  ? 'border-white/40 text-white hover:bg-white hover:text-black focus-visible:outline-white'
                  : 'border-black text-black hover:bg-black hover:text-white focus-visible:outline-black'
              }`}
            >
              Give
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`lg:hidden transition-colors p-1 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLight
                ? 'text-white focus-visible:outline-white'
                : 'text-black focus-visible:outline-black'
            }`}
          >
            {isOpen
              ? <X className="w-6 h-6" aria-hidden="true" />
              : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={mobileMenuId}
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-[#f7f4ef] border-b border-black/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {/* Home group */}
              <Link
                to="/"
                aria-current={location.pathname === '/' ? 'page' : undefined}
                className={`block py-2.5 text-sm font-semibold tracking-[0.15em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                  location.pathname === '/' ? 'text-black' : 'text-black/40 hover:text-black'
                }`}
              >
                Home
              </Link>
              {homeDropdown.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className={`block py-2.5 pl-4 text-sm font-semibold tracking-[0.15em] uppercase transition-colors border-l-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    location.pathname === link.path
                      ? 'text-black border-black'
                      : 'text-black/35 border-black/15 hover:text-black hover:border-black/40'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2 space-y-1">
                {flatLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                    className={`block py-2.5 text-sm font-semibold tracking-[0.15em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                      location.pathname === link.path ? 'text-black' : 'text-black/40 hover:text-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact#giving"
                  className="block py-2.5 text-sm font-bold tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Give
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
