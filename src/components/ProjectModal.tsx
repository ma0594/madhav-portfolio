import { useState } from 'react';
import { X, Copy, Check, FileCode, Layers, Terminal } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'code' | 'architecture';
}

export default function ProjectModal({ isOpen, onClose, initialTab = 'code' }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'code' | 'architecture'>(initialTab);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const cCodeSnippet = `/**
 * Flight Booking System
 * Technology: Pure C (C99 Standard)
 * Author: Madhav Aggarwal (SRMIST)
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_FLIGHTS 10
#define MAX_SEATS 60
#define PNR_LEN 8

typedef struct {
    char pnr[PNR_LEN];
    char passenger_name[50];
    int seat_number;
    int is_confirmed;
} Passenger;

typedef struct {
    char flight_id[8];
    char origin[32];
    char destination[32];
    int total_seats;
    int booked_seats;
    Passenger manifest[MAX_SEATS];
} Flight;

// Core engine routines
void initialize_manifest(Flight *flight, const char *id, const char *orig, const char *dest) {
    strncpy(flight->flight_id, id, sizeof(flight->flight_id) - 1);
    strncpy(flight->origin, orig, sizeof(flight->origin) - 1);
    strncpy(flight->destination, dest, sizeof(flight->destination) - 1);
    flight->total_seats = MAX_SEATS;
    flight->booked_seats = 0;
}

int book_seat(Flight *flight, const char *name, int requested_seat, char *generated_pnr) {
    if (requested_seat < 1 || requested_seat > MAX_SEATS) return -1;
    if (flight->manifest[requested_seat - 1].is_confirmed) return 0; // Seat taken

    Passenger *p = &flight->manifest[requested_seat - 1];
    p->seat_number = requested_seat;
    p->is_confirmed = 1;
    strncpy(p->passenger_name, name, sizeof(p->passenger_name) - 1);

    // Deterministic PNR generation
    snprintf(generated_pnr, PNR_LEN, "FL-%04d", 1000 + (requested_seat * 79) % 8999);
    strncpy(p->pnr, generated_pnr, PNR_LEN);

    flight->booked_seats++;
    return 1; // Success
}

int main(void) {
    Flight fl01;
    initialize_manifest(&fl01, "AI-402", "DEL", "MAA");
    
    char pnr[PNR_LEN];
    if (book_seat(&fl01, "Madhav Aggarwal", 14, pnr)) {
        printf("STATUS: OK // SEAT 14 BOOKED // PNR: %s\\n", pnr);
    }
    return 0;
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c101b] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0f1422]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Flight Booking System — Technical Specs
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                C99 Standard • Modular CLI &amp; Struct Architecture
              </p>
            </div>
          </div>

          <button
            id="modal-close-button"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-slate-800/80 bg-[#090d16]">
          <button
            id="tab-code-button"
            type="button"
            onClick={() => setActiveTab('code')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
              activeTab === 'code'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>C Source Snippet</span>
          </button>

          <button
            id="tab-architecture-button"
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
              activeTab === 'architecture'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture Breakdown</span>
          </button>

          {activeTab === 'code' && (
            <button
              id="copy-c-code-button"
              type="button"
              onClick={handleCopy}
              className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto max-h-[65vh]">
          {activeTab === 'code' ? (
            <pre className="p-4 rounded-xl bg-[#06080e] border border-slate-800/90 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto select-text">
              <code>{cCodeSnippet}</code>
            </pre>
          ) : (
            <div className="space-y-5 text-sm text-slate-300 font-sans">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-white font-bold mb-1.5 font-heading text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  1. Structured Data Modeling
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Utilizes structured composite types (<code className="font-mono text-cyan-300 text-xs">struct Passenger</code> and <code className="font-mono text-cyan-300 text-xs">struct Flight</code>) with fixed array bounds to model passenger details, flight numbers, and seat inventories cleanly in memory.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-white font-bold mb-1.5 font-heading text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  2. User Input &amp; Menu Handling
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Interactive CLI menu structure utilizing formatted input reading and buffer clearing routines to handle user selections, seat numbers, and passenger names cleanly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-white font-bold mb-1.5 font-heading text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  3. Record Traversal &amp; Booking Reference
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Sequential record traversal using arrays and pointer references to check seat availability, update reservation status, and generate formatted booking reference numbers (PNRs).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-[#0a0e17] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            SRM Institute of Science and Technology • Academic Project
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
