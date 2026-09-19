import { Code2, Share2, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative border-t border-slate-800/80 bg-[#070a12] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a href="#" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
              <Logo size={32} showText={false} />
            </a>
            <div>
              <div className="text-sm font-bold text-white font-heading">
                Madhav Aggarwal
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                © 2026 Madhav Aggarwal. All rights reserved.
              </div>
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex items-center flex-wrap justify-center gap-5 text-xs font-mono text-slate-400">
            <a
              id="footer-code-link"
              href="https://github.com/ma0594"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>

            <a
              id="footer-network-link"
              href="https://www.linkedin.com/in/madhav-aggarwal-151304388/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Network</span>
            </a>

            <a
              id="footer-email-link"
              href="mailto:madhavaggarwal9870876270@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              id="footer-scroll-top"
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
