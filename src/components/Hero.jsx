import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Shield, ArrowDown, Calendar, Users, Cpu } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/eventsData';

const Hero = () => {
  const scrollTo = (targetId) => {
    const el = document.querySelector(targetId);
    if (el) {
      const navOffset = 72;
      const elPos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elPos - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Decorative Monochrome Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Department & Institution Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/20 backdrop-blur-md mb-8 shadow-lg shadow-black/80"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              Official Technical Festival
            </span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span className="text-xs text-neutral-300 font-medium tracking-wide">
            {FESTIVAL_INFO.department}
          </span>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span className="text-xs text-white font-semibold tracking-wide">
            {FESTIVAL_INFO.institution}
          </span>
        </motion.div>

        {/* Main Title: DEVVERSE 2026 - High Contrast Pure White */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mb-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-none text-white select-none">
            <span className="relative inline-block glow-text-white">
              DEVVERSE
              <div className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
            </span>
            <span className="block mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-mono font-extrabold tracking-widest text-neutral-300">
              2026
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-white tracking-wide">
            <span className="text-white">Think.</span>{' '}
            <span className="text-neutral-300">Compete.</span>{' '}
            <span className="text-neutral-400">Create.</span>{' '}
            <span className="text-white font-semibold">Conquer.</span>
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            An elite inter-collegiate technological convergence. Experience high-octane mind sports,
            rapid C-language programming combat, and competitive benchmarks organized by the
            Department of Computer Science & Engineering.
          </p>
        </motion.div>

        {/* Action Buttons - Black and White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          {/* Primary Button: EXPLORE EVENTS */}
          <button
            onClick={() => scrollTo('#events')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase text-black bg-white hover:bg-neutral-200 shadow-xl shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>EXPLORE EVENTS</span>
            <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary Button: VIEW SCHEDULE */}
          <button
            onClick={() => scrollTo('#schedule')}
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase text-white bg-black hover:bg-neutral-900 border border-white/30 hover:border-white shadow-lg shadow-black/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>VIEW SCHEDULE</span>
          </button>
        </motion.div>

        {/* Festival Fast Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 backdrop-blur-md hover:border-white/40 transition-colors text-left group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Competitions</span>
              <Terminal className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-display font-bold text-white">04</div>
            <div className="text-xs text-neutral-400 mt-0.5">Signature Events</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 backdrop-blur-md hover:border-white/40 transition-colors text-left group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Code Matrix</span>
              <Cpu className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-display font-bold text-white">100+</div>
            <div className="text-xs text-neutral-400 mt-0.5">C Programs Catalog</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 backdrop-blur-md hover:border-white/40 transition-colors text-left group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Format</span>
              <Shield className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-display font-bold text-white">Online</div>
            <div className="text-xs text-neutral-400 mt-0.5">Safe Browser Arena</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 backdrop-blur-md hover:border-white/40 transition-colors text-left group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Festival Dates</span>
              <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-display font-bold text-white">Nov 25–26</div>
            <div className="text-xs text-neutral-400 mt-0.5">Academic Year 2026</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
