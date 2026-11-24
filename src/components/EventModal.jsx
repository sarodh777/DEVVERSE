import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Clock,
  Globe,
  Users,
  Shield,
  Layers,
  BookOpen,
  Phone,
  PhoneCall,
  CheckCircle,
  Copy,
  Check,
  AlertCircle,
  Code,
  Building,
  ExternalLink
} from 'lucide-react';
import { REGISTRATION_URL } from '../data/eventsData';


const EventModal = ({ event, isOpen, onClose, onOpenSyllabus }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedPhone, setCopiedPhone] = useState(null);

  if (!isOpen || !event) return null;

  const handleCopyPhone = (phone) => {
    if (!phone) return;
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview & Objectives', icon: BookOpen },
    { id: 'structure', label: 'Rounds & Structure', icon: Layers },
    { id: 'rules', label: 'Rules & Safe Browser', icon: Shield },
    { id: 'coordinators', label: 'Coordinators', icon: Phone }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Dialog - Pure Black and White */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-black border border-white/30 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh] z-10"
        >
          {/* Top Banner & Header */}
          <div className="relative p-6 sm:p-8 bg-neutral-950 border-b border-neutral-800">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-white text-black">
                {event.number}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-neutral-900 text-white border border-neutral-700">
                {event.code}
              </span>
              {event.isTeamEvent ? (
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-white text-black border border-white">
                  👥 {event.teamFormat}
                </span>
              ) : (
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-700">
                  👤 {event.teamFormat}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
              {event.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-medium mt-1">
              {event.subtitle}
            </p>

            {/* Quick Meta Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="p-2.5 rounded-lg bg-black border border-neutral-800">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Date</span>
                </div>
                <div className="text-xs font-mono font-bold text-white mt-0.5">
                  {event.date}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-black border border-neutral-800">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-white" />
                  <span>Time</span>
                </div>
                <div className="text-xs font-mono font-bold text-white mt-0.5">
                  {event.time}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-black border border-neutral-800">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span>Mode</span>
                </div>
                <div className="text-xs font-mono font-bold text-white mt-0.5">
                  {event.mode}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-black border border-neutral-800">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <Users className="w-3.5 h-3.5 text-white" />
                  <span>Eligibility</span>
                </div>
                <div className="text-xs font-mono font-bold text-neutral-200 mt-0.5 truncate" title={event.eligibility.targetGroup}>
                  {event.eligibility.targetGroup}
                </div>
              </div>
            </div>

            {/* Modal Header Registration Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5 pt-4 border-t border-neutral-800">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold font-display uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>REGISTER FOR THIS EVENT</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>
              <span className="text-xs text-neutral-400 font-mono">
                Official Google Forms Registration
              </span>
            </div>

          </div>

          {/* Navigation Tabs - Monochrome */}
          <div className="flex items-center border-b border-neutral-800 bg-black px-4 sm:px-6 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                    isActive
                      ? 'border-white text-white bg-white/5 font-semibold'
                      : 'border-transparent text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-neutral-200">
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    About the Event
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                    {event.about}
                  </p>
                </div>

                {/* Targeted Companies (for Preplacement Event) */}
                {event.targetedCompanies && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-2.5 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-white" />
                      <span>Targeted Recruiter Blueprints</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {event.targetedCompanies.map((comp) => (
                        <span
                          key={comp}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 text-white border border-white/20"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Objectives */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                    Objectives of Event
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.objectives.map((obj, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800"
                      >
                        <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-300">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eligibility Breakdown */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                    Eligibility & Capacity
                  </h4>
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong className="text-white">Target Discipline:</strong>{' '}
                      <span className="text-neutral-300">{event.eligibility.disciplines}</span>
                    </p>
                    <p>
                      <strong className="text-white">Participation Model:</strong>{' '}
                      <span className={event.isTeamEvent ? 'text-white font-bold underline' : 'text-neutral-300'}>
                        {event.eligibility.teamRequirement}
                      </span>
                    </p>
                    <p>
                      <strong className="text-white">Admissions Limit:</strong>{' '}
                      <span className="text-white font-mono">{event.eligibility.capacity}</span>
                    </p>
                    <p>
                      <strong className="text-white">System Requirement:</strong>{' '}
                      <span className="text-neutral-300">{event.eligibility.systemRequirement}</span>
                    </p>
                  </div>
                </div>

                {/* Codewars Special Button */}
                {event.hasInteractiveCatalog && (
                  <div className="p-4 rounded-xl bg-neutral-950 border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Codewars-I Syllabus Matrix
                      </div>
                      <div className="text-sm font-semibold text-neutral-300 mt-0.5">
                        Includes 100+ C Programs categorized across 11 core domains
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenSyllabus();
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      <Code className="w-4 h-4 text-black" />
                      <span>View 100+ Programs</span>
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* TAB 2: ROUNDS & STRUCTURE */}
            {activeTab === 'structure' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {event.competitionStructure.summary}
                </div>

                <div className="space-y-4">
                  {event.competitionStructure.rounds.map((round) => (
                    <div
                      key={round.name}
                      className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-white/30 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-white text-black">
                          {round.name}
                        </span>
                        <span className="text-xs font-mono text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
                          {round.structure}
                        </span>
                      </div>

                      <div className="text-sm font-semibold text-white mb-2">
                        Theme / Focus: <span className="text-neutral-300 font-normal">{round.theme}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 bg-black p-3 rounded-lg border border-neutral-800 mb-2">
                        <div>
                          <span className="text-neutral-500 font-medium">Scoring System:</span>{' '}
                          <span className="text-white">{round.scoring}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-medium">Advancement:</span>{' '}
                          <span className="text-white font-medium">{round.qualification}</span>
                        </div>
                      </div>

                      {round.details && (
                        <p className="text-xs text-neutral-400 italic">
                          ℹ️ {round.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 3: RULES & SAFE BROWSER */}
            {activeTab === 'rules' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Safe Browser Notice Banner */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-white/20 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-neutral-200">
                    <strong className="text-white block mb-0.5 font-mono">
                      Safe Browser Protocol Active:
                    </strong>
                    All rounds are executed in locked Safe Browser Mode. Switching tabs, opening secondary applications, or inspecting files will trigger instant test invalidation.
                  </div>
                </div>

                {/* Team Size Warning if Event 1 */}
                {event.isTeamEvent && (
                  <div className="p-4 rounded-xl bg-neutral-950 border border-white/40 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-neutral-200">
                      <strong className="text-white block mb-0.5">
                        Team Competition Mandatory:
                      </strong>
                      Quiz participation is strictly for a <strong>Team of 2 Members</strong> from the same college or university. Individual participants will not be admitted.
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                    General Competition Rules & Regulations
                  </h4>
                  <div className="space-y-2.5">
                    {event.rules.map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800"
                      >
                        <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center text-xs font-mono shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                          {rule}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: COORDINATORS */}
            {activeTab === 'coordinators' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Event-Specific Coordinators
                  </h4>
                  <span className="text-xs text-neutral-400 font-mono">
                    Direct Contact Directory
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.coordinators.map((coord) => (
                    <div
                      key={coord.name}
                      className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-3 group hover:border-white/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center font-display font-bold text-white">
                          {coord.name.charAt(0)}
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-white">
                            {coord.name}
                          </h5>
                          {coord.phone ? (
                            <span className="text-xs font-mono text-white">
                              +91 {coord.phone}
                            </span>
                          ) : (
                            <span className="text-xs font-mono text-neutral-500">
                              Phone TBA
                            </span>
                          )}
                        </div>
                      </div>

                      {coord.phone ? (
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleCopyPhone(coord.phone)}
                            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
                            title="Copy Phone Number"
                          >
                            {copiedPhone === coord.phone ? (
                              <Check className="w-4 h-4 text-white" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <a
                            href={`tel:${coord.phone}`}
                            className="p-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors flex items-center gap-1 text-xs font-mono font-bold"
                            title="Call Coordinator"
                          >
                            <PhoneCall className="w-4 h-4 text-black" />
                          </a>
                        </div>
                      ) : (
                        <span className="text-[11px] text-neutral-500 font-mono px-2 py-1 rounded bg-neutral-900 border border-neutral-800">
                          Unavailable
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-black border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-neutral-400 font-mono text-center sm:text-left">
              DEVVERSE 2026 • Karavali Institute of Technology, Mangalore
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-white/10 active:scale-[0.98]"
              >
                <span>REGISTER FOR THIS EVENT</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EventModal;
