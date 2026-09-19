import { Cpu, Terminal, Wrench, Sparkles } from 'lucide-react';

export default function About() {
  const specializationCards = [
    {
      id: 'spec-academic',
      icon: Cpu,
      eyebrow: 'ACADEMIC SPECIALIZATION',
      title: 'B.Tech in CSE with AI & ML',
      description:
        'Second-year undergraduate curriculum covering core programming, mathematics, and introductory artificial intelligence.',
    },
    {
      id: 'spec-focus',
      icon: Terminal,
      eyebrow: 'CORE FOCUS',
      title: 'Programming & Data Structures',
      description:
        'Strengthening programming fundamentals in C, C++, Python, and Java, alongside algorithmic problem solving.',
    },
    {
      id: 'spec-philosophy',
      icon: Wrench,
      eyebrow: 'LEARNING APPROACH',
      title: 'Hands-on Student Projects',
      description:
        'Applying classroom knowledge by building practical console applications, database exercises, and coursework code.',
    },
  ];

  const focusTags = [
    'Data Structures & Algorithms',
    'C / C++',
    'Python & Java',
    'SQL & Databases',
    'Git & GitHub',
  ];

  return (
    <section id="about" className="relative py-16 lg:py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            SECTION // 01
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            About Me
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/80 relative overflow-hidden">
            {/* Subtle top ambient glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 font-mono text-xs mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Computer Science &amp; Engineering Student</span>
              </div>

              {/* Sub-headline */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-5 leading-snug font-heading">
                Dedicated 2nd-year CSE student specializing in Artificial Intelligence and Machine Learning.
              </h3>

              {/* Exact Requested Content Paragraph */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                I&apos;m Madhav Aggarwal, a Computer Science and Engineering student interested in Artificial Intelligence and Machine Learning. I enjoy strengthening my programming fundamentals and applying what I learn through practical projects. My current learning journey includes programming, data structures, databases and software development.
              </p>
            </div>

            {/* Pill Tags Footer */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-2.5">
                {focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono font-medium hover:border-slate-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Specialization Detail Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {specializationCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  id={card.id}
                  className="p-5 sm:p-6 rounded-2xl glass-card glass-card-hover border border-slate-800/80 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-500/30 text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">
                      {card.eyebrow}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-heading">
                    {card.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
