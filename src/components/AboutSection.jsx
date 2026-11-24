import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Terminal, Award, CheckCircle2, Compass } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/eventsData';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Mind Sport & Intellectual Agility",
      description: "Fast-paced domain assessments designed to test analytical reflexes, conceptual depth, and high-pressure decision making."
    },
    {
      icon: Terminal,
      title: "C Language Decoding Arena",
      description: "Rigorous algorithmic challenges decoding 100+ C programs from fundamentals to pointers, matrices, and recursion."
    },
    {
      icon: Award,
      title: "Corporate Placement Benchmark",
      description: "Pre-placement aptitude structured around hiring blueprints of top tier technology companies like Infosys, TCS, IBM & Accenture."
    },
    {
      icon: Shield,
      title: "Safe Browser Integrity",
      description: "Standardized secure browser platform ensuring 100% fair competition, isolated test environment, and tamper-free evaluation."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-white" />
            <span>The Forum Series</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="underline decoration-white/40 underline-offset-8">DEVVERSE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Organized under the aegis of the{' '}
            <span className="text-white font-medium">Department of Computer Science & Engineering</span>,{' '}
            <span className="text-neutral-200 font-medium">Karavali Institute of Technology, Mangalore</span>.
          </p>
        </div>

        {/* Narrative & Department Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-neutral-950 border-white/15"
          >
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
              Pioneering Academic Excellence & Technical Competitive Rigor
            </h3>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
              {FESTIVAL_INFO.aboutOverview}
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
              Unlike ordinary college symposiums, DEVVERSE focuses exclusively on objective skill benchmarks,
              real-time algorithmic execution, time-bound aptitude stamina, and national civic literacy.
              Every competition is curated to prepare students for campus interviews, corporate technical rounds,
              and competitive technical challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Standardized Safe Browser Sandbox</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Multi-tier Qualifying Rounds</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Comprehensive 100+ Program Scope</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>IIC Collaboration & Accreditation</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-white/15 bg-neutral-950"
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                Host Department
              </span>
              <h4 className="text-xl font-display font-bold text-white mt-1 mb-2">
                Department of Computer Science & Engineering
              </h4>
              <p className="text-xs text-neutral-400 font-mono mb-4">
                Karavali Institute of Technology, Mangalore
              </p>
              
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                Committed to fostering next-generation computational thinking, software engineering
                mastery, and industry preparedness. The forum events series stands as a testament
                to student-driven technical leadership and academic innovation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-neutral-800">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                <span>Festival Schedule Window</span>
                <span className="font-mono text-white font-semibold">Nov 25 – 26, 2026</span>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Mode of Execution</span>
                <span className="font-mono text-white font-semibold">100% Online Examination</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col group bg-neutral-950 border-white/10 hover:border-white/40"
              >
                <div className="w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center mb-4 group-hover:border-white group-hover:bg-neutral-900 transition-all">
                  <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-base font-display font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
