import { useState } from 'react';
import { ArrowRight, Mail, GraduationCap, Calendar, Clock, Terminal, Play, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [evaluating, setEvaluating] = useState(false);
  const [evaluated, setEvaluated] = useState(true);

  const handleRunEvaluation = () => {
    setEvaluating(true);
    setTimeout(() => {
      setEvaluating(false);
      setEvaluated(true);
    }, 600);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-28 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio, Pitch & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pulsing Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-slate-300 uppercase">
                OPEN TO INTERNSHIP OPPORTUNITIES
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                PORTFOLIO // 2ND YEAR UNDERGRADUATE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-none font-heading">
              Madhav Aggarw<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">al</span>
            </h1>

            {/* Sub-badge Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-mono mb-5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-blue-200">CSE &amp; AI/ML Student</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-normal">SRMIST</span>
            </div>

            {/* Elevator Pitch Tagline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-sans font-normal">
              Building strong foundations in programming, problem solving and AI/ML.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                id="hero-view-projects-button"
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                id="hero-get-in-touch-button"
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Profile Focus Strip */}
            <div className="w-full pt-5 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="font-mono text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  PROFILE FOCUS:
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300 font-mono text-[11px]">
                  <GraduationCap className="w-3 h-3 text-blue-400" />
                  SRMIST • B.Tech CSE (AI/ML)
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  Batch 2025-2029
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300 font-mono text-[11px]">
                  <Clock className="w-3 h-3 text-indigo-400" />
                  2nd Year
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Code Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div 
              id="hero-terminal-card"
              className="relative rounded-2xl bg-[#090d16] border border-slate-800/90 shadow-2xl shadow-blue-950/40 overflow-hidden backdrop-blur-xl"
            >
              {/* Terminal Header Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d121d] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    madhav_kernel_profile.py
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold bg-blue-950/60 text-cyan-300 border border-cyan-500/30">
                  READY
                </span>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 select-text">
                <div>
                  <span className="text-purple-400 font-semibold">class</span>{' '}
                  <span className="text-yellow-300">Student</span>:
                </div>
                
                <div className="pl-4">
                  <span className="text-purple-400 font-semibold">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(
                  <span className="text-rose-300">self</span>):
                </div>

                <div className="pl-8 space-y-1">
                  <div>
                    <span className="text-rose-300">self</span>.name ={' '}
                    <span className="text-emerald-300">"Madhav Aggarwal"</span>
                  </div>
                  <div>
                    <span className="text-rose-300">self</span>.year ={' '}
                    <span className="text-amber-300">2</span>
                  </div>
                  <div>
                    <span className="text-rose-300">self</span>.dept ={' '}
                    <span className="text-emerald-300">"CSE (AI &amp; ML)"</span>
                  </div>
                  <div>
                    <span className="text-rose-300">self</span>.skills = [
                  </div>
                  <div className="pl-4 text-emerald-300 space-y-0.5">
                    <div>"C / C++",</div>
                    <div>"Python / Java / SQL",</div>
                    <div>"Data Structures &amp; Algorithms",</div>
                    <div>"Git &amp; GitHub"</div>
                  </div>
                  <div>]</div>
                </div>

                <div className="pl-4 mt-3">
                  <span className="text-purple-400 font-semibold">def</span>{' '}
                  <span className="text-blue-400">current_objective</span>(
                  <span className="text-rose-300">self</span>):
                </div>
                <div className="pl-8">
                  <span className="text-purple-400 font-semibold">return</span>{' '}
                  <span className="text-emerald-300">
                    "Internships • Academic Projects • Skill Building"
                  </span>
                </div>
              </div>

              {/* Terminal Execution Bottom Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c101b] border-t border-slate-800/80">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span className="text-slate-300">profile.evaluate()</span>
                </div>

                <button
                  type="button"
                  onClick={handleRunEvaluation}
                  disabled={evaluating}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-all duration-200 ${
                    evaluated
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60'
                      : 'bg-blue-950/60 border border-blue-500/40 text-blue-300'
                  }`}
                  title="Run interactive evaluation"
                >
                  {evaluating ? (
                    <span className="animate-pulse text-amber-300">RUNNING...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>PASS 100%</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
