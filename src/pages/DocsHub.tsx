import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Zap,
  Target,
  Flame,
  ShieldAlert,
  ArrowLeft,
  BookOpen,
  LayoutGrid,
  Sparkles
} from 'lucide-react';
import { Footer as SharedFooter } from '../components/Footer';

const GuideCard = ({ title, description, icon: Icon, href, tag, color }: { title: string, description: string, icon: any, href: string, tag: string, color: string }) => (
  <motion.div
    whileHover={{ y: -8 }}
    onClick={() => window.location.href = href}
    className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 cursor-pointer transition-all hover:bg-white/[0.04] hover:border-white/10 overflow-hidden shadow-2xl"
  >
    <div className={`absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-10 transition-opacity blur-3xl rounded-full`} style={{ backgroundColor: color }} />

    <div className="space-y-8 relative z-10">
      <div className="flex items-center justify-between">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-brand group-hover:scale-110 transition-transform">
          <Icon size={28} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
          {tag}
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none text-white">
          {title}
        </h3>
        <p className="font-sans text-base md:text-lg opacity-40 font-light leading-relaxed group-hover:opacity-60 transition-opacity">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-brand pt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
        Launch Guide <ArrowRight size={14} />
      </div>
    </div>
  </motion.div>
);

export const DocsHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-brand selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-6 md:py-8 px-6 lg:px-12 flex justify-between items-center">
        <div
          className="flex items-center gap-1.5 cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          <img src="/logo.webp" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" alt="Clipnic Logo" />
          <span className="font-display text-lg md:text-2xl tracking-widest uppercase">CLIPNIC.COM</span>
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="group flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Feed
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-48 pb-32">
        <header className="max-w-4xl mb-16 md:mb-32 space-y-6 md:space-y-8 text-center lg:text-left">

          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase text-white">
            Guide<br /> <span className="text-brand"></span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light leading-relaxed text-balance">
            Here is your complete guide to becoming a successful clipper.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <GuideCard
            title="How to Earn"
            description="The fundamental guide to joining campaigns and getting your first payout."
            icon={Zap}
            href="/docs/get-started"
            tag="Essentials"
            color="#05D588"
          />
          <GuideCard
            title="Avoid 0 Views"
            description="How to properly warm up your account and bypass social shadowbans."
            icon={ShieldAlert}
            href="/docs/avoid-0-views"
            tag="Shadowban Safety"
            color="#ef4444"
          />
          <GuideCard
            title="Tier 1 Targeting"
            description="Specialized setup to reach high-value USA and European audiences for max earnings."
            icon={Target}
            href="/docs/how-to-target-tier1-audience"
            tag="Advanced Strategy"
            color="#3b82f6"
          />
        </div>

        {/* Footer Support Bridge */}
        <section className="mt-24 md:mt-40 text-center">
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-white/[0.01] border border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <Sparkles className="mx-auto text-brand" size={40} />
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none">Need more help?</h2>
              <p className="font-sans text-lg opacity-40 font-light leading-relaxed">
                Join our Discord community to connect with fellow clippers, share tips, and get direct support from the Clipnic team.
              </p>
              <button
                onClick={() => window.open('https://discord.gg/pW6RJs8Ctp', '_blank')}
                className="px-12 py-5 bg-brand text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-xl"
              >
                Join Our Discord
              </button>
            </div>
          </div>
        </section>

      </main>

      <SharedFooter />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        
        .font-display { font-family: 'Anton', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        :root {
          --color-brand: #05D588;
          --color-brand-rgb: 5, 213, 136;
        }

        .bg-brand { background-color: var(--color-brand); }
        .text-brand { color: var(--color-brand); }
      `}</style>
    </div>
  );
};
