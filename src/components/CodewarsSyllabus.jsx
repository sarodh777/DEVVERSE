import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  Terminal,
  Check,
  Copy
} from 'lucide-react';
import { C_PROGRAMS_SYLLABUS } from '../data/cProgramsData';

const CodewarsSyllabus = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const allPrograms = useMemo(() => {
    const list = [];
    C_PROGRAMS_SYLLABUS.forEach((cat) => {
      cat.programs.forEach((prog, idx) => {
        list.push({
          id: `${cat.category}-${idx}`,
          title: prog,
          category: cat.category,
          categoryIndex: idx + 1
        });
      });
    });
    return list;
  }, []);

  const filteredPrograms = useMemo(() => {
    return allPrograms.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        searchTerm === '' ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allPrograms, selectedCategory, searchTerm]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  if (!isOpen) return null;

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

        {/* Modal Window - Pure Monochrome */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-black border border-white/30 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh] z-10"
        >
          {/* Header */}
          <div className="p-6 sm:p-7 bg-neutral-950 border-b border-neutral-800 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
              aria-label="Close Catalog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-white text-black">
                EVENT 02 SYLLABUS
              </span>
              <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-neutral-900 text-white border border-neutral-700">
                CODEWARS:-I
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              100+ C Programs Matrix Explorer
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl font-light">
              Official reference catalog of all 178 algorithmic challenges spanning fundamental syntax,
              pointers, recursion, multi-dimensional matrices, and number theory for Codewars:-I.
            </p>

            {/* Search & Category Filter */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-7 relative">
                <Search className="w-4 h-4 text-white absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search programs (e.g. pointer, fibonacci, matrix, prime)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black border border-neutral-700 focus:border-white focus:outline-none text-xs sm:text-sm text-white placeholder:text-neutral-500 font-mono"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="sm:col-span-5 flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-neutral-400">
                <span>Total Matches:</span>
                <span className="px-3 py-1 rounded-lg bg-neutral-900 text-white border border-neutral-700 font-bold">
                  {filteredPrograms.length} / {allPrograms.length}
                </span>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-4 mt-2 border-t border-neutral-800">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-white text-black font-bold'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                All Domains
              </button>
              {C_PROGRAMS_SYLLABUS.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
                    selectedCategory === cat.category
                      ? 'bg-white text-black font-bold'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {cat.category} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Program Items List */}
          <div className="p-6 sm:p-7 overflow-y-auto flex-1 space-y-2.5">
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-12">
                <Terminal className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
                <p className="text-neutral-400 font-mono text-sm">
                  No programs found matching "{searchTerm}"
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="mt-3 text-xs font-mono text-white underline"
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {filteredPrograms.map((p, i) => (
                  <div
                    key={p.id}
                    className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/90 hover:border-white/40 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-black border border-neutral-800 flex items-center justify-center text-[10px] font-mono text-white shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-neutral-200 group-hover:text-white transition-colors leading-snug">
                          {p.title}
                        </h4>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(p.title, p.id)}
                      className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors shrink-0 border border-neutral-800"
                      title="Copy program name"
                    >
                      {copiedIndex === p.id ? (
                        <Check className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-black border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span>Codewars:-I Evaluation Engine</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white text-black font-bold uppercase tracking-wider text-[11px] hover:bg-neutral-200"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CodewarsSyllabus;
