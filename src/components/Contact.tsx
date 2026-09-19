import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'madhavaggarwal9870876270@gmail.com';
  const githubUrl = 'https://github.com/ma0594';
  const linkedinUrl = 'https://www.linkedin.com/in/madhav-aggarwal-151304388/';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            SECTION // 05
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Get in Touch
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Let's Build Together & Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/80">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">
                Let&apos;s Build Together
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Whether you are a recruiter, internship coordinator, professor, or fellow student, I would love to connect and discuss opportunities or collaborations.
              </p>

              {/* Action Contact Cards */}
              <div className="space-y-3.5">
                
                {/* Email Direct */}
                <div className="relative group p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between">
                  <a
                    id="contact-link-email"
                    href={`mailto:${directEmail}`}
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:text-cyan-300 transition-colors flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="font-mono text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        EMAIL DIRECT
                      </div>
                      <div className="text-xs sm:text-sm text-slate-200 font-medium truncate group-hover:text-blue-300 transition-colors">
                        {directEmail}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-1.5 ml-2">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={`mailto:${directEmail}`}
                      className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Code Repository (GitHub) */}
                <a
                  id="contact-link-github"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5 truncate">
                    <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-700 text-slate-300 group-hover:text-white transition-colors flex-shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="font-mono text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        CODE REPOSITORY
                      </div>
                      <div className="text-xs sm:text-sm text-slate-200 font-medium truncate group-hover:text-blue-300 transition-colors">
                        github.com/ma0594
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-2" />
                </a>

                {/* Professional Network (LinkedIn) */}
                <a
                  id="contact-link-linkedin"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5 truncate">
                    <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:text-cyan-300 transition-colors flex-shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="font-mono text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        PROFESSIONAL NETWORK
                      </div>
                      <div className="text-xs sm:text-sm text-slate-200 font-medium truncate group-hover:text-blue-300 transition-colors">
                        linkedin.com/in/madhav-aggarwal-151304388
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-2" />
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/80">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 font-heading">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Inquiries, opportunities, and technical collaborations.
              </p>
            </div>

            {isSubmitted ? (
              <div
                id="contact-form-success"
                className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald-900/40 text-emerald-400 mb-1">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white font-heading">
                  Message Prepared Successfully
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! You can also email Madhav directly at{' '}
                  <a href={`mailto:${directEmail}`} className="text-cyan-400 underline underline-offset-2">
                    {directEmail}
                  </a>.
                </p>
              </div>
            ) : (
              <form id="contact-direct-form" onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Jane Doe / Recruiter Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase tracking-wider"
                  >
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane.doe@organization.org"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Madhav, we would like to connect regarding an internship opportunity..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider font-mono text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/25 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
