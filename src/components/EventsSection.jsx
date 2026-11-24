import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import { EVENTS_DATA, REGISTRATION_URL } from '../data/eventsData';
import EventCard from './EventCard';

const EventsSection = ({ onSelectEvent, onOpenSyllabus }) => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = EVENTS_DATA.filter((event) => {
    if (filter === 'all') return true;
    if (filter === 'quiz') return event.category.toLowerCase().includes('quiz') || event.category.toLowerCase().includes('aptitude');
    if (filter === 'coding') return event.category.toLowerCase().includes('coding');
    return true;
  });

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Official Competition Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Explore All <span className="underline decoration-white/40 underline-offset-8">Four Events</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Detailed breakdown of competition schedules, round specifications, strict team/individual
            eligibility, and assigned student coordinators as published in the official DEVVERSE syllabus.
          </p>

          {/* Filter Bar - Monochrome */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              All Events ({EVENTS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('quiz')}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono uppercase tracking-wider transition-all ${
                filter === 'quiz'
                  ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Quizzes & Mind Sports (3)
            </button>
            <button
              onClick={() => setFilter('coding')}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono uppercase tracking-wider transition-all ${
                filter === 'coding'
                  ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Coding Warfare (1)
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onExplore={onSelectEvent}
              onOpenSyllabus={onOpenSyllabus}
            />
          ))}
        </div>

        {/* Prominent Registration CTA Banner in Events Section */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-white/20 text-center relative overflow-hidden group">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Official Event Registration</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4 uppercase">
              Ready to Compete in DEVVERSE 2026?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
              Registration is officially open for all four events. Fill out the official Google Form below to register your team or solo entry and receive Safe Browser instructions before the mandatory mock round.
            </p>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold font-display uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all shadow-xl shadow-white/10 hover:shadow-white/25 active:scale-[0.98]"
            >
              <span>REGISTER NOW VIA OFFICIAL GOOGLE FORM</span>
              <ExternalLink className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
