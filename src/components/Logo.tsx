interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = 36, className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-[#0e1424] border border-[#232f48] shadow-md shadow-blue-500/10 overflow-hidden flex-shrink-0 transition-transform duration-200 hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Subtle inner radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-500/10" />
        
        {/* Stylized M mark matching Image 1/2 */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-4/5 h-4/5 relative z-10"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoBlueGradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#3b82f6" floodOpacity="0.4" />
            </filter>
          </defs>
          <path
            d="M26 74 V30 L50 54 L74 30 V74"
            stroke="url(#logoBlueGradient)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          <circle cx="50" cy="54" r="5" fill="#93c5fd" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight font-heading">
            Madhav Aggarwal
          </span>
          <span className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-wider uppercase">
            CSE • AI/ML
          </span>
        </div>
      )}
    </div>
  );
}
