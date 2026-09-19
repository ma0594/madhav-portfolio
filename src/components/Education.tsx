import {
  GraduationCap,
  Calendar,
  Clock,
  Building2,
  Binary,
  Layers,
  Sigma,
  Sparkles,
  Database,
  Cpu,
} from 'lucide-react';

export default function Education() {
  const coursework = [
    {
      title: 'Data Structures & Algorithms',
      description: 'Arrays, linked lists, stacks, queues, trees & complexity',
      icon: Binary,
      color: 'text-blue-400',
    },
    {
      title: 'Object-Oriented Programming',
      description: 'Classes, inheritance, polymorphism in C++ & Java',
      icon: Layers,
      color: 'text-cyan-400',
    },
    {
      title: 'Discrete Mathematics',
      description: 'Mathematical logic, sets, relations & combinatorics',
      icon: Sigma,
      color: 'text-indigo-400',
    },
    {
      title: 'Introductory AI & ML',
      description: 'Search algorithms, problem solving & foundational concepts',
      icon: Sparkles,
      color: 'text-purple-400',
    },
    {
      title: 'Database Management Systems',
      description: 'Relational model, SQL queries, joins & table schemas',
      icon: Database,
      color: 'text-sky-400',
    },
    {
      title: 'Computer Organization',
      description: 'Digital logic, basic computer architecture & memory',
      icon: Cpu,
      color: 'text-teal-400',
    },
  ];

  return (
    <section id="education" className="relative py-16 lg:py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            SECTION // 04
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Education
          </h2>
        </div>

        {/* Education Highlight Card */}
        <div
          id="education-card-srmist"
          className="relative rounded-2xl glass-card border border-slate-800/80 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden"
        >
          {/* Top Metadata Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                UNDERGRADUATE DEGREE
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[11px]">
                FULL-TIME • 4-YEAR
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                Expected Graduation: 2029
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[11px]">
                <Clock className="w-3 h-3 text-slate-400" />
                Current Status: 2nd Year Undergraduate
              </span>
            </div>
          </div>

          {/* Degree Title & Institution */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight font-heading">
              B.Tech — Computer Science &amp; Engineering / AI &amp; ML
            </h3>
            
            <div className="flex items-center gap-2 text-sm sm:text-base text-slate-300">
              <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="font-semibold text-slate-200">
                SRM Institute of Science and Technology
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs sm:text-sm font-mono text-slate-400">
                MAIN CAMPUS
              </span>
            </div>
          </div>

          {/* Coursework Sub-Header */}
          <div className="pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>CORE ACADEMIC COURSEWORK &amp; COMPETENCIES</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest hidden sm:inline">
                SYLLABUS FOCUS
              </span>
            </div>

            {/* 6 Coursework Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {coursework.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#090d16]/90 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
