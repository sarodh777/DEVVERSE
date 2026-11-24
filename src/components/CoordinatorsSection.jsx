import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  PhoneCall,
  Copy,
  Check,
  Search
} from 'lucide-react';
import { EVENT_COORDINATORS } from '../data/coordinatorsData';

const filterTabs = [
  { id: 'all', label: 'All Coordinators' },
  { id: 'technical-awareness-quiz', label: 'Quiz on Technical Awareness' },
  { id: 'codewars-1', label: 'Codewars:-I' },
  { id: 'preplacement-preparation-quiz', label: 'Preplacement Prep Quiz' },
  { id: 'tech-room-escape', label: 'Tech Room Escape' }
];

const CoordinatorsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (phone, id) => {
    if (!phone) return;
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const filteredCoordinators = EVENT_COORDINATORS.filter((c) => {
    const matchesFilter =
      selectedFilter === 'all' || c.eventId === selectedFilter;
    const matchesSearch =
      searchQuery === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.phone && c.phone.includes(searchQuery));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="coordinators" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-white" />
            <span>Event Leadership Team</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            MEET YOUR <span className="underline decoration-white/40 underline-offset-8">EVENT COORDINATORS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Reach out directly to assigned student coordinators for event-specific clarifications,
            mock session assistance, or examination portal guidance.
          </p>

          {/* Search Bar - Monochrome */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coordinator by name or event..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black border border-neutral-700 focus:border-white focus:outline-none text-xs sm:text-sm text-white placeholder:text-neutral-500 font-mono"
            />
          </div>

          {/* Filter Pills - Monochrome */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCoordinators.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between bg-neutral-950 border border-neutral-800 hover:border-white/40 group relative overflow-hidden"
            >
              <div>
                {/* Event Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-neutral-300 border border-neutral-800 truncate max-w-[170px]" title={c.eventName}>
                    {c.eventName}
                  </span>
                  <span className="text-[10px] font-mono text-white font-bold">
                    {c.eventCode}
                  </span>
                </div>

                {/* Profile Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-black border border-neutral-700 flex items-center justify-center font-display font-extrabold text-lg text-white group-hover:border-white transition-all shadow-inner">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-neutral-200 transition-colors">
                      {c.name}
                    </h3>
                    <span className="text-xs text-neutral-400 block font-light">
                      {c.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="pt-3 border-t border-neutral-800 mt-2">
                {c.phone ? (
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                        Phone Contact
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        +91 {c.phone}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(c.phone, c.id)}
                        className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
                        title="Copy Phone Number"
                      >
                        {copiedId === c.id ? (
                          <Check className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <a
                        href={`tel:${c.phone}`}
                        className="p-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-1 text-xs font-mono font-bold"
                        title={`Call ${c.name}`}
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-black" />
                        <span className="hidden sm:inline">Call</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono py-1">
                    <span>Contact Number:</span>
                    <span className="italic px-2 py-0.5 rounded bg-black text-neutral-400 border border-neutral-800">
                      To Be Announced
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
