import {
  Cpu,
  Code2,
  Boxes,
  Server,
  Database,
  GitFork,
  GitBranch,
  Github,
} from 'lucide-react';

interface Skill {
  id: string;
  badgeText: string;
  badgeCategory: string;
  title: string;
  description: string;
  highlight: string;
  icon: typeof Cpu;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      id: 'skill-c',
      badgeText: 'C',
      badgeCategory: 'LANGUAGE',
      title: 'C',
      description:
        'Procedural programming fundamentals, pointer operations, dynamic memory allocation, structs, and console-based applications.',
      highlight: 'Pointers & Structs',
      icon: Cpu,
    },
    {
      id: 'skill-cpp',
      badgeText: 'C++',
      badgeCategory: 'LANGUAGE',
      title: 'C++',
      description:
        'Object-oriented programming concepts, classes, inheritance, encapsulation, and standard library (STL) basics.',
      highlight: 'OOP & Standard Library',
      icon: Code2,
    },
    {
      id: 'skill-python',
      badgeText: 'Py',
      badgeCategory: 'LANGUAGE',
      title: 'Python',
      description:
        'Core Python syntax, scripting, practical problem solving, data handling, and introductory machine learning concepts.',
      highlight: 'Scripting & Basics',
      icon: Boxes,
    },
    {
      id: 'skill-java',
      badgeText: '☕',
      badgeCategory: 'LANGUAGE',
      title: 'Java',
      description:
        'Object-oriented programming concepts, classes, method overriding, exception handling, and modular code design.',
      highlight: 'Classes & OOP',
      icon: Server,
    },
    {
      id: 'skill-sql',
      badgeText: 'SQL',
      badgeCategory: 'DATABASE',
      title: 'SQL',
      description:
        'Relational database concepts, querying with SELECT, joins, filtering, data manipulation, and table creation.',
      highlight: 'Queries & Relational Tables',
      icon: Database,
    },
    {
      id: 'skill-dsa',
      badgeText: 'DSA',
      badgeCategory: 'CORE CS',
      title: 'Data Structures & Algorithms',
      description:
        'Linear and non-linear data structures (arrays, linked lists, stacks, queues, trees), searching, sorting, and complexity analysis.',
      highlight: 'Structures & Complexity',
      icon: GitFork,
    },
    {
      id: 'skill-git',
      badgeText: 'GIT',
      badgeCategory: 'TOOL',
      title: 'Git',
      description:
        'Local version control, repository initialization, stage/commit workflows, branching, and commit history tracking.',
      highlight: 'Branching & Commits',
      icon: GitBranch,
    },
    {
      id: 'skill-github',
      badgeText: 'HUB',
      badgeCategory: 'PLATFORM',
      title: 'GitHub',
      description:
        'Remote repository hosting, pushing code, managing project documentation, and student collaboration.',
      highlight: 'Repositories & Sharing',
      icon: Github,
    },
  ];

  return (
    <section id="skills" className="relative py-16 lg:py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              SECTION // 02
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Technical Skills
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
            Programming languages, core data structures, and foundational tools practiced through academic coursework and practical projects.
          </p>
        </div>

        {/* 8-Card Grid (4 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                id={skill.id}
                className="group p-5 rounded-2xl glass-card glass-card-hover border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-400 font-mono text-xs font-bold">
                      {skill.badgeText}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-blue-950/40 text-cyan-300 border border-cyan-500/20">
                      {skill.badgeCategory}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-blue-300 transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                {/* Footer Meta Row */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="truncate pr-2">{skill.highlight}</span>
                  <Icon className="w-3.5 h-3.5 text-blue-400/80 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
