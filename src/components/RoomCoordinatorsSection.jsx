import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  Copy,
  Check,
  Building2,
  Radio
} from 'lucide-react';
import { ROOM_COORDINATORS } from '../data/coordinatorsData';

const RoomCoordinatorsSection = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (phone, id) => {
    if (!phone) return;
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section id="room-coordinators" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-neutral-950 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Building2 className="w-3.5 h-3.5 text-white" />
            <span>Facility & Lab Management</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            ROOM <span className="underline decoration-white/40 underline-offset-8">COORDINATORS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            General room coordinators overseeing digital laboratories, network terminals,
            examination servers, and online room infrastructure for DEVVERSE 2026.
          </p>
        </div>

        {/* 6 Room Coordinator Cards - Monochrome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ROOM_COORDINATORS.map((rc, idx) => (
            <motion.div
              key={rc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between bg-black border border-neutral-800 hover:border-white/40 group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 text-white border border-neutral-700 font-semibold">
                    {rc.designation}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>{rc.status}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center font-display font-bold text-lg text-white group-hover:border-white transition-all shadow-inner">
                    {rc.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-neutral-200 transition-colors">
                      {rc.name}
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono flex items-center gap-1 mt-0.5">
                      <Radio className="w-3 h-3 text-white" />
                      <span>{rc.hall}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="pt-4 border-t border-neutral-800 mt-3">
                {rc.phone ? (
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                        Direct Line
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        +91 {rc.phone}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(rc.phone, rc.id)}
                        className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
                        title="Copy Phone Number"
                      >
                        {copiedId === rc.id ? (
                          <Check className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <a
                        href={`tel:${rc.phone}`}
                        className="p-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-1 text-xs font-mono font-bold"
                        title={`Call ${rc.name}`}
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-black" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono py-1">
                    <span>Contact Line:</span>
                    <span className="italic px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
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

export default RoomCoordinatorsSection;
