import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Zap,
  LayoutGrid,
  Link as LinkIcon,
  Box,
  Upload,
  Upload as UploadIcon,
  DollarSign,
  CheckCircle2,
  Instagram,
  Play,
  ArrowRight,
  TrendingUp,
  Activity,
  PlaySquare,
  Wallet,
  Eye,
  Star,
  ArrowUpRight,
  FileText,
  Video,
  BarChart3,
  Clock,
  MessageSquare,
  Terminal,
  Search,
  Youtube,
  Music2,
  Target,
  Shield,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  User as UserIcon
} from 'lucide-react';
import { Footer as SharedFooter } from '../components/Footer';

const Step = ({ id, number, title, description, details, children, icon: Icon, isLast }: { id: string, number: string, title: string, description: string, details?: React.ReactNode, children?: React.ReactNode, icon: any, isLast?: boolean }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative grid lg:grid-cols-2 gap-12 md:gap-20 items-start py-20 md:py-32 border-b border-white/5 last:border-0 scroll-mt-32"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-8 md:-left-12 top-40 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_20px_rgba(var(--color-brand-rgb),0.6)] hidden lg:block z-10" />

      <div className="space-y-8 md:space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand/40">Step {number}</span>
            <div className="h-px flex-grow bg-white/5" />
          </div>
          <div className="space-y-4">
            <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-brand">
              <Icon size={24} />
            </div>
            <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none text-white">{title}</h3>
            <p className="font-sans text-lg md:text-xl opacity-60 font-light leading-relaxed">{description}</p>
          </div>
        </div>

        {details && (
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 font-sans text-sm text-white/60 leading-relaxed space-y-4">
            {details}
          </div>
        )}
      </div>

      {children && (
        <div className="relative lg:sticky lg:top-40 group/preview">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand/5 blur-[100px] rounded-full opacity-0 group-hover/preview:opacity-100 transition-opacity duration-1000" />

          <div className="relative rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#080808]/60 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-700 group-hover/preview:border-white/20">
            {/* Subtle Inner Border/Bezel */}
            <div className="absolute inset-0 border border-white/5 rounded-[inherit] pointer-events-none" />
            {children}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const DashPreview = ({ children }: { children: React.ReactNode }) => (
  <div className="p-3 md:p-6 space-y-6">
    {children}
  </div>
);

// Mock Social Icons
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.44-4.22-1.04-.15-.06-.29-.14-.44-.21V15.5c.03 2.15-1.02 4.31-2.9 5.43-2.15 1.34-5.22 1.13-7.14-.54-1.92-1.63-2.58-4.49-1.48-6.72 1.05-2.22 3.73-3.41 6.1-2.87v4.04c-.66-.23-1.42-.23-2.09.02-.97.35-1.6 1.36-1.55 2.39.05 1.18.96 2.18 2.14 2.3 1.25.13 2.51-.62 2.92-1.78.1-.28.14-.58.14-.88V.02z" /></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

export const HowToPage = () => {
  useEffect(() => {
    // Handle deep linking on mount
    const pathParts = window.location.pathname.split('/');
    const stepId = pathParts[pathParts.length - 1];
    if (stepId && stepId !== 'get-started') {
      const el = document.getElementById(stepId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    // Also check hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const navigateToStep = (id: string) => {
    window.history.pushState({}, '', `/docs/get-started/${id}`);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => window.location.href = '/'}
            className="font-sans font-bold text-[10px] md:text-xs tracking-widest hover:text-brand transition-colors uppercase hidden sm:block"
          >
            Back to Home
          </button>
          <button
            onClick={() => window.location.href = 'https://dash.clipnic.com/'}
            className="px-4 md:px-6 py-2 rounded-full border border-white font-sans font-bold text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap"
          >
            GET STARTED
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-32">
        <header className="max-w-3xl mb-16 md:mb-32 space-y-6 md:space-y-8 text-center lg:text-left">

          <h1 className="font-display text-[14vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase text-white">
            How to <br /> <span className="text-brand">Earn</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Follow these steps to access the dashboard, join campaigns, and get paid for your views.
          </p>
        </header>

        <div className="relative space-y-12">
          {/* Continuous Connection Line */}
          <div className="absolute -left-8 md:-left-12 top-40 bottom-40 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent hidden lg:block" />

          {/* Step 1: Visit Dash */}
          <Step
            id="visit-dash"
            number="01"
            title="Visit dash.clipnic.com"
            description="Go to the Clipnic dashboard. This is your primary hub for managing all your clipping activities."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Type <a href="https://dash.clipnic.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand">dash.clipnic.com</a> into your browser.</li>
              </ul>
            }
            icon={LayoutGrid}
          >

          </Step>

          {/* Step 2: Authenticate */}
          <Step
            id="authenticate"
            number="02"
            title="Login with Discord"
            description="Securely link your account using Discord. This connects your account to our network."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Click the <a href="https://dash.clipnic.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand">Login with Discord</a> button.</li>
                <li>Authorize Clipnic to view your basic profile (no sensitive data).</li>
                <li>This step creates your unique account ID and links your upcoming payouts.</li>
              </ul>
            }
            icon={LinkIcon}
          >
            <DashPreview>
              <div className="flex flex-col items-center py-6 md:py-10 space-y-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5865F2] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(88,101,242,0.4)] border border-white/10">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="white" className="md:w-9 md:h-9"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
                </div>
                <a
                  href="https://dash.clipnic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-sans font-bold text-xs md:text-sm tracking-widest uppercase transition-all shadow-xl block text-center"
                >
                  Login with Discord
                </a>
              </div>
            </DashPreview>
          </Step>

          {/* Step 3: Active Campaigns (EXACT DASHBOARD UI) */}
          <Step
            id="active-campaigns"
            number="03"
            title={<a href="https://dash.clipnic.com/clippers/campaigns" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Active Campaigns</a>}
            description="Navigate to the Active Campaigns tab in the sidebar to browse all available opportunities."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the sidebar to navigate to <a href="https://dash.clipnic.com/clippers/campaigns" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand font-bold">Active Campaigns</a>.</li>
                <li>Browse through cards showing <strong className="text-white">CPM rates</strong> and <strong className="text-white">remaining budget</strong>.</li>
                <li>Look for the <a href="https://dash.clipnic.com/clippers/campaigns" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-white transition-colors underline underline-offset-4 decoration-brand/20 hover:decoration-white font-bold">Join Campaign</a> button to start participating.</li>
              </ul>
            }
            icon={Box}
          >
            <DashPreview>
              <div className="flex h-[320px] md:h-[420px] bg-black border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Visual Sidebar */}
                <div className="w-16 md:w-44 border-r border-white/10 bg-white/[0.01] flex flex-col p-4 gap-2">
                  <div className="flex items-center gap-1.5 mb-6 px-1 md:px-2">
                    <img src="/logo.webp" className="w-4 h-4 md:w-5 md:h-5 rounded" alt="Logo" />
                    <span className="font-display text-[7px] md:text-[9px] tracking-widest text-white uppercase hidden md:block">CLIPNIC</span>
                  </div>
                  <div className="space-y-1">
                    <a href="https://dash.clipnic.com/clippers/dashboard" target="_blank" rel="noopener noreferrer" className="py-2 px-2 md:px-3 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center md:justify-start gap-3">
                      <LayoutGrid size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest hidden md:block">Dashboard</span>
                    </a>
                    <a href="https://dash.clipnic.com/clippers/campaigns" target="_blank" rel="noopener noreferrer" className="py-2 px-2 md:px-3 rounded-lg bg-white/10 text-white border border-white/5 flex items-center justify-center md:justify-start gap-3">
                      <Box size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest hidden md:block">Active Campaigns</span>
                    </a>
                    <a href="https://dash.clipnic.com/clippers/campaigns/joined" target="_blank" rel="noopener noreferrer" className="py-2 px-2 md:px-3 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center md:justify-start gap-3">
                      <Target size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest hidden md:block">Joined</span>
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-hidden flex flex-col">
                  <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar bg-white/[0.01]">
                    <div className="group relative rounded-3xl bg-[#0c0c0c] border border-white/[0.06] overflow-hidden shadow-lg hover:border-white/15 transition-all">
                      <div className="h-28 w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-emerald-500/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                          <div className="px-2 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[9px] font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
                            ACTIVE
                          </div>
                          <div className="px-2 py-1 rounded-lg bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-[9px] font-bold text-purple-400 flex items-center gap-1 uppercase tracking-wider">
                            <Star size={10} fill="currentColor" /> FEATURED
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/30">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="p-5 pt-2 space-y-4">
                        <div>
                          <h3 className="text-sm md:text-lg font-bold leading-tight tracking-tight text-white/90">Prime Opportunity</h3>
                          <div className="flex gap-2 mt-2">
                            <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/40">
                              <YoutubeIcon className="w-2.5 h-2.5" />
                            </div>
                            <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/40">
                              <TikTokIcon className="w-2.5 h-2.5" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                            <div className="flex items-center gap-1.5 text-white/30 mb-1">
                              <DollarSign className="w-3 h-3" />
                              <span className="text-[9px] font-bold uppercase tracking-widest">CPM</span>
                            </div>
                            <span className="font-mono text-base md:text-lg font-bold text-white">$4.00</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                            <div className="flex items-center gap-1.5 text-white/30 mb-1">
                              <Wallet className="w-3 h-3" />
                              <span className="text-[9px] font-bold uppercase tracking-widest">Left</span>
                            </div>
                            <span className="font-mono text-base md:text-lg font-bold text-emerald-400">$12,000</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest px-1">
                            <span className="text-amber-500/60">Ends in 5d 12h</span>
                            <span className="text-white/20 font-mono">24% filled</span>
                          </div>
                          <div className="w-full bg-white/[0.04] h-1.5 rounded-full overflow-hidden">
                            <div className="h-full rounded-full bg-emerald-500/70 w-[24%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 4: Resources & Rules (EXACT DASHBOARD UI) */}
          <Step
            id="resources-rules"
            number="04"
            title="Visit Resources & Rules"
            description="Once joined, check the rules and grab the videos to edit. This ensures your videos are approved and ready to get paid."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Click into a campaign to see the <strong className="text-white">Platform Rules</strong>.</li>
                <li>Read the <strong className="text-white">Minimum Views</strong> requirement carefully.</li>
                <li>Join the <strong className="text-white">Discord Channel</strong> to download raw brand assets and high-quality clips.</li>
              </ul>
            }
            icon={FileText}
          >
            <DashPreview>
              <div className="space-y-6">
                <div className="p-6 md:p-8 rounded-[32px] bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Shield className="w-5 h-5" />
                    <h4 className="text-sm font-bold uppercase tracking-widest">Platform Rules</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2 text-[11px] text-white/50 leading-relaxed">
                      <span className="text-emerald-500/40 mt-1">•</span>
                      <span>Follow brand safety guidelines at all times.</span>
                    </div>
                    <div className="flex gap-2 text-[11px] text-white/50 leading-relaxed">
                      <span className="text-emerald-500/40 mt-1">•</span>
                      <span>No botting or artificial view generation.</span>
                    </div>
                    <div className="flex gap-2 text-[11px] text-white/50 leading-relaxed">
                      <span className="text-emerald-500/40 mt-1">•</span>
                      <span>Include campaign tags in your captions.</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-[32px] bg-[#5865F2]/5 border border-[#5865F2]/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#5865F2]">
                      <MessageSquare className="w-5 h-5" />
                      <h4 className="text-sm font-bold uppercase tracking-widest">Campaign Resources</h4>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse" />
                  </div>
                  <p className="text-[11px] text-white/30 leading-relaxed">
                    Access videos, brand kits, and connect with other clippers in the dedicated assets channel.
                  </p>
                  <div className="w-full py-4 rounded-2xl bg-[#5865F2] text-white font-bold uppercase tracking-widest text-[10px] shadow-2xl flex items-center justify-center gap-2 cursor-pointer">
                    Discord Channel <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 5: Edit Videos */}
          <Step
            id="edit-videos"
            number="05"
            title="Edit the Videos"
            description="Use the provided videos to create engaging short-form clips. Add your own style, subtitles, and hooks to maximize your reach."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Keep clips between <strong className="text-white">15-60 seconds</strong> for optimal engagement.</li>
                <li>Add <strong className="text-white">Captions</strong> and a strong hook in the first 3 seconds.</li>
                <li>Focus on high-retention editing styles to reach the <strong className="text-white">minimum views needed</strong>.</li>
              </ul>
            }
            icon={Video}
          >
            <DashPreview>
              <div className="bg-[#080808] border border-white/10 rounded-[2.5rem] p-6 md:p-8 flex items-center justify-center shadow-2xl">
                <div className="w-full max-w-[200px] aspect-[9/16] bg-[#0D0D0D] rounded-3xl border border-white/10 overflow-hidden relative group/embed">
                  {/* Mock Interface Header */}
                  <div className="absolute top-0 left-0 w-full p-4 flex items-center gap-3 z-10 bg-gradient-to-b from-black/80 to-transparent">
                    <div className="w-7 h-7 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-12 bg-white/20 rounded-full" />
                      <div className="h-1 w-8 bg-white/10 rounded-full" />
                    </div>
                  </div>

                  {/* Main Content Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-brand/5 group-hover/embed:bg-brand/10 transition-colors" />
                    <motion.div
                      animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="relative z-10 w-16 h-16 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.2)]"
                    >
                      <Video className="text-brand w-7 h-7" />
                    </motion.div>
                  </div>

                  {/* Sidebar Interactions */}
                  <div className="absolute bottom-16 right-3 flex flex-col items-center gap-5 z-10 opacity-30 group-hover/embed:opacity-60 transition-opacity">
                    <div className="space-y-1 text-center">
                      <div className="w-5 h-5 rounded-lg bg-white/10" />
                      <div className="h-1 w-3 bg-white/10 mx-auto rounded-full" />
                    </div>
                    <div className="space-y-1 text-center">
                      <div className="w-5 h-5 rounded-lg bg-white/10" />
                      <div className="h-1 w-3 bg-white/10 mx-auto rounded-full" />
                    </div>
                    <div className="space-y-1 text-center">
                      <div className="w-5 h-5 rounded-lg bg-white/10" />
                      <div className="h-1 w-3 bg-white/10 mx-auto rounded-full" />
                    </div>
                  </div>

                  {/* Caption Mockup */}
                  <div className="absolute bottom-5 left-4 right-10 space-y-2 z-10">
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-20">
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                      className="h-full bg-brand shadow-[0_0_10px_rgba(var(--color-brand-rgb),0.8)]"
                    />
                  </div>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 6: Upload & Submit (EXACT MODAL UI) */}
          <Step
            id="upload-submit"
            number="06"
            title="Upload and Submit"
            description="Post your edited video on TikTok, Reels, or Shorts. Then, copy the video link and submit it through our dashboard."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Upload to your social profile and <strong className="text-white">copy the share link</strong>.</li>
                <li>Go back to the campaign page and click <a href="https://dash.clipnic.com/clippers/campaigns" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand font-bold">Submit Clip</a>.</li>
                <li>Paste the URL and our system will automatically detect the platform and verify the post.</li>
              </ul>
            }
            icon={UploadIcon}
          >
            <DashPreview>
              <div className="bg-[#0D0D0D] border border-white/10 rounded-[32px] p-6 md:p-8 space-y-6 shadow-2xl">
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white">Submit Your Clip</h4>
                  <p className="text-xs md:text-sm text-white/40">Provide the link to your published video.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Video URL</label>
                    <div className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-[10px] md:text-xs font-mono text-white/40">
                      https://tiktok.com/@user/vid/123...
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60">
                        <TikTokIcon className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-bold text-white/70">TikTok detected</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  </div>

                  <a href="https://dash.clipnic.com/clippers/campaigns" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-[10px] text-center shadow-xl hover:bg-white/90 transition-all block">
                    Confirm Submission
                  </a>
                </div>
              </div>
            </DashPreview>
          </Step>

          {/* Step 7: Monitor Performance (EXACT EARNINGS UI) */}
          <Step
            id="monitor-performance"
            number="07"
            title={<a href="https://dash.clipnic.com/clippers/earnings" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Monitor Performance</a>}
            description="Our system automatically tracks your views. When the campaign ends, your total earnings are calculated and ready to withdraw."
            details={
              <ul className="list-disc pl-5 space-y-2">
                <li>Visit the <a href="https://dash.clipnic.com/clippers/earnings" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand font-bold">Earnings</a> tab to see your earnings.</li>
                <li>Monitor <a href="https://dash.clipnic.com/clippers/earnings" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand font-bold">Ready to Claim</a> balance which clears after campaign conclusion.</li>
                <li>Request payouts directly to your linked wallet once goals are met.</li>
              </ul>
            }
            icon={BarChart3}
          >
            <DashPreview>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://dash.clipnic.com/clippers/earnings" target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-blue-400/20 transition-all duration-500 h-32 flex flex-col justify-between shadow-xl group/card">
                  <p className="text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 text-blue-400">
                    <TrendingUp size={14} /> Available Balance
                  </p>
                  <p className="text-3xl font-mono tracking-tight font-medium text-white/90 group-hover/card:text-white transition-colors">$1,680.00</p>
                  <p className="text-[8px] uppercase tracking-widest text-white/20">Active Campaign Reach</p>
                </a>

                <a href="https://dash.clipnic.com/clippers/earnings" target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-white text-black border-white/20 hover:bg-white/90 transition-all duration-500 h-32 flex flex-col justify-between shadow-2xl group/card">
                  <p className="text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 text-black/50">
                    <Wallet size={14} /> Ready to Claim
                  </p>
                  <p className="text-3xl font-mono tracking-tight font-black text-black">$420.00</p>
                  <p className="text-[8px] uppercase tracking-widest text-black/30">Campaign Concluded</p>
                </a>
              </div>
              <div className="p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <Clock size={12} className="text-white/20 md:w-3.5 md:h-3.5" />
                  <span className="text-[8px] md:text-[9px] text-white/40 uppercase tracking-widest font-mono">Campaign ends soon</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              </div>
            </DashPreview>
          </Step>

          {/* New Guide Bridge: Avoid 0 Views */}
          <section className="py-20 md:py-32 border-t border-white/5">
            <div className="bg-brand/5 border border-brand/20 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-brand/10 transition-all">
              <div className="space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand text-black font-mono text-[9px] font-black uppercase tracking-widest">
                  NEXT STEP
                </div>
                <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                  How to Avoid <br /> <span className="text-brand">0 Views</span>
                </h2>
                <p className="font-sans text-lg opacity-60 font-light max-w-md">
                  Stop the shadowban before it starts. Learn how to warm up your account and get your clips seen by millions.
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/docs/avoid-0-views'}
                className="px-12 py-6 bg-brand text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-xl flex items-center gap-4 group-hover:scale-105"
              >
                Learn Secrets <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </div>

        {/* Support Section */}
        <section className="mt-20 md:mt-40 text-center py-20 md:py-32 px-6 md:px-8 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--color-brand-rgb),0.1) 0%,transparent 70%)] pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-8 md:space-y-12 relative z-10">
            <div className="flex justify-center mb-4 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5865F2]/10 rounded-2xl md:rounded-3xl flex items-center justify-center border border-[#5865F2]/20">
                <MessageSquare size={28} className="text-[#5865F2] md:w-8 md:h-8" />
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-7xl tracking-tighter uppercase leading-none text-white">Need <br /> <span className="text-brand">Support?</span></h2>
            <p className="font-sans text-base md:text-2xl opacity-60 font-light leading-relaxed">
              If you have any questions or need help with a campaign, join our community on Discord. Our team and fellow clippers are ready to help.
            </p>
            <div className="pt-4 md:pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://discord.gg/8KXdFCxZsR', '_blank')}
                className="inline-flex items-center gap-3 md:gap-4 px-10 md:px-16 py-4 md:py-6 rounded-full bg-[#5865F2] text-white font-sans font-bold text-sm md:text-lg uppercase tracking-widest shadow-[0_20px_60px_rgba(88,101,242,0.3)] hover:shadow-[0_20px_80px_rgba(88,101,242,0.5)] transition-all"
              >
                Join Discord
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-20 md:mt-40">
        <SharedFooter />
      </div>

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
        .border-brand { border-color: var(--color-brand); }
        .selection\\:bg-brand::selection { background-color: var(--color-brand); }

        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        @media (min-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};
