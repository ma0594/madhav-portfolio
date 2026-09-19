import { useState } from 'react';
import {
  Code,
  CheckCircle2,
  FileText,
  ExternalLink,
  Wrench,
  ChevronRight,
  Terminal,
  Play,
  RotateCcw,
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'code' | 'architecture'>('code');

  // Interactive booking simulation state
  const [simSeat, setSimSeat] = useState(14);
  const [simFlight] = useState('FL-8924');
  const [simStatus, setSimStatus] = useState('STATUS: OK // SEAT 14A BOOKED // PNR: FL-8924');
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateBooking = () => {
    setIsSimulating(true);
    const nextSeatNum = Math.floor(Math.random() * 45) + 1;
    const seatLetter = ['A', 'B', 'C', 'D', 'E', 'F'][Math.floor(Math.random() * 6)];
    const pnrNumber = Math.floor(Math.random() * 8000) + 1000;
    
    setTimeout(() => {
      setSimSeat(nextSeatNum);
      setSimStatus(`STATUS: OK // SEAT ${nextSeatNum}${seatLetter} BOOKED // PNR: FL-${pnrNumber}`);
      setIsSimulating(false);
    }, 450);
  };

  const openCodeModal = () => {
    setModalTab('code');
    setModalOpen(true);
  };

  const openArchModal = () => {
    setModalTab('architecture');
    setModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-16 lg:py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            SECTION // 03
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Featured Projects
          </h2>
        </div>

        {/* Featured Project Big Card */}
        <div
          id="featured-project-flight-system"
          className="relative rounded-2xl glass-card border border-slate-800/80 overflow-hidden p-6 sm:p-8 lg:p-10 shadow-2xl mb-8"
        >
          {/* Subtle Corner Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Project Overview & Specs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Tech & Status Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold">
                    <Code className="w-3.5 h-3.5 text-blue-400" />
                    C Programming
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                    CLI • Memory &amp; Structs
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Build
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight font-heading">
                  Flight Booking System
                </h3>

                {/* Exact Requested Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  A C-based flight booking system created to practise programming fundamentals, structured data handling, user input and menu-driven operations.
                </p>

                {/* Key Architecture & Highlights */}
                <div className="mb-8">
                  <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                    KEY IMPLEMENTATION HIGHLIGHTS
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      'Interactive CLI menu loop with input validation',
                      'Custom struct definitions for passenger records & flight manifests',
                      'Structured flight search with array & pointer traversal',
                      'Deterministic booking reference (PNR) generation & seat allocation',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 font-sans leading-normal">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                <button
                  id="btn-view-source-code"
                  type="button"
                  onClick={openCodeModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold font-mono text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20"
                >
                  <Code className="w-4 h-4" />
                  <span>View Source Code</span>
                </button>

                <button
                  id="btn-architecture-notes"
                  type="button"
                  onClick={openArchModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold font-mono text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>Architecture Notes</span>
                </button>
              </div>
            </div>

            {/* Right Column: Modular C Architecture Visualization */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#080c14] border border-slate-800 rounded-xl p-5 sm:p-6 shadow-inner">
              
              {/* Architecture Blueprint Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <span className="font-mono text-xs font-semibold text-slate-300">
                  flight_booking_system.c
                </span>
                <span className="font-mono text-[10px] uppercase font-semibold text-blue-400 tracking-wider">
                  MODULAR C ARCHITECTURE
                </span>
              </div>

              {/* Flowchart Modules */}
              <div className="space-y-3 relative">
                
                {/* Module 1 */}
                <div className="p-3.5 rounded-lg bg-[#0e1320] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-start gap-2.5">
                    <Terminal className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-mono text-xs font-bold text-white">
                        cli_menu_handler()
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Menu dispatch, stdin flushing &amp; boundary checks
                      </div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 font-mono text-[10px] font-bold border border-blue-800/50">
                    MODULE 1
                  </span>
                </div>

                {/* Visual Connector Line */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-3 bg-slate-700" />
                </div>

                {/* Module 2 */}
                <div className="p-3.5 rounded-lg bg-[#0e1320] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-start gap-2.5">
                    <Code className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-mono text-xs font-bold text-white">
                        booking_engine.c
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Flight queries, seat matrix allocation &amp; PNR hash
                      </div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-800/50">
                    MODULE 2
                  </span>
                </div>

                {/* Visual Connector Line */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-3 bg-slate-700" />
                </div>

                {/* Module 3 */}
                <div className="p-3.5 rounded-lg bg-[#0e1320] border border-slate-800 flex items-center justify-between">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-xs font-bold text-indigo-400">{'{}'}</span>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">
                        struct PassengerRecord
                      </div>
                      <div className="text-[11px] text-slate-400">
                        flight_core.h header: memory layout &amp; data models
                      </div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px] font-bold border border-indigo-800/50">
                    MODULE 3
                  </span>
                </div>
              </div>

              {/* Terminal Simulator Footer Box */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <div className="p-3 rounded-lg bg-[#05070c] border border-slate-850 font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="text-cyan-400 font-bold">&gt;</span>
                      <span>./flight_system --init</span>
                    </div>
                    <button
                      type="button"
                      onClick={simulateBooking}
                      disabled={isSimulating}
                      className="inline-flex items-center gap-1 text-[10px] text-blue-400 hover:text-cyan-300 focus:outline-none transition-colors"
                      title="Run quick CLI allocation simulation"
                    >
                      <RotateCcw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                      <span>{isSimulating ? 'Allocating...' : 'Simulate'}</span>
                    </button>
                  </div>
                  <div className="text-emerald-400 font-medium">
                    {simStatus}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* GitHub Repository Development Banner */}
        <div className="p-5 sm:p-6 rounded-2xl glass-card border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-400 flex-shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                Coursework &amp; Practice on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Practical coding exercises, Data Structures assignments, and academic project repositories.
              </p>
            </div>
          </div>

          <a
            id="explore-repos-button"
            href="https://github.com/ma0594"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-lg transition-colors flex-shrink-0"
          >
            <span>Explore Repositories</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>

      {/* Modal Dialog for Code & Architecture */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
    </section>
  );
}
