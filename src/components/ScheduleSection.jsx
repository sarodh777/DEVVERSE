import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, ArrowRight, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { REGISTRATION_URL } from '../data/eventsData';

const DAYS_SCHEDULE = [
  {
    dayNumber: "DAY 01",
    dateTitle: "25 NOVEMBER",
    fullDate: "25 November 2026",
    weekday: "Wednesday",
    description: "Kickoff Day featuring Rapid Technical Assessment & Low-Level C Programming Combat",
    events: [
      {
        eventId: "technical-awareness-quiz",
        time: "09:00 AM",
        timeBadge: "Starts 09:00 AM",
        hasExactTime: true,
        title: "Quiz on Technical Awareness",
        code: "DEVCS00QT1",
        number: "EVENT 01",
        date: "25 November 2026",
        eligibility: "1st & 2nd Year (Team of 2 Members Mandatory)",
        mode: "Online (Safe Browser)",
        shortDesc: "Inter-collegiate mind sport played between teams of two covering computer general awareness, social media, road safety, and digital health."
      },
      {
        eventId: "codewars-1",
        time: "12:00 PM",
        timeBadge: "Starts 12:00 PM",
        hasExactTime: true,
        title: "Codewars-I (Code War)",
        code: "Codewars:-I",
        number: "EVENT 02",
        date: "25 November 2026",
        eligibility: "3rd & 4th Year (Individual)",
        mode: "Online (Safe Browser IDE)",
        shortDesc: "High-octane C language coding combat decoding 100+ programs across fundamentals, arrays, pointers, matrices, and recursive execution."
      }
    ]
  },
  {
    dayNumber: "DAY 02",
    dateTitle: "26 NOVEMBER",
    fullDate: "26 November 2026",
    weekday: "Thursday",
    description: "Culmination Day featuring Corporate Preplacement Rigor & Three-Room Tech Escape Challenge",
    events: [
      {
        eventId: "preplacement-preparation-quiz",
        time: "To Be Announced",
        timeBadge: "Time: To Be Announced",
        hasExactTime: false,
        title: "Quiz on Preplacement Preparation",
        code: "DEVCS00QP01",
        number: "EVENT 03",
        date: "26 November 2026",
        eligibility: "4th Year Students Only",
        mode: "Online (Safe Browser)",
        shortDesc: "Corporate aptitude and technical benchmark tailored to Infosys, TCS, IBM, Accenture, Capgemini, HCL, HP, Nokia & L&T hiring patterns."
      },
      {
        eventId: "tech-room-escape",
        time: "To Be Announced",
        timeBadge: "Time: To Be Announced",
        hasExactTime: false,
        title: "Tech Room Escape",
        code: "DEVCS00QN01",
        number: "EVENT 04",
        date: "26 November 2026",
        eligibility: "All UG & PG Students",
        mode: "Online (Safe Browser)",
        shortDesc: "Three-room sequential escape arena navigating the Decryption Chamber, the Logic Vault, and the Terminal Gate under strict time countdown."
      }
    ]
  }
];

const ScheduleSection = ({ onSelectEventById }) => {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Explicitly Titled per User Request */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-3.5">
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Official Two-Day Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            EVENT SCHEDULE – <span className="underline decoration-white/40 underline-offset-8">TWO DAYS OF TECHNOLOGY</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            Review the official schedule for DEVVERSE 2026 across Wednesday, 25 November and Thursday, 26 November.
            Starting times for Day 01 are confirmed; Day 02 timings will be announced via coordinator channels.
          </p>
        </div>

        {/* Two Separate Day Cards */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {DAYS_SCHEDULE.map((day, dayIdx) => (
            <motion.div
              key={day.dayNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIdx * 0.15 }}
              className="p-6 sm:p-10 rounded-3xl bg-neutral-950 border border-white/20 relative overflow-hidden shadow-2xl shadow-black"
            >
              {/* Day Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-3.5">
                  <span className="px-3 py-1.5 rounded-lg bg-white text-black font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
                    {day.dayNumber}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                      {day.dateTitle}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400">
                      {day.fullDate} • {day.weekday}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md">
                  {day.description}
                </p>
              </div>

              {/* Day Events Layout with Animated Connecting Line */}
              <div className="mt-8 relative">
                {/* Connecting Timeline Line */}
                <div className="absolute top-6 bottom-6 left-5 sm:left-6 w-[2px] bg-gradient-to-b from-white via-neutral-600 to-neutral-800 hidden sm:block" />

                <div className="space-y-6 sm:space-y-8">
                  {day.events.map((evt, evtIdx) => (
                    <motion.div
                      key={evt.eventId}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: evtIdx * 0.1 }}
                      className="relative sm:pl-16 group"
                    >
                      {/* Timeline Node Icon (Desktop) */}
                      <div className="absolute left-4 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-black border-2 border-white hidden sm:flex items-center justify-center z-20 group-hover:scale-125 transition-transform shadow-md shadow-white/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>

                      {/* Event Card in Day Section */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-black border border-neutral-800 hover:border-white/40 transition-all flex flex-col justify-between">
                        <div>
                          {/* Top Meta Bar */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-neutral-900 text-white border border-neutral-700">
                                {evt.number}
                              </span>
                              <span className="text-[11px] font-mono text-neutral-400">
                                {evt.code}
                              </span>
                            </div>

                            {/* Bold Time Badge */}
                            <div className={`px-3 py-1 rounded-md text-xs font-mono font-bold flex items-center gap-1.5 ${
                              evt.hasExactTime 
                                ? 'bg-white text-black shadow-sm shadow-white/10' 
                                : 'bg-neutral-900 text-neutral-300 border border-neutral-700'
                            }`}>
                              <Clock className="w-3.5 h-3.5" />
                              <span>{evt.timeBadge}</span>
                            </div>
                          </div>

                          {/* Event Title */}
                          <h4 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors">
                            {evt.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-neutral-400 mt-1 mb-4 font-light leading-relaxed">
                            {evt.shortDesc}
                          </p>

                          {/* Date & Eligibility Bar */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-neutral-950 p-3 rounded-xl border border-neutral-900 mb-5">
                            <div>
                              <span className="text-neutral-500 font-mono block text-[10px] uppercase">
                                Scheduled Date:
                              </span>
                              <span className="font-mono font-bold text-white">
                                {evt.date}
                              </span>
                            </div>
                            <div>
                              <span className="text-neutral-500 font-mono block text-[10px] uppercase">
                                Target Eligibility:
                              </span>
                              <span className="text-neutral-200 font-medium">
                                {evt.eligibility}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons: View Details & Register Now */}
                        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-neutral-900">
                          <button
                            onClick={() => onSelectEventById(evt.eventId)}
                            className="py-2.5 px-4 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-white transition-all flex items-center gap-1.5"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={REGISTRATION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2.5 px-5 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all flex items-center gap-1.5 shadow-md shadow-white/10 active:scale-[0.98]"
                          >
                            <span>Register Now</span>
                            <ExternalLink className="w-3.5 h-3.5 text-black" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
