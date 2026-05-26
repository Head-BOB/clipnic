import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Gift, ArrowLeft, Users, Sparkles, Trophy } from 'lucide-react';
import { Footer as SharedFooter } from '../components/Footer';

export const ReferralsGuideDocs = () => {
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
          onClick={() => window.location.href = '/docs'}
          className="group flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Docs
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-48 pb-32">
        <header className="max-w-4xl mb-16 md:mb-32 space-y-6 md:space-y-8 text-center lg:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">Earn by referring friends</span>
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase text-white">
            Referral<br /> <span className="text-brand">Program</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light leading-relaxed text-balance">
            Learn how our performance referral system rewards you for building your clipping network.
          </p>
        </header>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">Step 01</span>
            <h3 className="font-display text-2xl uppercase text-white">Share Invitation Code</h3>
            <p className="font-sans text-base opacity-40 font-light leading-relaxed">
              Every registered Clipper receives a unique referral code. Go to the <a href="https://dash.clipnic.com/referrals" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-white transition-colors">Referrals page on your Dashboard</a> to grab your code, and invite your creative friends to sign up to Clipnic using it to link your referral chain.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">Step 02</span>
            <h3 className="font-display text-2xl uppercase text-white">Join Referral Campaigns</h3>
            <p className="font-sans text-base opacity-40 font-light leading-relaxed">
              Your referred friends submit clips and edit content under campaigns that explicitly support referrals (marked by the green <span className="text-brand">Referral Emblem</span>).
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">Step 03</span>
            <h3 className="font-display text-2xl uppercase text-white">Generate platform Yield</h3>
            <p className="font-sans text-base opacity-40 font-light leading-relaxed">
              Once your referred friend generates <strong className="text-white font-semibold">$5.00 in platform revenue</strong> (for example: accumulating qualified views on campaigns that fund platform-retained revenue), the reward condition is met!
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">Step 04</span>
            <h3 className="font-display text-2xl uppercase text-white">Claim $5.00 cash rewards</h3>
            <p className="font-sans text-base opacity-40 font-light leading-relaxed">
              The moment the $5 milestone is cleared, a <strong className="text-white font-semibold">$5.00 cash bonus</strong> is automatically deposited straight into your pending clipper balance and included in your next payout!
            </p>
          </div>
        </div>

        {/* Visual Mockup Section */}
        <section className="mt-20 md:mt-32 p-8 md:p-16 rounded-[3rem] bg-[#0c0c0c] border border-white/[0.06] space-y-8 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <Users className="mx-auto text-brand" size={32} />
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none text-white">Referral Accepted Campaigns</h2>
            <p className="font-sans text-base opacity-45 font-light leading-relaxed text-balance">
              When browsing clipping campaigns, always check for the emerald **REFERRAL** emblem on the campaign card. Only views generated on these campaigns will progress toward the $5 milestone:
            </p>
          </div>

          {/* Campaign Card Mockup */}
          <div className="w-full max-w-xs mx-auto rounded-3xl border border-brand/20 bg-black/60 shadow-2xl relative overflow-hidden mt-8">
            <div className="h-20 w-full bg-gradient-to-tr from-brand/10 via-black to-black relative">
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                <div className="px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-[7px] font-mono tracking-widest uppercase font-bold text-brand flex items-center gap-1 shadow-[0_0_10px_rgba(5,213,136,0.2)]">
                  <Users size={8} /> REFERRAL
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <h4 className="font-display text-lg uppercase text-white leading-none">Example Campaign</h4>
              <p className="font-sans text-[10px] opacity-40 leading-relaxed font-light">Look for the emerald REFERRAL tag on campaign tiles.</p>
              <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-white/50">
                <span>CPM: $1.00</span>
                <span>YT / IG / TikTok / FB</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Support Section */}
        <section className="mt-20 md:mt-32 text-center">
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-white/[0.01] border border-white/5 overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <Sparkles className="mx-auto text-brand" size={40} />
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none">Ready to start growing?</h2>
              <p className="font-sans text-lg opacity-40 font-light leading-relaxed">
                Log into your Clipper Portal, grab your code, and build your decentralized payout engine today.
              </p>
              <button
                onClick={() => window.location.href = 'https://dash.clipnic.com/'}
                className="px-12 py-5 bg-brand text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-xl font-mono"
              >
                Go to Clipper Portal
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
