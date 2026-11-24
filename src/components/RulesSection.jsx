import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Laptop,
  Users2,
  CheckCircle2,
  Clock,
  Award,
  AlertTriangle,
  Scale
} from 'lucide-react';

const COMMON_RULES = [
  {
    icon: ShieldAlert,
    title: "Strict 'Safe Browser Mode' Execution",
    description: "Every competition is conducted exclusively through locked Safe Browser platforms. Opening external browser tabs, inspecting page elements, launching IDEs, or accessing system files is strictly prohibited. The desktop remains locked to the exam console during the entire test."
  },
  {
    icon: Laptop,
    title: "Mandatory Laptop & Stable Internet",
    description: "A working personal laptop with an active high-speed internet connection is compulsory for all participants. Mobile devices are strictly not allowed for competitive coding or multi-round elimination quizzes unless specified."
  },
  {
    icon: Clock,
    title: "Mandatory Participation in Mock Rounds",
    description: "Participation in the official Mock Round is compulsory prior to entering the elimination rounds for all four competitions. Candidates failing to attend the mock round may be disqualified from the preliminary leaderboards."
  },
  {
    icon: Users2,
    title: "Strict Event 01 Team Constraint (Team of 2)",
    description: "For EVENT 01 (Quiz on Technical Awareness), participation is strictly restricted to teams consisting of exactly TWO (2) members from the same institution. Solo entries will not be permitted."
  },
  {
    icon: Scale,
    title: "Bonus Rounds for Tie-Breaking",
    description: "In the event of score parity among top contenders, specialized bonus question rounds or technical viva rounds will be deployed to determine final advancement and qualifying standing."
  },
  {
    icon: Award,
    title: "Absolute Finality of Officials' Decisions",
    description: "The evaluation, timing calculations, and administrative decisions delivered by the official Quizmasters and Codemasters shall be final, binding, and beyond contestation."
  }
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Scale className="w-3.5 h-3.5 text-white" />
            <span>Code of Conduct</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Rules & <span className="underline decoration-white/40 underline-offset-8">Guidelines</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Essential regulations governing candidate conduct, technical platform compliance,
            mock round mandates, and academic integrity across DEVVERSE 2026.
          </p>
        </div>

        {/* Rules Grid - Monochrome */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMON_RULES.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between bg-neutral-950 border border-neutral-800 hover:border-white/40 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black border border-neutral-700 flex items-center justify-center mb-5 group-hover:border-white transition-all">
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-2.5">
                    {rule.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Mandatory Compliance</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Warning Banner - Monochrome */}
        <div className="mt-12 p-5 rounded-2xl bg-neutral-950 border border-white/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <AlertTriangle className="w-8 h-8 text-white shrink-0" />
          <div>
            <h4 className="text-sm font-display font-bold text-white">
              Zero Malpractice Tolerance
            </h4>
            <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed font-light">
              Any attempt to bypass the Safe Browser environment, share candidate credentials, or engage in unfair collaboration will result in immediate disqualification and notification to the candidate's respective department.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
