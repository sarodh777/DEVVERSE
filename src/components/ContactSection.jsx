import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  MapPin,
  ShieldCheck,
  Building,
  Check,
  Copy,
  PhoneCall
} from 'lucide-react';

const KEY_HOTLINES = [
  { name: 'Deepak', role: 'Chief Room Coordinator', phone: '6364042962' },
  { name: 'Sudarshan', role: 'Senior Room Coordinator', phone: '7795108992' },
  { name: 'Aparna', role: 'Lead Quiz Coordinator (Event 01)', phone: '9019761447' },
  { name: 'Samskruta', role: 'Platform Coordinator (Event 02)', phone: '7619327387' },
  { name: 'Sharadhi', role: 'Lead Aptitude Coordinator (Event 03)', phone: '8217651859' },
  { name: 'Riha', role: 'Student Coordinator (Event 04)', phone: '8197037110' }
];

const ContactSection = () => {
  const [copiedPhone, setCopiedPhone] = useState(null);

  const handleCopy = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 1800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>Support & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
            Contact & <span className="underline decoration-white/40 underline-offset-8">Help Desk</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Need technical assistance regarding Safe Browser installation, mock rounds, or schedule verification?
            Contact our dedicated event and room coordinator helplines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Department & Venue Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/15 bg-neutral-950">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Organizing Institution
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1 mb-2">
                Karavali Institute of Technology
              </h3>
              <p className="text-sm text-neutral-300 font-medium mb-4">
                Department of Computer Science & Engineering
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300 pt-4 border-t border-neutral-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Campus Location</strong>
                    <span className="text-neutral-400">
                      Karavali Institute of Technology, Neermarga, Mangalore, Karnataka, India - 575029
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Academic Affiliation</strong>
                    <span className="text-neutral-400">
                      Approved by AICTE New Delhi, Affiliated to VTU Belagavi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Collaboration</strong>
                    <span className="text-neutral-400">
                      In collaboration with Institution’s Innovation Council (IIC), KIT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice Box */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-white/20 text-xs text-neutral-300 leading-relaxed font-light">
              <strong className="text-white font-mono block mb-1 uppercase font-semibold">
                Official Information Notice
              </strong>
              This website serves strictly as the official event showcase and information portal for DEVVERSE 2026.
              All exam access links and candidate credentials will be dispatched directly to verified college emails.
            </div>
          </div>

          {/* Right Column: Priority Coordinator Hotlines */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-950">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-white">
                    Priority Help Desk Contacts
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Direct coordinator lines for immediate assistance
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-white text-black font-bold">
                  Active Support
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {KEY_HOTLINES.map((h) => (
                  <div
                    key={h.name}
                    className="p-4 rounded-xl bg-black border border-neutral-800 flex items-center justify-between gap-3 group hover:border-white/30 transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-neutral-200 transition-colors">
                        {h.name}
                      </h4>
                      <span className="text-[11px] text-neutral-400 block line-clamp-1" title={h.role}>
                        {h.role}
                      </span>
                      <span className="text-xs font-mono font-bold text-white mt-1 block">
                        +91 {h.phone}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopy(h.phone)}
                        className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
                        title="Copy Number"
                      >
                        {copiedPhone === h.phone ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <a
                        href={`tel:${h.phone}`}
                        className="p-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
                        title={`Call ${h.name}`}
                      >
                        <PhoneCall className="w-4 h-4 text-black" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
