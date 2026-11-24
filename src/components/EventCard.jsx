import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Globe,
  Users,
  Shield,
  Layers,
  ArrowRight,
  Code,
  PhoneCall,
  ExternalLink
} from 'lucide-react';
import { REGISTRATION_URL } from '../data/eventsData';

const EventCard = ({ event, onExplore, onOpenSyllabus }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between relative group border-white/15 hover:border-white/50 bg-neutral-950"
    >
      <div className="p-6 sm:p-7 relative z-10 flex-1 flex flex-col">
        {/* Header Tags & Badges - Monochrome */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-white text-black">
              {event.number}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-neutral-900 text-white border border-neutral-800">
              {event.code}
            </span>
          </div>

          {/* Team or Solo Flag */}
          {event.isTeamEvent ? (
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-white text-black border border-white">
              👥 {event.teamFormat}
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-xs font-medium tracking-wide bg-neutral-900 text-neutral-300 border border-neutral-800">
              👤 {event.teamFormat}
            </span>
          )}
        </div>

        {/* Event Title */}
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors mb-2">
          {event.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-medium text-neutral-400 mb-3">
          {event.subtitle}
        </p>

        {/* Short About Description */}
        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-3 mb-5">
          {event.about}
        </p>

        {/* Prominent Date & Starting Time Highlight Banner */}
        <div className="p-3.5 rounded-xl bg-black border border-white/20 mb-4 flex items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-white shrink-0" />
            <div>
              <span className="text-[10px] text-neutral-400 block font-mono uppercase tracking-wider">
                Event Date
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm text-white">
                {event.date}
              </span>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-neutral-800" />
          <div className="flex items-center gap-2.5 text-right">
            <div>
              <span className="text-[10px] text-neutral-400 block font-mono uppercase tracking-wider">
                {event.hasStartTime ? 'Starting Time' : 'Event Time'}
              </span>
              <span className={`font-mono text-xs sm:text-sm ${event.hasStartTime ? 'font-black text-white' : 'font-medium text-neutral-300'}`}>
                {event.time}
              </span>
            </div>
            <Clock className="w-4 h-4 text-white shrink-0" />
          </div>
        </div>

        {/* Essential Info Badges Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs">
          <div className="p-2.5 rounded-xl bg-black border border-neutral-800 flex items-center gap-2">
            <Globe className="w-4 h-4 text-white shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-neutral-500 block font-mono">Mode</span>
              <span className="font-mono font-bold text-white">{event.mode}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-black border border-neutral-800 flex items-center gap-2">
            <Users className="w-4 h-4 text-white shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-neutral-500 block font-mono">Eligibility</span>
              <span className="font-mono font-bold text-white">{event.eligibility.targetGroup}</span>
            </div>
          </div>
        </div>

        {/* Competition Structure Summary */}
        <div className="p-3 rounded-xl bg-black border border-neutral-800 mb-5">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-white uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>Structure & Rounds</span>
          </div>
          <div className="space-y-1.5">
            {event.competitionStructure.rounds.map((rnd, i) => (
              <div key={i} className="flex items-center justify-between text-[11px] text-neutral-300">
                <span className="truncate max-w-[170px]">{rnd.name}</span>
                <span className="font-mono text-white shrink-0 font-medium">{rnd.structure}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Coordinators Preview with Direct Phone */}
        <div className="mt-auto pt-3 border-t border-neutral-800">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
            <span>Event Coordinators</span>
            <span className="text-[11px] text-white">{event.coordinators.length} Assigned</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {event.coordinators.slice(0, 3).map((c) => (
              <div
                key={c.name}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] bg-neutral-900 border border-neutral-800 text-neutral-200"
              >
                <span>{c.name}</span>
                {c.phone && (
                  <a
                    href={`tel:${c.phone}`}
                    className="text-white hover:text-neutral-400 font-mono flex items-center gap-0.5"
                    title={`Call ${c.name} (${c.phone})`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <PhoneCall className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
            {event.coordinators.length > 3 && (
              <span className="px-2 py-1 rounded-md text-[11px] bg-neutral-900 text-neutral-400 font-mono">
                +{event.coordinators.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions - View Details & Register Now */}
      <div className="p-4 sm:p-5 bg-black border-t border-neutral-800 flex flex-wrap items-center gap-2.5">
        <button
          onClick={() => onExplore(event)}
          className="py-3 px-4 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-white transition-all flex items-center justify-center gap-1.5"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-white/10 active:scale-[0.98]"
        >
          <span>Register Now</span>
          <ExternalLink className="w-3.5 h-3.5 text-black" />
        </a>

        {event.hasInteractiveCatalog && (
          <button
            onClick={() => onOpenSyllabus()}
            className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/20 text-white transition-colors"
            title="Open 100+ C Programs Catalog"
          >
            <Code className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;
