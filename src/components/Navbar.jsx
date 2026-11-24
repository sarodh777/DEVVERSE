import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Terminal, ChevronRight, ExternalLink } from 'lucide-react';
import { REGISTRATION_URL } from '../data/eventsData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Codewars 100+', href: '#codewars-catalog' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Rules', href: '#rules' },
  { name: 'Coordinators', href: '#coordinators' },
  { name: 'Room Coordinators', href: '#room-coordinators' },
  { name: 'Help', href: '#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/15 py-3 shadow-lg shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Pure Black and White */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white p-[1px] shadow-lg shadow-white/10 group-hover:shadow-white/25 transition-shadow">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  DEVVERSE
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-black">
                  2026
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 tracking-tight font-medium hidden sm:block">
                Dept. of CSE • Karavali Institute of Technology
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button - REGISTER NOW */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase text-black bg-white hover:bg-neutral-200 transition-all shadow-sm hover:shadow-white/20 active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>REGISTER NOW</span>
              <ExternalLink className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/20 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              <div className="px-3 py-2 mb-2 rounded-lg bg-neutral-900 border border-white/15">
                <p className="text-xs text-white font-mono font-medium">
                  Karavali Institute of Technology, Mangalore
                </p>
                <p className="text-[11px] text-neutral-400">
                  Department of Computer Science & Engineering
                </p>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-600" />
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-neutral-800">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 shadow-lg shadow-white/10"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>REGISTER NOW</span>
                  <ExternalLink className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
