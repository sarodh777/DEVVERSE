import React from 'react';
import { Terminal, Shield, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-black border-t border-neutral-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-[1px] shadow-lg shadow-white/10">
                <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-wider text-white">
                  DEVVERSE <span className="underline decoration-white/40">2026</span>
                </span>
                <p className="text-[11px] text-neutral-400 font-mono">
                  Think. Compete. Create. Conquer.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-light">
              Official inter-collegiate technical festival organized by the{' '}
              <strong className="text-white font-medium">Department of Computer Science & Engineering</strong>,{' '}
              <strong className="text-white font-medium">Karavali Institute of Technology, Mangalore</strong>.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 font-mono">
              <Shield className="w-3.5 h-3.5 text-white" />
              <span>Safe Browser Online Examination Framework</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Quick Jumps
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About DEVVERSE & Dept. of CSE
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Signature Events & Rounds
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Chronological Event Schedule
                </a>
              </li>
              <li>
                <a href="#rules" className="hover:text-white transition-colors">
                  Rules & Safe Browser Regulations
                </a>
              </li>
              <li>
                <a href="#coordinators" className="hover:text-white transition-colors">
                  Meet Your Event Coordinators
                </a>
              </li>
              <li>
                <a href="#room-coordinators" className="hover:text-white transition-colors">
                  Room Coordinators Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Department Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Department Desk
            </h4>
            <div className="text-xs text-neutral-400 space-y-1.5 leading-relaxed font-light">
              <p className="text-white font-medium">
                Dept. of Computer Science & Engineering
              </p>
              <p>Karavali Institute of Technology</p>
              <p>Neermarga, Mangalore - 575029</p>
              <p>Karnataka, India</p>
              <p className="pt-2 font-mono text-white text-[11px]">
                Academic Session: 2026
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>
            © 2026 DEVVERSE • Department of Computer Science & Engineering, KIT Mangalore.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-white hover:text-black text-neutral-300 border border-neutral-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
